import StoreApi from 'state-api';
import { data } from '../testData';

const store = new StoreApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = store.getState().articles;
    const articleId = data.articles[0].id;
    const ariticleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(ariticleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = store.getState().authors;
    const authorId = data.authors[0].id;
    const authorTitle = data.authors[0].title;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toBe(authorTitle);
  });

});
