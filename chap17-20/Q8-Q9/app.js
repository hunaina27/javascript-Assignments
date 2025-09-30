// Question 8
let A = [24, 53, 78, 91, 12]
let largest = A[0]

for( let i = 1; i<=A.length; i++){
    if(A[i]> largest){
        largest = A[i]
    }
}
document.write("Array items : " + A)
document.write("<br> The largest number is : " + largest)
document.write("<br>")

// Question 9
document.write("<br>")
let B = [24, 53, 78, 91, 12]
let smallest = A[0]

for( let i = 1; i<= B.length; i++){
    if(B[i]< smallest){
        smallest = B[i]
    }
}
document.write("Array items : " + B)
document.write("<br> The smallest number is : " + smallest)