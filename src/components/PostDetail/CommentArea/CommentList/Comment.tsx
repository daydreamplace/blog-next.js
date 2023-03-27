import Image from 'next/image';
import styled from '@emotion/styled';
import PostDate from '@/components/PostDate';
import EditButton from '../../EditButton';
import user from '@/assets/user.png';
import { CommentProps } from '@/interface';

const Comment = ({ comment }: CommentProps) => {
  return (
    <Container>
      <div className='info-wrapper'>
        <div className='profile'>
          <Image src={user} alt='profile' />
          <div className='comment-info'>
            <div className='user-name'>{comment.writer}</div>
            <PostDate date={comment.created_at} />
          </div>
        </div>
        <div className='edit'>
          <EditButton text='수정' />
          <EditButton text='삭제' />
        </div>
      </div>
      <div className='comment-content'>{comment.content}</div>
    </Container>
  );
};

const Container = styled.div`
  padding: 1.5rem 0;

  .info-wrapper {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 1.5rem;

    .profile {
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      img {
        display: block;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        object-fit: cover;

        @media (max-width: 768px) {
          width: 3rem;
          height: 3rem;
        }
      }

      .comment-info {
        margin-left: 1rem;
        cursor: default;

        @media (max-width: 768px) {
          margin-left: 0.5rem;
        }

        .user-name {
          margin-bottom: 10px;
          font-size: 1.2rem;
          font-weight: bold;

          @media (max-width: 768px) {
            font-size: 1rem;
          }
        }

        span {
          color: #868e96;
          font-size: 0.9rem;

          @media (max-width: 768px) {
            font-size: 0.75rem;
          }
        }
      }
    }

    .edit {
      button + button {
        margin-left: 20px;
      }

      button:hover {
        color: ${props => props.theme.colors.main};
      }
    }
  }

  .comment-content {
    font-size: 1.125rem;
    line-height: 1.7;
    letter-spacing: -0.004em;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 500px) {
      font-size: 0.85rem;
    }
  }
`;

export default Comment;
