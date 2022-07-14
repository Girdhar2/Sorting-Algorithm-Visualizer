import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/girdhar-mundra-5b4576225/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Girdhar Mundra
        </a>
      </section>
    </footer>
  );
};

export default Footer;
