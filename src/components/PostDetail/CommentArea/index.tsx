import styled from '@emotion/styled';
import CommentList from './CommentList';
import WriteComment from './WriteComment';
import { CommentType } from '@/interface';

interface Props {
  id: number;
  commentList: CommentType[];
}

const CommentArea = ({ id, commentList }: Props) => {
  const countComment = (id: number): number => {
    return commentList.filter(comment => comment.postId === id).length;
  };

  return (
    <Container>
      <h4>
        <span>{countComment(id)}</span>개의 댓글
      </h4>
      <WriteComment />
      <CommentList id={id} commentList={commentList} />
    </Container>
  );
};

const Container = styled.div`
  margin: 10rem 0;
  color: #212529;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }

  @media (max-width: 500px) {
    margin-top: 3rem;
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 700;

    span {
      color: ${props => props.theme.colors.main};
    }
  }
`;

export default CommentArea;
