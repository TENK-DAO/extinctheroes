import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { appStore } from '../../state/app';
import BuyMoreBtn from '../BuyMoreBtn';
import GenerateCountBtn from '../GenerateCountBtn';
import GenerateSoldOut from '../Generate/GenerateSoldOut';
import useBuy from '../../hooks/useBuy';
import useMintNft from '../../hooks/useMintNft';

const Buy = ({ soldOut }) => {
  
  const { mintNft } = useMintNft();

  const {
    count,
    state,
    showCountAnimation,
    formatPrice,
    handleNumberClick,
  } = useBuy();

  const { update } = useContext(appStore);

  const { wallet, price, app } = state;

  const handleClick = () => {
    if (!wallet.signedIn) {
      const successUrl = `${window.location.origin}/#generate-block`;
      wallet.signIn(successUrl);
    } else {
      mintNft(count);
    }
  };

  const modalOpen = () => update('app.modalOpen', true);

  return (
    <div className="buy">
      <div className="buy__data">
        {!soldOut ? (
          <>
            <p className={`generate-block__count  ${showCountAnimation}`}>
              Ⓝ&nbsp;
              {count === app.manyCount
                ? formatPrice(price.manyNFTS)
                : formatPrice(price.oneNFT)}
            </p>
            <GenerateCountBtn
              count={app.oneCount}
              onClick={() => {handleNumberClick(app.oneCount);handleClick()}}
              isActive={count === app.oneCount}
            />
            <p>Tokens Left {app.tokensLeft}</p>
            <BuyMoreBtn
              text="Send an NFT"
              className="buy__nft"
              onClick={modalOpen}
            />
          </>
        ) : (
          <div className="buy__sold-out-wrapper">
            <GenerateSoldOut className="buy__sold-out" />
          </div>
        )}
      </div>
    </div>
  );
};

Buy.propTypes = {
  soldOut: PropTypes.bool,
};

Buy.defaultProps = {
  soldOut: false,
};

export default Buy;
