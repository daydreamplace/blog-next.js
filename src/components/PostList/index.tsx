import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styled from '@emotion/styled';
import PostCard from './PostCard';
import Button from '../Button';
import { PostType, CommentType } from '@/interface';

const PostList = () => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [postList, setPostList] = useState<PostType[]>([]);
  const [visibleList, setVisibleList] = useState<PostType[]>([]);
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [page, setPage] = useState<number>(0);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 1 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const newList = postList.slice(0, page * 10);
    setVisibleList(newList);
  }, [page, postList]);

  const countComment = (id: number): number => {
    return commentList.filter(comment => comment.postId === id).length;
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
      {visibleList.length > 0 && visibleList.map(post => <PostCard key={post.id} id={post.id} count={countComment(post.id)} title={post.title} content={post.content} date={post.created_at} />)}
      <div ref={observerRef} />
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
      color: ${props => props.theme.colors.main};
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
  background: ${props => props.theme.colors.main};
`;

export default PostList;
