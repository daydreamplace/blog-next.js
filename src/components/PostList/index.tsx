import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Post from './post';

interface PostType {
  title: string;
  content: string;
  created_at: string;
}

const posts = [
  {
    title: '111111111111111111111',
    content:
      '수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다. 수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다.',
    created_at: '2014-03-17T14:03:17.000Z',
  },
  {
    title: '2222222222222222222222222222222222222222222222222222222222',
    content:
      '수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다. 수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다.',
    created_at: '2020-03-17T14:03:17.000Z',
  },
  {
    title: '333333333333333333333333333333333333333333333333333333333333',
    content:
      '수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다. 수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다.',
    created_at: '2020-03-17T14:03:17.000Z',
  },
];

const PostList = () => {
  const [postList, setPostList] = useState<PostType[]>([]);

  useEffect(() => {
    const loader = async () => {
      try {
        // await axios.get();
        setPostList(posts);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, []);
  return (
    <Container>
      <h3>게시글</h3>
      <Border />
      {postList.map((post, index) => (
        <Post key={index} title={post.title} content={post.content} date={post.created_at} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;

  h3 {
    color: #0c70f2;
    font-size: 1.325rem;
    font-weight: 600;
  }

  div + div {
    border-top: 1px solid #f1f3f5;
  }
`;

const Border = styled.div`
  width: 30%;
  height: 1px;
  margin-top: 1rem;
  background: #0c70f2;
`;

export default PostList;
