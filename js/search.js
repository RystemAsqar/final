let arr = ["Welcome","Home", "Shop","Travel","Contact"];
let searchInput = document.getElementById("input");

function showTotal() {
    let fitered = arr.filter(item => 
      item.includes(searchInput.value));
      res = document.getElementById("result");
      res.innerHTML = '';
      let list = '';
      for (i=0; i<fitered.length; i++) {
        list += '<li onclick="replaceValue(this)">' + fitered[i] + '</li>';
      }
      res.innerHTML = '<ul>' + list + '</ul>';
  }

  function replaceValue(item){
    searchInput.value=item.innerText;
  }


  function searchItem(){
    console.log(arr.indexOf(searchInput.value));
         changeWeb(arr.indexOf(searchInput.value));
  }