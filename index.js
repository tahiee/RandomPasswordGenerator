const giveInput = document.querySelector('input')
const capalp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const smallalp = 'abcdefghijklmnopqrstuvwxyz'
const numberall = '0123456789'
const samboul = '!@#$%&/?-'


function grp() {
    let password = ''

    for (let i = 0; i < 8; i++) {
        const character = i % 3 === 0 ? capalp : (i % 4 === 1 ? numberall : smallalp );
        password += getAchar(character);
    }
    // let password = getAchar(capalp) + getAchar(smallalp) + getAchar(numberall) + getAchar(samboul);

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    giveInput.value = password
}


function getAchar(character) {
    return character.charAt(Math.floor(Math.random() * character.length))
}

function copyimg() {
    giveInput.select();
    giveInput.setSelectionRange(0, 9999);
    try {
        document.execCommand('copy');
        alert('password is copyed');
    } catch (error) {
        console.error('not copyed');
    }
}