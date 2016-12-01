import { AngularcliHmrExamplePage } from './app.po';

describe('angularcli-hmr-example App', function() {
  let page: AngularcliHmrExamplePage;

  beforeEach(() => {
    page = new AngularcliHmrExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
