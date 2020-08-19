import React from "react";
import styled from "styled-components";

interface IProps {
  count: number;
}
const Container = styled.div``;
const Number: React.FunctionComponent<IProps> = ({ count }) => {
  return (
    <>
      <Container>The Num is {count}</Container>
    </>
  );
};

export default Number;
