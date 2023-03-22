import Link from 'next/link';
import styled from '@emotion/styled';

interface Props {
  title: string;
  content: string;
  date: string;
}

const Post = ({ title, content, date }: Props) => {
  const getPostDate = (date: string): string => {
    const milliSeconds = Date.now() - new Date(date).getTime();
    const seconds = milliSeconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    if (seconds < 360) return `방금 전`;
    else if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    else if (hours < 24) return `${Math.floor(hours)}시간 전`;
    else if (days < 8) return `${Math.floor(days)}일 전`;
    else {
      const postDate = new Date(date);
      return `${postDate.getFullYear()}년 ${postDate.getMonth() + 1}월 ${postDate.getDate()}일`;
    }
  };

  return (
    <Container>
      <Link href='/post'>
        <h2 className='title'>{title}</h2>
      </Link>
      <p className='content'>{content}</p>
      <div className='info'>
        <span className='date'>{getPostDate(date)}</span>&nbsp; · &nbsp;<span>0개의 댓글</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .title {
    color: #212529;
    font-size: 1.5rem;
    font-weight: 700;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  .title:hover {
    color: #0c70f2;
  }

  .content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    max-height: 5em;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    color: #495057;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;

    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
    }
  }

  .info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1rem;
    color: #868e96;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;

export default Post;
