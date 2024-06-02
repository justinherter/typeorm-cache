import Keyv from 'keyv';
import { AbstractCacheProvider } from '../cache/abstract.provider';
export declare class CacheProvider extends AbstractCacheProvider {
    constructor(options: Keyv.Options<any>);
}
