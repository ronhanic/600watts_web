"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenicated_1 = require("../auth/authenicated");
//import { isAuthorized } from "../auth/authorized";
const controllers_1 = require("./controllers");
function routesConfig(app) {
    console.log("routesConfig calling /users");
    console.log(app.length);
    // app.post('/users',[isAuthenticated,isAuthorized({ hasRole: ['admin', 'manager'] })
    // ]);
    app.get('/users', authenicated_1.isAuthenticated, controllers_1.getauth);
}
exports.routesConfig = routesConfig;
//# sourceMappingURL=routes-config.js.map