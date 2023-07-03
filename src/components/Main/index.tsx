import Github from '../icons/github'
import Whatssap from '../icons/whatssap'
import Style from './H1.module.css'

export default function H1() {
    return (
        <div className={Style.Main}>
            <h1 className={Style.h1}> oi, sou cauã tavares </h1>
            
            <p className = {Style.text}>
                Desenvolvedor React e React Native interessado em qualquer assunto relacionado a desenvolvimento Web.
            </p>
            <ul >
                <li>
                    <a href="https://github.com/Cauatn"><Github /></a>
                </li>
                <li>
                    <a href=""><Whatssap/></a>
                </li>
            </ul>

            <h2 className={Style.h2}>Sobre mim</h2>
            <p className={Style.text}>Atualmente sou estudante de Engenharia de Computação pela Universidade Federal do Vale do São Francisco UNIVASF, novo no mundo de desenvolvimento, procurando sempre aprender novas tecnologias e fundamentar melhor meus conhecimentos.</p>
            <p>Sinta-se livre para entrar em contato comigo através de minhas redes!</p>
        </div>

        
    )
}