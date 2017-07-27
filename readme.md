# Wizardry.js #
A simple and extendible jQuery wizard manager for forms.


#HTML Setup#
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


#JS Setup#
Make sure to include wizardry.js after you've included jQuery

```html
<script src="./js/vendor/wizardry.js"></script>
```

Hook it all up

```js
<script>
	$( ".form-wizard" ).wizardry({
		finish_action: function(){
			// Generate templates for githook tutorial.
			console.log(get_inputs())
			
			set_up_templates();
			
		},
		restart_action: function() {
			// Clear cookies
			$('.wizard-input').each(function() {
				$(this).val('');
			});
			$.removeCookie('wizard_inputs');
		},
		next_action: function() {
			// Update cookie
			$.cookie('wizard_inputs', JSON.stringify(get_inputs()))
		},
		answers: JSON.parse($.cookie('wizard_inputs'))
	});
</script>
```