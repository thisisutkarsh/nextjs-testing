import axios from 'axios';

const fetchExperts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/doctors/lactation-doctors/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { fetchExperts };
