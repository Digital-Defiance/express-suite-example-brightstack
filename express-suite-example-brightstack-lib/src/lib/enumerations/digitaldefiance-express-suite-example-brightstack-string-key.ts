import { createI18nStringKeys } from '@digitaldefiance/i18n-lib';

/**
 * Branded string keys for the DigitaldefianceExpressSuiteExampleBrightstack component.
 *
 * Created using `createI18nStringKeys` for type-safe i18n support.
 * Use `typeof DigitaldefianceExpressSuiteExampleBrightstackStringKey` when referencing the type.
 *
 * @example
 * ```typescript
 * import { DigitaldefianceExpressSuiteExampleBrightstackStringKey } from './enumerations/digitaldefiance-express-suite-example-brightstack-string-key';
 * import type { BrandedStringsCollection } from '@digitaldefiance/i18n-lib';
 *
 * const strings: BrandedStringsCollection<typeof DigitaldefianceExpressSuiteExampleBrightstackStringKey> = {
 *   [DigitaldefianceExpressSuiteExampleBrightstackStringKey.SiteTitle]: 'My Site',
 * };
 * ```
 */
export const DigitaldefianceExpressSuiteExampleBrightstackStringKey = createI18nStringKeys('DigitaldefianceExpressSuiteExampleBrightstack', {
  SiteTitle: 'siteTitle',
  SiteDescription: 'siteDescription',
  SiteTagline: 'siteTagline',
} as const);

/**
 * Type alias for the branded string key values.
 * Use this when you need to type a variable that holds a string key value.
 */
export type DigitaldefianceExpressSuiteExampleBrightstackStringKeyValue = typeof DigitaldefianceExpressSuiteExampleBrightstackStringKey[keyof typeof DigitaldefianceExpressSuiteExampleBrightstackStringKey];
