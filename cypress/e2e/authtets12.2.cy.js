describe('Тестирование формы логина и пароля', function () {
    
    it('правильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('german@dolnikov.ru');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > img');
         })

     it('проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); 
        cy.get('#mailForgot'). type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click(); 
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > img');
        })

    it('правильный логин, неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('german@dolnikov.ru');
        cy.get('#pass'). type('qastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > img');
         })

    it('неправильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('nikita@dolnikov.ru');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > img');
         })

    it('логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('germandolnikov.ru');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > img');
         })

    it('приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('GerMan@Dolnikov.ru');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > img');
         })

})
