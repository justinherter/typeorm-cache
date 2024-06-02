import { CacheProvider } from '../nestjs';

describe('Cache Provider Testing ', () => {
  const cacheProvider = new CacheProvider({});
  const testKey = 'test';
  const testValue = 'value';
  it('Should instance of CacheProvider should be defined.', () => {
    expect(cacheProvider).toBeDefined();
  });
  it('Should set a value', async () => {
    const result: boolean = await cacheProvider.set(testKey, testValue);
    expect(result).toBeTruthy();
    expect(await cacheProvider.get(testKey)).toBe(testValue);
  });
  it('Should get many values', async () => {
    await cacheProvider.set(testKey, testValue);
    const result: boolean = await cacheProvider.set(`${testKey}2`, `${testValue}2`);
    const getResult = await cacheProvider.getMany([testKey, `${testKey}2`]);
    console.log('getResult: ', getResult);
    expect(result).toBeTruthy();
    expect(getResult).toEqual([testValue, `${testValue}2`]);
  });
  it('Should create a new namespace with serialization.', async () => {
    const cacheProvider2 = new CacheProvider({
      namespace: 'test',
      serialize: data => JSON.stringify(data),
      deserialize: data => JSON.parse(data),
    });
    await cacheProvider2.set(testKey, testValue);
    const result: boolean = await cacheProvider2.set(`${testKey}2`, `${testValue}2`);
    const getResult = await cacheProvider2.getMany([testKey, `${testKey}2`]);
    console.log('getResult: ', getResult);
    expect(result).toBeTruthy();
    expect(getResult).toEqual([testValue, `${testValue}2`]);
  });
});
