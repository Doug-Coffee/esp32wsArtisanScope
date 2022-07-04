const WebSocket = require('ws')
const url = 'ws://192.168.29.20/ws'
const connection = new WebSocket(url)

connection.onopen = () => {
  console.log("Connection Opened")
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}