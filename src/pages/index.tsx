import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/title.module.css';
import WAVES from 'vanta/dist/vanta.waves.min'

const HomePage = () => {

  const router = useRouter();
  const words = ["C", "R", "Y", "P", "T", "O",
    "*", " ", "C", "R", "U", "S", "H"
  ];

  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof WAVES>>(null);
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const startGame = () => {
    router.push('/play'); // Or router.replace('/game')
  };

  return (
    <div ref={myRef} className="flex flex-col items-center justify-center">
      <br /><br />
      <div className='m-1'>
        {words.map((word, index) => (
          <div className={styles['my-span']} key={`word-${index}`} data-char={word}>
            {word}
            {Array.from({ length: 10 }, (_, i) => (
              <span className='my-span2' key={`char-${word}-${i}`}>{word}</span>
            ))}
          </div>
        ))}
      </div>
      <br /><br />
      <button 
      className="rainbow-btn"
      onClick={startGame}><span>START</span></button>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default HomePage;
