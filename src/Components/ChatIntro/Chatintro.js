import React from "react";
import "./style.css"
import Clone from "../../assets/Clone2.png"


const ChatIntro = () => {
    return (
        <div className="chat-intro">

            <img src={Clone} alt="" />

            <h1>Mantenha seu celular conectado</h1>
            <h2>O whatsapp conecta ao seu telefone para sincronizar suas menssagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.</h2>
        </div>
    )
}

export default ChatIntro