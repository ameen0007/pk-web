import React from 'react'

export const Section5 = () => {
    const handleCallButtonClick = () => {
        window.location.href = 'tel:+918848683518'; // Replace +1234567890 with your phone number
      };
    
      const handleEmailButtonClick = () => {
        window.location.href = 'mailto:ameensirbay@gmail.com.com'; // Replace example@example.com with your email address
      };
      const handleWhatsAppButtonClick = () => {
        window.location.href = "https://wa.me/918848683518/?text=Hello! We're excited to connect with you and provide exceptional service.";
      };
  return (
    <> 
    <div>
        <div>
            <h1>contact us</h1>
        </div>
    </div>
    <div>
        <div>
            <button onClick={handleCallButtonClick}> call</button>
        </div>
        <div><button  onClick={handleEmailButtonClick} >email</button></div>
        <div  ><button onClick={handleWhatsAppButtonClick}>WhatsApp</button></div>
    </div>
    </>
   
  )
}
