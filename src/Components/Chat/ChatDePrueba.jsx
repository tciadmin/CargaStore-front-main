import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';  // Asegúrate de que la importación sea correcta

const socket = io('http://localhost:3000/');  // Asegúrate de que la URL coincida con la de tu servidor

const ChatDePrueba = () => {
  const [messages, setMessages] = useState([]);
      const chatId = '0800d';

  const [input, setInput] = useState('');

  useEffect(() => {
socket.emit('joinChat', chatId);
    socket.on('message', (message) => {
      console.log(message)
      setMessages((prevMessages) => [...prevMessages, message.msg]);
    },[]);

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== '') {
      socket.emit('message', input, chatId,'pepe','carlos');
      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatDePrueba;
