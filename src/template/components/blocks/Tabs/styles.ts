import styled from "styled-components";
import { colors } from "../../../../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Tab = styled.p<{ active?: boolean }>`
  padding: 1em;
  border-radius: 30px;
  background: ${({ active }) =>
    active ? colors.accentYellow : colors.backgroundWhite};
  font-family: Lora, Roboto, serif;
  line-height: 160%;
  cursor: pointer;
  min-width: 10em;
  text-align: center;
  margin: 4px;

  :hover {
    opacity: 0.9;
  }

  :active {
    opacity: 0.65;
  }
`;

export default {
  Container,
  TabsWrapper,
  Tab,
};
