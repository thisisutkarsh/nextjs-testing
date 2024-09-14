import fs from 'fs';
// import matter from 'gray-matter';
import { join } from 'path';

export interface Post {
  slug: string;
  title: string;
  image: string;
  date: string;
  tags: string[];
  excerpt: string;
  description: string;
  content: string;
}

const BLOG_DIR = join(process.cwd(), 'src/content/blog');

// const load = async (): Promise<Post[]> => {
//   const files = fs.readdirSync(BLOG_DIR);

//   const posts = await Promise.all(
//     files
//       .filter((filename) => filename.endsWith('.md'))
//       .map(async (filename) => {
//         const slug = filename.replace('.md', '');
//         return await findPostBySlug(slug);
//       }),
//   );

//   return posts.filter(Boolean) as Post[];
// };

let _posts: Promise<Post[]> | null;

/** */
// export const fetchPosts = async (): Promise<Post[]> => {
//   _posts = _posts || load();

//   return await _posts;
// };

/** */


// export const findLatestPosts = async ({ count }: { count?: number } = {}): Promise<Post[]> => {
//     const _count = count || 4;
//     const posts = await fetchPosts();

//     return posts ? posts.slice(_count * -1) : [];
//   };

/** */

// export const findPostBySlug = async (slug: string): Promise<Post | null> => {
//   if (!slug) return null;

//   const filePath = join(BLOG_DIR, `${slug}.md`);

//   try {
//     const fileContents = await fs.promises.readFile(filePath, 'utf8');
//     // const { data: frontmatter, content } = matter(fileContents);
//     return {
//       slug,
//         title: frontmatter.title,
//         date: frontmatter.publishDate,
//         tags: frontmatter.tags,
//         description:frontmatter.description,
//         image: frontmatter.image,
//         excerpt: frontmatter.excerpt,
//         content,
//     };
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };


/** */
// export const findPostsByIds = async (ids: string[]): Promise<Post[]> => {
//   if (!Array.isArray(ids)) return [];

//   const posts = await fetchPosts();

//   return ids.reduce(function (r: Post[], id: string) {
//     posts.some(function (post) {
//       return id === post.slug && r.push(post);
//     });
//     return r;
//   }, []);
// };