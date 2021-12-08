let a = document.getElementById("number");
let b = document.getElementById("nums")

function plusValue(n){
    if(a.value>0){
    a.value=(a.value*1)+n;
}else{
    alert("You should enter a positive number!")
} 
}

function plusValues(n){
    if(b.value>0){
    b.value=(b.value*1)+n;
}else{
    alert("You should enter a positive number!")
} 
}

let reservation = [
    {cityFrom: "New York",
    cityTo: "Barcelona",
    data: " ",
    len:"Any Length",
    Adults: 0,
    Children: 0
     }

];

let fromCity = document.getElementById("from");
let toCity = document.getElementById("to");
let date = document.getElementById("date");
let length = document.getElementById("len");

if(localStorage.getItem("reservation")){
    reservation = JSON.parse(localStorage.getItem("reservation"))
}else{
    setStorage()
}

function book(){
   
        reservation.push({
            cityFrom: fromCity.value,
            cityTo: toCity.value,
            data: date.value,
            len: length.value,
            Adults: a.value,
            Children: b.value
        })
        fromCity.value="New York";
        toCity.value="Barcelona";
        date.value="";
        length.value="Any Length",
        a.value="",
        b.value=""
        reservation.map(item =>{
            console.log(item.cityFrom, item.cityTo, item.data, item.len , item.Adults, item.Children)
        }).join(' ')
        console.log(reservation.length)
        // showStudents();
     
        setStorage()
}

function setStorage() {
    localStorage.setItem("reservation", JSON.stringify(reservation))
}