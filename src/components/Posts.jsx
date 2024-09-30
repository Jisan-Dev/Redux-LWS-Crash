import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const Posts = () => {
  const { isLoading, isError, error, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // decide what to render
  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isError) {
    content = <p>Error: {error}</p>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <p>No posts found</p>;
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li className="list-inside list-decimal text-lime-600" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    );
  }

  return <div> {content} </div>;
};

export default Posts;
