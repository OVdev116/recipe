import React from 'react';
import { Search } from '../search/search';
import './header.scss';

function Header() {
    return (
        <header>
            <div className="container-fluid">
                <Search />
            </div>
        </header>
    );
}
export  default Header;
