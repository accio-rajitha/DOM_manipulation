document.addEventListener('DOMContentLoaded', function () {
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const clearBtn = document.getElementById('clear');
    const countDisplay = document.getElementById('count');
    const errorDisplay = document.getElementById('error');

    let count = 0;

    function updateCount() {
        countDisplay.innerHTML = `<u>Your Current Count is</u>: ${count}`;
        if (count === 0) {
            clearBtn.style.display = 'none';
            errorDisplay.style.display = 'none';
        } else {
            clearBtn.style.display = 'inline-block'; 
        }
    }

    function showError() {
        errorDisplay.style.display = 'block';
        setTimeout(function () {
            errorDisplay.style.display = 'none';
        }, 3000); 
    }

    decrementBtn.addEventListener('click', function () {
        if (count > 0) {
            count--;
            updateCount();
            if (count === 0) {
                showError();
            }
        } else {
            showError();
        }
    });

    incrementBtn.addEventListener('click', function () {
        count++;
        updateCount();
    });

    clearBtn.addEventListener('click', function () {
        count = 0;
        updateCount();
        showError();
    });
});
