import React from "react";
import { IAttentionInfoBlockProps } from "../../../components/blocks/AttentionInfoBlock";
import goodIdeaPath from "../../../images/illustrations/graduators.png";
import { Paragraph } from "../../../components/shared";

export const attentionBlocks: IAttentionInfoBlockProps[] = [
  {
    title: "Видатні випускники",
    imageSrcPath: goodIdeaPath,
    imageAlt: "Іллюстрація: Мікрофон. Стікери: слово GOOD та слово TALK",
    link: {
      title: "Дізнатися більше",
      url: "/student",
      type: "internal",
    },
    children: (
      <Paragraph>
        Наші випускники працюють по всьому світу і в самих різних областях.
        Хтось подався за моря покращувати західну журналістику, хтось залишився
        тут і створив власні проекти, а хтось - зовсім змінив професію і
        зайнявся створенням фільмів. Але всіх їх об'єднує одне – любов і
        вдячність до факультету, а головне – працюючих на ньому людей.
      </Paragraph>
    ),
  },
];
