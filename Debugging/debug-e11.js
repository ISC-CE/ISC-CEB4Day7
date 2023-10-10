// Incorrect Code:
async function fetchData() {
    let response = fetch('https://api.example.com/data');
    let data = response.json();
    console.log(data);
  }
  fetchData();
  
  // Issue: Missing 'await' keywords for asynchronous operations.
  