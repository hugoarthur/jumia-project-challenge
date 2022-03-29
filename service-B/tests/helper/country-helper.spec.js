const { getCountryByPhoneNumber } = require('../../helper/country-helper');

describe('Country helper unit tests', () => {

    test('it should return Cameroon', async () => {
        const country = getCountryByPhoneNumber('237 209967525');
        expect(country).toBe('Cameroon');
    });

    test('it should return Ethiopia', async () => {
        const country = getCountryByPhoneNumber('251 520250415');
        expect(country).toBe('Ethiopia');
    });

    test('it should return Morocco', async () => {
        const country = getCountryByPhoneNumber('212520661195');
        expect(country).toBe('Morocco');
    });

    test('it should return Mozambique', async () => {
        const country = getCountryByPhoneNumber('25889426803');
        expect(country).toBe('Mozambique');
    });

    test('it should return Uganda', async () => {
        const country = getCountryByPhoneNumber('256619013991');
        expect(country).toBe('Uganda');
    });

});
