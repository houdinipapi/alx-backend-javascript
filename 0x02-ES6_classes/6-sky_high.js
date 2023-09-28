import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the constructor of the parent class
    super(sqft);

    // Store attributes in underscored versions
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
