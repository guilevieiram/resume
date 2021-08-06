// making the skills  and languages table

function makeStars(numberOfStars) {
    let starString = ""
    for(let i = 0; i < 5; i++){
        if(i<numberOfStars){
            starString += "⚪"
        }
        else{
            starString += ""
        }
        
    }
    return starString
};

let doc = document.getElementsByClassName("points")
console.log(doc[0])
for( let index = 0 ; index < doc.length ; index ++){
    let element = doc[index]
    let numberPoints = element.innerHTML
    element.innerHTML = makeStars(numberPoints)
}


function contactMe(){
    window.open('mailto:guilhermevmanhaes@gmail.com?subject=Hey, I came from your website.');
};