import { Request, Response } from "express";

export function isAuthorized(opts: { hasRole: Array<'admin' | 'manager' | 'user'>, allowSameUser?: boolean }) {
   return (req: Request, res: Response, next: Function) => {

    console.log("is authorized req=", req)
       
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
   }
}

