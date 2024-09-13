import { cache } from 'react';

interface Post {
  description: any;
  title: string;
  uri: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  date: string;
  content: string;
  excerpt?: string;
}

interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

interface PostsData {
  posts: {
    nodes: Post[];
    pageInfo: PageInfo;
  };
}

interface FetchResponse<T> {
  data: T;
  errors?: any[];
}

export const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  let daySuffix = 'th';

  if (day === 1 || day === 21 || day === 31) {
    daySuffix = 'st';
  } else if (day === 2 || day === 22) {
    daySuffix = 'nd';
  } else if (day === 3 || day === 23) {
    daySuffix = 'rd';
  }

  return `${hours}:${minutes}, ${day}${daySuffix} ${month} ${year}`;
};

export const readingTime = (text: string): number => {
  const wordCount = text.split(' ').length;
  const wordsPerMinute = 200;
  return Math.ceil(wordCount / wordsPerMinute);
};

export async function getPost(uri: string): Promise<Post | null> {
  const query = `
    query GetPostByUri($uri: ID!) {
      post(id: $uri, idType: URI) {
        title
        content
        excerpt
        date
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;
  const variables = { uri };

  try {
    const response = await fetch('https://editor4.babynama.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const responseBody: FetchResponse<{ post: Post }> = await response.json();
    if (responseBody.errors) throw new Error(`GraphQL error: ${responseBody.errors.map(error => error.message).join(', ')}`);

    return responseBody.data.post || null;
  } catch (error) {
    console.error('Fetching post failed:', error);
    return null;
  }
}

export async function getRecentPosts(): Promise<Post[]> {
  const query = `
    {
      posts(first: 5) {
        nodes {
          title
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://editor4.babynama.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const responseBody: FetchResponse<{ posts: { nodes: Post[] } }> = await response.json();
    if (responseBody.errors) throw new Error(`GraphQL error: ${responseBody.errors.map(error => error.message).join(', ')}`);

    return responseBody.data.posts.nodes;
  } catch (error) {
    console.error('Fetching recent posts failed:', error);
    return [];
  }
}

export async function getAllPostsTitle(): Promise<{ title: string; uri: string }[]> {
  const query = (after: string | null) => `
    {
      posts(first: 100${after ? `, after: "${after}"` : ''}) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          title
          uri
        }
      }
    }
  `;

  let allPosts: { title: string; uri: string }[] = [];
  let hasNextPage = true;
  let after: string | null = null;

  try {
    while (hasNextPage) {
      const response = await fetch('https://editor4.babynama.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query(after) }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const responseBody: FetchResponse<{ posts: { pageInfo: { hasNextPage: boolean; endCursor: string }, nodes: { title: string; uri: string }[] } }> = await response.json();
      if (responseBody.errors) throw new Error(`GraphQL error: ${responseBody.errors.map(error => error.message).join(', ')}`);

      const posts = responseBody.data.posts.nodes;
      const pageInfo = responseBody.data.posts.pageInfo;

      allPosts = allPosts.concat(posts);
      hasNextPage = pageInfo.hasNextPage;
      after = pageInfo.endCursor;
    }

    return allPosts;
  } catch (error) {
    console.error('Fetching all posts titles failed:', error);
    return [];
  }
}


export async function getStartingPosts(): Promise<PostsData | null> {
  const query = `
    {
      posts(first: 9) {
        nodes {
          title
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `;

  try {
    const response = await fetch('https://editor4.babynama.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const responseBody: FetchResponse<PostsData> = await response.json();
    if (responseBody.errors) throw new Error(`GraphQL error: ${responseBody.errors.map(error => error.message).join(', ')}`);

    return responseBody.data;
  } catch (error) {
    console.error('Fetching starting posts failed:', error);
    return null;
  }
}

export const getPaginatedPosts = cache(async (first: number, after: string | null): Promise<PostsData | null> => {
  const query = `
    query GetPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after) {
        nodes {
          title
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `;
  const variables = { first, after };

  try {
    const response = await fetch('https://editor4.babynama.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const responseBody: FetchResponse<PostsData> = await response.json();
    if (responseBody.errors) throw new Error(`GraphQL error: ${responseBody.errors.map(error => error.message).join(', ')}`);

    return responseBody.data;
  } catch (error) {
    console.error('Fetching paginated posts failed:', error);
    return null;
  }
});
