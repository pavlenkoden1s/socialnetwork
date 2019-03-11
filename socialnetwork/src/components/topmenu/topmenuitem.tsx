import React from 'react';
import { Link } from 'react-router-dom'

interface IProps {
    path: string;
    title: string;
  }
  
  export const TopmenuItem: React.FunctionComponent<IProps> = ({path, title}) => {
    return  <li className={'page-nav__item'}>
      <Link to={path}><span>{title}</span></Link>
    </li>
  }
  