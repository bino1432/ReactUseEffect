import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cont.css'

function Cont() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} Cookies`; 
    if (count == 100) {
      alert("100 Cookies")
    }
  });

  const navigate = useNavigate()

  return (
    <div>
      <h1 className='title'>Click on Cookie</h1>
      <p className='p'>You clicked {count} times.</p>
      <div className="btn" onClick={() => setCount(count + 1)}>
        <img className="img" src={"./Images/cookie.png"}/>
      </div>
      <button onClick={() => navigate('/Daniel')}>
          Contador
      </button>
    </div>
  );
}

export default Cont;