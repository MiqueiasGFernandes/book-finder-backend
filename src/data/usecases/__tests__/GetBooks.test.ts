import InternalError from '../../../domain/errors/InternalError';
import BookRepository from '../../repositories/BookRepository';
import { ConfigMock } from '../../test/ConfigMock';
import GoogleBookApiMock from '../../test/GoogleBookApiMock';
import GetBook from '../GetBooks';

describe('GIVEN .get()', () => {
  test('WHEN successfully, SHOULD returns an Book Array', async () => {
    const getBookMock = new GetBook(new BookRepository(new GoogleBookApiMock(new ConfigMock())))

    const sut = await getBookMock.get(['theology']);

    expect(sut instanceof Array).toBe(true)
  });

  test('WHEN api request fails, SHOULD throws an InternalError', async () => {
    const getBookMock = new GetBook(new BookRepository(new GoogleBookApiMock(new ConfigMock('ERROR'))))

    const sut = getBookMock.get(['theology']);

    await expect(sut).rejects.toThrow(InternalError)
  });
});
