import Link from 'next/link';
import styled from '@emotion/styled';
import PostDate from '../PostDate';
import { PostProps } from '@/interface';

const Post = ({ id, title, content, date, count }: PostProps) => {
  return (
    <Container>
      <Link href={`/post?id=${id}`}>
        <h2 className='title'>{title}</h2>
      </Link>
      <p className='content'>{content}</p>
      <div className='info'>
        <PostDate date={date} />
        &nbsp; · &nbsp;<span>{count}개의 댓글</span>
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
    color: ${props => props.theme.colors.fontColor};
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
    color: ${props => props.theme.colors.main};
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
