const firstValueElement = document.getElementById("firstValue");
const secondValueElement = document.getElementById("secondValue");
const calculateButton = document.getElementById("calculate");
const outputContainer = document.getElementById("output-container");

const calculate = () => {
    const firstValue = parseFloat(firstValueElement.value);
    const secondValue = parseFloat(secondValueElement.value);
    if (isNaN(firstValue) || isNaN(secondValue)) {
        // Handling invalid input
        handleInvalidInput();
    } else {
        // Valid input
        firstValueElement.style.borderColor = 'green';
        secondValueElement.style.borderColor = 'green';

        
        const addition = firstValue + secondValue;
        const subtraction = firstValue - secondValue;
        const multiplication = firstValue * secondValue;
        const division = secondValue !== 0 ? firstValue / secondValue : 'undefined';

        let percentage;
        if (secondValue !== 0) {
            percentage = (firstValue / secondValue) * 100;
        } else {
            handleInvalidInput();
            return;
        }

        outputContainer.innerHTML = `
            <p style="color:white;">Addition: ${addition}</p>
            <p style="color:white;">Subtraction: ${subtraction}</p>
            <p style="color: white;">Multiplication: ${multiplication}</p>
            <p style="color: white;">Division: ${division}</p>
            <p style="color: white;">Percentage: ${percentage.toFixed(2)}%</p>
        `;

        // Log results to console
        console.log(`Addition of ${firstValue} and ${secondValue} is ${addition}`);
        console.log(`Subtraction of ${firstValue} and ${secondValue} is ${subtraction}`);
        console.log(`Multiplication of ${firstValue} and ${secondValue} is ${multiplication}`);
        console.log(`Division of ${firstValue} and ${secondValue} is ${division}`);
        console.log(`Percentage of ${firstValue} in ${secondValue} is ${percentage.toFixed(2)}%`);

        // Clear input fields
        firstValueElement.value = '';
        secondValueElement.value = '';

        // Display success message with SweetAlert
        Swal.fire({
            text: 'Done! Your Result is...',
            layout: 'center',
            timer: 1000
        });
    }
}

const handleInvalidInput = () => {
    firstValueElement.style.borderColor = 'red';
    secondValueElement.style.borderColor = 'red';
    firstValueElement.value = '';
    secondValueElement.value = '';
    outputContainer.innerHTML = 'Invalid input. Please enter valid numbers.';
    outputContainer.style.color = 'yellow';
    outputContainer.style.fontWeight = 'bold';
    setTimeout(() => {
        outputContainer.innerHTML = '';
        outputContainer.style.color = 'red';
    }, 3000);

    setTimeout(() => {
        outputContainer.style.color = 'yellow';
        outputContainer.innerHTML = 'Values should be Number';
    }, 2000);
}

const onCalculateClick = () => {
    calculate();
}

calculateButton.addEventListener('click', onCalculateClick);
