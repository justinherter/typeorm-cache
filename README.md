# Typeorm KeyV Cache

A typeorm cache provider based on [keyv](https://www.npmjs.com/package/keyv).

## Installation

```bash
# npm
npm i typeorm-keyv-cache keyv --save

# or yarn
yarn add typeorm-keyv-cache keyv
```

## Usage

```ts
import { createConnection } from 'typeorm'
import { KeyvCacheProvider } from 'typeorm-cache'

// In-memory cache
createConnection({
  // ... db config
  cache: {
    provider() {
      return new KeyvCacheProvider()
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
