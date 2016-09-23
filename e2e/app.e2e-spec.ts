import { NgrxBoilerplatePage } from './app.po';

describe('ngrx-boilerplate App', function() {
  let page: NgrxBoilerplatePage;

  beforeEach(() => {
    page = new NgrxBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
