import React, { memo } from 'react';
import GenerateCountBtn from '../GenerateCountBtn';
import useBuy from '../../hooks/useBuy';
import useMintNft from '../../hooks/useMintNft';

const GenerateBlock = () => {
  const { mintNft } = useMintNft();

  const {
    count,
    state,
    showCountAnimation,
    formatPrice,
    handleNumberClick,
  } = useBuy();

  const { wallet, price, app } = state;

  const handleClick = () => {
    if (!wallet.signedIn) {
      const successUrl = `${window.location.origin}/#generate-block`;
      wallet.signIn(successUrl);
    } else {
      mintNft(count);
    }
  };

  return (
    <div id="generate-block" className="generate-block">

      <div className="generate-block__line"></div>
      <div className="generate-block__vertical-line "></div>
      <div className="generate-block__price ">

        <span className="generate-block__near">Ⓝ&nbsp;</span>

        <p className={`generate-block__count  ${showCountAnimation}`}>
          {count === app.manyCount
            ? formatPrice(price.manyNFTS)
            : formatPrice(price.oneNFT)}
        </p>
        
      </div>
      <GenerateCountBtn
        count={app.oneCount}
        onClick={() => {handleNumberClick(app.oneCount);handleClick()}}
        isActive={count === app.oneCount}
      />
      <p>Tokens Left {app.tokensLeft}</p>
    </div>
  );
};
export default memo(GenerateBlock);
