import { ulid } from 'ulid'

export function add(a: number, b: number): number {
  console.log("import ulid for bundling test", ulid())
  return a + b;
}