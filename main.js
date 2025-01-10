//change navbar style

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle(
        'window-scroll', window.scrollY > 0 )
})




//hide faq

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

        //changeicon

        const icon =faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

//menu show

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//closenavbar

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav)


// popupbutton for register
function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}

// chatbot
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot-container');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
    const input = document.getElementById('chatbot-message');
    const message = input.value.trim();

    if (message) {
        const chatbotBody = document.getElementById('chatbot-body');
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${message}`;
        userMessage.style.marginBottom = '10px';
        chatbotBody.appendChild(userMessage);

        // Simulate a response
        const botMessage = document.createElement('div');
        botMessage.textContent = ` Thank you for your message about "${message}". We'll get back to you shortly!`;
        botMessage.style.marginBottom = '10px';
        botMessage.style.color = '#555';
        chatbotBody.appendChild(botMessage);

        input.value = '';
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }
}

  // Countdown Timer
  const countdownDate = new Date("Jan 20, 2025 18:23:40").getTime();

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".timer").innerHTML = "EXPIRED";
    }
  }, 1000);