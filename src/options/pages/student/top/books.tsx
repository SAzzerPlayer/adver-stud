import React from "react";
import { IAttentionInfoBlockProps } from "../../../../components/blocks/AttentionInfoBlock";
import publicRelationsPath from "../../../../images/books/publicRelations.png";
import strategicCommunicationPath from "../../../../images/books/strategicCommunication.png";
import newMarketingRulesPath from "../../../../images/books/newMarketingRules.png";
import prOnTheHighLevelPath from "../../../../images/books/prOnTheHighLevel.png";
import pr100Path from "../../../../images/books/100%pr.png";
import { Paragraph } from "../../../../components/shared";

export const attentionBlocks: IAttentionInfoBlockProps[] = [
  {
    title: '1. "Паблік Рілейшнз", \n' + "Г. Почепцов",
    imageSrcPath: publicRelationsPath,
    imageAlt: "Іллюстрація: книга. Стікери: вподобайка та зірка",
    children: (
      <Paragraph>
        В роботі пояснюється, що таке паблік рілешнз, визначається сфера їх
        діяльності, аналізуються основні підходи, загальні і конкретні
        стратегії, інструментарій цієї нової для нас науки. Крім того,
        визначається комунікативний простір, дається огляд наук комунікативного
        циклу, значущих для ПР, а саме: теорія комунікації, герменевтика, теорії
        переговорів і розвідки, конфліктологія, семіотика та ін.
      </Paragraph>
    ),
  },
  {
    title:
      "2. «Strategic Communication Management. Making PR Work», John White, Laura Mazur",
    imageSrcPath: strategicCommunicationPath,
    imageAlt: "Іллюстрація: книга. Стікери: вподобайка та зірка",
    children: (
      <Paragraph>
        Якщо вам потрібна більш серйозна книга про PR, то краще цієї ви навряд
        чи зумієте знайти. Предмет книги - стратегічний PR, тема серйозна, але
        виклад дуже просте. Книга авторам вдалася: в ній багато кейсів,
        прикладів вдалих і невдалих дій і кампаній, багато статистичних даних,
        результатів опитувань і досліджень. І при цьому книга читається дуже
        легко. Сміливо можна рекомендувати цю книгу в якості настільної для
        керівників PR служб.
      </Paragraph>
    ),
  },
  {
    title: "3. «Нові правила маркетингу \n" + "та PR», Д.М. Скотт",
    imageSrcPath: newMarketingRulesPath,
    imageAlt: "Іллюстрація: книга. Стікери: вподобайка та зірка",
    children: (
      <Paragraph>
        Інтернет в наш час став основним джерелом інформації. Як в цьому випадку
        правильно будувати комунікації компанії? Як просувати бізнес, коли роль
        традиційних ЗМІ неухильно падає, а ціни на їх рекламні послуги постійно
        зростають? Нові правила маркетингу і PR, пропоновані автором, дозволять
        при невеликому бюджеті, використовуючи переважно безкоштовні
        інтернет-канали, звернутися до необмеженої аудиторії покупців і змусити
        журналістів шукати інформацію про вашу компанію.Автор розповідає, як
        виявити цільову інтернет-аудиторію вашого бізнесу, правильно
        використовувати відео- і аудіоматеріали, дає покрокові інструкції по
        створенню ефективного маркетингового плану, a також відкриває секрети
        роботи з інструментами інтернет-маркетингу, в тому числі з соціальними
        мережами, такими як Facebook і Twitter. Книга адресована фахівцям в
        сфері реклами і маркетингу, власникам малого і середнього бізнесу, а
        також всім, кого цікавлять нові технології просування та реклами своїх
        ідей.
      </Paragraph>
    ),
  },
  {
    title: "4. «PR високого польоту», І. Алєксєєва, Т. Гуляєва",
    imageSrcPath: prOnTheHighLevelPath,
    imageAlt: "Іллюстрація: книга. Стікери: вподобайка та зірка",
    children: (
      <Paragraph>
        Дійсно, щоб зрозуміти, як успішно займатися PR, раніше доводилося
        набивати безліч шишок. Так було до сьогоднішнього дня. Ви тримаєте в
        руках неймовірно корисну книгу. «PR високого польоту» дасть Вам потужний
        поштовх у нелегкій роботі з просування топ-менеджерів компанії. Також
        книга є універсальним довідником по щодня використовуваним
        PR-інструментів. Автори, маючи багатий досвід роботи в російській PR
        середовищі, зібрали для Вас найефективніші інструменти і важливі
        інструкції в цій книзі. Тому вона буде корисна як новачкам, так і
        професіоналам.Книга адресована не тільки фахівцям з PR, маркетингу,
        комунікацій, а й топ-менеджерам компаній, які розуміють, що публічність
        може бути переведена в прибуток, але самі поки не володіють
        інструментами PR. Книга буде корисна студентам, які навчаються
        маркетингу або зв'язках з громадськістю, тому що, на нашу думку, PR
        керівників - одне з найцікавіших і прибуткових напрямків маркетингу.
      </Paragraph>
    ),
  },
  {
    title: "5. «PR на 100%», \n" + "І.Манн, М. Горкіна, \n" + "А. Мамонтов",
    imageSrcPath: pr100Path,
    imageAlt: "Іллюстрація: книга. Стікери: вподобайка та зірка",
    children: (
      <Paragraph>
        «PR на 100%» - це 65% практичних рекомендацій, 20% прикладівпрактичної
        роботи і реалізованих проектів, 10% гумору і 5% теорії.Автори більше 10
        років працюють в сфері PR і маркетингу, тому своєїметою вони поставили
        написати книгу на основі власного досвіду. У ній читач знайде тільки те,
        що дійсно потрібно в PR-діяльності компанії. Це книга для тих, хто хоче
        діяти і робити стовідсотковий PR.Для тих, кому необхідно отримати
        максимум практичних знань, провірений російським досвідом, за мінімум
        часу.
      </Paragraph>
    ),
  },
];
