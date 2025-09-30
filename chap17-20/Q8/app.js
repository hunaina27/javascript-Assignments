// Question 8
let A = [24, 53, 78, 91, 12]
let largest = A[0]

for( let i = 1; i<=A.length; i++){
    if(A[i]> largest){
        largest = A[i]
    }
}
console.log ("The largest number is: " + largest)