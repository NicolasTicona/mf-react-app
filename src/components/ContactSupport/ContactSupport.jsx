import { useEffect, useRef, useState } from "react";
import "./ContactSupport.css";

export function ContactSupport() {
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            setMessages(prev => [...prev, { type: 'card', title: e.detail.title, content: e.detail.content }]);
        };
        window.addEventListener('CARD_SELECTED', handler);
        return () => window.removeEventListener('CARD_SELECTED', handler);
    }, []);

    const handleKeyUp = (event) => {
        if (event.key === "Enter" && event.target.value.trim()) {
            const message = event.target.value.trim();
            window.dispatchEvent(new CustomEvent('SUPPORT_MESSAGE_SENT', { detail: { message } }));
            setMessages(prev => [...prev, { type: 'user', text: message }]);
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
                {messages.map((msg, index) => {
                    if (msg.type === 'card') {
                        return (
                            <p className="cs-card-message" key={index}>
                                📌 <strong>{msg.title}</strong>: {msg.content}
                            </p>
                        );
                    }
                    return <p className="cs-user-message" key={index}>{msg.text}</p>;
                })}
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
