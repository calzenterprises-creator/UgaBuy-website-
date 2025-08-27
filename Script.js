// Cart Logic
let cartCount = 0;
const badge = document.querySelector('.badge');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    badge.textContent = cartCount;
    const name = button.parentElement.getAttribute('data-name');
    alert(`${name} added to cart!`);
  });
});

// Chat Widget
const chatToggle = document.getElementById('chatToggle');
const chatBody = document.getElementById('chatBody');
const messages = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const quickReplies = document.getElementById('quickReplies');

chatToggle.addEventListener('click', () => {
  if (chatBody.style.display === 'none') {
    chatBody.style.display = 'flex';
    chatToggle.querySelector('i').style.transform = 'rotate(45deg)';
  } else {
    chatBody.style.display = 'none';
    chatToggle.querySelector('i').style.transform = 'rotate(0deg)';
  }
});

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  messages.appendChild(messageDiv);
  messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  userInput.value = '';

  // AI Response
  setTimeout(() => {
    let reply = "Thanks! A support agent will reply shortly.";
    const lower = text.toLowerCase();
    if (lower.includes('hello') || lower.includes('hi')) reply = "Hi! Welcome to Uga Buy. How can I help?";
    else if (lower.includes('new')) reply = "Check out our Kitenge bags and Beaded jewelry!";
    else if (lower.includes('track')) reply = "Please provide your order ID to track.";
    else if (lower.includes('return')) reply = "You can return within 14 days. Email us!";
    else if (lower.includes('agent')) reply = "Connecting... (simulated live chat)";
    addMessage(reply, 'bot');
  }, 600);
}

// Quick Replies
quickReplies.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    userInput.value = btn.getAttribute('data-msg');
    sendMessage();
  });
});

// Secure Payment Link
document.getElementById('securePay').addEventListener('click', () => {
  window.open('https://checkout.stripe.com/c/pay/...', '_blank');
});