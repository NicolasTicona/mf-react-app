import { useState } from "react";
import "./ContactSupport.css";

export function ContactSupport() {
    const [messages, setMessages] = useState([]);

    const handleKeyUp = (event) => {

        if(event.key === "Enter") {
            setMessages([...messages, event.target.value]);
        }
    }

    return (
        <div className="contact-support-container">
            <div className="header">
                <p>Contact Support</p>
            </div>

            <div className="content">
                <p>Bienvenido a soporte!</p>
                <p>¿En qué podemos ayudarte hoy?</p>
                {
                    messages.map((message, index) => (
                        <p className="sender" key={index}>{message}</p>
                    ))
                }
            </div>

            <div className="form">
                <input type="text" placeholder="Escribe tu consulta" onKeyUp={handleKeyUp}/>
            </div>
        </div>
    );
}
