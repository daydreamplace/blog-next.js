import styled from '@emotion/styled';
import { Text } from '@/interface';

const Button = ({ text }: Text) => {
  return <Container>{text}</Container>;
};

const Container = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 1.25rem 1.5rem;
  height: 2rem;
  border: none;
  border-radius: 20px;
  outline: none;
  background: ${props => props.theme.colors.main};
  color: #f1f3f5;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export default Button;
