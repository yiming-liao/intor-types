import { Replacement } from "./base-types";

/**
 * Represents primitive types supported in rich replacements,
 * including string, number, boolean, and Date.
 */
export type RichPrimitive = string | number | boolean | Date;

/**
 * Represents serializable objects that provide a custom string representation.
 */
export type RichSerializable = { toString(): string };

/**
 * A formatter function that takes a string chunk and returns any formatted output.
 */
type RichFormatterFunction = (value: unknown, ...args: unknown[]) => unknown;

/**
 * Possible value types for rich replacements.
 * Can be a primitive, serializable object, formatter function, or null/undefined.
 */
export type ReplacementValue =
  | RichPrimitive
  | RichSerializable
  | RichFormatterFunction
  | null
  | undefined;

/**
 * A recursive replacement object that supports rich replacement values,
 * allowing complex nested interpolation structures.
 *
 * @example
 * ```ts
 * const replacements: RichReplacement = {
 *   name: "Alice",
 *   age: 30,
 *   isActive: true,
 *   birthday: new Date("1993-04-25"),
 *   formatter: (value, ...args) => `<b>${value}</b>`,
 *   nested: {
 *     score: 100,
 *     note: null,
 *   },
 * };
 * ```
 */
export type RichReplacement = { [key: string]: ReplacementValue | Replacement };
