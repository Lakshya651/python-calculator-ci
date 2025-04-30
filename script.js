function calculate(operation) {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    let result;
  
    try {
      switch (operation) {
        case "add":
          result = a + b;
          break;
        case "subtract":
          result = a - b;
          break;
        case "multiply":
          result = a * b;
          break;
        case "divide":
          if (b === 0) throw new Error("Cannot divide by zero");
          result = a / b;
          break;
      }
      document.getElementById("result").innerText = `Result: ${result}`;
    } catch (err) {
      document.getElementById("result").innerText = `Error: ${err.message}`;
    }
  }
  