document.addEventListener('DOMContentLoaded',function (){
  const apiAddress = 'http://192.168.5.84:3000/api/v1'
  const messageForm = document.getElementById('message-form')
  const messageInput = document.getElementById('message-input')
  const chatContainer = document.getElementById('chat-container')
  const user = prompt("Who are you?????")
  console.log(messageForm)
  console.log(messageInput)
  console.log(chatContainer)

  function fetchMessages() {
    console.log('fasdf')
    fetch(`${apiAddress}/messages`).then(resp=>resp.json()).then(data=>{
      const messages = data.map(message=>{
        return `<div>${message.alias}: ${message.message}</div>`
      })
      chatContainer.innerHTML = messages.join('')
    })
  }

  setInterval(fetchMessages,2000)





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
    // .then(r=>r.json())
    // .then(data=>{
    //   const messageLi = document.createElement('li')
    //   // is message something that look like 'message' or '<li>messasge</li>'
    //   messageLi.innerText=`${user}: ${data.message}`
    //   console.log(messageLi)
    //   chatContainer.appendChild(messageLi)
    //   messageInput.value = ''
    // })


    // Add message to DOM without sending
    // const message = messageInput.value
    // console.log(message)
    // messageInput.value = ''





  })
})
