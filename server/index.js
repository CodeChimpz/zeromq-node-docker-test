const zmq = require('zeromq')
require('dotenv').config()

const sock = zmq.socket("pub")

const host = process.env.HOST +':'+ process.env.PORT
sock.bindSync(host)
console.log("Connected pub on host "+host)

setInterval(()=>{
    console.log("Sending positiv vibes!")
    sock.send(['Andrew Tate','Inshalah'])
},10000)