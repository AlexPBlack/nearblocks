module.exports = {
  locales: [
    'en',
    'kr',
    'id',
    'zh-cn',
    'zh-hk',
    'ru',
    'es',
    'vi',
    'ph',
    'fr',
    'jp',
    'th',
    'it',
  ],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home'],
    '/404': ['404'],
    'rgx:^/address': ['address', 'txns', 'token'],
    'rgx:^/exportdata': ['home'],
    'rgx:^/blocks': ['blocks', 'txns'],
    'rgx:^/txns': ['txns'],
    'rgx:^/hash': ['txns'],
    'rgx:^/charts': ['charts'],
    'rgx:^/tokentxns': ['token'],
    'rgx:^/token': ['token'],
    'rgx:^/events': ['home'],
    'rgx:^/nft-tokentxns': ['token'],
    'rgx:^/kb': ['kb'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`nearblock-translations/${lang}/${ns}.json`).then((m) => m.default),
};