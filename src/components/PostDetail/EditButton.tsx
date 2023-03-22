import styled from '@emotion/styled';

interface Props {
  text: string;
}

const EditButton = ({ text }: Props) => {
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
