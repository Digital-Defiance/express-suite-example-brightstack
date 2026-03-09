import { createI18nStringKeys } from '@digitaldefiance/i18n-lib';

/**
 * Branded string keys for the DigitaldefianceExpressSuiteExampleBrightchain component.
 *
 * Created using `createI18nStringKeys` for type-safe i18n support.
 * Use `typeof DigitaldefianceExpressSuiteExampleBrightchainStringKey` when referencing the type.
 *
 * @example
 * ```typescript
 * import { DigitaldefianceExpressSuiteExampleBrightchainStringKey } from './enumerations/digitaldefiance-express-suite-example-brightchain-string-key';
 * import type { BrandedStringsCollection } from '@digitaldefiance/i18n-lib';
 *
 * const strings: BrandedStringsCollection<typeof DigitaldefianceExpressSuiteExampleBrightchainStringKey> = {
 *   [DigitaldefianceExpressSuiteExampleBrightchainStringKey.SiteTitle]: 'My Site',
 * };
 * ```
 */
export const DigitaldefianceExpressSuiteExampleBrightchainStringKey = createI18nStringKeys('DigitaldefianceExpressSuiteExampleBrightchain', {
  SiteTitle: 'siteTitle',
  SiteDescription: 'siteDescription',
  SiteTagline: 'siteTagline',
} as const);

/**
 * Type alias for the branded string key values.
 * Use this when you need to type a variable that holds a string key value.
 */
export type DigitaldefianceExpressSuiteExampleBrightchainStringKeyValue = typeof DigitaldefianceExpressSuiteExampleBrightchainStringKey[keyof typeof DigitaldefianceExpressSuiteExampleBrightchainStringKey];
