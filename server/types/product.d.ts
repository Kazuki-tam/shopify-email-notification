type ProductType = {
  image: string;
  product: {
    title: string;
  };
  quantity: number;
  refunded_quantity: number;
  original_line_price: number;
  original_price: number;
  final_line_price: number;
  final_price: number;
  line_price: number;
  title: string;
};

export { ProductType };
