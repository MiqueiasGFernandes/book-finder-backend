export type BookSaleInfo = {
  country: string,
  listPrice: {
   amount: number,
   currencyCode: string
  },
  retailPrice: {
   amount: number,
   currencyCode: string
  },
  buyLink: string
}
