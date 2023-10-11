// Incorrect Code:
async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  }
  fetchData();
  
  // Issue: Missing 'await' keywords for asynchronous operations.
  