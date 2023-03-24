import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Comment from './Comment';

interface PostType {
  user: string;
  comment: string;
  created_at: string;
}
interface Props {
  id: number;
  commentList: any[];
}

const comments = [
  {
    user: 'youbin',
    created_at: '2023년 3월 23일',
    comment:
      '댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다',
  },
  {
    user: 'youbin',
    created_at: '2023년 3월 23일',
    comment:
      '댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다',
  },
  {
    user: 'youbin',
    created_at: '2023년 3월 23일',
    comment:
      '댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다 댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다댓글은 사랑입니다',
  },
];

const CommentList = ({ id, commentList }: Props) => {
  // const [commentList, setCommentList] = useState<PostType[]>([]);

  // useEffect(() => {
  //   const loader = async () => {
  //     try {
  //       setCommentList(comments);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   loader();
  // }, []);

  console.log(commentList);

  const comments = commentList.filter(comment => comment.postId === id);

  console.log('필터', comments);

  return (
    <Container>
      {comments.map((comment, index) => (
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
