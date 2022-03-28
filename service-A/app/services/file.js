const { Duplex } = require('stream');
const csvtojson = require('csvtojson');
const { createInterface } = require('readline');
const fs = require('fs');

const orderIntegration = require('../integration/service-b');

const processUploadedFile = (file) => {
    const array = [];
    const stream = fs.createReadStream(file.file);
    let count = 0;
    stream.on('data', async (row) => {
        try {
            const tmp = new Duplex();
            tmp.push(row);
            tmp.push(null);
            const input = tmp.pipe(csvtojson({ delimiter: ',', noheader: count > 0 }));
            count++;
            const reader = createInterface({ input, crlfDelay: Infinity });
            for await (const line of reader) {
                try {
                    const object = JSON.parse(line);
                    if (object['id']&&
                        object['email']&&
                        object['phone_number']&&
                        object['parcel_weight']) {
                        const order = await orderIntegration.createOrder(object);
                        console.log(order);
                    } else {
                        console.warn(`Object ${object['id']} was not saved`);
                    }
                } catch (error) {
                    console.error(error);
                    throw error;
                }
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    });

    stream.on('end', () => {
        console.log(array[array.length-1]);
        console.log(array.length);
    });
}

module.exports = {
    processUploadedFile
}