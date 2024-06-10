import React, {  useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function Change_Email(){

  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('Email='));
    const email = cookie.split('=')[1];
    if (cookie) {
      const email = cookie.split('=')[1];
      // Now you can use the email value
      console.log(email);
    } else {
      // Handle the case when the cookie is not found
      throw new Error('Email cookie not found');
    }

    const cookie1 = document.cookie.split('; ')
    .find((row) => row.startsWith('isAuthenticated='));
    const utente_email = cookie1.split(',')[1];
    if (cookie1) {
      const isAuthenticated = cookie1.split('=')[1];
      

    } else {
      // Handle the case when the cookie is not found
      throw new Error('Email cookie not found');
    }


  const handleNew = async () => {
    let emailupdate = 1;

    console.log(utente_email)
    console.log(email)

    document.cookie = 'isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    document.cookie = `isAuthenticated=true,${email}; max-age=${60 * 60 * 24 * 7}; path=/`;

    try {
      const response = await fetch('http://localhost:3001/utenti', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ utente_email, email, emailupdate }),
      });


      window.location.href = "/Profile_Account";

    
  } catch (error) {
    console.error(error);
    alert('An error occurred');
  }
  }

  useEffect(() => {
    handleNew();
    
    
  }, []);

    return(
        <>
        
        </>
    )
}


export default Change_Email;