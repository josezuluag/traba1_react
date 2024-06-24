import React, { useState, useEffect } from 'react';
import Child from './Child';  

const Parent = () => {
  const [message, setMessage] = useState("Mensaje inicial desde el componente Padre!");

  useEffect(() => {
    // Simula una actualización del mensaje después de 3 segundos
    const timer = setTimeout(() => {
      setMessage("Mensaje actualizado desde el componente Padre!");
    }, 3000);

    // Limpia el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Componente Padre</h1>
      <Child message={message} />
    </div>
  );
}

export default Parent;
