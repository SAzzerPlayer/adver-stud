import styled from "styled-components";
import { colors } from "src/styles";

const Container = styled.div`
  font-family: Lora, Roboto, serif;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 8px;

  td,
  th {
    padding: 12px 6px;
  }

  td {
    background: ${colors.tintYellow};
    border-radius: 16px;
  }
`;

export default {
  Container,
  Table,
};
