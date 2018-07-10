import {action, createRequestTypes} from './utils'

export const GET_NETWORK_TYPE = createRequestTypes('GET_NETWORK_TYPE')
export const UNSUPPORTED_NETWORK_ERROR = 'UNSUPPORTED_NETWORK_ERROR'
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT'
export const CHECK_ACCOUNT_CHANGE = 'CHECK_ACCOUNT_CHANGE'

export const FETCH_GAS_PRICES = createRequestTypes('FETCH_GAS_PRICES')

export const getNetworkType = () => action(GET_NETWORK_TYPE.REQUEST)
export const selectAccount = (accountAddress) => action(SELECT_ACCOUNT,
  {response: {accountAddress, isAccountUnlocked: !!accountAddress}})

export const checkAccountChange = ({selectedAddress, networkVersion}) => action(CHECK_ACCOUNT_CHANGE,
  {selectedAddress, networkVersion})

export const fetchGasPrices = () => action(FETCH_GAS_PRICES.REQUEST)
