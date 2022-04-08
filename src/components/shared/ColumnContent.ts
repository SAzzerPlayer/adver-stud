import styled from "styled-components";
import {getGapStyle} from "../../styles/common";

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${getGapStyle("192px", "column")};
  box-sizing: border-box;
`;
