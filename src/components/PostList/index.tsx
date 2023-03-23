import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Post from './PostCard';
import Button from '../Button';

interface PostType {
  title: string;
  content: string;
  created_at: string;
}

const posts = [
  {
    title: '제목입니다',
    content:
      '수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다. 수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다.',
    created_at: '2023-03-21T00:03:17.000Z',
  },
  {
    title: '제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다',
    content: '수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 행할 수 있게 해준다.',
    created_at: '2020-03-17T14:03:17.000Z',
  },
  {
    title: '제목',
    content:
      '수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다. 수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다.',
    created_at: '2023-03-21T14:03:17.000Z',
  },
];

const PostList = () => {
  const [postList, setPostList] = useState<PostType[]>([]);

  useEffect(() => {
    const loader = async () => {
      try {
        setPostList(posts);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, []);

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
        <Post key={post.title} title={post.title} content={post.content} date={post.created_at} />
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
