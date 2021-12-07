export type GoogleBookType = {
  title: string,
  authors: string[],
  volumeInfo: {
    title: string,
    authors: string[]
    industryIdentifiers: Record<string, string>[]
    publisher: string,
    publisherDate: string,
    description: string,
    width?: string,
    height?: string,
    printType: string,
    categories: string[],
    averageRating: number,
    ratingsCount: number,
    pageCount: number
  },
}
