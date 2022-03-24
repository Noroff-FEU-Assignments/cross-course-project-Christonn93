function contentFactory(tagName, id) {
  const container = document.querySelector(tagName);
  const form = document.createElement("form");
  container.append(form);
  form.classList.add("payment-form");
  form.id = id;
  form.action = "#";
  form.method = "post";

  return container;
}

export function selectPayment() {
  document.addEventListener("click", (e) => {
    if (e.target === document.querySelector("#visa")) {
      contentFactory(".payment-container", "visa-form");

      const visa = document.querySelector("#visa-form");
      visa.innerHTML = `
        <i class="fa-brands fa-cc-visa"></i>
        <input id="name" type="text" inputmethod="text" placeholder="Cardholder's name" class="payment-input" />
        <div id="date">
          <input type="numeric" inputmethod="numeric" placeholder="mm" class="payment-input" />
          <span class="space"> / </span>
          <input type="numeric" inputmethod="numeric" placeholder="yyyy" class="payment-input" />
        </div>
        <input id="cvv" type="text" inputmethod="numeric" placeholder="CVV" class="payment-input" />
        <button id="button">Pay</button>`;
    }

    if (e.target === document.querySelector("#mastercard")) {
      contentFactory(".payment-container", "mastercard-form");

      const mastercard = document.querySelector("#mastercard-form");
      mastercard.innerHTML = `
        <i class="fa-brands fa-cc-mastercard"></i>
        <input id="name" type="text" inputmethod="text" placeholder="Cardholder's name" class="payment-input" />
        <div id="date">
          <input type="numeric" inputmethod="numeric" placeholder="mm" class="payment-input" />
          <span class="space"> / </span>
          <input type="numeric" inputmethod="numeric" placeholder="yyyy" class="payment-input" />
        </div>
        <input id="cvv" type="text" inputmethod="numeric" placeholder="CVV" class="payment-input" />
        <button id="button">Pay</button>`;
    }

    if (e.target === document.querySelector("#paypal")) {
      contentFactory(".payment-container", "paypal-form");

      const paypal = document.querySelector("#paypal-form");
      paypal.innerHTML = `
        <i class="fa-brands fa-cc-paypal"></i>
        <input id="name" type="text" inputmethod="text" placeholder="Cardholder's name" class="payment-input" />
        <div id="date">
          <input type="numeric" inputmethod="numeric" placeholder="mm" class="payment-input" />
          <span class="space"> / </span>
          <input type="numeric" inputmethod="numeric" placeholder="yyyy" class="payment-input" />
        </div>
        <input id="cvv" type="text" inputmethod="numeric" placeholder="CVV" class="payment-input" />
        <button id="button">Pay</button>`;
    }

    if (e.target === document.querySelector("#bill")) {
      contentFactory(".payment-container", "billing-form");

      const billing = document.querySelector("#billing-form");
      billing.innerHTML = `
        <i class="fa-solid fa-file-invoice-dollar"></i>
        <input type="text" name="firstName" class="payment-input" inputmethod="text" placeholder="First Name" />
        <input type="text" name="lastName" class="payment-input" inputmethod="text" placeholder="Last Name" />
        <input type="text" name="adress" class="payment-input" inputmethod="text" placeholder="Adress" />
        <input type="numeric" name="zip" class="payment-input" inputmethod="numeric" placeholder="Zip-code" />
        <input type="text" name="city" class="payment-input" inputmethod="text" placeholder="City name" />
        <button id="button">Pay</button>`;
    }
  });
}
