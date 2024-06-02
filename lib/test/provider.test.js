"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_1 = require("../nestjs");
describe('Cache Provider Testing ', () => {
    const cacheProvider = new nestjs_1.CacheProvider({});
    it('Should define an instance of CacheProvider', () => {
        expect(cacheProvider).toBeDefined();
    });
});
//# sourceMappingURL=provider.test.js.map