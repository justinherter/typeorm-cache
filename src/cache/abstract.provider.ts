import Keyv from 'keyv';

export abstract class AbstractCacheProvider {
  cache: Keyv;
  globalTtl: number;
  prefix: string;

  constructor(private readonly options: Keyv.Options<any>) {
    const namespace = `${this.options.namespace || 'cache'}:`;
    this.prefix = namespace;
    this.globalTtl = options.ttl || 1000;
    this.cache = new Keyv({ ...options, namespace });
  }
  async set(key: string, value: unknown, ttl?: number): Promise<boolean> {
    return await this.cache.set(key, value, ttl || this.globalTtl);
  }
  async get(key: string): Promise<unknown> {
    return await this.cache.get(key);
  }
  async getMany(keys: string[]): Promise<unknown> {
    return await this.cache.get(keys);
  }
  async delete(key: string) {
    return await this.cache.delete(key);
  }
  async has(key: string) {
    return await this.cache.has(key);
  }
}
