const zmq = require('zeromq')
require('dotenv').config()

const sock = zmq.socket("pub")

const port = process.env.IP +':'+ process.env.PORT
sock.bindSync(port)
console.log("Connected pub on host "+port)

setInterval(()=>{
    console.log("Sending positiv vibes!")
    sock.send(['Andrew Tate','Inshalah'])
},10000)