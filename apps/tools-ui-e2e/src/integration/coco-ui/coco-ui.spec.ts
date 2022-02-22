describe('tools-ui: CocoUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cocoui--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to CocoUi!');
  });
});
