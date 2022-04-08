import React from "react";
import { IAttentionInfoBlockProps } from "../../../components/blocks/AttentionInfoBlock";
import schedulePath from "../../../images/illustrations/schedule.png";
import bonusesPath from "../../../images/illustrations/bonuses.png";
import readingMaterialPath from "../../../images/illustrations/readingMaterial.png";
import guitarPath from "../../../images/illustrations/guitar.png";
import booksToReadPath from "../../../images/illustrations/booksToRead.png";
import classicsPath from "../../../images/illustrations/classics.png";
import { Paragraph } from "../../../components/shared";

export const attentionBlocks: IAttentionInfoBlockProps[] = [
  {
    title: "Розклад",
    imageSrcPath: schedulePath,
    imageAlt: "Іллюстрація: блокнот. Стікери: вподобайка та слово TIME",
    link: {
      title: "Дізнатися більше",
      url: "/student/",
      type: "internal",
    },
    children: (
      <Paragraph>
        Додатковий графік перескладання за 1 семестр 2021-2022 н.р. Додатковий
        графік перескладань кафедри масової та міжнародної комуникації за 1
        семестр 2021-2022н.р. Графік перескладання за 1 семестр 2021-2022 н.р.
      </Paragraph>
    ),
  },
  {
    title: "Рeєстр додаткових балів",
    imageSrcPath: bonusesPath,
    imageAlt: "Іллюстрація: золотий кубок. Стікери: зірка та слово LIKE",
    link: {
      title: "Дізнатися більше",
      url: "/student/",
      type: "internal",
    },
    children: (
      <Paragraph>
        Додатковий графік перескладання за 1 семестр 2021-2022 н.р. Додатковий
        графік перескладань кафедри масової та міжнародної комуникації за 1
        семестр 2021-2022н,р, Графік перескладання за 1 семестр 2021-2022 н.р.
      </Paragraph>
    ),
  },
  {
    title: "Навчально-методичні праці",
    imageSrcPath: readingMaterialPath,
    imageAlt: "Іллюстрація: книжка. Стікери: вподобайка та слово LIKE",
    link: {
      title: "Дізнатися більше",
      url: "/student/",
      type: "internal",
    },
    children: (
      <Paragraph>
        Навчально-методичні посібники / посібники для самостійної роботи
        здобувачів вищої освіти та дистанційного навчання, електронні курси,
        конспекти лекцій / практикуми / методичні вказівки / рекомендації /
        робочі програми / інші друковані навчально-методичні праці
      </Paragraph>
    ),
  },
  {
    title: "Рада студентів факультету",
    imageSrcPath: guitarPath,
    imageAlt: "Іллюстрація: гитара. Стікери: вподобайка та зірка",
    link: {
      title: "Дізнатися більше",
      url: "/student/",
      type: "internal",
    },
    children: (
      <Paragraph>
        Цьогорічну студентську раду ФСЗМК очолив студент групи ЗЖ-17-01 – Кирило
        Ан. Хлопцю вдалося завоювати прихильність студентів попри те, що в нього
        були сильні конкуренти. На офіційній сторінці студради він написав, що
        за цей рік ФСЗМК стане найкращим факультетом ДНУ!
      </Paragraph>
    ),
  },
  {
    title: "Топ-5 книг з PR",
    imageSrcPath: booksToReadPath,
    imageAlt: "Іллюстрація: стопа книг. Стікери: слова READ та BOOK",
    link: {
      title: "Дізнатися більше",
      url: "/student/top/books",
      type: "internal",
    },
    children: (
      <Paragraph>
        Тут зібраний список книг, які варто прочитати, щоб відкрити нові
        можливості у сфері PR та реклами.
      </Paragraph>
    ),
  },
  {
    title: "Топ-5 книг від класиків реклами",
    imageSrcPath: classicsPath,
    imageAlt:
      "Іллюстрація: книга та чашка з чаєм. Стікери: вподобайка та слово CLASSICS",
    link: {
      title: "Дізнатися більше",
      url: "/student/top/classics",
      type: "internal",
    },
    children: (
      <Paragraph>
        Тут зібраний список книг з реклами, які рекомендовано прочитати, щоб
        більш поглиблено вивчати сферу реклами та PR.
      </Paragraph>
    ),
  },
];
