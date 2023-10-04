// Define the Teacher class
class Teacher {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly fullTimeEmployee: boolean;
  private readonly yearsOfExperience?: number;
  private readonly location: string;

  constructor({
    firstName,
    lastName,
    fullTimeEmployee,
    yearsOfExperience,
    location,
    ...additionalAttributes
  }: {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow additional attributes
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;

    // Assign additional attributes dynamically
    for (const key in additionalAttributes) {
      this[key] = additionalAttributes[key];
    }
  }
}

// Create a Teacher object
const teacher3 = new Teacher({
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Adding an additional attribute
});

console.log(teacher3);
