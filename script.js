document.addEventListener('DOMContentLoaded', () => {
    const rotaryDial = document.querySelector('.rotary-dial');
    const phoneDisplay = document.getElementById('phone-display');
    const callButton = document.getElementById('call-button');

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    // Create and add number buttons to the rotary dial
    numbers.forEach((number, index) => {
        const button = document.createElement('div');
        button.className = 'dial-number';
        button.textContent = number;
        button.style.position = 'absolute';
        button.style.transform = `rotate(${index * 36}deg) translateY(-50%)`;
        button.style.transformOrigin = '50% 100%';
        button.addEventListener('click', () => handleDialClick(number));
        rotaryDial.appendChild(button);
    });

    function handleDialClick(number) {
        phoneDisplay.value += number;
    }

    callButton.addEventListener('click', () => {
        if (phoneDisplay.value) {
            alert(`Calling ${phoneDisplay.value}`);
        } else {
            alert('Please enter a number.');
        }
    });
});
