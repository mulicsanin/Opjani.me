import React from 'react';

//icons
import { IconContext } from 'react-icons/lib';
import { FaGlassCheers, FaApple, FaAndroid } from 'react-icons/fa';

//image
import preuzmi from '../images/preuzmi.png';

class Download extends React.Component {
  render() {
    return (
      <section id='Download' className='section'>
        <div className='container'>
          <div className='column is-12 preuzmi'>
            <IconContext.Provider value={{ size: '2rem' }}>
              <div className='download-icon'>
                <FaGlassCheers className='download-icon-child' />
              </div>
            </IconContext.Provider>
            <div className='download-text'>
              <p className='download-title'>
                Preuzmi{'  '}{' '}
                <span className='download-title-span'>OPJANI.ME</span>
                {'  '}
                aplikaciju
              </p>
              <p className='download-subtitle'>
                Htjeli smo napisati sve razloge zašto, ali netko nam je dao čašu
                vina koju nismo mogli propustiti.
                <br />
                <br />
              </p>
              <p className='download-subtitle'>
                <strong>
                  Ima super stvari,{' '}
                  <span style={{ color: '#FFAE35' }}>obećavamo</span>. Preuzmite
                  sada...
                </strong>
              </p>
            </div>
            <div className='phone'>
              <img src={preuzmi} alt='preuzmi' />
              <div className='preuzmiApk'>
                <button className='preuzmi-btn'>
                  <p>
                    <FaApple /> Preuzmi Aplikaciju za iOS
                  </p>
                </button>
                <button className='preuzmi-btn'>
                  <p>
                    <FaAndroid /> Preuzmi aplikaciju za Android
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Download;
