const User = require('../models/user');
const braintree = require('braintree');
require('dotenv').config();

const gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'bgbnkkmx58cq8xhx',
    publicKey:    '6cvf52njknksn7yy',
    privateKey:   '9880b91eb016c2e1d4e7977a16b92404'
});
//reference to generate token from braintree
exports.generateToken = (req, res) => {
    gateway.clientToken.generate({}, function(err, response) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(response);
        }
    });
};

//client token is generated and pass the client token to frontend
exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.paymentMethodNonce;
    let amountFromTheClient = req.body.amount;
    // charge
    let newTransaction = gateway.transaction.sale(
        {
            amount: amountFromTheClient,
            paymentMethodNonce: nonceFromTheClient,
            options: {
                submitForSettlement: true
            }
        },
        (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.json(result);
            }
        }
    );
};