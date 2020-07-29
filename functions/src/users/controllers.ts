import { Request, Response } from "express";
import * as admin from 'firebase-admin'

export async function getauth(req: Request, res: Response) {
   try {

    console.log("res.locals =",res.locals)

      const {  uid } = res.locals

     
        console.log("params uid =",uid)

        console.log("getting user")

       const user = await admin.auth().getUser(uid)
       console.log('user phone number ')
       console.log(user.phoneNumber)
       return res.status(200).send({ phone: user.phoneNumber })
      // return res.status(200).send({ user: mapUser(user) })
   } catch (err) {
       return handleError(res, err)
   }
}
function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
 }