import { useEffect, useState } from 'react';

import Style from '../components/Main/H1.module.css';

export default function Projects() {

    const [userData, setUserData] = useState([])

    useEffect( () => {
        const getUserdata = async() => {
            const reqData = await fetch("https://api.github.com/users/Cauatn/repos");
            const data = await reqData.json();

            console.log(data)

        }

        getUserdata();
    })

    return(
        <div className={Style.Main}>
            <h1 className={Style.h1}>Projetos</h1>
            <p className={Style.text}>
                Aqui estão alguns de meus projetos pessoais que criei. Bem como, estudos e conteúdos em que acho importante compartilhar.
            </p>
            
            <div></div>

        </div>
    )
}