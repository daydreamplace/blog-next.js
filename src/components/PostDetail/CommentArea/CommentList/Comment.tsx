import Image from 'next/image';
import styled from '@emotion/styled';
import user from '../../../../assets/user.png';

const Comment = () => {
  return (
    <Container>
      <div className='info-wrapper'>
        <div className='profile'>
          <Image src={user} alt='profile' />
          <div className='comment-info'>
            <div className='user-name'>youbin park</div>
            <div className='date'>2023년 3월 20일</div>
          </div>
        </div>
      </div>
      <div className='comment-content'>
        댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다 댓글은 사랑입니다댓글은
        사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다
      </div>
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
      }

      .comment-info {
        margin-left: 1rem;

        .user-name {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .date {
          margin-top: 0.5rem;
          color: #868e96;
          font-size: 0.9rem;
        }
      }
    }
  }

  .comment-content {
    font-size: 1.125rem;
    line-height: 1.7;
    letter-spacing: -0.004em;
  }
`;

export default Comment;
