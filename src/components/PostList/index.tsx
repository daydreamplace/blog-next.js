import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from '@emotion/styled';
import PostCard from './PostCard';
import Button from '../Button';
import { PostType, CommentType } from '@/interface';

const PostList = () => {
  const [postList, setPostList] = useState<PostType[]>([]);
  const [commentList, setCommentList] = useState<CommentType[]>([]);

  useEffect(() => {
    const loader = async () => {
      try {
        const [posts, comments] = await axios.all([
          //
          axios.get('http://localhost:3000/posts'),
          axios.get('http://localhost:3000/comments'),
        ]);
        setPostList(posts.data);
        setCommentList(comments.data);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, []);

  const countComment = (id: number): number => {
    let arr: number[] = [];
    commentList.map(comment => arr.push(comment.postId));
    let count = arr.filter(value => value === id);
    return count.length;
  };

  return (
    <Container>
      <div className='list-header'>
        <h3>게시글</h3>
        <Link href='write'>
          <Button text='작성하기' />
        </Link>
      </div>
      <Border />
      {postList.map(post => (
        <PostCard key={post.id} id={post.id} count={countComment(post.id)} title={post.title} content={post.content} date={post.created_at} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;

  @media (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  .list-header {
    display: flex;
    justify-content: space-between;

    h3 {
      margin-top: 13px;
      color: #0c70f2;
      font-size: 1.325rem;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 1.125rem;
      }
    }
  }

  div + div {
    border-top: 1px solid #f1f3f5;
  }
`;

const Border = styled.div`
  width: 30%;
  height: 1px;
  margin-top: 0.5rem;
  background: #0c70f2;
`;

export default PostList;
