class Airport {
  constructor(name, code) {
    // Store attributes in underscored versions
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}

export default Airport;
