require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/simplexml/ready!'
 ], function(_, $, mvc){

    var tokens = mvc.Components.get('default');

    $(document).on("input change", "#slider_input", function(){
        tokens.set("slider_value", $(this).val());
    });
});
