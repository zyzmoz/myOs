import { MyOsPage } from './app.po';

describe('my-os App', () => {
  let page: MyOsPage;

  beforeEach(() => {
    page = new MyOsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
