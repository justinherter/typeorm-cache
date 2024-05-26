import Keyv from 'keyv';
export declare abstract class AbstractCacheProvider {
    private readonly options;
    cache: Keyv;
    globalTtl: number;
    prefix: string;
    constructor(options: Keyv.Options<any>);
    set(key: string, value: unknown, ttl?: number): Promise<boolean>;
    get(key: string): Promise<unknown>;
    getMany(keys: string[]): Promise<unknown>;
    delete(key: string): Promise<boolean>;
    has(key: string): Promise<boolean>;
}
