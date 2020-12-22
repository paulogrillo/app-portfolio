const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    hr: 'hr'
}

module.exports = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths), 
}