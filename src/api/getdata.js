import $ajax from './config';

export const getBlogDescription = data =>$ajax.get('/api/blog/description',data);
