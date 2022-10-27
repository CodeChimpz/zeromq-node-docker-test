const zmq = require('zeromq')
require('dotenv').config()
const sock = zmq.socket("sub")

const port = process.env.IP +':'+ process.env.PORT

sock.connect(port)
sock.subscribe('Andrew Tate')
console.log("Connected sub on host "+port)

sock.on("message",(topic,msg)=>{
    console.log(
        `New hot take from ${topic} : ${msg}`
    )
})