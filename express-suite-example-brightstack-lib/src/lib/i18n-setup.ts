import {
  createI18nSetup,
  LanguageCodes,
} from '@digitaldefiance/i18n-lib';
import { createSuiteCoreComponentPackage } from '@digitaldefiance/suite-core-lib';
import { AppConstants } from './constants';
import { DigitaldefianceExpressSuiteExampleBrightstackStringKey } from './enumerations/digitaldefiance-express-suite-example-brightstack-string-key';
import { Strings } from './strings-collection';

export const ComponentId = 'DigitaldefianceExpressSuiteExampleBrightstack';

const setup = createI18nSetup({
  componentId: ComponentId,
  stringKeyEnum: DigitaldefianceExpressSuiteExampleBrightstackStringKey,
  strings: {
    [LanguageCodes.EN_US]: Strings[LanguageCodes.EN_US],
    [LanguageCodes.EN_GB]: Strings[LanguageCodes.EN_GB],
    [LanguageCodes.FR]: Strings[LanguageCodes.FR],
    [LanguageCodes.ES]: Strings[LanguageCodes.ES],
    [LanguageCodes.DE]: Strings[LanguageCodes.DE],
    [LanguageCodes.ZH_CN]: Strings[LanguageCodes.ZH_CN],
    [LanguageCodes.JA]: Strings[LanguageCodes.JA],
    [LanguageCodes.UK]: Strings[LanguageCodes.UK],
  },
  aliases: ['DigitaldefianceExpressSuiteExampleBrightstackStringKey'],
  constants: AppConstants,
  libraryComponents: [createSuiteCoreComponentPackage()],
});

export const i18nEngine = setup.engine;
export const i18nContext = setup.context;
export const translate = setup.translate;
export const safeTranslate = setup.safeTranslate;
