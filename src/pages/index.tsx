import styled from '@emotion/styled';
import User from '../components/User';
import PostList from '@/components/PostList';

const Index = () => {
  return (
    <Container>
      <User />
      <PostList />
    </Container>
  );
};

const Container = styled.div``;

export default Index;
