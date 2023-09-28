class Currency {
  constructor(code, name) {
    // Store attributes in underscored versions
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    this._code = newCode;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  // Method to display the currency in the specified format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
