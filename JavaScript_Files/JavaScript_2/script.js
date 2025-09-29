// my Personal Information
function createPersonalInfo() {
    const firstName = "Taiye";
    const lastName = "Owoseje";
    const age = 25;
    const isStudent = true;
    const favoriteColor = "tealgreen";

// Future Age
const futureAge = age + 5;

// Formatted display
const personalInfo = `
    < div style = "border: 2px solid ${favouriteColor}; padding: 15px; border-radius:8px; background-color: #f1e0e0ff;" >
        <h4 style="color: ${favoriteColor}; margin-top: 0;">Personal Information Card</h4>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Current Age:</strong> ${age} years old</p>
        <p><strong>Student Status:</strong> ${isStudent ? 'Yes, I am a student' : 'No, I am not a student'}</p>
        <p><strong>Favorite Color:</strong> ${favoriteColor}</p>
        <p><strong>In 5 years:</strong> I will be ${futureAge} years old</p>
        <p><strong>Fun Fact:</strong> My name has ${firstName.length + lastName.length} letters total!</p>
    </div >
`;

document.getElementById('exercise1-output').innerHTML = personalInfo;
}

function createCustomInfo() {
    // user input
    const firstName = prompt("Enter your first name:") || "Student";
    const lastName = prompt("Enter your last name:") || "Learner";
    const age = parseInt(prompt("Enter your age:")) || 20;
    const isStudent = confirm("Are you currently a student?");
    const favoriteColor = prompt("Enter your favorite color:") || "purple";
    
    const futureAge = age + 5;
    
    const personalInfo = `
        <div style="border: 2px solid ${favoriteColor}; padding: 15px; border-radius: 8px; background-color: #f1e0e0ff;">
            <h4 style="color: ${favoriteColor}; margin-top: 0;">Your Personal Information Card</h4>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Current Age:</strong> ${age} years old</p>
            <p><strong>Student Status:</strong> ${isStudent ? 'Yes, I am a student' : 'No, I am not a student'}</p>
            <p><strong>Favorite Color:</strong> ${favoriteColor}</p>
            <p><strong>In 5 years:</strong> You will be ${futureAge} years old</p>
            <p><strong>Fun Fact:</strong> Your name has ${firstName.length + lastName.length} letters total!</p>
        </div>
    `;
    
    document.getElementById('exercise1-output').innerHTML = personalInfo;
}