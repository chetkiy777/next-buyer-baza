import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req = NextRequest, res = NextResponse) {
  const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM5ODM4NjU5NSwiYWFpIjoxMSwidWlkIjo2NDg0Nzk1OSwiaWFkIjoiMjAyNC0wOC0xN1QxMToyNjozNi4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjQ5NTQ2NjYsInJnbiI6ImV1YzEifQ.Se0m4OiENC2jbA0Up_itSbEdYEZtn3dNkp-PrQThf-A'
  let query = '{ boards (ids:1598927804) {  name items_page { items { name column_values {id type text} } } } }';

    let mondayData = await axios("https://api.monday.com/v2", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiToken,
         },
         body: JSON.stringify({
           'query': query
         })
        }).then(res => res.json)
        .then(res => console.log(res.data))



    return new NextResponse(mondayData)
}

