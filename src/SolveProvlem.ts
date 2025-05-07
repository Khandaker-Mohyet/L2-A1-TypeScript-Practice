function formatString(input: string, toUpper?: boolean): string{
  if (toUpper === true || toUpper === undefined) {
    // console.log(input.toUpperCase()) 
    return input.toUpperCase()
  } else {
    // console.log(input.toLowerCase()) 
    return input.toLowerCase()
  }
}

formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
  const findData = items.filter(item => item.rating >= 4)
  // console.log(findData)
  return findData
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

filterByRating(books); 


function concatenateArrays<T>(...arrays: T[][]): T[]{
  const result = arrays.reduce((acc, curr) => acc.concat(curr), []);
  // console.log(result)
  return result

}

concatenateArrays(["a", "b"], ["c"]);      
concatenateArrays([1, 2], [3, 4], [5]);    


class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    // console.log(`"Make: ${this.make}, Year: ${this.year}"`)
  }
}

class Car extends Vehicle{
  private model: string;

  constructor(make: string, year: number,model: string) {
    super(make, year)
    this.model = model;
  }

  getModel() {
    // console.log(`"Model: ${this.model}"`)
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();  
myCar.getModel();


function processValue(value: string | number): number{
  if (typeof value === "string") {
    const str = value.length;
    // console.log(str)
    return str
  } else if (typeof value === "number") {
    const num = value * 2;
    // console.log(num)
    return num
  } 
}

processValue("hello"); // Output: 5
processValue(10);      // Output: 20