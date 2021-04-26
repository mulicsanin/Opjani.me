import React from 'react';

//icons
import { IconContext } from 'react-icons/lib';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';

//image
//mport { yugRight } from '../images/yugRight.png';

class Location extends React.Component {
  render() {
    return (
      <section id='Location' className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-12-mobile is-6-desktop loc'>
              <IconContext.Provider value={{ color: '#FFFFFF', size: '2rem' }}>
                <div className='loc-icon'>
                  <IoLocation className='loc-icon-child' />
                </div>
              </IconContext.Provider>
              <div className='loc-text'>
                <p className='loc-title'>
                  Gdje smo vam {'  '}
                  <span className='loc-title-span'>dostupni?</span>
                </p>
                <p className='loc-t'>
                  Trenutno u <span className='loc-t-span'>Podgorici</span>, a
                  uskoro i <strong>širom Crne Gore</strong>
                </p>
                <p className='loc-one'>Zapratite nas na socijalnim medijima:</p>
                <div className='loc-btn'>
                  <IconContext.Provider
                    value={{
                      color: '#c4e7f0',
                      size: '1.5rem',
                    }}>
                    <button className='social-icon'>
                      <FaFacebook /> {'  '}Facebook
                    </button>
                    <button className='social-icon'>
                      <FaInstagram /> {'  '}Instagram
                    </button>
                    <button className='social-icon'>
                      <FaTwitter />
                      {'  '} Twitter
                    </button>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            <div className='column is-hidden-mobile is-hidden-tablet is-6-desktop'></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Location;
