"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
async function isAuthenticated(req, res, next) {
    const { authorization } = req.headers;
    console.log("authorization=", req.headers);
    if (!authorization)
        return res.status(401).send({ message: 'Unauthorized' });
    if (!authorization.startsWith('Bearer'))
        return res.status(401).send({ message: 'Unauthorized' });
    const split = authorization.split('Bearer ');
    if (split.length !== 2)
        return res.status(401).send({ message: 'Unauthorized' });
    const token = split[1];
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log("xdecodedToken", JSON.stringify(decodedToken));
        console.log("locals");
        //  res.locals = { ...res.locals, uid: decodedToken.uid, role: decodedToken.role, email: decodedToken.email }
        res.locals = Object.assign(Object.assign({}, res.locals), { uid: decodedToken.uid });
        // res.locals = decodedToken.uid
        //   console.log(res.locals)
        console.log("calling next");
        return next();
    }
    catch (err) {
        console.error(`${err.code} -  ${err.message}`);
        return res.status(401).send({ message: 'Unauthorized' });
    }
}
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=authenicated.js.map