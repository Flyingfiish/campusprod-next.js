const types = {
  imageVideo: "Имиджевое видео",
  websiteDesign: "Дизайн сайта",
  packaging: "Упаковка",
  interface: "Интерфейс",
  printedDesign: "Печатный дизайн",
};

export function getTag(type) {
  return types[type];
}
