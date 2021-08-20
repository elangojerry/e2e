Feature('Home Page');

Scenario('test something', ({ I }) => {
    I.amOnPage('http://localhost:4200');
    I.see('Welcome');
});
