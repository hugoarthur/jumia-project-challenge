
const getCountryByPhoneNumber = (phone_number) => {
    switch (true) {
        case AVAILABLE_COUNTRIES_REGEX.CAMEROON.test(phone_number):
            return COUNTRIES.CAMEROON;
        case AVAILABLE_COUNTRIES_REGEX.ETHIOPIA.test(phone_number):
            return COUNTRIES.ETHIOPIA;
        case AVAILABLE_COUNTRIES_REGEX.MOROCCO.test(phone_number):
            return COUNTRIES.MOROCCO;
        case AVAILABLE_COUNTRIES_REGEX.MOZAMBIQUE.test(phone_number):
            return COUNTRIES.MOZAMBIQUE;
        case AVAILABLE_COUNTRIES_REGEX.UGANDA.test(phone_number):
            return COUNTRIES.UGANDA;
        default:
            return null;
    }
}

module.exports = {
    getCountryByPhoneNumber
}

const AVAILABLE_COUNTRIES_REGEX = {
    CAMEROON: /237\ ?[2368]\d{7,8}$/,
    ETHIOPIA: /251\ ?[1-59]\d{8}$/,
    MOROCCO: /212\ ?[5-9]\d{8}$/,
    MOZAMBIQUE: /258\ ?[28]\d{7,8}$/,
    UGANDA: /256\ ?\d{9}$/
}

const COUNTRIES = {
    CAMEROON: 'Cameroon',
    ETHIOPIA: 'Ethiopia',
    MOROCCO: 'Morocco',
    MOZAMBIQUE: 'Mozambique',
    UGANDA: 'Uganda'
}
