    $(document).ready(function () {

    // team link click
    $( "#team" ).click(function() {  
    // Hide legal info  
    if (! $( "#legal-info" ).is( ":hidden" ) ) { $( "#legal-info" ).hide(); }
    // Slide down team info
    if ( $( "#team-info" ).is( ":hidden" ) ) {    $( "#team-info" ).slideDown( "fast" );  } else {    $( "#team-info" ).slideUp();  }

    });
    // team link click ends


    // legal link click
    $( "#legal" ).click(function() {  
    // Hide team info   
    if (! $( "#team-info" ).is( ":hidden" ) ) { $( "#team-info" ).hide(); }
    // Slide down legal info
    if ( $( "#legal-info" ).is( ":hidden" ) ) {    $( "#legal-info" ).slideDown( "fast" );  } else {    $( "#legal-info" ).slideUp();  }

    });
    // legal link click ends


    });