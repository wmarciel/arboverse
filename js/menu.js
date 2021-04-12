//Lateral buton active 
const buttons = document.querySelectorAll('.item-button')
buttons.forEach(button =>{
        button.addEventListener('click', function(){
            buttons.forEach(btn => btn.classList.remove('btn-active'));
        this.classList.add('btn-active');
    });
});

//Hide and show submenu
const discoverybtn = document.getElementById('discovery')
const discoveryDiv = document.getElementById('discovery-menu')
const distributionbtn = document.getElementById('distribution')
const distributionDiv = document.getElementById('distribution-menu')
const vectorbtn = document.getElementById('vector')
const vectorDiv = document.getElementById('vector-menu')
const climatebtn = document.getElementById('climate')
const climateDiv = document.getElementById('climate-menu')
const forestbtn = document.getElementById('forest')
const forestDiv = document.getElementById('forestcover-menu')
const landbtn = document.getElementById('land')
const landDiv = document.getElementById('land-cover-menu')

discoverybtn.addEventListener('click', () => {
    if(discoveryDiv.style.display === 'none'){
        discoveryDiv.style.display = 'block';
        distributionDiv.style.display = 'none';
        vectorDiv.style.display = 'none';
        climateDiv.style.display = 'none';
        forestDiv.style.display = 'none';
        landDiv.style.display = 'none';
    }else {
        discoveryDiv.style.display = 'none';
    }
});

distributionbtn.addEventListener('click', () => {
    if(distributionDiv.style.display === 'none'){
        distributionDiv.style.display = 'block';
        discoveryDiv.style.display = 'none';
        vectorDiv.style.display = 'none';
        climateDiv.style.display = 'none';
        forestDiv.style.display = 'none';
        landDiv.style.display = 'none';
    }else {
        distributionDiv.style.display = 'none';
    }
});

vectorbtn.addEventListener('click', () => {
    if(vectorDiv.style.display === 'none'){
        vectorDiv.style.display = 'block';
        discoveryDiv.style.display = 'none';
        distributionDiv.style.display = 'none';
        climateDiv.style.display = 'none';
        forestDiv.style.display = 'none';
        landDiv.style.display = 'none';
    }else {
        vectorDiv.style.display = 'none';
    }
});

climatebtn.addEventListener('click', () => {
    if(climateDiv.style.display === 'none'){
        climateDiv.style.display = 'block';
        discoveryDiv.style.display = 'none';
        distributionDiv.style.display = 'none';
        vectorDiv.style.display = 'none';
        forestDiv.style.display = 'none';
        landDiv.style.display = 'none';
    }else {
        climateDiv.style.display = 'none';
    }
});

forestbtn.addEventListener('click', () => {
    if(forestDiv.style.display === 'none'){
        forestDiv.style.display = 'block';
        discoveryDiv.style.display = 'none';
        distributionDiv.style.display = 'none';
        vectorDiv.style.display = 'none';
        climateDiv.style.display = 'none';
        landDiv.style.display = 'none';
    }else {
        forestDiv.style.display = 'none';
    }
});

landbtn.addEventListener('click', () => {
    if(landDiv.style.display === 'none'){
        landDiv.style.display = 'block';
        discoveryDiv.style.display = 'none';
        distributionDiv.style.display = 'none';
        vectorDiv.style.display = 'none';
        climateDiv.style.display = 'none'
        forestDiv.style.display = 'none';
    }else {
        landDiv.style.display = 'none';
    }
});