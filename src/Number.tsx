import React from "react";
import styled from "styled-components";

interface IProps {
  count: number;
}
const Container = styled.span<{ isRed: boolean }>`
  color: ${props => (props.isRed ? "red" : "black")};
`;
const Number: React.FunctionComponent<IProps> = ({ count }) => {
  return (
    <>
      <Container isRed={count > 10}>{count} </Container>
    </>
  );
};

export default Number;
