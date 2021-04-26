import React from 'react';

//img
import orderRight from '../images/order_right.png';
import orderLeft from '../images/order_left.png';

//icons
import { IconContext } from 'react-icons/lib';
import { IoAlarm } from 'react-icons/io5';
import { GiPartyPopper } from 'react-icons/gi';
import { FaApple, FaAndroid } from 'react-icons/fa';

const columnStyle = {
  marginTop: '1.5rem',
};

class Order extends React.Component {
  render() {
    return (
      <section id='Order' className='section'>
        <div className='container'>
          <div className='columns is-variable is-1-mobile is-6-desktop'>
            {/* topLeft */}
            <div className='column is-12-mobile is-6-desktop order'>
              <div className='orangeBg'>
                <IconContext.Provider
                  value={{ color: '#FFFFFF', size: '30px' }}>
                  <div className='order-icon'>
                    <IoAlarm className='order-icon-child' />
                  </div>
                </IconContext.Provider>

                <div className='order-text'>
                  <p className='order-title'>
                    Zakažite narudžbu <br className='br' />
                    <span className='order-title-span'>unaprijed</span>
                  </p>
                  <p className='order-subtitle'>
                    Odaberite datum i vrijeme za koje želite da narudžba bude
                    dostavljena.
                  </p>
                  <p className='order-t'>
                    Usluge dostave alkohola jedan su od načina da vaša kolekcija
                    ostane obogaćena{' '}
                    <strong>dok vježbate socijalno distanciranje.</strong>{' '}
                    <br /> <br /> Dakle, zakažite narudžbu vaših omiljenih pića,
                    a zatim se okupite s prijateljima putem Zooma ili FaceTimea
                    za <strong>virtualni happy hour.</strong>
                  </p>
                </div>
              </div>
            </div>
            {/* topRight */}
            <div className='column is-12-mobile is-6-desktop'>
              <img src={orderRight} alt='order' />
            </div>
          </div>

          <div
            className='columns is-variable is-1-mobile is-6-desktop'
            style={columnStyle}>
            {/* bottomLeft */}
            <div className='column is-12-mobile is-6-desktop'>
              <img src={orderLeft} alt='orderImg' />
            </div>
            {/* bottomRight */}
            <div className='column is-12-mobile is-6-desktop order'>
              <div className='orangeBg'>
                <IconContext.Provider
                  value={{ color: '#FFFFFF', size: '30px' }}>
                  <div className='order-icon'>
                    <GiPartyPopper className='order-icon-child' />
                  </div>
                </IconContext.Provider>
                <div className='order-text'>
                  <p className='order-title'>
                    Pravite dernek <br className='br' />
                    <span className='order-title-span'>za vikend?</span>
                  </p>
                  <p className='order-one'>
                    Znate što vam se sviđa? Bez brige, tu smo za vas.
                  </p>
                  <p className='order-t'>
                    Unesite svoju adresu i počnite kupovati najveći izbor piva,
                    vina i likera na mreži. Zakažite narudžbu ili je nabavite na
                    zahtjev za manje od 60 minuta.
                  </p>
                  <button className='preuzmi-btn'>
                    <IconContext.Provider value={{ size: '20px' }}>
                      <p>
                        <FaApple />
                        <FaAndroid /> Preuzmi Aplikaciju
                      </p>
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Order;
