const chatWindow = document.getElementById('chat-window');
const userInputForm = document.getElementById('user-input');
const messageInput = document.getElementById('message');


function appendName(messageElement, sender) {
    let name = ''
    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.classList.add(sender);
    if(sender !== 'Chat_GPT') {
        name = '';
        nameElement.classList.add('sendername')
        String(sender).split(' ').forEach((val) => {name = name + val[0]})
    } else{
        nameElement.classList.add('gptname')
    }
    const tooltip = document.createElement('span')
    tooltip.classList.add('tooltip')
    if (name !== 'Chat GPT') {
    tooltip.textContent = sender }
    nameElement.appendChild(tooltip)
    nameElement.textContent = name; 
    messageElement.appendChild(nameElement);
}

// Function to append a message to the chat window
function appendMessage(message, sender) {
    const chatelement = document.createElement('div')
    chatelement.classList.add('chatbox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    appendName(chatelement,sender)
    chatelement.appendChild(messageElement)
    chatWindow.appendChild(chatelement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to handle user input
async function handleUserInput(event) {
    event.preventDefault();
    document.getElementById('loader').style.display = 'flex'
    document.getElementsByClassName('container')[0].setAttribute('background-image','none')
    const userMessage = messageInput.value.trim();
    if (userMessage !== '') {
        appendMessage(userMessage, 'user');
        messageInput.value = '';

        // Send user message to the ChatGPT API and get the response
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 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'
                },
                body: JSON.stringify({
                    "model": "gpt-3.5-turbo",
                    'messages': [{'role': 'system', 'content': 'You are a user'}, {'role': 'user', 'content': userMessage}]
                })
            });
            
            const data = await response.json();
            const botMessage = data.choices[0].message.content;
            appendMessage(botMessage, 'Chat_GPT');
            document.getElementById('loader').style.display = 'none'
        } catch (error) {
            document.getElementById('loader').style.display = 'none'
            console.error('Error:', error);
        }
    }
}

// Attach event listener to the user input form
userInputForm.addEventListener('submit', handleUserInput);
