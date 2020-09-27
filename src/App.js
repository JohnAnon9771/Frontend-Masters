import React from 'react';
import { render } from 'react-dom';
import { Pet } from './Pet';

const App = () => {
  return React.createElement('div', { id: 'something-important' }, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Ruck',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Ruck',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, {
      name: 'Ruck',
      animal: 'Dog',
      breed: 'Havanese',
    }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
