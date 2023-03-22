import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Comment from './Comment';

interface PostType {
  user: string;
  comment: string;
  created_at: string;
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

const CommentList = () => {
  const [commentList, setCommentList] = useState<PostType[]>([]);

  useEffect(() => {
    const loader = async () => {
      try {
        setCommentList(comments);
      } catch (error) {
        console.log(error);
      }
    };
    loader();
  }, []);

  return (
    <Container>
      {commentList.map(comment => (
        <div key={comment.comment} className='comment'>
          <Comment />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;

  .comment + .comment {
    border-top: 1px solid #f1f3f5;
  }
`;

export default CommentList;
