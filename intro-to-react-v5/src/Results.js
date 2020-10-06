import React from 'react';

import Pet from './Pet';

function Results({ pets }) {
  return (
    <div data-testid="search-results" className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            animal={pet.type}
            name={pet.name}
            breed={pet.breed.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.adress.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
}

export default Results;
