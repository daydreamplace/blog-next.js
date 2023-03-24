import styled from '@emotion/styled';
import Button from '@/components/Button';

const WriteComment = () => {
  return (
    <Container>
      <textarea placeholder='댓글을 작성하세요' />
      <Button text='작성하기' />
    </Container>
  );
};

const Container = styled.div`
  textarea {
    box-sizing: border-box;
    width: 100%;
    min-height: 6rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem 1rem 1.5rem;
    border: 1px solid #f1f3f5;
    border-radius: 10px;
    outline: none;
    color: #212529;
    font-size: 1rem;
    line-height: 1.75;
    resize: none;

    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  textarea:hover,
  textarea:focus {
    outline: 1px solid #0c70f2;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export default WriteComment;
