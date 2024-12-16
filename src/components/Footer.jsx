import React from 'react';
import '../components/css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Envio</h3>
          <p>
            Envio — языковая школа в Бишкеке, предлагающая курсы английского языка с
            индивидуальным подходом. Улучшайте свои навыки с нами! 
            See you at Envio!
          </p>
        </div>

        

        <div className="footer-section contact">
          <h3>Мы на карте</h3>
          <a href="https://go.2gis.com/ahw5e" className='map'><p>2Gis</p></a>
        </div>

        <div className="footer-section social">
          <h3>Мы в соцсетях</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/envio_bishkek/"><img src="https://e7.pngegg.com/pngimages/623/523/png-clipart-instagram-logo-instagram-facebook-inc-youtube-organization-instagram-purple-logo-thumbnail.png" alt="" className='inst-logo' /></a>
            <a href="http://wa.me/996551887785"><img src="https://foni.papik.pro/uploads/posts/2024-10/foni-papik-pro-w8uk-p-kartinki-whatsapp-logo-na-prozrachnom-fone-4.png" alt="" className='whatsapp-logo' /></a>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Envio. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
