import styled from "styled-components";
import { colors } from "../../styles";

export const Quote = styled.p`
  font-family: Lora, serif;
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  line-height: 136%;
  color ${colors.accentBlack};
  white-space: pre-wrap;
`;
