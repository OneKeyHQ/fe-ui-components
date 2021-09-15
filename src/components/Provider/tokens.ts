import useSWR from 'swr';
import { CDNChainNameMap, ERC20ChainIdMap } from './chain';
import { CDN_PREFIX } from '../utils';

type TokenItem = {
  /** 当前 Token 的合约地址 */
  address: string;
  /** 当前 Token decimals 位数，如：18 */
  decimals: number;
  /** 当前 Token 名称，如：Wrapped BNB */
  name: string;
  /** 当前 Token 标识，如：WBNB */
  symbol: string;
};

const CDNFetcher = (url: string): Promise<TokenItem[]> => {
  const ts = new Date().getTime();
  return fetch(`${CDN_PREFIX}${url}?ts=${ts}`).then(r => r.json());
}

export const useTokens = (chainId: ERC20ChainIdMap) => {
  const tokenPath = CDNChainNameMap[chainId];
  if (!tokenPath) {
    throw new Error(`
      '[@onekeyhq/ui-components]: useTokens() get unknown params ${JSON.stringify(chainId)}',
      should be one of ${Object.keys(CDNChainNameMap).join(',')}
    `);
  }

  const cdnTokenConfigPath = `app_configs/${tokenPath}_tokens.json`
  const { data = [] } = useSWR<TokenItem[]>(cdnTokenConfigPath, CDNFetcher);
  return data;
}

export const useToken = (chainId: ERC20ChainIdMap, tokenAddress: string): TokenItem | undefined => {
  const tokens = useTokens(chainId);
  return tokens.find(token => token.address === tokenAddress);
}
