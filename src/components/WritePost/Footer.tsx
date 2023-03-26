import styled from '@emotion/styled';
import { BsArrowLeftSquare } from 'react-icons/bs';
import Button from '../Button';

const Footer = () => {
  return (
    <Container>
      <div className='default-width wrapper'>
        <BsArrowLeftSquare />
        <Button text='작성하기' />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  padding: 30px 0;

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 768px;

    svg {
      margin-top: 4px;
      color: ${props => props.theme.colors.main};
      font-size: 2rem;
    }

    button:hover,
    svg:hover {
      opacity: 0.7;
    }
  }
`;

export default Footer;
