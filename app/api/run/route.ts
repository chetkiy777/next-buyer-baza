import { exec } from 'child_process';
import { NextRequest, NextResponse } from "next/server";

type Result = {
    status: string,
    message: string
}

export async function POST(req: Request, res: Response) {


    let result: Result = {
        status: "",
        message: ""
    } 

    exec('./php/run.sh', (error, stdout, stderr) => {
      if (error) {
        return console.error(`Error: ${error.message}`);
      }
      if (stderr) {
        return console.error(`stderr: ${stderr}`);
      }
      console.log(`stdout: ${stdout}`);
      return NextResponse.json({ output: stdout });
    });

    
     
    
}

