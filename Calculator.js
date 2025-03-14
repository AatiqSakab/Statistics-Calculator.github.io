class NumberList {
    constructor(numbers) {
      this.numbers = numbers;
    }
  
    //Calculate Mean Function
    mean() {
      const sum = this.numbers.reduce((a, b) => a + b, 0);
      return sum / this.numbers.length;
    }
    //Calculate Variance function
    variance() {
      const meanValue = this.mean();
      const sumOfSquares = this.numbers.reduce((a, b) => a + ((b - meanValue)** 2), 0);
      return sumOfSquares / this.numbers.length;
    }
    //Calculate std Deviation funtion
    stdDeviation() {
      return Math.sqrt(this.variance());
    }
  }
  //Validate Input function with error message
  function checkInput() {
    const inputArray = document.getElementById("numberInput").value.split(/\s+/);
    
    if (inputArray.some(isNaN)) {
      document.getElementById("error").style.display = "block";
      document.getElementById("result").style.display = "none";
    } else {
      return inputArray.map(Number);
    }
  }

  //Display Result function
  function result(message) {
    const answer = document.getElementById("result");
    answer.textContent = message;
    answer.style.display = "block";
    document.getElementById("error").style.display = "none";
  }

  //Button output
  function calculateMean() {
      const numbers = checkInput();
      if (numbers) {
        const numberList = new NumberList(numbers);
        result("Mean Results : " + numberList.mean());
    }
  }
  //Button output
  function calculateVariance() {
    const numbers = checkInput();
    if (numbers) {
      const numberList = new NumberList(numbers);
      result("Variance Results : " + numberList.variance());
    }
  }
  //Button output
  function calculateStDeviation() {
    const numbers = checkInput();
    if (numbers) {
      const numberList = new NumberList(numbers);
      result("Standard Deviation Results : " + numberList.stdDeviation());  
    }
  }
  