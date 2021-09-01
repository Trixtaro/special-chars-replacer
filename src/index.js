const specialChars = {
    // lowercase
    'á':'a',
    'à':'a',
    'ã':'a',
    'é':'e',
    'è':'e',
    'ê':'e',
    'í':'i',
    'ì':'i',
    'ó':'o',
    'ò':'o',
    'ô':'o',
    'ú':'u',
    'ù':'u',
    'ñ':'n',
    'ç':'c',
    // uppercase
    'Á':'A',
    'À':'A',
    'Ã':'A',
    'É':'E',
    'È':'E',
    'Ê':'E',
    'Í':'I',
    'Ì':'I',
    'Ó':'O',
    'Ò':'O',
    'Ô':'O',
    'Ú':'U',
    'Ù':'U',
    'Ñ':'N',
    'Ç':'C'
}

const replacer = (str) => {

    let newString = ''

    for (let i=0; i<str.length; i++)
        newString += specialChars[str.charAt(i)] || str.charAt(i)

    return newString;
}

module.exports = {
    replacer
};