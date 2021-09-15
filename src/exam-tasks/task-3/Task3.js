import React from 'react';
import Button from './components/Button';
import { FaTwitter } from 'react-icons/fa';
import './Task3.css';

function Task3() {
  return (
    <div className='taskThree'>
      <h3>Task 3</h3>
      <div>
        <FaTwitter className='twiterIcon' />
        <h1>Happening now</h1>
        <h4>Join Twitter today.</h4>
        <Button klase='btn blueWithWhite' tekstas='Sing up' />
        <br />
        <Button klase='btn whiteWithBlue' tekstas='Log in' />
      </div>
    </div>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
