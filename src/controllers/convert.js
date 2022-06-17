const { getLatestRates } = require('../models/rates');

const convert = async (_req, res) => {
    try {
        const amount = Number(_req.params.amount);
        const fromCurrency = String(_req.params.fromCurrency);
        const toCurrency = String(_req.params.toCurrency);

        const rates = await getLatestRates();

        const mediator = amount / rates[fromCurrency];
        const result = mediator * rates[toCurrency];

        res.status(200).json(result);
    }
    catch (err) {
        logServerErrorAndRespond(err, 'Conversion Error', res);
    }
}


function logServerErrorAndRespond(err, friendlyMessage, res, statusCode = 500) {
    console.log(friendlyMessage, err);
    res.status(statusCode).send(`${friendlyMessage}: ${err.message}`);
}


exports.convert = convert;
