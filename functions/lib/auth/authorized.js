"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAuthorized(opts) {
    return (req, res, next) => {
        console.log("is authorized req=", req);
        // const { role, uid } = res.locals
        //  const { id } = req.params
        //   const {id} = uid
        //  console.log("checking id and uid" , uid)
        // console.log("id" , id)
        //    if (opts.allowSameUser && id && uid === id)
        //        return next();
        //     if (uid != null)
        //        return next();
        //    if (!role)
        //        return res.status(403).send();
        //    if (opts.hasRole.includes(role))
        //        return next();
        return res.status(403).send();
    };
}
exports.isAuthorized = isAuthorized;
//# sourceMappingURL=authorized.js.map