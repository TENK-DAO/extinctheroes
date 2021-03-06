import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Buy from '../Buy/Buy';
import GenerateSoldOut from '../Generate/GenerateSoldOut';

const NoNfts = ({ soldOut }) => {
  const { pathname } = useLocation();

  return (
    <div className="no-nfts">
      <div className="no-nfts__data">
        <div className="no-nfts__data-top">
          <div className="no-nfts__information">
            <p className="no-nfts__title">
              You don&#39;t have any{' '}
              <span className="no-nfts__text-purpure">
                {pathname === '/link-drop' ? 'LinkDrops' : 'NFTs'}
              </span>{' '}
              yet
            </p>
            <p className="no-nfts__text">
              Buy your first <span className="no-nfts__text-purpure">NFT</span>
            </p>
          </div>
        </div>
        {soldOut ? <GenerateSoldOut className="no-nfts__sold-out" /> : <Buy />}
      </div>
    </div>
  );
};

NoNfts.propTypes = {
  soldOut: PropTypes.bool,
};

NoNfts.defaultProps = {
  soldOut: false,
};

export default NoNfts;
