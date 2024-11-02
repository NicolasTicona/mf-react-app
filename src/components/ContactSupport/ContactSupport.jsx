import { useEffect, useState } from "react";
import "./ContactSupport.css";
import CloseIcon from '../../assets/close.svg'

export function ContactSupport() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const contentChat = document.querySelector('.content');
        
        document.querySelector('.content').scroll({
            behavior: 'smooth',
            top: contentChat.scrollHeight
        })
    }, [messages])

    const handleKeyUp = (event) => {
        if(event.key === "Enter") {
            setMessages([...messages, event.target.value]);
        }
    }

    return (
        <div className="contact-support-container">
            <div className="header">
                <p>Contact Support</p>
                <img src={CloseIcon} alt="Close" />
            </div>

            <div className="content" >
                <p>Bienvenido a soporte!</p>
                <p>¿En qué podemos ayudarte hoy?</p>
                {
                    messages.map((message, index) => (
                        <p className="sender" key={index}>{message}</p>
                    ))
                }
            </div>

            <div className="form">
                <input type="text" placeholder="¿Cuál es tu pregunta?" onKeyUp={handleKeyUp}/>
            </div>
        </div>
    );
}
