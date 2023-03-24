import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import PostDetail from '@/components/PostDetail';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

const Post = () => {
  const router = useRouter();

  const getBack = () => {
    router.back();
  };

  return (
    <Container>
      <BsArrowLeftSquareFill onClick={getBack} />
      <PostDetail />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5rem;

  @media (max-width: 1024px) {
    margin-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  svg {
    color: #0c70f2;
    font-size: 3rem;
    cursor: pointer;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  svg:hover {
    opacity: 0.8;
  }
`;

export default Post;
