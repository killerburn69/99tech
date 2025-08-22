import React, { useState, useEffect } from 'react';
import { ArrowUpDown, Settings, ChevronDown, Zap, TrendingUp, Wallet } from 'lucide-react';

const TokenSwapUI = () => {
    const [fromToken, setFromToken] = useState({ symbol: 'ETH', name: 'Ethereum', price: 1645.93, image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' });
    const [toToken, setToToken] = useState({ symbol: 'USDC', name: 'USD Coin', price: 1, image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png' });
    const [fromAmount, setFromAmount] = useState('');
    const [toAmount, setToAmount] = useState('');
    const [isSwapping, setIsSwapping] = useState(false);
    const [showTokenSelect, setShowTokenSelect] = useState(null);
    const [swapComplete, setSwapComplete] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  

  const tokens = [
    {
      currency: 'BLUR',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.20811525423728813,
      image: 'https://assets.coingecko.com/coins/images/28452/large/blur.png',
    },
    {
      currency: 'bNEO',
      date: '2023-08-29T07:10:50.000Z',
      price: 7.1282679,
      image:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/neo/assets/NEO/logo.png',
    },
    {
      currency: 'BUSD',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.999183113,
      image: 'https://assets.coingecko.com/coins/images/9576/large/BUSD.png',
    },
    {
      currency: 'BUSD',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.9998782611186441,
      image: 'https://assets.coingecko.com/coins/images/9576/large/BUSD.png',
    },
    {
      currency: 'USD',
      date: '2023-08-29T07:10:30.000Z',
      price: 1,
      image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    },
    {
      currency: 'ETH',
      date: '2023-08-29T07:10:52.000Z',
      price: 1645.9337373737374,
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    },
    {
      currency: 'GMX',
      date: '2023-08-29T07:10:40.000Z',
      price: 36.345114372881355,
      image: 'https://assets.coingecko.com/coins/images/18323/large/arbit.png',
    },
    {
      currency: 'STEVMOS',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.07276706779661017,
      image:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
    },
    {
      currency: 'LUNA',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.40955638983050846,
      image: 'https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png',
    },
    {
      currency: 'RATOM',
      date: '2023-08-29T07:10:40.000Z',
      price: 10.250918915254237,
      image:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
    },
    {
      currency: 'STRD',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.7386553389830508,
      image:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
    },
    {
      currency: 'EVMOS',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.06246181355932203,
      image: 'https://assets.coingecko.com/coins/images/24023/large/evmos.png',
    },
    {
      currency: 'IBCX',
      date: '2023-08-29T07:10:40.000Z',
      price: 41.26811355932203,
      image: 'https://via.placeholder.com/32',
    },
    {
      currency: 'IRIS',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.0177095593220339,
      image: 'https://assets.coingecko.com/coins/images/5135/large/iris.png',
    },
    {
      currency: 'ampLUNA',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.49548589830508477,
      image: 'https://assets.coingecko.com/coins/images/14694/large/Luna-200.png',
    },
    {
      currency: 'KUJI',
      date: '2023-08-29T07:10:45.000Z',
      price: 0.675,
      image: 'https://assets.coingecko.com/coins/images/24251/large/kuji.png',
    },
    {
      currency: 'STOSMO',
      date: '2023-08-29T07:10:45.000Z',
      price: 0.431318,
      image:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
    },
    {
      currency: 'USDC',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.989832,
      image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
    },
    {
      currency: 'axlUSDC',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.989832,
      image:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axlusdc.png',
    },
    {
      currency: 'ATOM',
      date: '2023-08-29T07:10:50.000Z',
      price: 7.186657333333334,
      image: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png',
    },
    {
      currency: 'STATOM',
      date: '2023-08-29T07:10:45.000Z',
      price: 8.512162050847458,
      image:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
    },
    {
      currency: 'OSMO',
      date: '2023-08-29T07:10:50.000Z',
      price: 0.3772974333333333,
      image: 'https://assets.coingecko.com/coins/images/16724/large/osmo.png',
    },
    {
      currency: 'rSWTH',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.00408771,
      image: 'https://assets.coingecko.com/coins/images/24492/large/rswth.png',
    },
    {
      currency: 'STLUNA',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.44232210169491526,
      image:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
    },
    {
      currency: 'LSI',
      date: '2023-08-29T07:10:50.000Z',
      price: 67.69661525423729,
      image: 'https://via.placeholder.com/32',
    },
    {
      currency: 'OKB',
      date: '2023-08-29T07:10:40.000Z',
      price: 42.97562059322034,
      image: 'https://assets.coingecko.com/coins/images/4463/large/okb_token.png',
    },
    {
      currency: 'OKT',
      date: '2023-08-29T07:10:40.000Z',
      price: 13.561577966101694,
      image: 'https://assets.coingecko.com/coins/images/12709/large/OKT.png',
    },
    {
      currency: 'SWTH',
      date: '2023-08-29T07:10:45.000Z',
      price: 0.004039850455012084,
      image: 'https://assets.coingecko.com/coins/images/3261/large/swth.png',
    },
    {
      currency: 'USC',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.994,
      image: 'https://via.placeholder.com/32',
    },
    {
      currency: 'USDC',
      date: '2023-08-29T07:10:30.000Z',
      price: 1,
      image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
    },
    {
      currency: 'USDC',
      date: '2023-08-29T07:10:30.000Z',
      price: 1,
      image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
    },
    {
      currency: 'USDC',
      date: '2023-08-29T07:10:40.000Z',
      price: 0.9998782611186441,
      image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
    },
    {
      currency: 'WBTC',
      date: '2023-08-29T07:10:52.000Z',
      price: 26002.82202020202,
      image: 'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png',
    },
    {
      currency: 'wstETH',
      date: '2023-08-29T07:10:40.000Z',
      price: 1872.2579742372882,
      image: 'https://assets.coingecko.com/coins/images/18834/large/wstETH.png',
    },
    {
      currency: 'YieldUSD',
      date: '2023-08-29T07:10:40.000Z',
      price: 1.0290847966101695,
      image: 'https://via.placeholder.com/32',
    },
    {
      currency: 'ZIL',
      date: '2023-08-29T07:10:50.000Z',
      price: 0.01651813559322034,
      image: 'https://assets.coingecko.com/coins/images/2687/large/ZIL.png',
    },
  ];
  useEffect(() => {
    if (fromAmount && !isNaN(fromAmount) && fromToken && toToken) {
      const rate = fromToken.price / toToken.price;
      const calculated = (parseFloat(fromAmount) * rate).toFixed(6);
      setToAmount(calculated);
    } else {
      setToAmount('');
    }
  }, [fromAmount, fromToken, toToken]);

  const handleSwapTokens = () => {
    const tempToken = fromToken;
    setFromToken(toToken);
    setToToken(tempToken);
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleSwap = async () => {
    if (!fromAmount || parseFloat(fromAmount) <= 0) return;
    
    setIsSwapping(true);
    setSwapComplete(false);
    
    // Simulate swap transaction
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    setIsSwapping(false);
    setSwapComplete(true);
    
    // Reset after showing success
    setTimeout(() => {
      setFromAmount('');
      setToAmount('');
      setSwapComplete(false);
    }, 3000);
  };

  const selectToken = (token, isFromToken) => {
    console.log('Selecting token:', token, 'isFrom:', isFromToken);
    
    const selectedToken = {
      symbol: token.currency,
      name: token.name,
      price: token.price,
      image: token.image
    };
    
    if (isFromToken) {
      setFromToken(selectedToken);
    } else {
      setToToken(selectedToken);
    }
    
    setShowTokenSelect(null);
    setSearchTerm('');
  };

  const filteredTokens = tokens.filter(token =>
    token.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
    token.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exchangeRate = fromToken && toToken ? fromToken.price / toToken.price : 0;

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4'>
      <div className='w-full max-w-md relative'>
        {/* Header */}
        <div className='mb-8 text-center'>
          <div className='mb-4 flex items-center justify-center'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600'>
              <Zap className='h-6 w-6 text-white' />
            </div>
          </div>
          <h1 className='mb-2 text-3xl font-bold text-white'>Token Swap</h1>
          <p className='text-gray-400'>Trade tokens instantly with zero slippage</p>
        </div>

        {/* Success Message */}
        {swapComplete && (
          <div className="mb-6 p-4 rounded-2xl bg-green-900/20 border border-green-500/30">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <div>
                <div className="text-green-400 font-semibold">Swap Successful!</div>
                <div className="text-green-300/80 text-sm">Your tokens have been exchanged</div>
              </div>
            </div>
          </div>
        )}

        {/* Main Card */}
        <div className='rounded-3xl border border-gray-800 bg-black/40 p-6 shadow-2xl backdrop-blur-xl relative'>
          {/* Settings Button */}
          <div className='mb-6 flex justify-end'>
            <button className='rounded-xl bg-gray-800 p-2 transition-colors hover:bg-gray-700'>
              <Settings className='h-5 w-5 text-gray-400' />
            </button>
          </div>

          {/* From Token */}
          <div className='space-y-4'>
            <div className='rounded-2xl border border-gray-700 bg-gray-800/50 p-4'>
              <div className='mb-3 flex items-center justify-between'>
                <span className='text-sm text-gray-400'>From</span>
                {/* <span className='text-sm text-gray-400'>Balance: 12.45</span> */}
              </div>
              <div className='flex items-center space-x-4'>
                <div className='flex-1'>
                  <input
                    type='number'
                    placeholder='0.0'
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className='w-full bg-transparent text-2xl font-bold text-white placeholder-gray-500 outline-none'
                  />
                </div>
                <button
                  onClick={() => setShowTokenSelect(showTokenSelect === 'from' ? null : 'from')}
                  className='flex items-center space-x-2 rounded-xl bg-gray-700 px-4 py-3 transition-colors hover:bg-gray-600 relative'
                >
                  <div className='h-8 w-8 rounded-full overflow-hidden bg-gray-600 flex items-center justify-center flex-shrink-0'>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                      {fromToken.symbol.charAt(0)}
                    </div>
                  </div>
                  <span className='font-semibold text-white'>{fromToken.symbol}</span>
                  <ChevronDown className='h-4 w-4 text-gray-400' />
                </button>
              </div>
            </div>

            {/* Swap Button */}
            <div className='flex justify-center'>
              <button
                onClick={handleSwapTokens}
                className='rounded-xl bg-gray-800 p-3 transition-all duration-200 hover:scale-110 hover:bg-gray-700'
              >
                <ArrowUpDown className='h-6 w-6 text-gray-400' />
              </button>
            </div>

            {/* To Token */}
            <div className='rounded-2xl border border-gray-700 bg-gray-800/50 p-4'>
              <div className='mb-3 flex items-center justify-between'>
                <span className='text-sm text-gray-400'>To</span>
                {/* <span className='text-sm text-gray-400'>Balance: 1,234.56</span> */}
              </div>
              <div className='flex items-center space-x-4'>
                <div className='flex-1'>
                  <input
                    type='number'
                    placeholder='0.0'
                    value={toAmount}
                    readOnly
                    className='w-full bg-transparent text-2xl font-bold text-white placeholder-gray-500 outline-none'
                  />
                </div>
                <button
                  onClick={() => setShowTokenSelect(showTokenSelect === 'to' ? null : 'to')}
                  className='flex items-center space-x-2 rounded-xl bg-gray-700 px-4 py-3 transition-colors hover:bg-gray-600 relative'
                >
                  <div className='h-8 w-8 rounded-full overflow-hidden bg-gray-600 flex items-center justify-center flex-shrink-0'>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      {toToken.symbol.charAt(0)}
                    </div>
                  </div>
                  <span className='font-semibold text-white'>{toToken.symbol}</span>
                  <ChevronDown className='h-4 w-4 text-gray-400' />
                </button>
              </div>
            </div>
          </div>

          {/* Exchange Rate Info */}
          {fromAmount && exchangeRate > 0 && (
            <div className='mt-4 rounded-xl bg-gray-800/30 p-3'>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-gray-400'>Exchange Rate</span>
                <div className='flex items-center space-x-1 text-white'>
                  <span>
                    1 {fromToken.symbol} = {exchangeRate.toFixed(6)} {toToken.symbol}
                  </span>
                  <TrendingUp className='h-4 w-4 text-green-500' />
                </div>
              </div>
              <div className='mt-2 flex items-center justify-between text-sm'>
                <span className='text-gray-400'>Network Fee</span>
                <span className='text-white'>~$12.50</span>
              </div>
              <div className='mt-2 flex items-center justify-between text-sm'>
                <span className='text-gray-400'>Price Impact</span>
                <span className='text-green-400'>{"<0.01%"}</span>
              </div>
            </div>
          )}

          <button
            onClick={handleSwap}
            disabled={!fromAmount || parseFloat(fromAmount) <= 0 || isSwapping || swapComplete}
            className={`mt-6 w-full rounded-2xl py-4 text-lg font-bold transition-all duration-200 ${
              !fromAmount || parseFloat(fromAmount) <= 0 || isSwapping || swapComplete
                ? 'cursor-not-allowed bg-gray-700 text-gray-400'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]'
            }`}
          >
            {swapComplete ? (
              <div className='flex items-center justify-center space-x-2'>
                <CheckCircle className='h-5 w-5 text-green-400' />
                <span>Swap Complete!</span>
              </div>
            ) : isSwapping ? (
              <div className='flex items-center justify-center space-x-2'>
                <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
                <span>Swapping...</span>
              </div>
            ) : !fromAmount || parseFloat(fromAmount) <= 0 ? (
              'Enter Amount'
            ) : (
              <div className='flex items-center justify-center space-x-2'>
                <Wallet className='h-5 w-5' />
                <span>Swap Tokens</span>
              </div>
            )}
          </button>

          <div className='mt-4 text-center text-xs text-gray-500'>
            By swapping, you agree to our Terms of Service and acknowledge that you understand the risks.
          </div>
        </div>

        {showTokenSelect && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-2xl border border-gray-700 w-full max-w-md max-h-[80vh] overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">Select Token</h3>
                  <button 
                    onClick={() => {
                      setShowTokenSelect(null);
                      setSearchTerm('');
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search tokens..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 outline-none focus:border-blue-500"
                />
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {filteredTokens.map((token, index) => (
                  <div
                    key={`${token.currency}-${index}`}
                    onClick={() => selectToken(token, showTokenSelect === 'from')}
                    className="p-4 border-b border-gray-800 hover:bg-gray-800 cursor-pointer transition-colors last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                          {/* {token.currency.charAt(0)} */}
                          <img src={token.image} alt="" />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{token.currency}</div>
                          <div className="text-sm text-gray-400">{token.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">
                          ${token.price < 0.01 ? token.price.toFixed(8) : token.price.toFixed(8)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredTokens.length === 0 && (
                  <div className="p-4 text-center text-gray-400">
                    No tokens found
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {showTokenSelect && (
          <div 
            className="fixed inset-0 bg-transparent z-40"
            onClick={() => {
              setShowTokenSelect(null);
              setSearchTerm('');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TokenSwapUI;
