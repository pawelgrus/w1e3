$(document).ready(function() {

    $.fn.highlighted = function() {
    		console.log(this);
	    	return this.addClass("highlighted");
	    }

    $(".col.col-md-12").highlighted();
    $(".navbar-header a[href^='http']").attr("target", "_blank");
    $("input:radio, input:checkbox").not(":checked").highlighted();
    $(".text p:empty:first").highlighted().remove();
    $(".pagination-item:not(spam)").highlighted();
});