function changeCategory(target_id){
  var categories, i;
  categories
    = document.getElementsByClassName('category');
  for(i = 0; i < categories.length; i++){
    var cat;
    cat = categories[i];
    if(cat.id == target_id){
      cat.className = "category show";
    }else{
      cat.className = "category hidden";
    }
  }

  document.getElementById('mode').checked = false;
  toggleMenu();
}

function toggleMenu()
{
    var mode = document.getElementById('mode');
    var headmenu = document.getElementById('headmenu');
    if(mode.checked){
	headmenu.classList.add("open");
    }else{
	headmenu.classList.remove("open");
    }
}
