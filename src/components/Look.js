import React from 'react';
import phoneLook from '../images/section_2_iPhones.png';

//icons
import { IconContext } from 'react-icons/lib';
import { GiClick } from 'react-icons/gi';

class Look extends React.Component {
  render() {
    return (
      <div id='Look' className='section'>
        <div className='container'>
          <div className='columns flex-reverse'>
            <div className='column look-left'>
              <img src={phoneLook} alt='Apk look' />
            </div>
            <div className='column look-right'>
              <IconContext.Provider value={{ color: '#ffffff', size: '30px' }}>
                <div className='look-icon'>
                  <GiClick />
                </div>
              </IconContext.Provider>

              <div className='look-text'>
                <p className='look-title'>
                  Jednostavna <br className='br' />
                  <span className='look-title-span'>narudžba i plaćanje</span>
                </p>
                <p className='look-t'>
                  <strong>Opjani.me</strong> vam omogućuje da naručite i platite
                  piće na svojim omiljenim mjestima i događajima bez propuštanja
                  zabave.
                </p>
                <p className='look-t'>
                  <strong>
                    Nema više čekanja u dugim redovima. Naručite sa vašeg
                    telefona i dobit ćete obavijest kada narudžba bude spremna
                    za dostavu.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Look;
