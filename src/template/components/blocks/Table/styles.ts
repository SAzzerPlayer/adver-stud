import styled from "styled-components";
import { colors } from "../../../../styles";

const Container = styled.div`
  font-family: Lora, Roboto, serif;

  table {
    width: 100%;
    border-spacing: 8px;

    td,
    th {
      padding: 12px 6px;
      text-align: center;
    }
    td {
      background: ${colors.tintYellow};
      border-radius: 16px;
    }
  }

  overflow: auto;
`;

export default {
  Container,
};
