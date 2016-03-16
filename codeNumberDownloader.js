  var jsonArray = [];
$(".content").find('tr').each(function(index, el) {
  var area_code = "";
  var country = "";
  var state = "";
  var time_zone = "";
  $(el).find('td').each(function(indexNew, elNew) {
     if( indexNew == 0 ){
      
      area_code = $(elNew).find('center').text();
     }
     else if( indexNew == 1 ){
      if( $(elNew).text() == "Unassigned"){
        return true;
      }
      country = $(elNew).text();
     }
     else if( indexNew == 2 ){
       state = $(elNew).find('a').text();
       if( state == "" ){
        state = $(elNew).text();
       }
     }
     else if( indexNew == 3 ){
        time_zone = $(elNew).text();
     }
  });
    if( state != ""){
      jsonArray.push({"area_code":area_code,"country":country,"state":state,"time_zone":time_zone});
    }
});
  console.log(JSON.stringify(jsonArray));