"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __importDefault(require("../hostComponents/node"));
var plugin = function () {
    return {
        hostComponents: node_1.default,
    };
};
exports.default = plugin;
