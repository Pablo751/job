<script type="text/gtmscript">
  (function() {
    function handleSearch(event) {
      var searchFormElement = event.target.closest('.search-setting');
      if (searchFormElement) {
        var oldUrl = window.location.href;
        var searchElement = searchFormElement.querySelector('.setting-searchbox');
        if (searchElement) {
          var searchQuery = searchElement.value;
          // Simulate the new URL after search
          var newUrl = oldUrl.split('?')[0] + '?name=' + encodeURIComponent(searchQuery);
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'search',
            old_url: oldUrl,
            new_url: newUrl,
            search_term: searchQuery,
            page_location: oldUrl
          });
        }
      }
    }

    function handleClick(event) {
      var pageslideElement = document.querySelector('pageslide[ps-open="usersidenav.isOpen"]');
      var catalogoButtonElement = pageslideElement.querySelector('a[go-click="/catalog"]');
      var userIconElement = document.querySelector('#headerbar-user');
      var navHeader = document.querySelector('#headerbar-desk');
      var logoElement = navHeader.querySelector('.brand.center-block a');
      var contactoButtonElement = navHeader.querySelector('a[go-click="/contact"]');
      var productElement = event.target.closest('.row.p-2.pt-4 a[id^="product-"]');
      var headerElement = event.target.closest('a[id^="headerbar-"]');
      var addToCartElement = event.target.closest('.add-to-cart');
      var generateOrderButtonElement = event.target.closest('#checkout-orderButton');
      var checkoutOrderButtonElement = event.target.closest('#goToCheckoutButton');
      var decrementButtonElement = event.target.closest('.btn-cart-add .glyphicon-minus');
      var incrementButtonElement = event.target.closest('.btn-cart-add .glyphicon-plus');
      var misPedidosButtonElement = event.target.closest('a[go-click="/order"]');
      var misDocumentosButtonElement = event.target.closest('a[go-click="/finance"]');
      var miPerfilButtonElement = event.target.closest('a[go-click="/profile/user"]');
      var cerrarSesionButtonElement = event.target.closest('a[ng-click="usersidenav.logout()"]');
      
      // Track button click events
 if (catalogoButtonElement && pageslideElement.contains(event.target.closest('a[go-click="/catalog"]'))) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'catalogo_click',
      page_location: window.location.href
    });
} else if(userIconElement && userIconElement.contains(event.target)) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'user_icon_click',
      page_location: window.location.href
    });

  } else if (misPedidosButtonElement) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'mis_pedidos_click',
      page_location: window.location.href
    });
  } else if (misDocumentosButtonElement) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'mis_documentos_click',
      page_location: window.location.href
    });
  } else if (miPerfilButtonElement) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'mi_perfil_click',
      page_location: window.location.href
    });
  } else if (contactoButtonElement && navHeader.contains(event.target.closest('a[go-click="/contact"]'))) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'contacto_click',
      page_location: window.location.href
    });
  } else if (cerrarSesionButtonElement) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cerrar_sesion_click',
      page_location: window.location.href
    });
  }

      if (decrementButtonElement) {
        var productElement = decrementButtonElement.closest('.row.p-2.pt-4');
        var productID = productElement.querySelector('.text-center.sku.catalog-sku > span').textContent;
        var productName = productElement.querySelector('.catalog-item-name a[id^="product-"] > strong').textContent.trim();
        var productBrand = productElement.querySelector(".text-center.sku.catalog-sku > div").textContent.trim();
        var selectedQuantityElement = productElement.querySelector('.cart-input');
        var selectedQuantity = selectedQuantityElement ? selectedQuantityElement.value : null;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'decrement_product',
          'id': productID,
          'name': productName,
          'brand': productBrand,
          'selected_quantity': selectedQuantity,
          page_location: window.location.href
        });
      } else if (incrementButtonElement) {
        var productElement = incrementButtonElement.closest('.row.p-2.pt-4');
        var productID = productElement.querySelector('.text-center.sku.catalog-sku > span').textContent;
        var productName = productElement.querySelector('.catalog-item-name a[id^="product-"] > strong').textContent.trim();
        var productBrand = productElement.querySelector(".text-center.sku.catalog-sku > div").textContent.trim();
        var selectedQuantityElement = productElement.querySelector('.cart-input');
        var selectedQuantity = selectedQuantityElement ? selectedQuantityElement.value : null;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'increment_product',
          'id': productID,
          'name': productName,
          'brand': productBrand,
          'selected_quantity': selectedQuantity,
          page_location: window.location.href
        });
      } else if (productElement) {
        var elementInfo = {};
        var productParentElement = productElement.closest('.row.p-2.pt-4');

        elementInfo.productId = productElement.id;
        elementInfo.productName = productParentElement.querySelector('.catalog-item-name a[id^="product-"] > strong').textContent.trim();
        elementInfo.productBrand = productParentElement.querySelector(".text-center.sku.catalog-sku > div").textContent.trim();
        elementInfo.pageURL = window.location.href;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "product_click",
          product_id: elementInfo.productId,
          product_name: elementInfo.productName,
          product_brand: elementInfo.productBrand,
          page_url: elementInfo.pageURL
        });
      } else if (logoElement && navHeader.contains(event.target.closest('.brand.center-block a'))) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "logo_click",
      event_name: "logo_click",
      page_location: window.location.href
    });
  } else if (headerElement) {
                var elementId = headerElement.id;
        var elementInfo = {
          event: elementId + "_click_" + window.location.href,
          page_url: window.location.href
        };

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(elementInfo);
      } else if (addToCartElement) {
        var addToCartElement = event.target.closest('button[id^="addToCart-"]');
        var productElement = addToCartElement.closest('.row.p-2.pt-4');
        var productID = productElement.querySelector('.text-center.sku.catalog-sku > span').textContent;
        var productName = productElement.querySelector('.catalog-item-name a[id^="product-"] > strong').textContent.trim();
        var productBrand = productElement.querySelector(".text-center.sku.catalog-sku > div").textContent.trim();
        var productPriceElement = productElement.querySelector('.normal-price');
        var productPrice = productPriceElement ? productPriceElement.textContent.replace(/[^0-9.]/g, '') : null;
        var suggestedQuantityElement = productElement.querySelector('.suggested-qty');
        var suggestedQuantity = suggestedQuantityElement ? suggestedQuantityElement.textContent : null;
        var selectedQuantityElement = productElement.querySelector('.cart-input');
        var selectedQuantity = selectedQuantityElement ? selectedQuantityElement.value : null;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'add_to_cart',
          ecommerce: {
            add: {
              products: [{
                id: productID,
                name: productName,
                brand: productBrand,
                price: productPrice,
                suggested_quantity: suggestedQuantity,
                selected_quantity: selectedQuantity
              }]
            }
          },
          'id': productID,
          'name': productName,
          'brand': productBrand,
          'price': productPrice,
          'suggested_quantity': suggestedQuantity,
          'selected_quantity': selectedQuantity,
          page_location: window.location.href
        });
      } else if (generateOrderButtonElement) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'generate_order',
          page_location: window.location.href
        });
      } else if (checkoutOrderButtonElement) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'order_placed',
          page_location: window.location.href
        });
      }
    }
    
    function handleCartButtonClick(event) {
      var cartButtonElement = event.target.closest('#headerbar-shoppingCart, .btn-main.cart-button');
      if (cartButtonElement) {
        // Delay the check for the modal to give it time to appear
        setTimeout(function() {
          var modalElement = document.querySelector('.modal-minorder');
          if (modalElement) {
            var minimumQuantityElement = modalElement.querySelector('.modal-minorder-body h2 b');
            var minimumQuantity = minimumQuantityElement ? parseInt(minimumQuantityElement.textContent.replace(/[^0-9]/g, ''), 10) : 0;

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'minimum_quantity_not_met',
              minimum_quantity: minimumQuantity,
              page_location: window.location.href
            });
          }
        }, 1500);  // Adjust this delay as needed
      }
    }
    
     function handlePopup(event) {
      setTimeout(function() {
        var popupElement = document.querySelector('.noty_message');
        if (popupElement) {
          var popupTextElement = popupElement.querySelector('.noty_text');
          var popupText = popupTextElement ? popupTextElement.textContent : '';

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'popup_appeared',
            popup_text: popupText,
            page_location: window.location.href
          });
        }
      }, 2500);  // Adjust this delay as needed
    }
