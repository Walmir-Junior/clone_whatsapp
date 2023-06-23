import React from "react";
import './style.css';

const ChatListItem = () => {
    return (
        
        <div className="chat-list-item">
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6_3LEQ3Mt1Or0Zx53Yoyi-5qzZ55DdxVng&usqp=CAU" alt="profile foto" />

            <div className="chat-lines">

                <div className="chat-line">
                    <div className="chat-name">Thaynara</div>
                    <div className="chat-date">21:51</div>
                </div>

                <div className="chat-line">
                    <div className="last-message">
                        <p>ultima mensagem ultima mensagem ultima mensagemc  ultima mensagem ultima mensagemc</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChatListItem