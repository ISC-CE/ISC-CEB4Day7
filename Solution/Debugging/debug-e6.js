/*
Concept Tutorial:
In JavaScript, a common mistake is to put a semicolon (;) at the end of a loop statement.
This can cause the loop to not execute its body.
*/

// Corrected Code:
for(let i = 0; i < 10; i++)  // Removed the semicolon
{
  console.log(i);  // Now this statement will execute with each iteration of the loop
}
