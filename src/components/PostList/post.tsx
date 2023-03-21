import styled from '@emotion/styled';

const Post = () => {
  return (
    <Container>
      <h2 className='title'>[TIL] React에서 lazy loading 구현하기</h2>
      <p className='content'>
        수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다. 함수를 미리 만들어두고 원할 때 실행해
        정해진 동작을 수행할 수 있게 해준다. 수학 시간에 y = f(x) 같은 함수를 배운 적이 있다. 프로그래밍에도 함수라는 개념이 존재한다. 수학의 함수와 비슷하지만, 다른 점도 있다. 프로그래밍에서 함수(function)는 일정한 동작을 수행하는 코드를 의미한다.
        함수를 미리 만들어두고 원할 때 실행해 정해진 동작을 수행할 수 있게 해준다.
      </p>
      <div className='info'>
        <span className='date'>2023년 3월 6일</span>&nbsp; · &nbsp;<span>0개의 댓글</span>
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
