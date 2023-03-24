import styled from '@emotion/styled';
import Comment from './Comment';
import { CommentType } from '@/interface';

interface Props {
  id: number;
  commentList: CommentType[];
}

const CommentList = ({ id, commentList }: Props) => {
  const comments = commentList.filter(comment => comment.postId === id);

  return (
    <Container>
      {comments.map(comment => (
        <div key={comment.id} className='comment'>
          <Comment comment={comment} />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  .comment + .comment {
    border-top: 1px solid #f1f3f5;
  }
`;

export default CommentList;
