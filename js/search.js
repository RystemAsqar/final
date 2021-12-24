let arr = ["Welcome","Home", "Shop","Travel","Contact"];
let searchInput = document.getElementById("input");
res = document.getElementById("result");

function showTotal() {
    let fitered = arr.filter(item => 
      item.includes(searchInput.value));
     
      res.innerHTML = '';
      let list = '';
      for (i=0; i<fitered.length; i++) {
        list += '<li onclick="replaceValue(this)">' + fitered[i] + '</li>';
      }
      res.innerHTML = '<ul>' + list + '</ul>';
      if(searchInput === document.activeElement){
        res.style.display="block";
    }
  }

  function replaceValue(item){
    searchInput.value=item.innerText;
    res.style.display="none"
  }


  function searchItem(){
    console.log(arr.indexOf(searchInput.value));
         changeWeb(arr.indexOf(searchInput.value));
  }