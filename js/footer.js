let a = document.getElementById("footer");




function openFooter(){
console.log(a);
a.style.zIndex=99;
a.style.opacity=1;
a.style.height=50+"%";
}

function closeFooter(){
    console.log(a);
    a.style.zIndex=-1;
    a.style.opacity=0;
    a.style.height=0+"%";
    }