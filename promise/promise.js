/**
 * Scenario 1: Online Food Delivery
Question:
You are simulating an online food ordering system like UberEats or Zomato. The process
includes:
1. Order received (1 second)
2. Preparing food (3 seconds)
3. Packing food (2 seconds)
4. Assigning a delivery person (2 seconds)
5. Delivering food (4 seconds)
Each step should be a function returning a Promise, resolving with a message like
"Order received" , "Food prepared" , etc.
Write code using Promise chaining to execute these steps in order
 * 
 */
function orderReceived(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Order Received");
        }, 1000)
    })
}
function preparingFood(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Food is Preparing");
        }, 3000)
    })
}
function packingFood(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Food is Packing");
        }, 2000)
    })
}
function assigningDeliveryPerson(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Assigning a delivery person");
        }, 2000)
    })
}
function deliveryFood(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Food Delivery Success");
        }, 4000)
    })
}
orderReceived()
.then(res=>{console.log(res); return preparingFood();})
.then(res=>{console.log(res); return packingFood();})
.then(res=>{console.log(res); return assigningDeliveryPerson();})
.then(res=>{console.log(res); return deliveryFood();})
.then(res=>{console.log(res);})

/**
 * Scenario 2: Movie Ticket Booking
Question:
You are simulating a movie ticket booking system like BookMyShow. The booking process
includes:
1. Selecting seats (2 seconds)
2. Processing payment (3 seconds)
3. Generating ticket (1 second)
4. Sending confirmation email (2 seconds)
Each step should be a function returning a Promise.
Write code using Promise chaining to ensure these steps happen in the correct
sequence.
 */
function selectingSeats(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Selecting Seats")
        }, 2000)
    })
}
function processingPayment(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Payment is Processing")
        }, 3000)
    })
}
function generatingTicket(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Ticket is Generating")
        }, 1000)
    })
}
function sendingConfirmationMail(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Confirmation Mail is Sending")
        }, 2000)
    })
}
selectingSeats()
.then(res=>{console.log(res); return processingPayment();})
.then(res=>{console.log(res); return generatingTicket();})
.then(res=>{console.log(res); return sendingConfirmationMail();})
.then(res=>{console.log(res);})

/**
 * Scenario 3: Car Service Center
Question:
You are simulating a car servicing system. The servicing process includes:
1. Car check-in (1 second)
2. Oil change (2 seconds)
3. Engine check (3 seconds)
4. Car wash (2 seconds)
5. Final quality check (2 seconds)
Each step should return a Promise that resolves with a status message like "Car
check-in complete" , "Oil changed" , etc.
Write a function using Promise chaining to ensure all steps happen sequentially
 */
function carCheckIn(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Car Check-in")
        }, 1000)
    })
}
function oilChange(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Oil Changing")
        }, 2000)
    })
}
function engineCheck(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Engine Checking")
        }, 3000)
    })
}
function carWash(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Car Wash")
        }, 2000)
    })
}
function finalQualitycheck(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Final Quality Check")
        }, 2000)
    })
}
carCheckIn()
.then(res=>{console.log(res); return oilChange();})
.then(res=>{console.log(res); return engineCheck();})
.then(res=>{console.log(res); return carWash();})
.then(res=>{console.log(res); return finalQualitycheck();})
.then(res=>{console.log(res);})

/**
 * Scenario 4: Laptop Repair Service
Question:
A laptop repair center follows these steps to fix a laptop:
1. Diagnosing issue (3 seconds)
2. Replacing faulty parts (4 seconds)
3. Updating software (2 seconds)
4. Final testing (2 seconds)
5. Returning to customer (1 second)
Each step should be a function returning a Promise.
Write code using Promise chaining to execute these steps in order.
 */
function diagnosingIssue(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Diagnosing Issue")
        }, 3000)
    })
}
function replacingFaultyParts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Replacing Faulty Parts")
        }, 4000)
    })
}
function updatingSoftware(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Updating Software")
        }, 2000)
    })
}
function finalTesting(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Final Testing")
        }, 2000)
    })
}
function returningToCustomer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Returning To Customer")
        }, 1000)
    })
}
diagnosingIssue()
.then(res=>{console.log(res); return replacingFaultyParts();})
.then(res=>{console.log(res); return updatingSoftware();})
.then(res=>{console.log(res); return finalTesting();})
.then(res=>{console.log(res); return returningToCustomer();})
.then(res=>{console.log(res);})

/**
 * Scenario 5: Online Course Enrollment
Question:
A student is enrolling in an online course. The process includes:
1. Checking course availability (1 second)
2. Processing payment (3 seconds)
3. Generating enrollment ID (1 second)
4. Sending course materials (2 seconds)
5. Granting access to live classes (2 seconds)
Each step should return a Promise resolving with a message.
Write code using Promise chaining to execute these steps in sequence
 */
function checkingCourseAvailability(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Checking Course Availability")
        }, 1000)
    })
}
function processingPayment(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Payment is Processing")
        }, 3000)
    })
}
function generaingEnrollmentId(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Generating Enrollment Id")
        }, 1000)
    })
}
function courseMaterials(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Sending Course Materials")
        }, 2000)
    })
}
function accessingClasses(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Granting access to live classes")
        }, 2000)
    })
}
checkingCourseAvailability()
.then(res=>{console.log(res); return processingPayment();})
.then(res=>{console.log(res); return generaingEnrollmentId();})
.then(res=>{console.log(res); return courseMaterials();})
.then(res=>{console.log(res); return accessingClasses();})
.then(res=>{console.log(res);})
