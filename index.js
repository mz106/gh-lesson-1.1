const fruitArr = ["apple", "pear"];

const printFruit = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "apple") {
      console.log("I like apples");
    } else {
      console.log(`I don't like ${arr[i]}s`);
    }
  }
};

printFruit(fruitArr);
