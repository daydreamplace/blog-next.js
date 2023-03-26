import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from '@emotion/styled';
import PostDate from '../PostDate';
import EditButton from './EditButton';
import CommentArea from './CommentArea';
import { PostType, CommentType } from '@/interface';

const PostDetail = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const [post, setPost] = useState<PostType>();
  const [commentList, setCommentList] = useState<CommentType[]>([]);

  useEffect(() => {
    const loader = async () => {
      try {
        const [posts, comments] = await axios.all([
          //
          axios.get('http://localhost:3000/posts'),
          axios.get('http://localhost:3000/comments'),
        ]);
        setPost(posts?.data[(id - 1) as number]);
        setCommentList(comments.data);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, [id, post, commentList]);

  if (!post) return null;

  return (
    <Container>
      <h1>{post.title}</h1>
      <div className='info-wrapper'>
        <div className='post-info'>
          <span className='user-name'>{post.writer}</span>
          &nbsp; · &nbsp;
          <PostDate date={post.updated_at ? post.updated_at : post.created_at} />
        </div>
        <div className='buttons'>
          <EditButton text='수정' />
          <EditButton text='삭제' />
        </div>
      </div>
      <div className='content'>{post.content}</div>
      <CommentArea id={id} commentList={commentList} />
    </Container>
  );
};

const Container = styled.div`
  width: 768px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  cursor: default;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    margin-top: 1.5rem;
  }

  h1 {
    margin-top: 0px;
    margin-bottom: 2rem;
    color: #212529;
    font-size: 3rem;
    line-height: 1.5;
    letter-spacing: -0.004em;
    font-weight: bold;
    word-break: keep-all;
    transition: color 0.125s ease-in 0s;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 500px) {
      margin-bottom: 1.5rem;
      font-size: 1.75rem;
    }
  }

  .info-wrapper {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }

    .post-info {
      .user-name {
        font-weight: 700;
      }

      .date {
        color: #495057;
      }
    }

    .buttons {
      button + button {
        margin-left: 20px;
      }

      button:hover {
        color: ${props => props.theme.colors.main};
      }
    }
  }

  .content {
    width: 768px;
    margin: 5rem auto 0;
    color: #212529;
    font-size: 1.2rem;
    line-height: 1.8;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 3rem;
      font-size: 1rem;
    }
  }
`;

export default PostDetail;
