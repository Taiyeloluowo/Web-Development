// Practice Exercise 6 // 
// Task 1
function isStrongPassword(password) {
    let digit = "1234567890";
    let specialChar = "`~!@#$%^&*()_+|\\}]{[\"':;?/>.<,";
    let lowerChar = "abcdefghijklmnopqrstuvwxyz";
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(password.length < 8) {
        console.log("Password should be greater than 8")
        return;
    }

    let hasDigit = false;
    let hasSpecialChar = false;
    let hasLowerChar = false;
    let hasUpperChar = false;

    for(let i = 0; i < password.length; i++) {
        let char = password[i];
        if (specialChar.includes(char)) {
            hasSpecialChar = true;
        }
        if (digit.includes(char)) {
            hasDigit = true;
        }
        if (lowerChar.includes(char)) {
            hasLowerChar = true;
        }
        if (upperChar.includes(char)) {
            hasUpperChar = true;
        }
    }

    if(hasDigit && hasSpecialChar && hasLowerChar && hasUpperChar) {
        console.log("Strong Password");
    }else{
        console.log("Create a Stronger Password");
    }
}


// Task 2
function formatPercentage(value){
    console.log(`${value.toFixed(1)}%`)

}


// Task 3
function calculateCompoundInterest(principal, rate, years) {
    let interest = (principal * Math.pow((1+rate), years)).toFixed(2)
    console.log(interest)
}


// Task 4
function canGraduate(credits, gpa) {
    if(credits >= 120 && gpa >= 2.0){
        console.log(`Congratulations you are now a graduate after accumulating a credit score of ${credits.toFixed(1)} and a GPA of ${gpa.toFixed(2)}`)
    }else{
        console.log(`Unfortunately, you cannot graduate after accumulating a credit score of ${credits.toFixed(1)} and a GPA of ${gpa.toFixed(2)}. Minimum requirement includes credit score of 120.00 and GPA of 2.00`)
    }

}


// Task 5
function reverseWords(sentence) {
    let reversed = String(sentence).split("").reverse().join("").toLowerCase();
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1)
    console.log(reversed)
}






// Practice Exercise 7 //

// Challenge 1 Product Calculator
function calculateProductTotal(price, quantity, discount = 0) {
  if (price < 0 || quantity < 0 || discount < 0 || discount > 100) {
    return "Invalid product input.";
  }
  const subtotal = price * quantity;
  const discountAmount = subtotal * (discount / 100);
  return subtotal - discountAmount;
}

// Challenge 2 Tax Calculator
function calculateTax(total, location) {
  if (typeof total !== 'number' || total < 0) return "Invalid total amount.";

  let taxRate;
  if (location === "Lagos") taxRate = 0.075;
  else if (location === "Abuja") taxRate = 0.05;
  else if (location === "Ogun") taxRate = 0.065;
  else taxRate = 0.06; // default

  return total * taxRate;
}

// Challenge 3 Shipping Calculator
function calculateShipping(weight, distance) {
  if (weight <= 0 || distance <= 0) return "Invalid shipping input.";

  let baseRate = weight * 0.5;
  let distanceRate = distance * 0.1;
  return baseRate + distanceRate;
}

// Challenge 4 Membership Discounts
function applyMembershipDiscount(total, membershipLevel) {
  if (typeof total !== 'number' || total < 0) return "Invalid total.";

  let discountRate;
  if (membershipLevel === "Gold") discountRate = 0.15;
  else if (membershipLevel === "Silver") discountRate = 0.1;
  else if (membershipLevel === "Bronze") discountRate = 0.05;
  else discountRate = 0;

  return total - (total * discountRate);
}

// Challenge 5 Final Receipt Generator
function generateReceipt(productName, price, quantity, location, weight, distance, membershipLevel, discount = 0) {
  const productTotal = calculateProductTotal(price, quantity, discount);
  if (typeof productTotal === "string") return productTotal;

  const tax = calculateTax(productTotal, location);
  if (typeof tax === "string") return tax;

  const shipping = calculateShipping(weight, distance);
  if (typeof shipping === "string") return shipping;

  const totalBeforeMembership = productTotal + tax + shipping;
  const finalTotal = applyMembershipDiscount(totalBeforeMembership, membershipLevel);
  if (typeof finalTotal === "string") return finalTotal;

  // Ternary operator for free shipping
  const freeShipping = membershipLevel === "Gold" && finalTotal > 500 ? true : false;
  const shippingDisplay = freeShipping ? "Free (Gold Member Bonus)" : `₦${shipping.toFixed(2)}`;

  return `
Receipt for ${productName}
----------------------------------------
Price per item: ₦${price.toFixed(2)}
Quantity: ${quantity}
Discount: ${discount}% 
Subtotal: ₦${productTotal.toFixed(2)}

Location: ${location}
Tax: ₦${tax.toFixed(2)}

Shipping (${weight}kg over ${distance}km): ${shippingDisplay}

Membership Level: ${membershipLevel}
Final Total: ₦${finalTotal.toFixed(2)}
----------------------------------------
Thank you for shopping with us!
  `;
}

// Sample Usage
console.log(generateReceipt("Wireless Headphones", 15000, 2, "Ogun", 1.5, 30, "Gold", 10));