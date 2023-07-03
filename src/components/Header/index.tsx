import React from "react";
import Style from './header.module.css'

import { Link } from 'react-router-dom'

import profile from '../profile.png';

export default function Header() {
    return (
        <header className={Style.header}>

            <a href="" className={Style.header}><Link to={'/'}><img src={profile}></img></Link></a>
            <a className = 'text-style'href=""> <Link to ={"/projects"} >Projetos</Link></a>

        </header>
    )
}