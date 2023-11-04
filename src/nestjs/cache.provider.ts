import { Injectable } from '@nestjs/common';
import Keyv from 'keyv';
import { AbstractCacheProvider } from '../cache/abstract.provider';

@Injectable()
export class CacheProvider extends AbstractCacheProvider {
  constructor(options: Keyv.Options<any>) {
    super(options);
  }
}
