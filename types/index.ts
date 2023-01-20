export type productType = {
  img: string;
  title: string;
  size: string;
  dealer: string;
  discount: string;
};

export interface ProductProps {
  product: productType;
}