var formSubmitted = false;

    function handleFormSubmit(event) {
      var contactFormElement = event.target.closest('form[name="contact"]');
      if (contactFormElement) {
        var nameElement = contactFormElement.querySelector('input[name="name"]');
        var emailElement = contactFormElement.querySelector('input[name="email"]');
        var phoneElement = contactFormElement.querySelector('input[name="phone"]');
        var messageElement = contactFormElement.querySelector('textarea[name="message"]');
        
        formSubmitted = true;

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'form_submit',
          form_name: 'contact',
          form_fields: {
            name: nameElement ? nameElement.value : '',
            email: emailElement ? emailElement.value : '',
            phone: phoneElement ? phoneElement.value : '',
            message: messageElement ? messageElement.value : ''
          },
          page_location: window.location.href
        });
      }
    }

    function handleFormAbandon(event) {
      if (!formSubmitted) {
        var contactFormElement = document.querySelector('form[name="contact"]');
        if (contactFormElement) {
          var nameElement = contactFormElement.querySelector('input[name="name"]');
          var emailElement = contactFormElement.querySelector('input[name="email"]');
          var phoneElement = contactFormElement.querySelector('input[name="phone"]');
          var messageElement = contactFormElement.querySelector('textarea[name="message"]');

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'partial_form',
            form_name: 'contact',
            form_fields: {
              name: nameElement ? nameElement.value : '',
              email: emailElement ? emailElement.value : '',
              phone: phoneElement ? phoneElement.value : '',
              message: messageElement ? messageElement.value : ''
            },
            page_location: window.location.href
          });
        }
      }
    } 
    
    function handleNavButtonClick(event) {
  var navButtonElement = event.target.closest("[id^='navButton-']");
  if (navButtonElement) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'nav_button_click',
      button_id: navButtonElement.id,
      page_location: window.location.href
    });
  }
}

  function handleBannerClick(event) {
    var bannerElement = event.target.closest('.home-item');
    if (bannerElement) {
      var allBanners = Array.from(document.querySelectorAll('.home-item'));
      var bannerIndex = allBanners.indexOf(bannerElement) + 1; // 1-indexed

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'banner_click',
        banner_index: bannerIndex,
        page_location: window.location.href
      });
    }
  }
  function handleButtonClicks(event) {
  var buttonElement = event.target.closest(".btn.btn-block.catalog-link, .btn.btn-block.lists-link, .categories-carousel .category-item a");
  if (buttonElement) {
    var eventId;
    if (buttonElement.matches(".btn.btn-block.catalog-link")) {
      eventId = "catalog_link_click";
    } else if (buttonElement.matches(".btn.btn-block.lists-link")) {
      eventId = "lists_link_click";
    } else if (buttonElement.matches(".categories-carousel .category-item a")) {
      eventId = "category_item_click";
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventId,
      button_id: buttonElement.id || buttonElement.getAttribute('go-click') || buttonElement.closest('.category-item').querySelector('.category-name-container').textContent,
      page_location: window.location.href
    });
  }
}
function handleFooterLinkClicks(event) {
  var linkElement = event.target.closest(".footer-links a");
  if (linkElement) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "footer_link_click",
      link_href: linkElement.getAttribute('go-click'),
      page_location: window.location.href
    });
  }
}

    document.addEventListener("click", handleButtonClicks);
    document.addEventListener("click", handleNavButtonClick);
    document.addEventListener("click", handleBannerClick);
    document.addEventListener("submit", handleFormSubmit);
    window.addEventListener("beforeunload", handleFormAbandon);
    document.addEventListener("submit", handleSearch);
    document.addEventListener("click", handleClick);
    document.addEventListener("click", handleCartButtonClick);
    document.addEventListener("click", handlePopup);
    document.addEventListener("click", handleFooterLinkClicks);

  })();
</script>






