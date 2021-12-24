
// select elements and assign them to variables
let wordCount = document.querySelector("#wordCount")
let countBtn = document.querySelector("#countBtn")
let total = document.querySelector("#total")
let resetBtn = document.querySelector("#resetBtn")
let small = document.querySelector("small")
let totalCount = document.querySelector("#totalCount")
let count = 0


// make count function 
function countFunc(){
     if(wordCount.value === ""){
          small.innerText = "Field must not be empty"
     }else {
          let val = wordCount.value
          let splitval = val.split(" ")
          
          let result = splitval.filter((arr) => {
               return arr.length > 3
          })

          let totalLen = result.length
          let myInterval = setInterval(()=> {
               if(count < totalLen){
                    count++
                    total.innerText = count
                    totalCount.innerHTML = count
               }
          }, 100)
          if(count === totalLen){
               clearInterval(myInterval)     
          } 
         
     }     
}

// call reset function
resetBtn.addEventListener("click", () => {
     wordCount.value = ""
     total.innerText = "0"
     location.reload()
})

// call function
countBtn.addEventListener("click", countFunc)





