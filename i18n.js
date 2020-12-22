const NextI18Next = requeri('next-i18next').default

module.exports = new NextI18Next({
    otherLanguages: ['hr'],
    defaultNS: 'common',
    localeSubpaths:{
        hr: 'hr'
    },
    localePath: 'public/static/locales',
})