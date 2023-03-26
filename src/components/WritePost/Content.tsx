import styled from '@emotion/styled';

const Content = () => {
  return <Container placeholder='내용을 입력하세요.' />;
};

const Container = styled.textarea`
  display: block;
  width: 100%;
  height: 70vh;
  padding: 30px 0;
  outline: none;
  border: none;
  color: #212529;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 1.5;
  resize: none;
`;

export default Content;
