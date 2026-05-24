type SellStatus = "available" | "unavailable";
type ProductStatus = "active";

interface ShowInSite {
  id: number;
  discount_price: number;
  title: string;
  price_show_in_site_id: number;
  show_in_details: number;
  show_in_catalog: number;
  is_description: number;
  description: string;
  promo_code: string;
  url_for_image: string;
  images: string;
  images_mobile: string;
  hide_price: number;
}

interface Product {
  id: number;
  old_price: number;
  old_usd_price: string;
  price: number;
  min_month_price: number;
  sell_status: SellStatus;
  status: ProductStatus;
  usd_price: string;
  pl_charge_pcs: number;
  pl_use_instant_bonus: boolean;
  pl_premium_bonus_charge_pcs: number;
  rests: number;
  min_price: number;
  max_price: number;
  has_shops: boolean;
  info: null;
  show_in_site: ShowInSite | null;
}

interface AvailableProductInfo {
  id: number;
  price: number;
  old_price: number;
  usd_price: string;
}

let dataList: Product[] = [
  // тут залишаєш свій великий масив без змін
];

// 1) Загальна вартість товарів за новими цінами price
const totalPrice: number = dataList.reduce((sum: number, product: Product) => {
  return sum + product.price;
}, 0);

console.log("Загальна вартість товарів:", totalPrice);

// 2) Кількість товарів, у яких ціна зменшилась price < old_price
const productsWithDiscountCount: number = dataList.filter(
  (product: Product) => {
    return product.old_price > 0 && product.price < product.old_price;
  },
).length;

console.log(
  "Кількість товарів, у яких ціна зменшилась:",
  productsWithDiscountCount,
);

// 3) Товари, які доступні sell_status: "available"
const availableProducts: Product[] = dataList.filter((product: Product) => {
  return product.sell_status === "available";
});

console.log("Доступні товари:", availableProducts);

// 4) Новий список тільки доступних товарів з потрібними властивостями
const availableProductsInfo: AvailableProductInfo[] = dataList
  .filter((product: Product) => product.sell_status === "available")
  .map((product: Product) => ({
    id: product.id,
    price: product.price,
    old_price: product.old_price,
    usd_price: product.usd_price,
  }));

console.log("Короткий список доступних товарів:", availableProductsInfo);
