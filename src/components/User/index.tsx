import styled from '@emotion/styled';
import { ImProfile } from 'react-icons/im';
import { HiUserPlus } from 'react-icons/hi2';
import { BsGithub } from 'react-icons/bs';
import { SiVelog } from 'react-icons/si';
import Image from 'next/image';
import profile from '../../assets/profile.png';

const infoList = [
  { id: 0, link: 'https://eden88.notion.site/antifrAGILE-273dca57634a4d69a44a2fe239a78d71', icon: <HiUserPlus /> },
  { id: 1, link: 'https://eden88.notion.site/Portfolio-2ca9acbca5f54322b91f1d45cc23bff5', icon: <ImProfile /> },
  { id: 2, link: 'https://github.com/daydreamplace', icon: <BsGithub /> },
  { id: 3, link: 'https://velog.io/@daydreamplace', icon: <SiVelog /> },
];

const User = () => {
  return (
    <>
      <Container>
        <div className='position'>
          <Image src={profile} alt='profile' className='profile' />
          <div className='user-info'>
            <h3 className='user-name'>Youbin Park</h3>
            <p className='description'>안녕하세요 ! Frontend Developer 입니다.</p>
          </div>
        </div>
        <Border />
        <div className='icons'>
          {infoList.map(info => (
            <a key={info.id} href={info.link} target='_blank'>
              {info.icon}
            </a>
          ))}
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 5.625rem;

  @media (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  .position {
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .profile {
      display: block;
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;

      @media (max-width: 768px) {
        width: 6rem;
        height: 6rem;
      }
    }

    .user-info {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      margin-left: 1rem;

      @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 1rem;
      }

      .user-name {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.5;

        @media (max-width: 768px) {
          font-size: 1.25rem;
        }
      }

      .description {
        margin-top: 0.25rem;
        color: #495057;
        font-size: 1.125rem;
        line-height: 1.5;
        white-space: pre-wrap;

        @media (max-width: 768px) {
          margin-top: 0.5rem;
          font-size: 1rem;
          letter-spacing: -0.004em;
        }
      }
    }
  }

  .icons {
    display: flex;

    a {
      svg {
        color: #868e96;
        font-size: 1.5rem;

        @media (max-width: 768px) {
          font-size: 1.25rem;
        }
      }

      svg:hover {
        color: #5a5f64;
      }
    }

    a + a {
      margin-left: 20px;
    }
  }
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  background: #e9ecef;
`;

export default User;
