// Function to calculate age based on the entered date of birth
function calculateAge() {
    const dob = new Date(document.getElementById('dob').value); // Get the entered date
    const today = new Date(); // Get today's date

    // Check if the entered date is valid
    if (isNaN(dob)) {
        alert('Please enter a valid date.');
        return;
    }

    // Ensure the date is not in the future
    if (dob > today) {
        alert('Date of birth cannot be in the future.');
        return;
    }

    // Calculate age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    // Display the calculated age
    document.getElementById('ageResult').innerText = `You are ${age} years old.`;
}

// Function to clear the input field and the result
function clearDate() {
    document.getElementById('dob').value = ''; // Clear the date input
    document.getElementById('ageResult').innerText = ''; // Clear the result
}

// Function to cancel/reset the input and the result
function cancelDate() {
    document.getElementById('dob').value = ''; // Clear the date input
    document.getElementById('ageResult').innerText = ''; // Clear the result
}