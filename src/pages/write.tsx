import styled from '@emotion/styled';
import WritePost from '@/components/WritePost';

const write = () => {
  return (
    <Container>
      <WritePost />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default write;
