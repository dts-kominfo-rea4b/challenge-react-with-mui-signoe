// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div>
      <h1 style={{ color:'#236AB9'}}>Call a Friend</h1>
      <p style={{wordSpacing:4, letterSpacing:2}}>Your friendly contact app</p>
      <br></br>
    </div>
  );
};

export default Header;
