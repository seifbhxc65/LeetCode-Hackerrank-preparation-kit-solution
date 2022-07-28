//just paste the function inside the coding space in hackerrank 
function matchingStrings(strings, queries) {
    // Write your code here
   return queries.map(qr=>strings.reduce((acc,curr)=>curr===qr?++acc:acc,0)
   )


}
