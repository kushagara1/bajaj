const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.post('/bfhl', (req, res) => {
  // Handle the POST request here
  const body = req.body;
  
  // Extract the required data from the request body
  const userId = `${body.full_name.replace(' ', '_')}_${body.dob}`;
  const collegeEmail = body.college_email;
  const collegeRollNumber = body.college_roll_number;
  const numbersArray = body.numbers;
  const alphabetsArray = body.alphabets;

  // Create the response JSON
  const response = {
    user_id: userId,
    is_success: true,
    college_email: collegeEmail,
    college_roll_number: collegeRollNumber,
    numbers_array: numbersArray,
    alphabets_array: alphabetsArray
  };
  
  // Send the response
  res.json(response);
});

app.get('/bfhl', (req, res) => {
  // Handle the GET request here

  // Create the response JSON
  const response = {
    operation_code: 1
  };
  
  // Send the response
  res.status(200).json(response);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

