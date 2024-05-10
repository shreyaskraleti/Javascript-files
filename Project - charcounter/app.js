
const input = document.getElementById('input');
        const totalChars = document.getElementById('total');
        const remainingChars = document.getElementById('remaining');
        const maxCharacters = 100;
       

        input.addEventListener('input', function() {
            const textLength = this.value.length;
            const remaining = maxCharacters - textLength;
            totalChars.textContent = textLength;
            remainingChars.textContent = remaining;
            if (remaining < 0) {
                remainingChars.classList.add('red');
            } else {
                remainingChars.classList.remove('red');
            }
        });