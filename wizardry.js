$.fn.wizardry = function(options) {

	var defaults = {
		finish_action: function(){},
		restart_action: function(){},
		next_action: function(){},
		start_step: 1,
		answers: []
	};

	var settings = $.extend( {}, defaults, options );



	
    
	return this.each(function() {

		$wizard_base = $(this)

		initialize($wizard_base, settings)

		$wizard_base.find(".wizard-finish").on('click', settings.finish_action)

	    $wizard_base.find(".wizard-restart").on('click', function() {
	    		settings.restart_action();
	    		initialize();
	    	}
	    )

	    $wizard_base.find(".wizard-step .wizard-next").click(function() {
	    	next($(this));
	    	settings.next_action($(this));
	    });


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

			
	    	$wizard_base.find(".wizard-step:nth-child("+settings.start_step+")").show();
		}


    });

    
};