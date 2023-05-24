        describe('HuntingPony', () => {
            it('Проверка оформления заказа', () => {
              // Шаг а: Открыть главную страницу
              cy.visit('https://www.huntingpony.com');
              cy.wait (2000);
          
              // Шаг б: Открыть карточку любого товара
              cy.get('[data-index="2"] > :nth-child(1) > .header__collections-link').click();
              cy.wait (2000);
              cy.get('[data-product-id="338932768"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
              cy.wait (2000);

              // Шаг в: Положить в корзину и изменить количество на 2 шт.
              cy.get('.add-cart-counter__btn').click();
              cy.wait (2000); 
              cy.get('[data-add-cart-counter-plus=""]').click();
              cy.wait (2000);
              cy.contains('В корзине 2 шт').should('be.visible');
              cy.wait (2000);
          
              // Шаг г: Перейти в корзину
              cy.get('.add-cart-counter__detail').click();
              cy.wait (2000);
          
              // Шаг д: Нажать на кнопку оформления заказа
              cy.get('.cart-controls > .button').click();
              cy.wait (2000);

              // Шаг е: Проверка наличия слова "Оформление заказа"
              cy.contains('Оформление заказа').should('be.visible');
          
            });
          });
          