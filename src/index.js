document.addEventListener('DOMContentLoaded',function (){
  const apiAddress = 'http://192.168.5.84:3000/api/v1'
  const messageForm = document.getElementById('message-form')
  const messageInput = document.getElementById('message-input')
  const chatContainer = document.getElementById('chat-container')
  const sendMessageButton = document.getElementById('send-message')
  const user = prompt("Who are you?????")
  sendMessageButton.innerText = `${user} says`


  function fetchMessages() {
    console.log('fasdf')
    fetch(`${apiAddress}/messages`).then(resp=>resp.json()).then(data=>{
      const messages = data.map(message=>{
        let whosmessage
        user === message.alias ? whosmessage = 'message my-message' :  whosmessage = 'message others-message'
        return `<div class='${whosmessage}'><p><span>${message.alias}: ${message.message}</span></p></div>`
      })
      chatContainer.innerHTML = messages.join('')
    })
  }

  setInterval(fetchMessages,500)





  messageForm.addEventListener('submit',function(e) {
    e.preventDefault()
    const message = messageInput.value

    // Create a new message
    const messageCreateAddress = `${apiAddress}/messages`
    const headers = {
      'Content-Type': 'application/json'
    }
    const data = {
      alias:user,
      message:message
    }
    let init = {
      headers:headers,
      method:'POST',
      body:JSON.stringify(data)
    }

    fetch(messageCreateAddress,init)
    .then(r=>r.json())
    .then(data=>{
      messageInput.value = ''
    })
  })
})
