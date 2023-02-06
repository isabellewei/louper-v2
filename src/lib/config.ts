type Network = {
  title: string
  rpcUrl: string
  explorerUrl: string
  explorerApiUrl: string
  emoji: string
  chainId: string
}

export const NETWORKS: Record<string, Network> = {
  mainnet: {
    title: 'Ethereum',
    rpcUrl: 'https://1rpc.io/eth',
    explorerUrl: 'https://etherscan.io',
    explorerApiUrl: 'https://api.etherscan.io/api',
    emoji: '🟢',
    chainId: '1',
  },
  goerli: {
    title: 'Goerli Testnet',
    rpcUrl: 'https://rpc.ankr.com/eth_goerli',
    explorerUrl: 'https://goerli.etherscan.io',
    explorerApiUrl: 'https://api-goerli.etherscan.io/api',
    emoji: '🧪',
    chainId: '5',
  },
  sepolia: {
    title: 'Sepolia Testnet',
    rpcUrl: 'https://endpoints.omniatech.io/v1/eth/sepolia/public',
    explorerUrl: 'https://sepolia.etherscan.io/',
    explorerApiUrl: 'https://api-sepolia.etherscan.io/api',
    emoji: '🏀',
    chainId: '11155111',
  },
  xdai: {
    title: 'Gnosis (XDai)',
    rpcUrl: 'https://rpc.gnosischain.com/',
    explorerUrl: 'https://blockscout.com/xdai/mainnet',
    explorerApiUrl: 'https://blockscout.com/poa/xdai/api',
    emoji: '🟡',
    chainId: '100',
  },
  polygon: {
    title: 'Polygon',
    rpcUrl: 'https://polygon-rpc.com/',
    explorerUrl: 'https://polygonscan.com',
    explorerApiUrl: 'https://api.polygonscan.com/api',
    emoji: '🟣',
    chainId: '137',
  },
  mumbai: {
    title: 'Polygon Mumbai Testnet',
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com/',
    explorerUrl: 'https://mumbai.polygonscan.com/',
    explorerApiUrl: 'https://api-testnet.polygonscan.com/api',
    emoji: '🧪',
    chainId: '80001',
  },
  binance: {
    title: 'Binance Smart Chain',
    rpcUrl: 'https://bsc-dataseed.binance.org/',
    explorerUrl: 'https://bscscan.com',
    explorerApiUrl: 'https://api.bscscan.com/api',
    emoji: '🟠',
    chainId: '56',
  },
  binance_testnet: {
    title: 'Binance Smart Chain Testnet',
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    explorerUrl: 'https://testnet.bscscan.com/',
    explorerApiUrl: 'https://api-testnet.bscscan.com/api',
    emoji: '🟠',
    chainId: '97',
  },
  avalanche: {
    title: 'Avalanche',
    rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
    explorerUrl: 'https://snowtrace.io',
    explorerApiUrl: 'https://api.snowtrace.io/api',
    emoji: '⛰️',
    chainId: '43114',
  },
  fuji: {
    title: 'Avalanche Fuji Testnet',
    rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
    explorerUrl: 'https://testnet.snowtrace.io',
    explorerApiUrl: 'https://api-testnet.snowtrace.io/api',
    emoji: '🧪',
    chainId: '43113',
  },
  optimism: {
    title: 'Optimism',
    rpcUrl: 'https://mainnet.optimism.io',
    explorerUrl: 'https://optimistic.etherscan.io/',
    explorerApiUrl: 'https://api-optimistic.etherscan.io/api',
    emoji: '🔴',
    chainId: '10',
  },
  optimism_goerli: {
    title: 'Optimism Goerli Testnet',
    rpcUrl: 'https://goerli.optimism.io',
    explorerUrl: 'https://goerli-optimism.etherscan.io/',
    explorerApiUrl: 'https://api-goerli-optimistic.etherscan.io/',
    emoji: '🧪',
    chainId: '420',
  },
  arbitrum: {
    title: 'Arbitrum',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
    explorerUrl: 'https://arbiscan.io/',
    explorerApiUrl: 'https://api.arbiscan.io/api',
    emoji: '🔵',
    chainId: '42161',
  },
  arbitrum_goerli: {
    title: 'Arbitrum Goerli',
    rpcUrl: 'https://goerli-rollup.arbitrum.io/rpc',
    explorerUrl: 'https://goerli.arbiscan.io/',
    explorerApiUrl: 'https://api-goerli.arbiscan.io/api',
    emoji: '🧪',
    chainId: '421613',
  },
  arbitrum_nova: {
    title: 'Arbitrum Nova',
    rpcUrl: 'https://nova.arbitrum.io/rpc',
    explorerUrl: 'https://nova.arbiscan.io',
    explorerApiUrl: 'https://api-nova.arbiscan.io/api',
    emoji: '🔵',
    chainId: '42170',
  },
  moonriver: {
    title: 'Moonriver',
    rpcUrl: 'https://rpc.moonriver.moonbeam.network',
    explorerUrl: 'https://moonriver.moonscan.io/',
    explorerApiUrl: 'https://api-moonriver.moonscan.io/api',
    emoji: '🌕',
    chainId: '1285',
  },
  moonbeam: {
    title: 'Moonbeam',
    rpcUrl: 'https://rpc.api.moonbeam.network',
    explorerUrl: 'https://moonbeam.moonscan.io/',
    explorerApiUrl: 'https://api-moonbeam.moonscan.io/api',
    emoji: '🌕',
    chainId: '1284',
  },
  celo: {
    title: 'Celo',
    rpcUrl: 'https://forno.celo.org',
    explorerUrl: 'https://explorer.celo.org/',
    explorerApiUrl: 'https://explorer.celo.org/api',
    emoji: '🟩',
    chainId: '42220',
  },
  fantom: {
    title: 'Fantom',
    rpcUrl: 'https://rpc.ftm.tools/',
    explorerUrl: 'https://ftmscan.com/',
    explorerApiUrl: 'https://api.ftmscan.com/api',
    emoji: '👻',
    chainId: '250',
  },
  fantom_testnet: {
    title: 'Fantom Testnet',
    rpcUrl: 'https://rpc.testnet.fantom.network/',
    explorerUrl: 'https://testnet.ftmscan.com/',
    explorerApiUrl: 'https://api-testnet.ftmscan.com/api',
    emoji: '🧪',
    chainId: '4002',
  },
  boba: {
    title: 'Boba',
    rpcUrl: 'https://mainnet.boba.network',
    explorerUrl: 'https://blockexplorer.boba.network',
    explorerApiUrl: 'https://blockexplorer.boba.network/api',
    emoji: '🧋',
    chainId: '288',
  },
  okex: {
    title: 'OKEx',
    rpcUrl: 'https://exchainrpc.okex.org',
    explorerUrl: 'https://www.oklink.com/en/okc',
    explorerApiUrl: '',
    emoji: '🔵',
    chainId: '66',
  },
  fuse: {
    title: 'Fuse',
    rpcUrl: 'https://rpc.fuse.io',
    explorerUrl: 'https://explorer.fuse.io/',
    explorerApiUrl: 'https://explorer.fuse.io/api',
    emoji: '🧨',
    chainId: '122',
  },
  harmony: {
    title: 'Harmony',
    rpcUrl: 'https://rpc.hermesdefi.io',
    explorerUrl: 'https://explorer.harmony.one',
    explorerApiUrl: '',
    emoji: '1️⃣',
    chainId: '1666600000',
  },
  aurora: {
    title: 'Aurora',
    rpcUrl: 'https://mainnet.aurora.dev',
    explorerUrl: 'https://aurorascan.dev',
    explorerApiUrl: 'https://api.aurorascan.dev/api',
    emoji: '🅰️',
    chainId: '1313161554',
  },
  aurora_testnet: {
    title: 'Aurora Testnet',
    rpcUrl: 'https://betanet.aurora.dev',
    explorerUrl: 'https://testnet.aurorascan.dev',
    explorerApiUrl: 'https://api-testnet.aurorascan.dev/api',
    emoji: '🧪',
    chainId: '1313161556',
  },
  metis: {
    title: 'METIS',
    rpcUrl: 'https://andromeda.metis.io/?owner=1088',
    explorerUrl: 'https://andromeda-explorer.metis.io',
    explorerApiUrl: 'https://andromeda-explorer.metis.io/api',
    emoji: '🟩',
    chainId: '1088',
  },
  ewc: {
    title: 'Energy Web Chain',
    rpcUrl: 'https://rpc.energyweb.org',
    explorerUrl: 'http://explorer.energyweb.org',
    explorerApiUrl: 'https://explorer.energyweb.org/api-docs',
    emoji: '⚡',
    chainId: '246',
  },
  volta: {
    title: 'Volta - Energy Web Testnet',
    rpcUrl: 'https://volta-rpc.energyweb.org',
    explorerUrl: 'http://volta-explorer.energyweb.org',
    explorerApiUrl: 'https://volta-explorer.energyweb.org/api-docs',
    emoji: '⚡',
    chainId: '73799',
  },
  telos: {
    title: 'Telos',
    rpcUrl: 'https://mainnet.telos.net/evm',
    explorerUrl: 'https://www.teloscan.io/',
    explorerApiUrl: '',
    emoji: '🔵',
    chainId: '40',
  },
  telos_testnet: {
    title: 'Telos Testnet',
    rpcUrl: 'https://testnet.telos.net/evm',
    explorerUrl: 'https://testnet.teloscan.io/',
    explorerApiUrl: '',
    emoji: '🧪',
    chainId: '41',
  },
  skale_testnet:{
    title: 'Skale Testnet',
    rpcUrl: 'https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar',
    explorerUrl: 'https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com/',
    explorerApiUrl: '',
    emoji: '⚙️',
    chainId: '0x5a79c44e',
  }
}
