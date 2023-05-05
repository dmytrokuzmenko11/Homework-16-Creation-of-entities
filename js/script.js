
// 1.

class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getManInformation() {
        return console.log(this.name, this.age)
    }
}

// 2.

class Car extends Man {
    constructor(name, age, brand, model, year, number) {
        super(name, age);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }
    ageVerification() {
        if (age >= 18) {
            return this.age = age;
        }
        return console.log('The age of the owner is less than 18 years');
    }
    getAllInformation() {
        console.log('Information about the car: ' + brand, model, year, number);
        console.log('Information about the owner: ' + super.getManInformation());
    }
}

// 3. 

let user1 = new Car('Dmytro', '28', 'Mitsubishi', 'Lancer', '2015', 'АА0000ВВ');

document.write(`
    <h2>USER 1</h2>
    <h4>Owner:</h4> 
    Name: ${user1.name} <br>
    Age: ${user1.age}
    <h4>Car:</h4> 
    Brand: ${user1.brand} <br>
    Model: ${user1.model} <br>
    Year: ${user1.year} <br>
    Number: ${user1.number} <br>
    <br><br>
`);

let user2 = new Car('Andry', '25', 'Audi', 'TT', '2008', 'BB1111AA');

document.write(`
    <h2>USER 2</h2>
    <h4>Owner:</h4> 
    Name: ${user2.name} <br>
    Age: ${user2.age}
    <h4>Car:</h4> 
    Brand: ${user2.brand} <br>
    Model: ${user2.model} <br>
    Year: ${user2.year} <br>
    Number: ${user2.number} <br>
`);