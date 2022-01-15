export function checkCoupon(enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean {
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}
  
  console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true)
  console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false)