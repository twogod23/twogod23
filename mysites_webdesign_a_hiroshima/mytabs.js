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
}
