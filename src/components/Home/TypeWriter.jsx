import React, { useState, useEffect } from 'react';

const Typewriter = ({
  words = [],
  typingSpeed = 180,
  deletingSpeed = 100,
  pause = 1500,
  cursor = true,
  cursorStyle = '|',
  
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timer;

    if (!isDeleting) {
      // typing
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        // done typing, wait before deleting
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // deleting
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        // word erased → go to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span>
      {text}
      {cursor && <span className="cursor">{cursorStyle}</span>}
    </span>
  );
};

export default Typewriter;

