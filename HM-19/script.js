class People {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  
  class Apartment {
    constructor() {
      this.residents = [];
    }
  
    addResident(People) {
      this.residents.push(People);
    }
  }
  
  class House {
    constructor(maxApartments) {
      this.apartments = [];
      this.maxApartments = maxApartments;
    }
  
    addApartment(apartment) {
      if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
      } else {
        console.log("Максимальна кількість квартир досягнута.");
      }
    }
  }

  
  const human1 = new People("Іванов Іван", "чоловіча");
const human2 = new People("Петров Петро", "чоловіча");
const human3 = new People("Насідка Ліза", "жіноча");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(human1);
apartment1.addResident(human2);
apartment2.addResident(human3);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);

const human4 = new People("Деміч Андрій", "чоловіча");
const human5 = new People("Степанова Даша", "жіноча");

const apartment3 = new Apartment();
apartment3.addResident(human4);

const apartment4 = new Apartment();
apartment4.addResident(human5);

house.addApartment(apartment3);
house.addApartment(apartment4);

console.log(house);
