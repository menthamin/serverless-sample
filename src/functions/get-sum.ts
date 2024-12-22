import { add } from "../lib/math";

export const handler = async (event: any) => {
  const { num1, num2 } = event.queryStringParameters || {};
  const result = add(Number(num1), Number(num2));
  const ulid = require('ulid');

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `The sum of ${num1} and ${num2} is ${result}.`,
    }),
  };
};