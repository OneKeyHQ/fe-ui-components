/** ERC20 的 chain 映射关系，所有相关的配置均以 chainId 为 key 进行映射 */
export enum ERC20ChainIdMap {
  ETH = 1,
  BSC = 51,
};

/**
 * Chain 的 symbol 名字和对应七牛 CDN 名称的映射，对应路径中 app_configs/${tokenPath}_tokens.json
 * 例如 BSC 的 CDN 路径为 app_configs/bsc_tokens.json
 */
export const CDNChainNameMap: Record<ERC20ChainIdMap | string, string> = {
  [ERC20ChainIdMap.ETH]: 'eth',
  [ERC20ChainIdMap.BSC]: 'bsc',
  'ALGO': 'algo',
  'arbitrum': 'arbitrum',
  'avalanche': 'avalanche',
  'fantom': 'fantom',
  'heco': 'heco',
  'okt': 'okt',
  'optimism': 'optimism',
  'polygon': 'polygon',
  'sol': 'sol',
  'talgo': 'talgo',
  'tbsc': 'tbsc',
  'teth': 'teth',
  'tpolygon': 'tpolygon',
  'xdai': 'xdai',
} as const;

type ChainItemConfig = {
  symbol: string;
  chainId: number;
};

/** ERC20 以 id 为 key, 此处强制指定类型收敛 */
export const ERC20ChainConfig: Record<ERC20ChainIdMap, ChainItemConfig> = {
  [ERC20ChainIdMap.ETH]: {
    symbol: 'ETH',
    chainId: 1,

  },
  [ERC20ChainIdMap.BSC]: {
    symbol: 'BSC',
    chainId: 1,
  }
} as const;