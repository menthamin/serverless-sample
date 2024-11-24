"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const math_1 = require("../lib/math");
const handler = async (event) => {
    const { num1, num2 } = event.queryStringParameters || {};
    const result = (0, math_1.add)(Number(num1), Number(num2));
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `The sum of ${num1} and ${num2} is ${result}.`,
        }),
    };
};
exports.handler = handler;
