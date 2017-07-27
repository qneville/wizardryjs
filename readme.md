# Wizardry.js #
A simple and extendible jQuery wizard manager for forms.


# HTML Setup #
HTML setup involves the .form-wizard class among a few other things. Just follow this template.

```html

<form class="form-wizard">

	<fieldset class="wizard-step" data-step="1" id="wizard-1" class="text-center">
		<h3>Title for step 1</h3>
		<p>Text goes here and stuff.</p>
		<input name="input1" id="input1" type="text" placeholder="My neato input" class="wizard-input"">
		<div class="clearfix">
			<a class="wizard-restart">Start Over</a>
			<a class="wizard-next">Next</a>

		</div>
	</fieldset>

	
	<!-- Add more wizard-steps -->


	<fieldset class="wizard-step" data-step="fin" id="wizard-fin" class="text-center">
		<h3>You're done!</h3>
		<p>Finish up and do something!</p>
		<div class="clearfix">
			<a class="wizard-finish">Finish</a>
			<a class="wizard-restart">Start Over</a>
		</div>
	</fieldset>

</form>

```


# JS Setup #

## Include the script ##

Make sure to include wizardry.js after you've included jQuery

```html
<script src="./js/vendor/wizardry.js"></script>
```

## Hook it all up ##

Set up the magic. Options are optional, but your form won't do much if the Finish action isn't hooked up.

```js
<script>
	/* Optional options */
	var options = {
		finish_action: function(){},   // Function callback after clicking "Finish"
		restart_action: function(){},  // Function callback after clicking "Start Over"
		next_action: function(){},     // Function callback after clicking 'Next' button
		start_step: 1,				   // Start at index (1 is first)
		answers: ['answer1','answer2'] // Following indexes of input, populate 
	};

	/* Initialize the wizard */
	$( ".form-wizard" ).wizardry(options);
</script>
```

# Examples #

## Submitting the form ##

Soon to come