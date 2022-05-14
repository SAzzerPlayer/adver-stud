import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  background: lightblue;
  margin: 5.75em 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
  background-color: gray;
`;

export default {
  Container,
  Wrapper,
};
