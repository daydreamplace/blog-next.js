import styled from '@emotion/styled';

interface PostType {
  title: string;
  content: string;
  date: string;
}

const Post = ({ title, content, date }: PostType) => {
  return (
    <Container>
      <h2 className='title'>{title}</h2>
      <p className='content'>{content}</p>
      <div className='info'>
        <span className='date'>{date}</span>&nbsp; · &nbsp;<span>0개의 댓글</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  line-height: 1.5;

  .title {
    font-size: 1.5rem;
    color: #212529;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    color: #495057;
    font-size: 1rem;
  }

  .info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 1rem;
    color: #868e96;
    font-size: 0.9rem;
  }
`;

export default Post;
