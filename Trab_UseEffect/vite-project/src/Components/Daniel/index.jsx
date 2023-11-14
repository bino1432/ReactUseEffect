import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Daniel.css'

function Daniel() {
  const [count, setCount] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      document.title = `${count} Segundos`;
    }, 1000);
  },[count]);

  const navigate = useNavigate()

  return (
    <>
    <h1 className="title">Você gastou: {count > 0 ? count : 0} segundos com está pagina</h1>;
    
    <button onClick={() => navigate('/')}>
        voltar
    </button>
    </>
  );
}

export default Daniel;