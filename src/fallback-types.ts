import { Locale } from "./base-types";

/**
 * A map that defines fallback locales for each base locale.
 *
 * When a message is missing for a given locale, the system will attempt to find the message
 * by falling back to the locales listed here, in the specified order.
 *
 * For example, if `"en-AU"` is missing a message, the system may try `"en-GB"` or `"en"` as fallback.
 *
 * @example
 * ```ts
 * const fallbacks: FallbackLocalesMap = {
 *   "en-AU": ["en-GB", "en"],
 *   "zh-TW": ["zh-HK", "zh"]
 * };
 * ```
 */
export type FallbackLocalesMap = Partial<Record<Locale, Locale[]>>;
