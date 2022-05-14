import styled from "styled-components";
import { breakpoints, colors, getGapStyle, shadows } from "src/styles";

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 72px;
  z-index: 100;
  background-color: ${colors.backgroundGray};
  box-shadow: ${shadows.soft};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${breakpoints.monitor};
  width: 100%;
  flex: 1;
  padding: 0 2em;
`;

const MenuID = "menu-checkbox";

const MenuCheckbox = styled.input.attrs({
  className: "menu",
  type: "checkbox",
  hidden: true,
  id: MenuID,
})`
  display: none;
  @media (max-width: ${breakpoints.device}) {
    + label {
      display: flex;
      svg:last-child {
        display: none;
      }
    }

    :checked + label {
      svg:first-child {
        display: none;
      }
      svg:last-child {
        display: flex;
      }
    }

    :checked ~ .tabs {
      display: flex;
    }
  }
`;

const MenuLabel = styled.label.attrs({
  htmlFor: MenuID,
})`
  display: none;
`;

const Tabs = styled.div.attrs({ className: "tabs" })`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${getGapStyle("3em", "row")};
  margin: 0 16px;
  > a {
    > h6 {
      text-align: center;
      font-weight: 500;
    }
  }
  
  @media (max-width: ${breakpoints.laptop}) {
    ${getGapStyle("1.5em", "row")};
  }

  @media (max-width: ${breakpoints.device}) {
    //inactive state
    display: none;
    //
    flex-direction: column;
    position: absolute;
    align-items: flex-start;
    top: 72px;
    left: 0;
    background-color: ${colors.backgroundGray};
    box-shadow: ${shadows.soft};
    margin: 0;
    width: inherit;

    > a {
      width: 80vw;
      padding: 8px 2em 24px 2em;
      margin: 0;
      > h6 {
        text-align: left;
        font-weight: 400;
      }
    }
  }
`;

const Social = styled.div.attrs({ className: "social" })`
  display: flex;
  align-items: center;
  ${getGapStyle("1em", "row")};

  > a {
    height: 32px;
  }

  @media (max-width: ${breakpoints.laptop}) {
    transform: scale(0.8);
  }

  @media (max-width: ${breakpoints.device}) {
    display: none;
  }
`;

export default {
  Container,
  Content,
  Tabs,
  Social,
  MenuCheckbox,
  MenuLabel,
};
