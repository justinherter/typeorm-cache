# Typeorm KeyV Cache

A typeorm cache provider based on [keyv](https://www.npmjs.com/package/keyv).

## Installation

```bash
# npm
npm i typeorm-keyv-cache keyv --save

# or yarn
yarn add typeorm-keyv-cache keyv
```

## General Usage

```ts
// optional parameters for Keyv
const options: Keyv.Options<any> = {
  /**
   * Namespace for the current instance,
   * also becomes the cache key prefix and defaults to 'cache'.
   */
  namespace?: string | undefined;
  /** A custom serialization function. */
  serialize?: ((data: DeserializedData<Value>) => string) | undefined;
  /** A custom deserialization function. */
  deserialize?: ((data: string) => DeserializedData<Value> | undefined) | undefined;
  /** The connection string URI. */
  uri?: string | undefined;
  /** The storage adapter instance to be used by Keyv. */
  store?: Store<string | undefined> | undefined;
  /** Default TTL. Can be overridden by specififying a TTL on `.set()`. */
  ttl?: number | undefined;
  /** Specify an adapter to use. e.g `'redis'` or `'mongodb'`. */
  adapter?: 'redis' | 'mongodb' | 'mongo' | 'sqlite' | 'postgresql' | 'postgres' | 'mysql' | undefined;
  /** Enable compression option **/
  compression?: CompressionAdapter | undefined;
}

// General In-memory Cache
import { CacheProvider } from 'typeorm-keyv-cache'

const cache = new CacheProvider(options);

// General In-memory Cache Injectable with NestJS
@Injectable()
class SomeClass {
  constructor(private readonly cache: CacheProvider){}
}



import { createConnection } from 'typeorm'
import { CacheProvider } from 'typeorm-keyv-cache'


// General In-memory Cache
createConnection({
  // ... db config
  cache: {
    provider() {
      return new CacheProvider()
    },
  },
})

// Redis
createConnection({
  // ... db config
  cache: {
    provider() {
      return new KeyvCacheProvider('redis://user:pass@localhost:6379')
    },
  },
})

// ...
```

For more examples, visit [keyv documentation](https://www.npmjs.com/package/keyv#usage).

## License

[MIT](https://github.com/justinherter/typeorm-keyv-cache/blob/master/LICENSE)

Copyright (c) 2023, Justin Herter
