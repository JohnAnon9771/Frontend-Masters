import React, { useState, useEffect, useContext } from 'react';

import pet, { ANIMALS } from '@frontendmasters/pet';

import Results from './Results';
import ThemeContext from './ThemeContext';
import useDropdown from './useDropdown';

function SearchParams() {
  // const location = useSelector((state) => state.location);
  // const dispatch = useDispatch();
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  const [theme, setTheme] = useContext(ThemeContext);

  function requestPets() {
    pet
      .animals({
        location,
        breed,
        type: animal,
      })
      .then(({ animals }) => {
        setPets(animals || []);
      });
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');
    pet.breeds(animal).then(
      ({ breeds }) => {
        const breedsName = breeds.map(({ name }) => name);
        setBreeds(breedsName);
      },
      (error) => console.error(error),
    );
  }, [animal, setBreeds, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="blue">Blue</option>
            <option value="peru">Peru</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button type="submit" style={{ backgroundColor: theme }}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
