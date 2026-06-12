import { useRef, useState } from "react";
import "./ContactSupport.css";

export function ContactSupport() {
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);

    const handleKeyUp = (event) => {
        if (event.key === "Enter" && event.target.value.trim()) {
            setMessages([...messages, event.target.value.trim()]);
            event.target.value = "";
        }
    };

    return (
        <div className="contact-support-container">
            <div className="cs-header">
                <p className="cs-header__title">Contact Support</p>
                <span className="cs-react-badge">React MFE</span>
            </div>

            <div className="cs-content">
                <p className="cs-bot-message">👋 Bienvenido a soporte!</p>
                <p className="cs-bot-message">¿En qué podemos ayudarte hoy?</p>
                {messages.map((message, index) => (
                    <p className="cs-user-message" key={index}>{message}</p>
                ))}
            </div>

            <div className="cs-form">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Escribe tu consulta y presiona Enter…"
                    onKeyUp={handleKeyUp}
                />
            </div>
        </div>
    );
}
