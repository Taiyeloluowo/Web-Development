function getGrade(grade) {
    // Using if / else if statements to assign grades
    if (grade == 100) {
        console.log(`Outstanding! Grade: A+`);
    } else if (grade >= 90) {
        console.log(`Score: ${grade} → Grade: A`);
    } else if (grade >= 80) {
        console.log(`Score: ${grade} → Grade: B`);
    } else if (grade >= 70) {
        console.log(`Score: ${grade} → Grade: C`);
    } else if (grade >= 60) {
        console.log(`Score: ${grade} → Grade: D`);
    } else {
        console.log(`Score: ${grade} → Grade: F`);
    }

    console.log("");
}


function DiscountCalculator(price, customerType, isFirstPurchase) {
        let discount = 0;

        if (customerType === "student") {
            discount = 0.10; // 10% discount
        } else if (customerType === "senior") {
            discount = 0.15; // 15% discount
        } else if (customerType === "employee") {
            discount = 0.20; // 20% discount
        }

        // Additional discount for first-time customers
        if (isFirstPurchase) {
            discount += 0.05; // Extra 5%
        }

        let finalPrice = price * (1 - discount);
        return {
            originalPrice: price,
            discountPercent: discount * 100,
            finalPrice: finalPrice.toFixed(2)
        };
    }

    // Test discount function
    let result = DiscountCalculator(1000, "student", true);
    console.log("Price calculation:");
    console.log("***************************************");
    console.log(""); //Empty line
    console.log(`Original: $${result.originalPrice}`);
    console.log(`Discount: ${result.discountPercent}%`);
    console.log(`Final price: $${result.finalPrice}`);


function WeatherAdvisor() {
    let now = new Date();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
}


function ATMSimulation() {
    let now = new Date();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
}


function PersonalAssistantFunction() {
    let now = new Date();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
}


function isAdult(age) {
    return age >= 18;
}
console.log("Is 16 adult?", isAdult(16));
console.log("Is 21 adult?", isAdult(21));

// Use return value in other code
let userAge = 20;
if (isAdult(userAge)) {
    console.log("User can vote!");
} else {
    console.log("User cannot vote yet.");
}
