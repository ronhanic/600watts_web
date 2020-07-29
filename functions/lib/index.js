"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
//import * as firebaseHelper from 'firebase-functions-helper';
//import * as bodyParser from "body-parser";
const express_1 = require("express");
admin.initializeApp(functions.config().firebase);
//const db = admin.firestore();
const getAuthToken = (req, res, next) => {
    if (req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer') {
        req.authToken = req.headers.authorization.split(' ')[1];
    }
    else {
        req.authToken = null;
    }
    next();
};
exports.checkIfAuthenticated = (req, res, next) => {
    getAuthToken(req, res, async () => {
        try {
            const { authToken } = req;
            const userInfo = await admin
                .auth()
                .verifyIdToken(authToken);
            req.authId = userInfo.uid;
            return next();
        }
        catch (e) {
            return res
                .status(401)
                .send({ error: 'You are not authorized to make this request' });
        }
    });
};
const router = express_1.Router();
//const contactsCollection = 'contacts';
//router.use('/api/v1', app);
//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: false }));
// webApi is your functions name, and you will pass main as 
// a parameter
//export const webApi = functions.https.onRequest(main);
// View all contacts
router.get('/articles', exports.checkIfAuthenticated, async (_, res) => {
    return res.send('{}');
});
exports.default = router;
//# sourceMappingURL=index.js.map