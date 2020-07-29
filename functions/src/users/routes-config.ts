import { Application } from "express";

import { isAuthenticated } from "../auth/authenicated";
//import { isAuthorized } from "../auth/authorized";
import { getauth } from "./controllers";

export function routesConfig(app: Application) {
   console.log("routesConfig calling /users")
   console.log(app.length)
   // app.post('/users',[isAuthenticated,isAuthorized({ hasRole: ['admin', 'manager'] })
   // ]);

   app.get('/users',isAuthenticated,getauth)
   ;
}
