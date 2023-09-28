class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types of attributes during object creation
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Store attributes in underscored versions
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    // Verify the type of the new name
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = newName;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(newLength) {
    // Verify the type of the new length
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = newLength;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(newStudents) {
    // Verify the type and content of the new students array
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._students = newStudents;
  }
}

export default HolbertonCourse;
