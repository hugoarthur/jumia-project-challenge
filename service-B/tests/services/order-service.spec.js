const orderService = require('../../app/services/orders');

describe('Cargo Manifest unit tests', () => {
    test('it should calculate', async () => {
        const manifest = await orderService.getCargoManifest();
        console.log(manifest);
        expect(manifest).toBeTruthy();
    });
});
