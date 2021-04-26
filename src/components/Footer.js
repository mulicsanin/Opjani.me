import React from 'react';

//icons
import { IconContext } from 'react-icons/lib';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

//image
import Logo from '../images/Logo.png';

class Footer extends React.Component {
  render() {
    return (
      <section id='Footer' className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <img src={Logo} alt='Logo' />
              <p className='footer-text'>
                2021 Copyright GALL. All rights reserved.
              </p>
              <p className='footer-text'>
                Design & development by{' '}
                <span className='footer-text-span'>EPIFRONT</span>
              </p>
              <div className='footer-icons'>
                <IconContext.Provider
                  value={{ color: '#808080', size: '1.5rem' }}>
                  <FaFacebook />
                  <FaInstagram />
                  <FaTwitter />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
