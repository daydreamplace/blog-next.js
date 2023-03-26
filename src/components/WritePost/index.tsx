import styled from '@emotion/styled';
import Title from './Title';
import Info from './Info';
import Content from './Content';
import Footer from './Footer';

const WritePost = () => {
  return (
    <Container>
      <Title />
      <Border />
      <Info />
      <Content />
      <Footer />
    </Container>
  );
};

const Container = styled.div``;

const Border = styled.div`
  background: ${props => props.theme.colors.main};
  height: 6px;
  width: 10rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;

export default WritePost;
