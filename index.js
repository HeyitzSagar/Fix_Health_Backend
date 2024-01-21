const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// const doctors = [
//   { name: 'Dr. Smith', expertise: 'Orthopedic', city: 'New York' },
//   { name: 'Dr. Johnson', expertise: 'Sports Medicine', city: 'Los Angeles' },
//   // Add more doctors as needed
// ];
const doctors = [
  { name: 'Dr. Sharma', expertise: 'Cardiology', city: 'Delhi' },
  { name: 'Dr. Patel', expertise: 'Neurology', city: 'Mumbai' },
  { name: 'Dr. Reddy', expertise: 'Dermatology', city: 'Hyderabad' },
  { name: 'Dr. Kumar', expertise: 'Gastroenterology', city: 'Chennai' },
  { name: 'Dr. Verma', expertise: 'Ophthalmology', city: 'Bangalore' },
  { name: 'Dr. Singh', expertise: 'Psychiatry', city: 'Kolkata' },
  { name: 'Dr. Mishra', expertise: 'ENT', city: 'Pune' },
  { name: 'Dr. Tiwari', expertise: 'Pediatrics', city: 'Jaipur' },
  { name: 'Dr. Joshi', expertise: 'Obstetrics and Gynecology', city: 'Ahmedabad' },
  { name: 'Dr. Bansal', expertise: 'Urology', city: 'Lucknow' },
  // Add more doctors as needed
];


app.get('/api/doctors', (req, res) => {
  const { city } = req.query;
  const filteredDoctors = city ? doctors.filter(doctor => doctor.city === city) : doctors;
  res.json(filteredDoctors);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
