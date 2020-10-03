import React, { lazy } from 'react';
import pet from '@frontendmasters/pet';

import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';

const Modal = lazy(() => import('./Modal'));

class Details extends React.Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => this.setState({ error: err }));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => this.props.history.push(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      media,
      name,
      url,
      showModal,
    } = this.state;

    return (
      <ErrorBoundary>
        <div className="details">
          <Carousel media={media} />
          <div>
            <h1>{name}</h1>
            <h2>{`${animal} — ${breed} — ${location}`}</h2>
            <button type="button" onClick={this.toggleModal}>
              Adopt
              {name}
            </button>
            <p>{description}</p>
            {showModal ? (
              <Modal>
                <div>
                  <h1>
                    Would you like to adopt
                    {name}
                  </h1>
                  <div className="buttons">
                    <button type="button" onClick={this.adopt}>
                      Yes
                    </button>
                    <button type="button" onClick={this.toggleModal}>
                      No
                    </button>
                  </div>
                </div>
              </Modal>
            ) : null}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default Details;
