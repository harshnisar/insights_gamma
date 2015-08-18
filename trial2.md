---

---

<html>

<head>
<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/2.2.1/isotope.pkgd.js"></script>
<link href='http://fonts.googleapis.com/css?family=PT+Sans+Narrow' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="element.css">
</head>
<body>

<div class="button-group filters-button-group">
  <button class="button is-checked" data-filter="*">Show all</button>
  <button class="button" data-filter=".salary">Salary</button>
  <button class="button" data-filter=".designation">Designation</button>
  <button class="button" data-filter=".location">Location</button>
  <button class="button" data-filter=".demo">Demo</button>
  <button class="button" data-filter=".field">Field</button>
</div>


<div class="grid">
{% for post in site.posts %}
  <div class="grid-item {{ post.tags | join: " " }}">
   <div id="front" class="front">
   <a class="alink"><img class="plot" src="{{ site.url }}/images/{{ post.plot }}" alt="polaroid" /></a>
   
   <div class="imgTitle" id="imgtitle">
   <a class="alink"><p>{{ post.title | strip_html }}</p></a>
   </div>

   <div class="back" id="back">
   <a style="text-decoration:none;" href="{{site.url}}/{{ post.url }}"><p>{{ post.excerpt | strip_html }}</p></a>
   </div>
   
   </div>
   </div>
  {% endfor %}
</div>
</body>

<script>

// external js: isotope.pkgd.js


$( function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
}); 


</script> 

<script>

$(".front>a").click(function(){
    alert("hmm");
    $(this).siblings("#imgtitle").toggle();
    $(this).siblings("#back").toggle();

    
});

$(".imgTitle>a").click(function(){
    alert("hmm2");
    $(this).parent().toggle();
    $(this).parent().siblings("#back").toggle();

    
});

</script


</html>