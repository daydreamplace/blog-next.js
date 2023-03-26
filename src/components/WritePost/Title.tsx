import styled from '@emotion/styled';

const Title = () => {
  return (
    <Container>
      <textarea placeholder='제목을 입력하세요' />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;

  textarea {
    display: block;
    width: 100%;
    height: 70px;
    padding: 0px;
    outline: none;
    border: none;
    color: ${props => props.theme.colors.fontColor};
    font-weight: 700;
    font-size: 2.75rem;
    line-height: 1.5;
    resize: none;
  }
`;

export default Title;
