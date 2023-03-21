import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import Post from './post';
import { theme } from '@/styles/theme';

const PostList = () => {
  return (
    <Container>
      <h3>게시글</h3>
      <Border />
      <Post />
      <Post />
      <Post />
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
