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

  svg {
    color: #0c70f2;
    font-size: 3rem;
    cursor: pointer;
  }

  svg:hover {
    opacity: 0.8;
  }
`;

export default Post;