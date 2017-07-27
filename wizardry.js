
/*
** Wizardry.js
** v0.1
** Quintan Neville - qneville.com
*/
$.fn.wizardry = function(options) {

	/* Default options */
	var defaults = {
		finish_action: function(){},
		restart_action: function(){},
		next_action: function(){},
		start_step: 1,
		answers: []
	};
	/* Override where provided */
	var settings = $.extend( {}, defaults, options );
	    
	/* Return the wizardry */
	return this.each(function() {
		/*Base class*/
		$wizard_base = $(this)
		initialize($wizard_base, settings)

		/* Finish*/
		$wizard_base.find(".wizard-finish").on('click', settings.finish_action)

		/* Restart */
	    $wizard_base.find(".wizard-restart").on('click', function() {
	    		settings.restart_action();
	    		initialize();
	    	}
	    )

	    /* Next */
	    $wizard_base.find(".wizard-step .wizard-next").click(function() {
	    	next($(this));
	    	settings.next_action($(this));
	    });

	    /****************************
	    	Reusables
	    *****************************/
		function next($this) {
			
	    	$this.closest('.wizard-step').hide();
	    	$this.closest('.wizard-step').next().show();
		}
	    function initialize() {
			$wizard_base.find(".wizard-step").hide();
			var i = 0;
			$wizard_base.find(".wizard-step").each(function() {
				if (settings.answers[i] != null) {
					$(this).find("input, textarea").val(settings.answers[i])
				}
				i++;
			})				

			/* Initialize on default step */
	    	$wizard_base.find(".wizard-step:nth-child("+settings.start_step+")").show();
		}
    });    
};