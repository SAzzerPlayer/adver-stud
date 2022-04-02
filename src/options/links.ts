import { TLinkToSite } from "../types";

export const siteChapters: TLinkToSite[] = [
  { title: "Абітурієнтам", link: "/" },
  { title: "Про нас", link: "/about" },
  { title: "Публікації", link: "/publication" },
  { title: "Наша кафедра", link: "/department" },
  { title: "Студентам", link: "/student" },
];

export const socialSiteChapters: TLinkToSite[] = [
  {
    title: "",
    link: "https://ru.wikipedia.org/wiki/Telegram",
    icon: "telegram",
  },
  { title: "", link: "https://www.instagram.com/", icon: "instagram" },
  { title: "", link: "https://www.facebook.com/", icon: "facebook" },
];

export const outsideSiteLinks: TLinkToSite[] = [
  { title: "Вебсайт факультету", link: "http://fszmk.dnu.dp.ua/" },
  { title: "Вебсайт університету", link: "https://www.dnu.dp.ua/" },
  { title: "Контакти", link: "/" },
];
