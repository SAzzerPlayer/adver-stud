import styled from "styled-components";
import { colors } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 96px;
  border-radius: 50%;
`;

export const Title = styled.span`
  font-family: Merriweather, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  color: ${colors.backgroundWhite};
`;
