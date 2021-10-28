import { useIntl } from '../Intl';

/** ERC20 的 chain 映射关系，所有相关的配置均以 chainId 为 key 进行映射 */
export enum ERC20ChainIdMap {
  ETH = 1,
  BSC = 56,
  OEC = 65,
  xDai = 100,
  HECO = 128,
  POLYGON = 137,
};

type ChainItemConfig = {
  symbol: string;
  chainId: ERC20ChainIdMap;
  chainIdHex: string;
  displayName: string;
  rpc: string[];
  isTestNet?: boolean;
};

export const useERC20ChainMap = (): Record<ERC20ChainIdMap, ChainItemConfig> => {
  const intl = useIntl();
  return {
    [ERC20ChainIdMap.ETH]: {
      symbol: 'ETH',
      chainId: ERC20ChainIdMap.ETH,
      chainIdHex: ERC20ChainIdMap.ETH.toString(16),
      displayName: intl.formatMessage({}),
      rpc: ['https://'],
    },
    [ERC20ChainIdMap.BSC]: {
      symbol: 'BSC',
      chainId: ERC20ChainIdMap.BSC,
      chainIdHex: ERC20ChainIdMap.BSC.toString(16),
      displayName: intl.formatMessage({}),
      rpc: [''],
    },
    [ERC20ChainIdMap.HECO]: {
      symbol: 'HECO',
      chainId: ERC20ChainIdMap.HECO,
      chainIdHex: ERC20ChainIdMap.HECO.toString(16),
      displayName: intl.formatMessage({}),
      rpc: [''],
    },
    [ERC20ChainIdMap.OEC]: {
      symbol: 'OEC',
      chainId: ERC20ChainIdMap.OEC,
      chainIdHex: ERC20ChainIdMap.OEC.toString(16),
      displayName: intl.formatMessage({}),
      rpc: [''],
    },
    [ERC20ChainIdMap.POLYGON]: {
      symbol: 'POLYGON',
      chainId: ERC20ChainIdMap.POLYGON,
      chainIdHex: ERC20ChainIdMap.POLYGON.toString(16),
      displayName: intl.formatMessage({}),
      rpc: [''],
    },
    [ERC20ChainIdMap.xDai]: {
      symbol: 'xDai',
      chainId: ERC20ChainIdMap.xDai,
      chainIdHex: ERC20ChainIdMap.xDai.toString(16),
      displayName: intl.formatMessage({}),
      rpc: [''],
    },
  };
};

export const useERC20ChainList = () => {
  const chains = useERC20ChainMap();
  return Object.entries(chains).reduce((memo, curr) => [...memo, curr[1]], [] as ChainItemConfig[]);
}

/**
 * Chain 的 symbol 名字和对应七牛 CDN 名称的映射，对应路径中 app_configs/${tokenPath}_tokens.json
 * 例如 BSC 的 CDN 路径为 app_configs/bsc_tokens.json
 */
export const CDNChainNameMap: Record<ERC20ChainIdMap | string, string> = {
  [ERC20ChainIdMap.ETH]: 'eth',
  [ERC20ChainIdMap.BSC]: 'bsc',
  [ERC20ChainIdMap.HECO]: 'heco',
  [ERC20ChainIdMap.OEC]: 'okt',
  [ERC20ChainIdMap.POLYGON]: 'polygon',
  [ERC20ChainIdMap.xDai]: 'xdai',
} as const;
