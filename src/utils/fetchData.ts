import { Post } from '../types/post';
import axios from 'axios';

export const fetchData = async (page: number) => {
  return axios.get(`https://gorest.co.in/public-api/posts?page=${page}`)
    .then(({ data }) => {
      const posts: Post[] = data.data.map((element: any) => {
        return {
          id: element.id,
          title: element.title,
          body: element.body,
          img: `https://picsum.photos/500/800?sig=${element.id}`
        }
      });
      return posts;
    })
    .catch((error) => {
      console.error(error);
    })
};