// Content of the home page.
//
// IMPORTANT: most photos below are hot-linked placeholders from the design reference
// (cdn.ww.estate = whitewill.ru). They belong to another company and must be replaced
// with Ala-Too Realty's own photos (put files in /public/images and use "/images/…")
// before going live. If an image fails to load, a striped placeholder is shown instead.

const P = "https://cdn.ww.estate/p/s/whitelist-api/file//public/";
const C = "https://cdn.ww.estate/tp/s/whitewill.ru/images/tile-categories/moscow/";
const I = "https://cdn.ww.estate/tp/s/whitewill.ru/images/illustrations/";
const O = "https://cdn.ww.estate/tp/s/whitewill.ru/uploads/offices/";

export const heroImage = "https://lidforce.vercel.app/teamates/team.webp";

export type CategoryTile = { title: string; count: string; img: string; flip?: boolean };

const tile = (title: string, count: string, file: string, flip = false): CategoryTile => ({
  title,
  count,
  img: `${C}${file}.png?width=800`,
  flip,
});

export const categories: { heading: string; items: CategoryTile[] }[] = [
  {
    heading: "Городская",
    items: [
      tile("Квартиры в новостройках", "186 объектов", "from-developers"),
      tile("Вторичное жильё", "142 объекта", "from-owners"),
      tile("Аренда квартир", "64 объекта", "flat-rent"),
    ],
  },
  {
    heading: "Загородная",
    items: [
      tile("Дома", "48 объектов", "country-houses"),
      tile("Таунхаусы", "17 объектов", "townhouses"),
      tile("Участки", "31 объект", "land-plots"),
    ],
  },
  {
    heading: "Коммерческая",
    items: [
      tile("Офисы", "22 объекта", "offices"),
      tile("Помещения", "19 объектов", "offices", true),
      tile("Аренда коммерции", "27 объектов", "from-developers", true),
    ],
  },
];

export const ownerServices = [
  {
    eyebrow: "Продажа",
    title: "Продать недвижимость",
    text: "Оценим, подготовим документы и найдём покупателя. В среднем — за 45 дней.",
    button: "Оставить заявку",
    img: `${I}lead-sale.png?width=1200`,
  },
  {
    eyebrow: "Аренда",
    title: "Сдать недвижимость",
    text: "Проверим арендатора, составим договор и возьмём на себя показы.",
    button: "Оставить заявку",
    img: `${I}lead-rent-signing.webp?width=1200`,
  },
];

export type BentoItem = {
  area: "a" | "b" | "c" | "d" | "e" | "f";
  type: string;
  badge: string;
  title: string;
  district: string;
  meta: string;
  price: string;
  img: string;
  placeholder: string;
  titleSize: string;
  arch?: boolean;
};

export const bestOffers: BentoItem[] = [
  { area: "a", type: "Квартира", badge: "Новое", title: "Стильная видовая квартира в клубном доме", district: "Золотой квадрат", meta: "82 м² · 1 спальня · 16/18 этаж", price: "$165 000", img: `${P}apartments/228219/interior/1697467232-652d4b60a8078_interior_11_6_1.jpg?width=1600`, placeholder: "Интерьер · LOT_1", titleSize: "clamp(28px,3vw,40px)" },
  { area: "c", type: "Пентхаус", badge: "Старт продаж", title: "Пентхаус без отделки с панорамными окнами", district: "Джал", meta: "187 м² · 21/21 этаж", price: "$420 000", img: `${P}apartments/274239/interior/1787567283-6a8c1cb3102eb_01.jpg?width=1600`, placeholder: "Интерьер · LOT_3", titleSize: "30px", arch: true },
  { area: "b", type: "Квартира", badge: "Продажа", title: "Просторная квартира с видом на горы", district: "Восток-5", meta: "172 м² · 3 спальни", price: "$320 000", img: `${P}apartments/346166/living_room/1779788407-6a156a77210f2_interior_1_1_1.jpg?width=1600`, placeholder: "Гостиная · LOT_2", titleSize: "26px" },
  { area: "d", type: "Дом", badge: "Загородная", title: "Коттедж в европейском стиле у предгорий", district: "Кой-Таш", meta: "214 м² · 10 соток", price: "$380 000", img: `${P}cslots/14769/interior/1789404761-6aa82659608e1_interior_998_001.jpg?width=1600`, placeholder: "Интерьер дома · HOUSE_1", titleSize: "26px" },
  { area: "e", type: "Квартира", badge: "Продажа", title: "Светлая квартира с готовым ремонтом", district: "Асанбай", meta: "69 м² · 2 спальни", price: "$112 000", img: `${P}apartments/286343/living_room/1759325319-68dd2c8749262_interior_1_9_2.jpg?width=1600`, placeholder: "Гостиная · LOT_4", titleSize: "26px" },
  { area: "f", type: "Аренда", badge: "Аренда", title: "Апартаменты с панорамными окнами", district: "Южная магистраль", meta: "84 м² · 20 этаж", price: "$1 300/мес", img: `${P}apartments/331901/living_room/1781571122-6a309e32d3c8b_01.jpg?width=1600`, placeholder: "Гостиная · LOT_6", titleSize: "26px" },
];

