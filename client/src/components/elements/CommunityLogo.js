import React from 'react'
import PropTypes from 'prop-types'
import CoinIcon1 from 'images/Coin1.svg'
import CoinIcon2 from 'images/Coin2.svg'
import CoinIcon3 from 'images/Coin3.svg'
import Loader from 'components/Loader'

const communityLogos = {
  'CoinIcon1.svg': CoinIcon1,
  'CoinIcon2.svg': CoinIcon2,
  'CoinIcon3.svg': CoinIcon3
}

const CommunityLogo = (props) => {
  const communityLogo = communityLogos[props.metadata.communityLogo]
  return (
    <div className='coin-logo'>
      {
        communityLogo
          ? <img src={communityLogo} className='logo-img' />
          : <Loader color='#fff' className='logo-img' />
      }
      <span className='symbol-text'>{props.token.symbol}</span>
    </div>
  )
}

CommunityLogo.propTypes = {
  token: PropTypes.object.isRequired,
  metadata: PropTypes.object
}

export default CommunityLogo
