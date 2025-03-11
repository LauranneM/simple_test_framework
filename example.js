import { test, assertEqual } from "./test.js";

function fizzbuzz(n) {
  const result = [];
  let i = 0;
  while (i <= n) {
    let string = "";
    if (i % 3 === 0) {
      string = "Fizz";
    } else if (i % 5 === 0) {
      string = "Buzz";
    }
    result.push(string || String(i));
    i++;
  }
  return result;
}
function fizzbuzz2(n) {
  const result = [];
  let i = 0;
  while (i <= n) {
    let string = "";
    if (i % 3 === 0) {
      string += "Fizz";
    }
    if (i % 5 === 0) {
      string += "Buzz";
    }
    result.push(string || String(i));
    i++;
  }
  return result;
}

test("FizzBuzz test", () => {
  const result = fizzbuzz(100);
  assertEqual("Fizz", result[0]);
  assertEqual("1", result[1]);
  assertEqual("2", result[2]);
  assertEqual("4", result[4]);
  assertEqual("Fizz", result[3]);
  assertEqual("Buzz", result[5]);
  assertEqual("Fizz", result[15]);
});
test("FizzBuzz2 test", () => {
  const result = fizzbuzz2(100);
  assertEqual("FizzBuzz", result[0]);
  assertEqual("1", result[1]);
  assertEqual("2", result[2]);
  assertEqual("4", result[4]);
  assertEqual("Fizz", result[3]);
  assertEqual("Buzz", result[5]);
  assertEqual("FizzBuzz", result[15]);
});
