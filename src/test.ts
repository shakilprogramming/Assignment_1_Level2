

//Problem 1
function formatString(input: string, toUpper?: boolean): string {
 
    return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
  }

//problem2

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    
    return items.filter(item => item.rating >= 4);
  }
  
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  const highRatedBooks = filterByRating(books);


 //prolem3
function concatenateArrays<T>(...arrays: T[][]): T[] {
   
    return ([] as T[]).concat(...arrays);
  }
 //problem4
class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  
 
  const myCar = new Car("Toyota", 2020, "Corolla");

//problem5
function processValue(value: string | number): number {
    // Check if the value is a string
    if (typeof value === "string") {
      
      return value.length;
    } else {
      
      return value * 2;
    }
  }
  
  //problem6
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
      return null;
    }
  
   
    return products.reduce((mostExpensive, currentProduct) => {
      return currentProduct.price > mostExpensive.price ? currentProduct : mostExpensive;
    }, products[0]);
  }
  
 
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  console.log(getMostExpensiveProduct(products));  

  
  const emptyArray: Product[] = [];
  console.log(getMostExpensiveProduct(emptyArray));  

  
  const singleProduct = [{ name: "Keyboard", price: 100 }];
 //Problem7
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  

  function getDayType(day: Day): string {
    
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }


//Problem8
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000); 
    });
  }
  