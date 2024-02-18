/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './phrasesComponents.scss'
import { phrases } from '../../../../Data';

const PhrasesComponents = () => {

  const loadImage = (entry: any) => {
    entry.forEach((inlet: any) => inlet.isIntersecting && inlet.target.classList.add('visible'));
  }

  const observadorPhrase = new IntersectionObserver(loadImage, {
    root: null,
    rootMargin: '0px 0px -150px 0px',
    threshold: 0.5
  });

  useEffect(() => {
    const containerPhrases = document.getElementById('containerPhrases');
    const phrase1 = document.getElementById('phrase1');
    const phrase2 = document.getElementById('phrase2');
    const phrase3 = document.getElementById('phrase3');

    const observador = new IntersectionObserver(loadImage, {
      root: null,
      rootMargin: '500px 0px 100px 0px',
      threshold: 0.8
    });

    observador.observe(containerPhrases as any);
    observadorPhrase.observe(phrase1 as any);
    observadorPhrase.observe(phrase2 as any);
    observadorPhrase.observe(phrase3 as any);
  }, [])

  return (
    <section className="phrases" id='containerPhrases'>
      {phrases.map(({ title, description, image }, i) => (
        <article className='phrases__phrase' id={`phrase${ i + 1 }`} key={i}>
          <div className='phrases__phrase-icon'>
            <img src={ image } alt='img'/>
          </div>
          <div className='phrases__phrase-content'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default PhrasesComponents;