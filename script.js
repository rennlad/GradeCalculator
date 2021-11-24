// Container for the Number of subjects Form
const firstFormContainer = document.getElementById("first-form-container");
// Submit button for the Number of Subjects
const numStudentsButton = document.getElementById("numSubjects-button");
// Input for the Number of Students
const numSubjectsInput = document.getElementById("numSubjects-input");


// Container for entering the name and grade of each subject
const secondFormContainer = document.getElementById("second-form-container");
// Submit button for the grade of each subject
const subjectGradeButton = document.getElementById("subjectGrade-button");
// Input for the name of each subject
const subjectNameInput = document.getElementById("subjectName-input");
// Input for the Grade of each subject
const subjectGradeInput = document.getElementById("subjectGrade-input");
// HTML for second form
const gradeQuestion = document.getElementById("grade-question");


const resultsContainer = document.getElementById("results-container");
// Html for results container
const results = document.getElementById("results");
// Html for final grade
const finalGrade = document.getElementById("final-grade")




// Number of subjects student wants to calculate
let numSubjects = 0;

// Index to keep track of which subject is being input
let gradeIndex = 1;

// Array of subject names
let arrayOfNames = [];

// Array of subject grades
let arrayOfGrades = [];

// Hold the html for the results
let resultsHtml = "";

// Final letter grade
let letterGrade = "";





// Method for calculating final letter grade
const calculateFinalGrade = () => {

    // Counter for getting total
    let counter = 0;

    // Loop through array of grades to get sum of grades
    for (let i = 0; i < arrayOfGrades.length; i++) {
        counter += arrayOfGrades[i];
    }

    // Divide by number of subjects to get total grade
    let totalGrade = counter / arrayOfGrades.length;

    // Convert to letter form
    if (totalGrade >= 90) {
        letterGrade = "A";
    } else if (totalGrade >= 80) {
        letterGrade = "B";
    } else if (totalGrade >= 70) {
        letterGrade = "C";
    } else if (totalGrade >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "E";
    }
}






// On click functionality for first form
numStudentsButton.addEventListener("click", e => {
    // Prevent page from refreshing
    e.preventDefault();

    // Hide the from container
    firstFormContainer.style.display = "none";

    // Store the number of subjects
    numSubjects = parseInt(numSubjectsInput.value);

    // Update HTML of second Form
    gradeQuestion.innerHTML = `Please enter the name and grade of Subject ${gradeIndex}`;

    // Display the second form
    secondFormContainer.style.display = "block";
});







// On click functionality for second form
subjectGradeButton.addEventListener("click", e => {

    // Prevent page from refreshing
        e.preventDefault();
    
    // Check if all subjects have been entered
    if (gradeIndex < numSubjects) {

        // Add name to Array
        arrayOfNames.push(subjectNameInput.value);

        // Add Grade to Array
        arrayOfGrades.push(parseInt(subjectGradeInput.value));

        // Clear the Input fields
        subjectNameInput.value = "";
        subjectGradeInput.value = "";

        // Update the index
        gradeIndex++;

        // Update HTML of second Form
        gradeQuestion.innerHTML = `Please enter the name and grade of Subject ${gradeIndex}`;

    } else if (gradeIndex = numSubjects) {

        // Add name to Array
        arrayOfNames.push(subjectNameInput.value);

        // Add Grade to Array
        arrayOfGrades.push(parseInt(subjectGradeInput.value));

        // Update the results html
        for (let i = 0; i < arrayOfNames.length; i++) {
            resultsHtml += `<br>${i+1}. Name: ${arrayOfNames[i]} -- Result: ${arrayOfGrades[i]}%`;
        }

        // Hide the second form
        secondFormContainer.style.display = "none";

        // Set the results Html
        results.innerHTML = resultsHtml;

        // Calculate the final score
        calculateFinalGrade();

        // Set the final grade Html
        finalGrade.innerHTML = `Your final grade: ${letterGrade}`;

        // Display the results
        resultsContainer.style.display = "block";
    }
})