import React from "react";
import Styled from "./styles";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { HoverLink, Icon } from "src/comps/shared";
import {colors} from "src/styles";

export interface IHeaderProps {
  tabs: {
    url: string;
    text: string;
  }[];
  iconTabs: {
    url: string;
    image: IGatsbyImageData;
  }[];
}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <HoverLink to={"/"}>
          <h4 style={{color: colors.accentDarkBlack}}>AdverStud</h4>
        </HoverLink>
        <Styled.MenuCheckbox />
        <Styled.MenuLabel>
          <Icon name={"menu"} size={24} />
          <Icon name={"close"} size={24} />
        </Styled.MenuLabel>
        <Styled.Tabs>
          <HoverLink to={"/"}>
            <h6>Абітурієнтам</h6>
          </HoverLink>
          <HoverLink to={"/"}>
            <h6>Про нас</h6>
          </HoverLink>
          <HoverLink to={"/"}>
            <h6>Публікації</h6>
          </HoverLink>
          <HoverLink to={"/"}>
            <h6>Наша кафедра</h6>
          </HoverLink>
          <HoverLink to={"/"}>
            <h6>Студентам</h6>
          </HoverLink>
        </Styled.Tabs>
        <Styled.Social>
          <HoverLink to={"/"}>
            <Icon name={"telegram"} />
          </HoverLink>
          <HoverLink to={"/"}>
            <Icon name={"facebook"} />
          </HoverLink>
          <HoverLink to={"/"}>
            <Icon name={"instagram"} />
          </HoverLink>
        </Styled.Social>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Header;
