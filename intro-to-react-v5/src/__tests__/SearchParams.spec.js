import React from 'react';

import pet, { ANIMALS, _breeds, _dogs } from '@frontendmasters/pet';
import { render, cleanup, fireEvent } from '@testing-library/react';

import SearchParams from '../SearchParams';

afterEach(cleanup);

test('SearchParams', () => {
  const { container, getByTestId, getByText } = render(<SearchParams />);
  const animalDropdown = getByTestId('use-dropdown-animal');
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(pet.breeds).toHaveBeenCalled();
  const breedDropdown = getByTestId('use-dropdown-breed');
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1);

  const searchResults = getByTestId('search-results');
  expect(searchResults.textContent).toEqual('No Pets Found');
  fireEvent(getByText('Submit'), new MouseEvent('click'));
  expect(pet.animals).toHaveBeenCalled();
  expect(searchResults.children.length).toEqual(_dogs.length);

  expect(container.firstChild).toMatchInlineSnapshot();
});
