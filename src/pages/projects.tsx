import { useEffect, useState } from 'react';

import Style from '../components/Main/H1.module.css';

export default function Projects() {

    const [userData, setUserData] = useState([])

    useEffect( () => {
        const getUserdata = async() => {
            const reqData = await fetch("https://api.github.com/users/Cauatn/repos");
            const data = await reqData.json();

            console.log(data)

            setUserData(data);

        }

        getUserdata();
    }, []);

    const show = ["Alura-Challenge-React","apeperia","OpenGl-Univasf-CG","personal-website"]

    function isIn(repoName : string){
        let i = 0;

        while(i < show.length) {
            if(repoName === show[i])
                return show[i];
            i++;
        }

        return 0;
    }

    return(
        <div className={Style.Main}>
            <h1 className={Style.h1}>Projetos</h1>
            <p className={Style.text}>
                Aqui estão alguns de meus projetos pessoais que criei. Bem como, estudos e conteúdos em que acho importante compartilhar.
            </p>
            
            <div className={Style.projectContainer}>
                {userData.map((repo: string | any, key) => {

                    if (isIn(repo.name)) 
                    {
                        return (
                                    <div key={key}>
                                        <h2 className={Style.projectH3} ><a href={`${repo.html_url}`}>{repo.name}</a></h2>
                                        <p className={Style.projectText}> {repo.description} </p>
                                    </div>
                                )
                    }   
                
                })}
            </div>

        </div>
    )
}