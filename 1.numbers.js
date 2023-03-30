function fullyDivisibleBy(num1,num2) {
    return new Promise((resolve, reject) => {
        // kondisi resolve
        if(num1 % num2 === 0) {
            resolve("apa yang mau dioper kalau resolve")

        // kondisi reject
        } else {
            reject("apa yang mau dioper kalau reject")
        }
    })
}

