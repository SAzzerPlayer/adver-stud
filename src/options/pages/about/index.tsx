import React from "react";
import {
  IAttentionInfoBlockProps,
  TBadgeItem,
} from "../../../components/blocks";
import { Paragraph } from "../../../components/shared";

export const attentionBlocks: IAttentionInfoBlockProps[] = [
  {
    title: "Видатні випускники",
    imageName: "goodIdea",
    imageAlt: "Іллюстрація: Мікрофон. Стікери: слово GOOD та слово TALK",
    link: {
      title: "Дізнатися більше",
      url: "/about/graduates",
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

export const badgeCollectionItems: TBadgeItem[] = [
  {
    text: "Факультет розпочинався із відкриття факультативу «журналістика» на базі гуманітарного факультету ДНУ.",
  },
  { text: "Відкриття кафедри датується 1991 роком." },
  {
    text: "Факультет Систем та Засобів Масової Комунікації розпочав свою роботу у 1996 році.",
  },
  {
    text: "Перша «легенда» факультету - Володимир Дмитрович Буряк, відомий практик телебачення, поет, романіст та доктор наук нашого університету.",
  },
  {
    text: "На факультеті працюють не тільки журналісти-практики, а й філологи із досвідом роботи у сфері ЗМІ.",
  },
  {
    text: "Факультет має власну технічну лабораторію, у якій студенти отримують практику роботи «з камерою» та монтажем.",
  },
  {
    text: "На факультеті функціонує радіостанція, підготовкою та випуском матеріалів якої займаються виключно студенти.",
  },
  {
    text: "Є програма «TEMPUS» - програма Євросоюзу, покликана налагодити та розвивати співпрацю між європейськими вищими навчальними закладами.",
  },
  {
    text:
      "Студенти та викладачі факультету мають можливість стажування у різних країнах світу: \n" +
      "від Фінляндії до Румунії, від Франції до США.",
  },
  { text: "Гасло студентів факультету: «Я хочу стати кращим!»." },
];
