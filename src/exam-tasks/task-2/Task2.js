import React, { useReducer } from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const initialState = {
  like: 12,
  dislike: 2,
  liked: false,
  disliked: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'LIKE':
      return { ...state, like: state.like + 1, liked: true };
    case 'DISLIKE':
      return { ...state, dislike: state.dislike + 1, disliked: true };
    case 'REMOVELIKE':
      return { ...state, like: state.like - 1, liked: false };
    case 'REMOVEDISLIKE':
      return { ...state, dislike: state.dislike - 1, disliked: false };
    default:
      throw new Error();
  }
}

function Task2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Task 2</h3>
      <span>
        <FiThumbsUp
          onClick={() => {
            if (!state.liked && !state.disliked) {
              dispatch({ type: 'LIKE' });
            } else if (state.like && !state.disliked) {
              dispatch({ type: 'REMOVELIKE' });
            } else {
              return null;
            }
          }}
        />
        {state.like}
        <FiThumbsDown
          onClick={() => {
            if (!state.disliked && !state.liked) {
              dispatch({ type: 'DISLIKE' });
            } else if (state.dislike && !state.liked) {
              dispatch({ type: 'REMOVEDISLIKE' });
            } else {
              return null;
            }
          }}
        />
        {state.dislike}
      </span>
    </div>
  );
}

export default Task2;

/* Task 2
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, vartotojui leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
