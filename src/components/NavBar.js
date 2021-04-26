import React from 'react';
import { IconContext } from 'react-icons/lib';

class NavBar extends React.Component {
  state = {
    //This sets the state of Bulma elements
    navbarActive: false,
  };
  toggleNavbar = () => {
    this.setState({
      navbarActive: !this.state.navbarActive,
    });
  };
  render() {
    return (
      <div id='NavBar' className='container'>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <div className='navbar-item'>
              <img src={this.props.Logo} height='100%' alt='Logo' />
            </div>
            <a
              href='#Header'
              active={this.state.navbarActive}
              onClick={this.toggleNavbar}
              role='button'
              className='navbar-burger'>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div
            className={`navbar-menu ${
              this.state.navbarActive ? 'is-active' : ''
            } `}>
            <div className='navbar-start'>
              <a href='#Header' className='navbar-item'>
                <p className='nav-text'>Početna</p>
              </a>
              <a href='#Look' className='navbar-item'>
                <p className='nav-text'>
                  Narudžba i <strong>plaćanje</strong>
                </p>
              </a>
              <a href='#Order' className='navbar-item'>
                <p className='nav-text'>
                  Naruči <strong>unaprijed</strong>
                </p>
              </a>
              <a href='#Location' className='navbar-item'>
                <p className='nav-text'>
                  Gdje smo <strong>dostupni</strong>
                </p>
              </a>
              <a href='#Download' className='navbar-item'>
                <p className='nav-text'>
                  Preuzmi <strong>aplikaciju</strong>
                </p>
              </a>
            </div>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              Dostupno na:{' '}
              <IconContext.Provider
                value={{ size: '1.3rem', color: '#808080' }}>
                <div className='icons'>
                  <this.props.google />
                </div>
                <div className='icons'>
                  <this.props.apple />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
