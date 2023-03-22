import styled from '@emotion/styled';

const WriteComment = () => {
  return (
    <Container>
      <textarea placeholder='댓글을 작성하세요' />
      <button>작성하기</button>
    </Container>
  );
};

const Container = styled.div`
  textarea {
    width: 100%;
    min-height: 6rem;
    margin-bottom: 1.5rem;
    padding: 1rem 1rem 1.5rem;
    border: 1px solid #f1f3f5;
    border-radius: 10px;
    outline: none;
    color: #212529;
    font-size: 1rem;
    line-height: 1.75;
    resize: none;
  }

  textarea:hover,
  textarea:focus {
    outline: 1px solid #0c70f2;
  }

  button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 1.25rem 1.5rem;
    height: 2rem;
    border: none;
    border-radius: 20px;
    outline: none;
    background: #0c70f2;
    color: #f1f3f5;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export default WriteComment;
