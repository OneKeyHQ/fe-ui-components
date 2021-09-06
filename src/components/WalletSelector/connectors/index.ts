import { AbstractConnectorArguments } from '@web3-react/types';
import { InjectedConnector } from "@web3-react/injected-connector";
import { OneKeyInjectedConnector } from './onekeyInjector';

export const buildMetaMaskConnector = (config?: AbstractConnectorArguments) => new InjectedConnector(config);

export const buildOneKeyConnector = (config?: AbstractConnectorArguments) => new OneKeyInjectedConnector(config);