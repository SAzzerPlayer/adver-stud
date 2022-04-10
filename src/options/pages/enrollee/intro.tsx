import React from "react";
import { IAttentionInfoBlockProps } from "../../../components/blocks";
import { Paragraph, H6 } from "../../../components/shared";

export const attentionBlocks: IAttentionInfoBlockProps[] = [
  {
    title: "Приймальна комісія",
    imageName: "ourOffice",
    imageAlt: "Іллюстрація: відкритий конверт. Стікери: зірка та вподобайка",
    children: (
      <>
        <H6>Поштова адреса</H6>
        <Paragraph>
          49010, м. Дніпро, пр. Гагаріна, 72, Дніпровський національний
          університет імені Олеся Гончара, приймальна комісія Email:
          pk@365.dnu.edu.ua
        </Paragraph>
        <H6>Місце розташування</H6>
        <Paragraph>
          м. Дніпро, вул. Казакова, 18, 14-й корп. (механіко-математичний
          факультет), к. 205, тел.: (056) 375-70-45, (056) 375-70-75.
        </Paragraph>
        <H6>Відповідальний секретар</H6>
        <Paragraph>доц. Дергачов Михайло Петрович.</Paragraph>
      </>
    ),
  },
  {
    title: "Контакти факультету",
    imageName: "contacts",
    imageAlt: "Іллюстрація: телефон. Стікери: зірка та слово Follow",
    children: (
      <>
        <H6>Телефон деканату</H6>
        <Paragraph>+(380)56-373-12-33</Paragraph>
        <H6>Email деканату</H6>
        <Paragraph>fszmk@365.dnu.edu.ua</Paragraph>
        <H6>Адреса</H6>
        <Paragraph>
          Факультет знаходиться на 5-6 поверхах навчального корпусу №9, який
          знаходиться за адресою вул. Наукова, 13. Дістатися до корпусу можна
          через парк ДНУ від зупинок Казакова і Університет.
        </Paragraph>
      </>
    ),
  },
];
