const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/test'
const mongoose = require('mongoose');

const orderService = require('../../app/services/orders');

describe('Cargo Manifest unit tests', () => {

    beforeAll( async () => {
        mongoose.connect(MONGO_URL);
        await orderService.create(getOrders());
    });

    afterAll( async () => {
        await orderService.deleteMany({});
        mongoose.connection.close();
    });

    test('it should calculate', async () => {
        const manifest = await orderService.getCargoManifest();
        console.log(manifest);
        expect(manifest).not.toBeNull();
    });
});

function getOrders() {
    return [
        {id: 1, email: 'email1@email.com', phone_number: '237 209993809', parcel_weight: 24.45},
        {id: 2, email: 'email2@email.com', phone_number: '258 852828436', parcel_weight: 1.33},
        {id: 3, email: 'email3@email.com', phone_number: '256 217813782', parcel_weight: 15.16},
        {id: 4, email: 'email4@email.com', phone_number: '251511056331', parcel_weight: 9.73},
        {id: 5, email: 'email5@email.com', phone_number: '251 543636241', parcel_weight: 13.93},
        {id: 6, email: 'email6@email.com', phone_number: '256 347564232', parcel_weight: 1.27},
        {id: 7, email: 'email7@email.com', phone_number: '256720708096', parcel_weight: 8.71},
        {id: 8, email: 'email8@email.com', phone_number: '256727281921', parcel_weight: 1.42},
        {id: 9, email: 'email9@email.com', phone_number: '256286610566', parcel_weight: 12.55},
        {id: 10,email: 'email10@email.com', phone_number: '212828477226', parcel_weight: 14.40}
    ];
}
