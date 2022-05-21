import styled from "styled-components";
import { colors, shadows, breakpoints, getGapStyle } from "src/styles";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.accentBlack};
  box-shadow: ${shadows.soft};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: ${breakpoints.monitor};
  flex: 1;
  padding: 2em;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a {
    color: ${colors.backgroundWhite};
  }

  .only-not-device {
    display: flex;
  }

  .only-device {
    display: none;
  }

  @media (max-width: ${breakpoints.device}) {
    .only-not-device {
      display: none;
    }

    .only-device {
      display: flex;
    }
  }
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${getGapStyle("3em", "row")};
  margin: 0 1em;
  > a {
    > h6 {
      font-weight: 600;
    }
  }
  
  @media (max-width: ${breakpoints.device}) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    ${getGapStyle("0", "row")};
    > a {
      padding: 12px 0;
    }
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  ${getGapStyle("1em", "row")};

  > a {
    height: 32px;
  }

  @media (max-width: ${breakpoints.laptop}) {
    transform: scale(0.8);
  }
`;

export default {
  Container,
  Content,
  ContentRow,
  Tabs,
  Social,
};
