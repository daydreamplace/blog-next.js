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

const Container = styled.div`
  @media (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default Index;
