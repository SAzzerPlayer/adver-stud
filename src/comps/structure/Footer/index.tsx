import React from "react";
import Styled from "./styles";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";
import { HoverLink, Icon } from "../../shared";
import { colors } from "../../../styles";

export interface IFooterProps {
  tabs: {
    url: string;
    text: string;
  }[];
  iconTabs: {
    url: string;
    image: IGatsbyImageData;
  }[];
}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.ContentRow>
          <HoverLink to={"/"}>
            <h4>AdverStud</h4>
          </HoverLink>
          <Styled.Tabs className={"only-not-device"}>
            <HoverLink to={"/"}>
              <h6>Абітурієнтам</h6>
            </HoverLink>
            <HoverLink to={"/"}>
              <h6>Про нас</h6>
            </HoverLink>
            <HoverLink to={"/"}>
              <h6>Публікації</h6>
            </HoverLink>
          </Styled.Tabs>
          <Styled.Social>
            <HoverLink to={"/"}>
              <Icon name={"telegram"} color={colors.backgroundWhite} />
            </HoverLink>
            <HoverLink to={"/"}>
              <Icon name={"facebook"} color={colors.backgroundWhite} />
            </HoverLink>
            <HoverLink to={"/"}>
              <Icon name={"instagram"} color={colors.backgroundWhite} />
            </HoverLink>
          </Styled.Social>
        </Styled.ContentRow>
        <Styled.ContentRow className={"only-device"}>
          <Styled.Tabs>
            <HoverLink to={"/"}>
              <h6>Вебсайт факультету</h6>
            </HoverLink>
            <HoverLink to={"/"}>
              <h6>Контакти</h6>
            </HoverLink>
            <HoverLink to={"/"}>
              <h6>Вебсайт університету</h6>
            </HoverLink>
          </Styled.Tabs>
        </Styled.ContentRow>
        <p>@ {new Date().getFullYear()} AdverStud</p>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Footer;
