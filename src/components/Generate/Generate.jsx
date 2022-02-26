import React, { useContext } from 'react';
import GenerateSoldOut from './GenerateSoldOut';
import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';
import useBuy from '../../hooks/useBuy';

const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  const { oneNFT } = state.price;

  const { formatPrice } = useBuy();

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">Extinct Heroes</h2>
          <p className="generate__text">
          NEAR Extinct Heroes are 3500 gifted individuals in the metaverse with extraordinary abilities and weapons. NEH live on the $NEAR blockchain, and are the latest beings from their historical timeline.
          </p>
          <p className="generate__text">
            NEAR Extinct Heroes are priced at a flat rate of {formatPrice(oneNFT)}{' '}
            NEAR.
          </p>
        </div>

        <div className="generate__block">
          {soldOut ? <GenerateSoldOut /> : <GenerateBlock />}

          <picture>
            <source srcSet="./images/extinct-heroes.jpg, ./images/extinct-heroes.jpg" />
            <img
              className={`generate__img ${
                soldOut ? 'generate__img-sold-out' : ''
              }`}
              src="./images/extinct-heroes.jpg"
              alt="generate extinct heroes"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Generate;
