"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmCacheProvider = void 0;
const crypto_1 = require("crypto");
const keyv_1 = __importDefault(require("keyv"));
const common_1 = require("@nestjs/common");
const abstract_provider_1 = require("../cache/abstract.provider");
let TypeOrmCacheProvider = class TypeOrmCacheProvider extends abstract_provider_1.AbstractCacheProvider {
    constructor(options) {
        super(Object.assign(Object.assign({}, options), { namespace: (options === null || options === void 0 ? void 0 : options.namespace) || 'typeorm:cache:' }));
    }
    generateIdentifier(query) {
        return query && `${(0, crypto_1.createHash)('md5').update(query).digest('hex')}`;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    synchronize(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getFromCache(options, queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const { identifier, query, duration } = options;
            const key = `${this.prefix}${identifier || this.generateIdentifier(query || '')}`;
            const result = yield this.cache.get(key);
            return (result && {
                identifier: key,
                duration,
                query,
                result,
            });
        });
    }
    setInCache(options, savedCache, queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const { identifier, query, duration, result } = options;
            const key = `${this.prefix}${identifier || this.generateIdentifier(query || '')}`;
            yield this.cache.set(key, result, duration);
        });
    }
    isExpired(savedCache) {
        return false;
    }
    clear(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cache.clear();
        });
    }
    remove(identifiers, queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const key of identifiers) {
                const prefixedKey = `${this.prefix}${key}`;
                yield this.cache.delete(prefixedKey);
            }
        });
    }
};
exports.TypeOrmCacheProvider = TypeOrmCacheProvider;
exports.TypeOrmCacheProvider = TypeOrmCacheProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], TypeOrmCacheProvider);
//# sourceMappingURL=typeorm.cache.provider.js.map