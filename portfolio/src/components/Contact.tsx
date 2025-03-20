'use client'
import React, { useState } from 'react';
import { TextField,Box, Snackbar } from '@mui/material';

const Contact = () => {
  // States for form fields and form submission
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send email or store form data)
    setOpenSnackbar(true);  // Open the snackbar to show a success message
  };

  return (
    <section className="w-full min-h-[70vh] lg:h-[70vh] lg:p-10 flex flex-col items-center mt-10">
      <p className="text-[5vh] text-[#B6B6B6] w-full">Contact Me</p>
      <form onSubmit={handleSubmit} className="w-full  min-h-[80vh] flex flex-col gap-4 mt-10 space-y-4">
        {/* Name Input */}
        <TextField
          label="Full Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-white"
          sx={{
            '& .MuiInputLabel-root': {
              color: '#B6B6B6', // Label color
            },
            '& .MuiOutlinedInput-root': {
              border: '1px solid #B6B6B6', // Border color
            },
            '& .MuiOutlinedInput-input': {
              color: '#B6B6B6', // Input text color
            },
            borderRadius: '5px',
          }}
        />
        
        {/* Email Input */}
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-white"
          sx={{
            '& .MuiInputLabel-root': {
              color: '#B6B6B6', // Label color
            },
            '& .MuiOutlinedInput-root': {
              border: '1px solid #B6B6B6', // Border color
            },
            '& .MuiOutlinedInput-input': {
              color: '#B6B6B6', // Input text color
            },
            borderRadius: '5px',
          }}
        />

        {/* Message Input */}
        <TextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="text-white"
          sx={{
            '& .MuiInputLabel-root': {
              color: '#B6B6B6', // Label color
            },
            '& .MuiOutlinedInput-root': {
              border: '1px solid #B6B6B6', // Border color
            },
            '& .MuiOutlinedInput-input': {
              color: '#B6B6B6', // Input text color
            },
            borderRadius: '5px',
          }}
        />

        {/* Submit Button */}
        <Box textAlign="center">
          <button
            type="submit"
        className=" text-white px-4 min-w-[180px] min-h-[50px] cursor-pointer rounded-full bg-[#171717] flex gap-2 w-fit justify-center items-center mt-4"
        style={{ boxShadow: "0px 0px 9px 2px rgba(34, 34, 34, 0.5)" }}
      >
        Send Message
      </button>
        </Box>
      </form>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Message sent successfully!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
      
    </section>
  );
};

export default Contact;
