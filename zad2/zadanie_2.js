const validateBtn = document.getElementById('validateBtn')
const clearBtn = document.getElementById('clearBtn')
const results = document.getElementById('results')

const email = document.getElementById('email').value
const trimmed = document.getElementById('trimmed')
const hasAt = document.getElementById('hasAt')
const startsLetter = document.getElementById('startsLetter')
const endsDomain = document.getElementById('endsDomain')
const localPart = document.getElementById('localPart')
const domainPart = document.getElementById('domainPart')
const domainReplaced = document.getElementById('domainReplaced')

validateBtn.addEventListener('click', function(){
    results.style.display = 'block'

    trimmed.innerText = `${email.trim()}`

    if(email.includes("@")){hasAt.innerText = `tak`}
    else hasAt.innerText = `nie`;

    const char = email.charAt(0);

    if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){startsLetter.innerText = `tak`}
    else startsLetter.innerText = `nie`;

    if(email.endsWith('.pl') || email.endsWith('.com') ) endsDomain.innerText = 'tak';
    else endsDomain.innerText = 'nie';

    elementy = email.split('@')

    localPart.innerText = `${elementy[0]}`
    domainPart.innerText = `${elementy[1]}`
    domainReplaced.innerText = `${elementy[1].replace('.', '-')}`

})

clearBtn.addEventListener('click', function(){
    results.style.display = 'block'

    trimmed.innerText = ``

    hasAt.innerText = ``;
    startsLetter.innerText = ``;
    endsDomain.innerText = '';

    elementy = email.split('@')

    localPart.innerText = ``
    domainPart.innerText = ``
    domainReplaced.innerText = ``

})