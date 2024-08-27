import { NextRequest, NextResponse } from "next/server";
import { db } from "../../firebaseConfig";
import { addDoc, collection, getDocs, getDoc, where, query, doc, getDocFromCache } from "firebase/firestore";
import bcrypt from "bcrypt"


type Result = {
    status: string,
    message: string
}

// const connectionType = process.env.CONNETCTION_TYPE 
// const host = ''

// if (connectionType === 'dev') {
//     host = ''
// }


export async function POST(req: Request, res: Response) {

    const body = await req.json()
    const {email, password} = body

    let result: Result = {
        status: "",
        message: ""
    } 

    const usersRef = collection(db, "users")
    const q = query(usersRef, where("email", "==", email.toString()));
    const querySnapshots = await getDocs(q)


    let savedPass = ""

    if (querySnapshots) {
        querySnapshots.forEach((doc) =>  {
            const data = doc.data()

            if (data.hashPass) {
                savedPass = data.hashPass
            }
          });
    }

    let hashResult = await bcrypt.compare(password, savedPass)

    if (hashResult) {
        result.status = "success";
        result.message = "Welcome. You login!"

    } else {
        result.status = "error";
        result.message = "Incorrect password! Try agin"
    }
     
    return NextResponse.json(result)
    
}