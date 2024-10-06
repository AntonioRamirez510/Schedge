import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/appointments', appointment)
      .then(response => {
        console.log('Appointment scheduled:', response.data);
      })
      .catch(error => {
        console.error('There was an error scheduling the appointment!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={appointment.name}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        value={appointment.email}
        required
      />
      <input
        type="text"
        name="service"
        placeholder="Service Required"
        onChange={handleChange}
        value={appointment.service}
        required
      />
      <input
        type="datetime-local"
        name="date"
        onChange={handleChange}
        value={appointment.date}
        required
      />
      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;
