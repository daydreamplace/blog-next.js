import styled from '@emotion/styled';
import CommentArea from './CommentArea';
import EditButton from './EditButton';

const PostDetail = () => {
  return (
    <Container>
      <h1>브라우저 주소창에 www.google.com을 입력하면 어떤 일이 일어나는가</h1>
      <div className='info-wrapper'>
        <div className='post-info'>
          <span className='user-name'>Youbin Park</span>&nbsp; · &nbsp;<span className='date'>2023년 3월 22일</span>
        </div>
        <div className='buttons'>
          <EditButton text='수정' />
          <EditButton text='삭제' />
        </div>
      </div>
      <div className='content'>
        사용자가 웹 브라우저를 통해 google.com 을 입력하면 URL 주소 중 도메인 네임 부분을 DNS 서버에서 검색합니다. DNS 서버에서 해당 도메인 네임에 해당하는 IP 주소를 찾아 사용자가 입력한 URL 정보와 함께 전달합니다. 브라우저는 HTTP 프로토콜을 사용하여
        요청 메시지를 생성하고 HTTP 요청 메시지는 TCP/IP 프로토콜을 사용하여 서버로 전송됩니다. 서버는 response 메시지를 생성하여 다시 브라우저에게 데이터를 전송합니다. 브라우저는 response를 받아 파싱하여 화면에 렌더링합니다. 사용자가 웹 브라우저를
        통해 google.com 을 입력하면 URL 주소 중 도메인 네임 부분을 DNS 서버에서 검색합니다. DNS 서버에서 해당 도메인 네임에 해당하는 IP 주소를 찾아 사용자가 입력한 URL 정보와 함께 전달합니다. 브라우저는 HTTP 프로토콜을 사용하여 요청 메시지를 생성하고
        HTTP 요청 메시지는 TCP/IP 프로토콜을 사용하여 서버로 전송됩니다. 서버는 response 메시지를 생성하여 다시 브라우저에게 데이터를 전송합니다. 브라우저는 response를 받아 파싱하여 화면에 렌더링합니다.
      </div>
      <CommentArea />
    </Container>
  );
};

const Container = styled.div`
  width: 768px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;

  h1 {
    margin-top: 0px;
    margin-bottom: 2rem;
    color: #212529;
    font-size: 3rem;
    line-height: 1.5;
    letter-spacing: -0.004em;
    font-weight: bold;
    word-break: keep-all;
    transition: color 0.125s ease-in 0s;
  }

  .info-wrapper {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1rem;

    .post-info {
      .user-name {
        font-weight: 700;
      }

      .date {
        color: #495057;
      }
    }

    .buttons {
      button {
        margin-top: 3px;
        border: none;
        outline: none;
        background: none;
        color: #868e96;
        font-size: inherit;
        cursor: pointer;
      }

      button + button {
        margin-left: 20px;
      }

      button:hover {
        color: #0c70f2;
      }
    }
  }

  .content {
    width: 768px;
    margin: 5rem auto 0px;
    color: #212529;
    font-size: 1.2rem;
    line-height: 1.8;
    overflow-wrap: break-word;
  }
`;

export default PostDetail;
