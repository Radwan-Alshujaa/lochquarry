let image = document.querySelectorAll('img');

image.forEach(function(ele){
    ele.setAttribute('loading','lazy')
})

const logo =document.getElementById('logo');
logo.addEventListener('click',function() {
    window.location=("index.html");
});
logo.addEventListener('mouseenter',function(){})
