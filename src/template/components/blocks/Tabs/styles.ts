import styled from "styled-components";
import { colors, getGapStyle } from "../../../../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${getGapStyle("1em", "column")};
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Tab = styled.p<{ active?: boolean }>`
  padding: 0.75em 1.25em;
  border-radius: 2em;
  background: ${({ active }) =>
    active ? colors.accentYellow : colors.backgroundWhite};
  font-family: Lora, Roboto, serif;
  line-height: 160%;
  cursor: pointer;
  min-width: 6em;
  text-align: center;
  margin: 4px;

  :hover {
    opacity: 0.65;
  }

  :active {
    opacity: 0.9;
  }
`;

export default {
  Container,
  TabsWrapper,
  Tab,
};
