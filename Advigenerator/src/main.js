
import { getAdvice } from "./apiAdvice.js";

const btn = document.getElementById('roll');
const message = document.getElementById('advice');
const loader = document.querySelector('.loader');
const messageContainer = document.getElementById('message');

async function showAdvice() {
    try{
        // mostrar loader y estados de busy
        if (loader) loader.style.display = 'block';
        if (btn) btn.disabled = true;
        if (messageContainer) messageContainer.setAttribute('aria-busy', 'true');

        message.textContent = '';
        const advice = await getAdvice();
        message.textContent = advice;
    
        return message;
    }
    catch{
        message.textContent = "sorry we cant conect to the server";
    }
    finally {
        if (loader) loader.style.display = 'none';
        if (btn) btn.disabled = false;
        if (messageContainer) messageContainer.removeAttribute('aria-busy');
    }
}

btn.addEventListener('click', () => {
    showAdvice();
});

document.addEventListener('DOMContentLoaded',(showAdvice));