export const stats = [
  { value: "8", label: "лет на рынке" },
  { value: "1 200+", label: "сделок" },
  { value: "25", label: "экспертов" },
  { value: "500+", label: "объектов в базе" },
];

export const reasons = [
  { n: "01", title: "Юридическая проверка каждого объекта", text: "Проверяем собственников, обременения и историю перехода прав до внесения задатка." },
  { n: "02", title: "Сопровождение от показа до регистрации", text: "Один агент ведёт сделку целиком: показы, переговоры, договор, регистрация в ГРС." },
  { n: "03", title: "Работаем с ипотекой и рассрочкой", text: "Подбираем программу банка или застройщика и помогаем собрать документы." },
  { n: "04", title: "База объектов, которых нет в открытом доступе", text: "Часть квартир и домов продаётся только через агентство, без публикации на площадках." },
];

export const ratings = [
  { source: "2GIS", value: "4.9", count: "127 оценок" },
  { source: "Google", value: "4.8", count: "64 оценки" },
];

export const reviews = [
  { initials: "АС", name: "Айгерим С.", source: "2GIS", text: "Спасибо Бегимай за подбор квартиры в Восток-5. Нашли вариант за две недели, документы проверили до задатка, сделка прошла спокойно." },
  { initials: "ТК", name: "Тимур К.", source: "Google", text: "Продавали дом в Кок-Жаре. Агент сделал фото, вывел объект на все площадки и продал по цене выше, чем мы рассчитывали." },
  { initials: "НА", name: "Нургуль А.", source: "2GIS", text: "Покупала квартиру удалённо из Москвы. Всё через видеопоказы и электронную подпись, агент была на связи каждый день." },
  { initials: "ДМ", name: "Данияр М.", source: "Google", text: "Сняли офис в центре за неделю. Агентство выторговало скидку на первые три месяца аренды." },
];

export const officeLeaves = { left: `${I}office-leaves-left.png?width=400`, right: `${I}office-leaves-right.png?width=400` };

export const officeSlides = [
  { src: `${O}1/office_image/ofis-msk-4_1745435043.png?width=1600`, placeholder: "Офис · зона ожидания · OFFICE_1" },
  { src: `${O}1/office_image/ofis-msk-5_1745435043.png?width=1600`, placeholder: "Офис · переговорная · OFFICE_2" },
  { src: `${O}1/office_image/ofis-msk-6_1745435043.png?width=1600`, placeholder: "Офис · кофе-зона · OFFICE_3" },
  { src: `${O}2/office_image/ofis-zagorodka-2_1745435189.png?width=1600`, placeholder: "Офис · лаунж · OFFICE_4" },
];

export const propertyTypes = ["Квартира", "Дом", "Таунхаус", "Участок", "Коммерческая"];
export const districts = ["Любой район", "Золотой квадрат", "Восток-5", "Джал", "Асанбай", "Филармония", "Южная магистраль", "Кой-Таш", "Чон-Арык"];
export const leadRequests = ["Квартиру в новостройке", "Вторичное жильё", "Аренду квартиры", "Дом или таунхаус", "Участок", "Коммерческую недвижимость"];
