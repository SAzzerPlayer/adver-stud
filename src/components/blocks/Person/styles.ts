import styled from "styled-components";
import { getGapStyle } from "../../../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  ${getGapStyle("8px", "column")}
`;

export default {
  Container,
};
