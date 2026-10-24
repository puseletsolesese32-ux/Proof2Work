// Metadata for all 12 official South African languages.
// SASL is a visual/sign language and is listed here for reference, but its
// content cannot be rendered as text; see src/utils/lang.js for the fallback.
const SASL_NOTE =
  'South African Sign Language is a visual language; content is provided in written English fallback. Provide signed interpretation where available.';

const LANGUAGES = [
  { code: 'af', englishName: 'Afrikaans', nativeName: 'Afrikaans' },
  { code: 'en', englishName: 'English', nativeName: 'English' },
  { code: 'nr', englishName: 'isiNdebele', nativeName: 'isiNdebele' },
  { code: 'xh', englishName: 'isiXhosa', nativeName: 'isiXhosa' },
  { code: 'zu', englishName: 'isiZulu', nativeName: 'isiZulu' },
  { code: 'nso', englishName: 'Sepedi', nativeName: 'Sepedi' },
  { code: 'st', englishName: 'Sesotho', nativeName: 'Sesotho' },
  { code: 'tn', englishName: 'Setswana', nativeName: 'Setswana' },
  { code: 'ss', englishName: 'siSwati', nativeName: 'siSwati' },
  { code: 've', englishName: 'Tshivenda', nativeName: 'Tshivenda' },
  { code: 'ts', englishName: 'Xitsonga', nativeName: 'Xitsonga' },
  {
    code: 'sas',
    englishName: 'South African Sign Language',
    nativeName: 'South African Sign Language',
  },
];

const VALID_LANG_CODES = LANGUAGES.map((l) => l.code);
const SASL_CODE = 'sas';

module.exports = { LANGUAGES, VALID_LANG_CODES, SASL_CODE, SASL_NOTE };
