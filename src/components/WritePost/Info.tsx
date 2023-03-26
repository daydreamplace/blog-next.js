import styled from '@emotion/styled';

const Info = () => {
  return (
    <Container>
      <div className='interval'>
        <label>이름</label>
        <input placeholder='이름을 입력하세요' />
      </div>
      <div className='interval'>
        <label>비밀번호</label>
        <input type='password' placeholder='비밀번호를 입력하세요' />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;

  .interval {
    font-size: 1.25rem;

    label + input {
      margin-left: 20px;
    }

    input {
      width: 15rem;
      height: 30px;
      padding: 0px;
      outline: none;
      border: none;
      border-bottom: 1px solid transparent;
      color: #212529;
      font-size: inherit;
      font-weight: 700;
    }

    input:hover,
    input:focus {
      border-bottom: 1px solid ${props => props.theme.colors.main};
    }
  }
`;

export default Info;
