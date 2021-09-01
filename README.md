# Usage

You can replace the non-ASCII characters from a string:

    const { replacer } = require('special-chars-replacer')

    console.log(replacer('España'))

The expected output will be:

    Espana

Supported language characters are **Spanish** and **Portuguese**.