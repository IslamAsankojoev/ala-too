// Shared contact details and navigation.

export const contacts = {
  phone: "+996 555 123 456",
  phoneHref: "tel:+996555123456",
  phone2: "+996 700 123 456",
  phone2Href: "tel:+996700123456",
  email: "info@alatoo-realty.kg",
  address: "г. Бишкек, бул. Эркиндик, 35, 3 этаж",
  addressShort: "бул. Эркиндик, 35, 3 этаж",
  hours: "Пн–Сб 9:00–19:00, Вс — по записи",
  whatsapp: "https://wa.me/996555123456",
  telegram: "https://t.me/alatoo_realty",
  instagram: "https://instagram.com/ala_too_realty",
};

export const routes = {
  home: "/",
  catalog: "/catalog/",
  object: "/object/",
  owners: "/owners/",
  about: "/about/",
  contacts: "/contacts/",
  privacy: "#",
  terms: "#",
} as const;

export type NavKey = "home" | "catalog" | "owners" | "about" | "contacts";

export const nav: { label: string; href: string; key: NavKey }[] = [
  { label: "Объекты", href: routes.catalog, key: "catalog" },
  { label: "Собственникам", href: routes.owners, key: "owners" },
  { label: "О компании", href: routes.about, key: "about" },
  { label: "Контакты", href: routes.contacts, key: "contacts" },
];

export const languages = ["RU", "KG", "EN"] as const;
