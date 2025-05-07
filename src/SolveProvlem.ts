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