import { FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";

// Основные ссылки для хедера, бургера и других общих компонентов
export const routes = [
  { name: "Про нас", path: "/#about" },
  { name: "Чому ми?", path: "/#why-us" },
  { name: "Формат", path: "/#format" },
  { name: "Заклади", path: "/#locations" },
  { name: "Етапи відкриття", path: "/#opening-steps" },
  { name: "Калькулятор", path: "/#calculator" },
  { name: "Скоро", path: "/#coming-soon" },
];

// Соц.сети

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/tatarka.chebureki",
    icon: FaInstagram,
  },
  { name: "Telegram", url: "https://t.me/yurii_franch", icon: FaTelegram },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@tatarkachebureki",
    icon: FaTiktok,
  },
];
