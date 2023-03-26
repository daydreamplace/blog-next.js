import styled from '@emotion/styled';
import { Text } from '@/interface';

const EditButton = ({ text }: Text) => {
  return <Container>{text}</Container>;
};

const Container = styled.button`
  margin-top: 3px;
  border: none;
  outline: none;
  background: none;
  color: #868e96;
  font-size: inherit;
  cursor: pointer;
`;

export default EditButton;
