//Lateral buton active 
const buttons = document.querySelectorAll('.item-button')
buttons.forEach(button =>{
        button.addEventListener('click', function(){
            buttons.forEach(btn => btn.classList.remove('btn-active'));
        this.classList.add('btn-active');
    });
});


// Open and Close submenu Discovery
function openNav(){
    document.getElementById("discovery-menu").style.width = "250px";
    document.getElementById("discovery-menu").style.opacity = "1";
    document.getElementById("distribution-menu").style.width = "0";
    document.getElementById('vector-menu').style.width = "0";
    document.getElementById('climate-menu').style.width = "0";
    document.getElementById('forestcover-menu').style.width = "0";
    document.getElementById('land-cover-menu').style.width = "0";
}
function closeNav(){
    document.getElementById("discovery-menu").style.width = "0";
}

// Open and Close submenu Distribution
function openNavdist(){
    document.getElementById("distribution-menu").style.width = "250px";
    document.getElementById("distribution-menu").style.opacity = "1";
    document.getElementById("discovery-menu").style.width = "0";
    document.getElementById('vector-menu').style.width = "0";
    document.getElementById('climate-menu').style.width = "0";
    document.getElementById('forestcover-menu').style.width = "0";
    document.getElementById('land-cover-menu').style.width = "0";

}
function closeNavdist(){
    document.getElementById("distribution-menu").style.width = "0";
}

// Open and Close submenu Vector
function openNavVec (){
    document.getElementById('vector-menu').style.width = "250px";
    document.getElementById('vector-menu').style.opacity = "1";
    document.getElementById("discovery-menu").style.width = "0";
    document.getElementById("distribution-menu").style.width = "0";
    document.getElementById('climate-menu').style.width = "0";
    document.getElementById('forestcover-menu').style.width = "0";
    document.getElementById('land-cover-menu').style.width = "0";

}
function closeNavVec (){
    document.getElementById('vector-menu').style.width = "0";
}
// Open and Close submenu Climate
function openNavCli (){
    document.getElementById('climate-menu').style.width = "320px";
    document.getElementById('climate-menu').style.opacity = "1";
    document.getElementById("discovery-menu").style.width = "0";
    document.getElementById("distribution-menu").style.width = "0";
    document.getElementById('vector-menu').style.width = "0";
    document.getElementById('forestcover-menu').style.width = "0";
    document.getElementById('land-cover-menu').style.width = "0";

}
function closeNavCli (){
    document.getElementById('climate-menu').style.width = "0";
}

// Open and Close submenu Forest cover
function openNavFor (){
    document.getElementById('forestcover-menu').style.width = "320px";
    document.getElementById('forestcover-menu').style.opacity = "1";
    document.getElementById("discovery-menu").style.width = "0";
    document.getElementById("distribution-menu").style.width = "0";
    document.getElementById('vector-menu').style.width = "0";
    document.getElementById('climate-menu').style.width = "0";
    document.getElementById('land-cover-menu').style.width = "0";

}
function closeNavFor (){
    document.getElementById('forestcover-menu').style.width = "0";
}

// Open and Close submenu Land cover
function openNavLan (){
    document.getElementById('land-cover-menu').style.width = "320px";
    document.getElementById('land-cover-menu').style.opacity = "1";
    document.getElementById("discovery-menu").style.width = "0";
    document.getElementById("distribution-menu").style.width = "0";
    document.getElementById('vector-menu').style.width = "0";
    document.getElementById('climate-menu').style.width = "0";
    document.getElementById('forestcover-menu').style.width = "0";

}
function closeNavLan (){
    document.getElementById('land-cover-menu').style.width = "0";
}



//Slider Js

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function filterBy(month) {
    var filters = ['==', 'month', month];
   

    // Set the label to the month
    document.getElementById('month').textContent = months[month];
}
filterBy(0);

document
    .getElementById('myRange')
    .addEventListener('input', function (e) {
        var month = parseInt(e.target.value, 10);
        filterBy(month);
    });

    const
    range = document.getElementById('range'),
    rangeV = document.getElementById('rangeV'),
    setValue = ()=>{
      const
        newValue = Number( (range.value - range.min) * 130 / (range.max - range.min) ),
        newPosition = 10 - (newValue * 0.13);
      rangeV.innerHTML = `<span>${range.value}</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
    
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);
