import React from 'react';
import letras from '../images/logo_completo.png';
import '../css/banner.css'; // Import the CSS file
    //<div className="banner-blue">
    //</div>
function Banner() {
  return (
    <div className="banner-container">
    <div className="banner-white">
      <img src={letras} alt="Logo" className="logo" />
    </div>
    </div>

  );
};

export {Banner};
