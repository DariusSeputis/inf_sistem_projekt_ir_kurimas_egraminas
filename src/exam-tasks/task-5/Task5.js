import React, { useRef } from 'react';

function Task5() {
  const divElement = useRef();
  return (
    <div ref={divElement}>
      <h3>Task 5</h3>
      <h1>h1 tekstas</h1>
      <p>paragrafas</p>
      <button
        onClick={() => {
          divElement.current.style.color = '#000';
          divElement.current.style.backgroundColor = '#f1f1f1';
        }}
      >
        Light theme
      </button>
      <button
        onClick={() => {
          divElement.current.style.color = '#f1f1f1';
          divElement.current.style.backgroundColor = '#000';
        }}
      >
        Dark theme
      </button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 5 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
