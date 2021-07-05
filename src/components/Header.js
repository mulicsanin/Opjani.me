import React from 'react';

import NavBar from './NavBar';
import Logo from '../images/Logo.png';

//Icons
import { FaApple, FaGooglePlay, FaAndroid } from 'react-icons/fa';

import phone1 from '../images/iPhone_1.png';
import phone2 from '../images/iPhone_2.png';
import phone3 from '../images/iPhone_3.png';
import phone4 from '../images/iPhone_4.png';

class Header extends React.Component {
  render() {
    return (
      <section id='Header' className='section'>
        <div className='container'>
          <NavBar Logo={Logo} google={FaGooglePlay} apple={FaApple} />
          <div className='header-text'>
            <p className='header-one'>
              Provedite više vremena uživajući u trenutku.
            </p>
            <p className='header-title'>
              Dostava pića{' '}
              <span className='header-title-span'>za svaku priliku!</span>
            </p>
            <p className='header-subtitle'>
              Pivo, vino i alkoholna pića isporučuju se za{' '}
              <strong>manje od 60 minuta.</strong>
            </p>
          </div>
          <div className='phones'>
            <img src={phone1} className='phone1' alt='phone1' />
            <img src={phone2} className='phone2' alt='phone2' />
            <img src={phone3} className='phone3' alt='phone3' />
            <img src={phone4} className='phone4' alt='phone4' />
            <div className='preuzmiApk'>
              <div className='preuzmi-btn'>
                <p>
                  <FaApple /> Preuzmi Aplikaciju za iOS
                </p>
              </div>
              <div className='preuzmi-btn'>
                <p>
                  <FaAndroid /> Preuzmi aplikaciju za Android
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
