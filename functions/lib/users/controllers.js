"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
async function getauth(req, res) {
    try {
        console.log("res.locals =", res.locals);
        const { uid } = res.locals;
        console.log("params uid =", uid);
        console.log("getting user");
        const user = await admin.auth().getUser(uid);
        console.log('user phone number ');
        console.log(user.phoneNumber);
        return res.status(200).send({ phone: user.phoneNumber });
        // return res.status(200).send({ user: mapUser(user) })
    }
    catch (err) {
        return handleError(res, err);
    }
}
exports.getauth = getauth;
function handleError(res, err) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}
//# sourceMappingURL=controllers.js.map