const zmq = require('zeromq')
require('dotenv').config()
const sock = zmq.socket("sub")

const host = process.env.HOST +':'+ process.env.PORT

sock.connect(host)
sock.subscribe('Andrew Tate')
console.log("Connected sub on host "+host)

sock.on("message",(topic,msg)=>{
    console.log(
        `New hot take from ${topic} : ${msg}`
    )
})