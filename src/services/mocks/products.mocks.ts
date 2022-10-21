import { Product } from "../types";

const image =
  "https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg";
const title = "Dress";
const price = 800;
export const products: Product[] = new Array(8).fill({}).map((_, idx) => ({
  image,
  title: `${title} ${idx + 1}`,
  price,
}));
