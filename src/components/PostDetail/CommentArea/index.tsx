import styled from '@emotion/styled';
import CommentList from './CommentList';
import WriteComment from './WriteComment';

const CommentArea = () => {
  return (
    <Container>
      <h4>
        <span>10</span>개의 댓글
      </h4>
      <WriteComment />
      <CommentList />
    </Container>
  );
};

const Container = styled.div`
  margin: 10rem 0;
  color: #212529;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 700;

    span {
      color: #0c70f2;
    }
  }
`;

export default CommentArea;
