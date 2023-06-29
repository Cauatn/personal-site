import React from "react";
import Style from './header.module.css'

import profile from '../profile.png';

export default function Header() {
    return (
        <header className={Style.header}>

            <a href="" className={Style.header}><img src={profile}></img></a>
            <a className = 'text-style'href="">Projetos</a>

        </header>
    )
}