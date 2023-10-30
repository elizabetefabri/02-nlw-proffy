import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://github.com/elizabetefabri.png" alt="Elizabete Fabri" />
                <div>
                    <strong>Elizabete Fabri</strong>
                    <span>JavaScript</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>
            <footer>
                <p>Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <a
                    href="#"
                    target="_blank">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}