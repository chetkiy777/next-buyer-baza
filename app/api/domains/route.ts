import { NextRequest, NextResponse } from "next/server";



 const baseURL = 'https://api.monday.com/v2'

export async function GET(req: Request, res: Response) {

  // let query = "query { boards (ids: 1598927804) {items_page {cursor items {id name }}}}";
  // const token = process.env.MONDAY_API_TOKEN

  // return await fetch('https://api.monday.com/v2', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization' : token,
  //       'API-Version' : '2023-04'
  //      },
  //      body: JSON.stringify({
  //        query: query
  //      })
  //     })
    
}