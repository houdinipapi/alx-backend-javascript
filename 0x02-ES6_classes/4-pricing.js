import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    // Store attributes in underscored versions
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(newCurrency) {
    if (newCurrency instanceof Currency) this._currency = newCurrency;
  }

  // Method to display the full price in the specified format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert the price based on a conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;
