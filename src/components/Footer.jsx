import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <br />
      <h3>Redes Sociales</h3>
      <hr />
      <div class="contacto">
        <div class="item-contacto">
        <a href="https://www.facebook.com/share/1APbLpE56f/" target="_blank">
          <i class="bi bi-facebook"></i></a>
          <p>/Karen Herrera</p>
        </div>
        <div class="item-contacto">
        <a href="https://www.instagram.com/karenherrera.bd?igsh=MW9ncGgxNWRqeDhoNg==" target="_blank">
          <i class="bi bi-instagram"></i></a>
          <p>@karenherrera.bd</p>
        </div>
        <div class="item-contacto">
        <a href="https://wa.me/543813541077" target="_blank">
          <i class="bi bi-whatsapp"></i></a>
          <p>3813541077</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
