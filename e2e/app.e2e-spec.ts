import { OasisPage } from './app.po';

describe('oasis App', function() {
  let page: OasisPage;

  beforeEach(() => {
    page = new OasisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
