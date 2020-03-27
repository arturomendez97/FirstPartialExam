function deleteBox(){
    let results = document.querySelector(".resultsSection");

    results.addEventListener("click", (event) => {

        if(event.target.matches(".box"))
        {
            //Here I would remove the element, didn't have time to implement it. 
            console.log("removeelement");
        }


    })
    
}


function clickButton(){
    let btn = document.querySelector("#submitBtn");

    btn.addEventListener("click", (event) => {
        event.preventDefault();
    
        let results = document.querySelector(".resultsSection");
        let number_Input = document.querySelector(".fizzBuzzNumber");
        let number = Number(number_Input.value)
        

        if (number > 0 && number != null)
        {
            for (i = 1; i <= number; i++)
            {
                if(i % 3 == 0 && i % 5 != 0)
                {
                    results.innerHTML += `<p class = "box" >fizz</p>`
                }
                else if(i % 5 == 0 && i % 3 != 0)
                {
                    results.innerHTML += `<p class = "box">buzz</p>`
                }
                else if(i % 3 == 0 && i % 5 == 0)
                {
                    results.innerHTML += `<p class = "box">fizzbuzz</p>`
                }
                else
                {
                    results.innerHTML += `<p>${i}</p>`;
                }
            }
        }
        
    })
}




function init(){
    clickButton();
    deleteBox();
}


init();