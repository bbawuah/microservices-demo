"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get('/route/:id', function (req, res) {
    console.log('test');
});