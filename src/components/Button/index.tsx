import styled from '@emotion/styled';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
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
  background: #0c70f2;
  color: #f1f3f5;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
`;

export default Button;
