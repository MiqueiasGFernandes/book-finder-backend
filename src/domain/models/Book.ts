import { BookDimensions } from './BookDimensions';
import { BookRating } from './BookRating';

export type Book = {
    title: string,
    authors: string[],
    publisher: string,
    publisherDate: string,
    description: string,
    pageCount: number,
    isbn: string,
    dimensions?: BookDimensions,
    type: string,
    categories: string[],
    rating: BookRating,
}
