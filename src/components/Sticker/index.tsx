import React from "react";
import { Wrapper, Title } from "./styles";
import { Icon, TIconName } from "../Icon";

export interface IStickerProps {
  title: string;
  icon?: TIconName;
  contentColor: string;
  stickerColor: string;
}

export const Sticker: React.FC<IStickerProps> = ({
  title,
  icon,
  contentColor,
  stickerColor,
}) => {
  return (
    <Wrapper style={{ backgroundColor: stickerColor }}>
      {!!title && <Title style={{ color: contentColor, padding: '0 68px' }}>{title}</Title>}
      {!!icon && <Icon name={icon} color={contentColor} style={{padding: '0 8px'}}/>}
    </Wrapper>
  );
};
