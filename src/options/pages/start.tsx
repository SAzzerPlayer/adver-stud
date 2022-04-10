import React from "react";
import { IAttentionInfoBlockProps } from "../../components/blocks";
import { Paragraph } from "../../components/shared";

export const attentionBlocks: IAttentionInfoBlockProps[] = [
  {
    title: "Абітурієнту на замітку: \n" + "як вступити \n" + "на факультет",
    imageName: "writingMachine",
    imageAlt: "Іллюстрація: машинка для письма. Стікери: зірка та слово NICE",
    link: {
      title: "Дізнатися більше",
      url: "/enrollee/intro",
      type: "internal",
    },
    children: (
      <Paragraph>
        Бакалаврат Освітня підготовка бакалаврів за спеціальністю «Журналістика»
        триває 4 роки. У Дніпровському національному університеті імені Олеся
        Гончара наявні як денна, так і заочна форми навчання. Протягом...
      </Paragraph>
    ),
  },
  {
    title: "Для абітурієнтів, бакалаврів та магістрів!",
    imageName: "clocks",
    imageAlt: "Іллюстрація: будильник. Стікери: вподобайка та слово WOW",
    link: {
      title: "Дізнатися більше",
      url: "/enrollee/resume",
      type: "internal",
    },
    children: (
      <Paragraph>
        Ти все ще вагаєшся і не можеш обрати вірний шлях? Ось тобі кілька
        «життєвих реалій» від студентів, які навчаються в магістратурі. Що нам
        дає магістратура?
      </Paragraph>
    ),
  },
  {
    title: "Бути магістром \n" + "— круто!",
    imageName: "notes",
    imageAlt: "Іллюстрація: Записник. Стікери: вподобайка та слово FOLLOW",
    link: {
      title: "Дізнатися більше",
      url: "/enrollee",
      type: "internal",
    },
    children: (
      <Paragraph>
        Історія від викладачки та студентки кафедри Масової та міжнародної
        комунікації - Юлії Гаркавенко, яка залюбки поділилася своїм досвідом та
        історією.
      </Paragraph>
    ),
  },
  {
    title: "Що таке аспірантура?",
    imageName: "goodIdea",
    imageAlt: "Іллюстрація: Лампа накалювання. Стікери: зірка та слово LIKE",
    link: {
      title: "Дізнатися більше",
      url: "/enrollee",
      type: "internal",
    },
    children: (
      <Paragraph>
        Усі необхідні документи, додатки та посилання. Адреса приймальної
        комісії, контакти та все те, що потрібно для вступу.
      </Paragraph>
    ),
  },
];
