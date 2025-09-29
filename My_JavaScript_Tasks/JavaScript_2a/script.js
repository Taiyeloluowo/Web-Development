
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
        discount = 0.10;
    } else if (customerType === "senior") {
        discount = 0.15;
    } else if (customerType === "employee") {
        discount = 0.20;
    }

    if (isFirstPurchase) {
        discount += 0.05
    }

    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };

}

console.log("PRICE CALCULATION:")
console.log(`Original price: #${result.originalPrice}`);
console.log(`Discount percent: ${result.discountPercent}%`);
console.log(`Final price: #${result.finalPrice}`);


function WeatherAdvisor(temperature, isRaining) {

    if (temperature < 32 && isRaining) {
        console.log("Freezing rain! Stay inside!");
    } else if (temperature < 32) {
        console.log("very cold, wear a heavy coat.");
    } else if (temperature >= 32 && temperature <= 60) {
        console.log("Chilly, bring a jacket.");
    } else if (temperature >= 60 && temperature <= 80) {
        console.log("Nice weather!");
    } else {
        console.log("It's hot, stay hydrated!");
    }

    let advice = isRaining ? "Bring an umbrella" : "No umbrella needed"
    console.log(advice)
}


function ATMSimulation(balance, action, amount) {

    if (action === "withdraw") {
        if (amount > 500) {
            return `Withdrawal limit exceeded. You can only withdraw up to 500 at once.`;
        } else if (balance >= amount) {
            balance -= amount;
            return `Withdrawal successful. New balance: ${balance}`;
        } else {
            return `Insufficient funds. Your balance is ${balance}`;
        }
    } else if (action === "deposit") {
        balance += amount;
        return `Deposit successful. New balance: ${balance}`;
    } else {
        return "Invalid action. Please choose 'withdraw' or 'deposit'.";
    }
}




function PersonalAssistantFunction(time, weather, dayType) {
   
    if (time >= 5 && time <= 11) {
        if(dayType == "weekday") {
            console.log("Good morning. Remember to start your day with positivity and hope.")
        }
        else if (dayType = "weekend") {
            console.log("A weekend morning! A day to unwind")
        } 
        else {
            console.log("A fine morning to enjoy the holidays!")}
        }
    else if (time >= 12 && time <= 16) {
        if(dayType == "weekday") {
            console.log("Good afternoon. I hope your day is going well.")
        }
        else if (dayType = "weekend") {
            console.log("Hello, how's the weekend coming along?")
        } 
        else {
            console.log("Hi there! I trust the holidays are splendid.")}
        }
    else if (time >= 17 && time <= 21) {
        if(dayType == "weekday") {
            console.log("It's time to rest. Tomorrow is another day!")
        }
        else if (dayType = "weekend") {
            console.log("Go to bed, it's the weekend.")
        } 
        else {
            console.log("Sleep is an important part of the holidays. Have a goodnight.")}
        }

    let advice = weather === "sunny" ? "It's a bright day today. Very good for any outdoor activity." :
    weather === "rainy" ? "Don't forget to take an umbrella. It's pouring out there!" : "Cloudy skies today. Perfect for chilling."
        console.log(advice)
}