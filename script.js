let btn=document.querySelector(".btn");
let circle=document.querySelector(".circle");


btn.addEventListener('click',function(){

   let c1= Math.floor(Math.random()*256);
   let c2= Math.floor(Math.random()*256);
   let c3= Math.floor(Math.random()*256);

    circle.style.backgroundColor=`rgb(${c1},${c2},${c3})`;

   console.log(c1)
   console.log(c2)
   console.log(c3)
})