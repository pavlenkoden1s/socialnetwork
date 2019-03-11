import React from 'react';

interface IProps {

}

export const Topmenu: React.FunctionComponent<IProps> = ({ children }) => {
    return <nav className={'page-nav'}>
      <div className='page-nav__container'>
        <ul className={'page-nav__menu'}>
          { children }
        </ul>
      </div>
    </nav>
  };
  