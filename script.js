function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    // Check if the date entered is valid
    if (isNaN(dob)) {
        alert('Please enter a valid date.');
        return;
    }

    // Check if the DOB is in the future
    if (dob > today) {
        alert('Date of birth cannot be in the future.');
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Adjust the age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('ageResult').innerText = `You are ${age} years old.`;
}