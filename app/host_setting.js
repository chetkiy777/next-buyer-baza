const connectionType = process.env.CONNETCTION_TYPE
let host = ''

if (connectionType === 'dev') {
    host = 'http://localhost:3000'
} else {
    host = 'https://next-buyer-baza.vercel.app'
}


export {
    host,
}