

document.addEventListener('DOMContentLoaded',function (){
  const messageForm = document.getElementById('message-form')
  const messageInput = document.getElementById('message-input')
  const chatContainer = document.getElementById('chat-container')
  console.log(messageForm)
  console.log(messageInput)
  console.log(chatContainer)
  messageForm.addEventListener('submit',function(e) {
    e.preventDefault()
    const message = messageInput.value
    console.log(message)
    messageInput.value = ''
    const messageLi = document.createElement('li')
    // is message something that look like 'message' or '<li>messasge</li>'
    messageLi.innerText=message
    console.log(messageLi)
    chatContainer.appendChild(messageLi)
  })
})
