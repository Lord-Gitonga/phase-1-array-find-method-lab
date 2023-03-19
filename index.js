// code your solution here


const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
]

const superBowlWin = record.find(record => record.year==="2015");
console.log(superBowlWin);

