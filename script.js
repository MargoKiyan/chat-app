const socket = io()
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
if (name) {
  appendMessage('You joined', 'system')
  socket.emit('new-user', name)
} else {
  appendMessage('Anonymous user joined', 'system')
  socket.emit('new-user', 'Anonymous')
}

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`, 'recipient')
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`, 'system')
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`, 'system', 'disconnect')
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value.trim()
  if (message) {
    appendMessage(`You: ${message}`, 'sender')
    socket.emit('send-chat-message', message)
    messageInput.value = ''
  }
})

function appendMessage(message, type = 'system', subType = '') {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  
  if (type === 'system') {
    messageElement.classList.add('message-system')
    if (subType === 'disconnect') {
      messageElement.classList.add('disconnect')
    }
  } else if (type === 'sender') {
    messageElement.classList.add('message-sender')
  } else if (type === 'recipient') {
    messageElement.classList.add('message-recipient')
  }
  
  messageContainer.append(messageElement)
  messageContainer.scrollTop = messageContainer.scrollHeight
}