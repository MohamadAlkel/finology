import React, { FC, ReactElement } from 'react';
import { NavBarWrapper } from './NavBar.style';

const NavBar: FC = (): ReactElement<void> => {
  return (
    <NavBarWrapper>
      <ul>
        <li>
          <a href="https://finology-group.com/">
            <img src="https://finology-group.com/logo-dark.png" />
          </a>
        </li>
      </ul>
    </NavBarWrapper>
  );
};

export default NavBar;
