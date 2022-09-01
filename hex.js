const colors = [ '0', '1', '2', '3','4', '5', '6', '7','8', '9', 'A', 'B','C', 'D', 'E', 'F'  ]


const btn = document.getElementById('btn');
const color = document.getElementById('color')

btn.addEventListener('click',function(){

    let hexColor = '#';

    for(var i=0;i<6;i++){

        hexColor += colors[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;



})


function getRandomNumber(){
    
        return  Math.floor(Math.random()*colors.length);
        
}


// // getRandomNumber();

// const colors = [ '0', '1', '2', '3','4', '5', '6', '7','8', '9', 'A', 'B','C', 'D', 'E', 'F'  ]

// let hexColor = '#';
// for(var i =0; i<6;i++){

//     hexColor += colors[2];
// }

// console.log(hexColor);