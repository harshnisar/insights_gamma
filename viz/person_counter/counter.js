d3.csv("pred_all_titles_personality.csv", function(loaddata) {
  loaddata.forEach(function(d) {
    //d.x = +d.x;
    //d.y = +d.y;
  });
  data = loaddata;
  controller();
});

function controller(){
    //be invisible before
    roles = d3.set(data.map(function(d){return d.specific_role})).values();
    typeahead_init(roles);
    $('#title_personality').css('display','block');

}


function title_data(title){
    searched = data.filter(function(d){return d.specific_role==title;})
    searched = searched[0];
    update_numbers('C', searched.C);
    update_numbers('A', searched.A);
    update_numbers('E', searched.EX);
    update_numbers('ES', searched.ES);
    update_numbers('O', searched.O);
}


function update_numbers(id_name, new_val){
    if(new_val>=0.00){
        $('#'+id_name).attr("class","positive");
        }
    else{
        $('#'+id_name).attr("class","negative");
    }


    $('#'+id_name).numerator( {
    easing: 'linear', // easing options.
    duration: 1000, // the length of the animation.
    delimiter: ',',
    rounding: 2, // decimal places.
    toValue: new_val // animate to this value.
    } )



}



function typeahead_init(names){
        var substringMatcher = function(strs) {
      return function findMatches(q, cb) {
        var matches, substringRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            matches.push(str);
          }
        });

        cb(matches);
      };
    };

    $('.typeahead').typeahead({
              hint: true,
              highlight: true,
              minLength: 1
            },
            {
              name: 'names',
              source: substringMatcher(names)
            }); 

            $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
                  console.log(suggestion);
                  title_data(suggestion);
                });
            $('.typeahead').bind('typeahead:autocomplete', function(ev, suggestion) {
                  console.log(suggestion);
                  title_data(suggestion);
                });

}
