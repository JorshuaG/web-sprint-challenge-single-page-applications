const nameInput = () => cy.get('input[name="name"]');
const checkboxInput = () => cy.get('input[type="checkbox"]');
const submitButton = () => cy.get('button[id="order-button"]');
const orderButton = () => cy.get('button[id="order-pizza"]');

describe("Form App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Can type in name text box", () => {
    orderButton().click();
    nameInput()
      .should("have.value", "")
      .type("Josh")
      .should("have.value", "Josh");
  });

  it("Can check multiple boxes", () => {
    orderButton().click();
    checkboxInput().click({ multiple: true });
  });
  it("Can submit form", () => {
    orderButton().click();
    submitButton().click();
  });
});
