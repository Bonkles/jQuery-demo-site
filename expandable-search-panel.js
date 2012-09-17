/**
 * @author Bonkles
 */

//This jquery method creates an accordion-like structure to our left-hand search bar, 
//but with the non-accordion-like twist that the widgets are all independently open-and-closeable. 

$("#search-bar").addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
  .find("h3")
    .addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
    .hover(function() { $(this).toggleClass("ui-state-hover"); })
    .prepend('<span class="ui-icon ui-icon-triangle-1-e"></span>')
    .click(function() {
      $(this)
        .toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom")
        .find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end()
        .next().toggleClass("ui-accordion-content-active").slideToggle();
      return false;
    })
    .next()
      .addClass("ui-accordion-content  ui-helper-reset ui-widget-content ui-corner-bottom")
      .hide();


//This statement provides the autocomplete search field with some example items
//in the fill bar.
$(function() {
		var availableTags = [
			"Applesauce",
			"Brownies",
			"Cherries",
			"Dough",
			"Eclairs",
			"Figs",
			"Gravy",
			"Ham",
			"Jell-O",
			"Jam",
			"Lemons",
			"Cake"
		];
		$( "#search-text-field" ).autocomplete({
			source: availableTags
		});
	});
//
