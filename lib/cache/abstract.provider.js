"use strict";
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
exports.AbstractCacheProvider = void 0;
const keyv_1 = __importDefault(require("keyv"));
class AbstractCacheProvider {
    constructor(options) {
        this.options = options;
        const namespace = `${this.options.namespace || 'cache'}:`;
        this.prefix = namespace;
        this.globalTtl = options.ttl || 1000;
        this.cache = new keyv_1.default(Object.assign(Object.assign({}, options), { namespace }));
    }
    set(key, value, ttl) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cache.set(key, value, ttl || this.globalTtl);
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cache.get(key);
        });
    }
    getMany(keys) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cache.get(keys);
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cache.delete(key);
        });
    }
    has(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cache.has(key);
        });
    }
}
exports.AbstractCacheProvider = AbstractCacheProvider;
//# sourceMappingURL=abstract.provider.js.map