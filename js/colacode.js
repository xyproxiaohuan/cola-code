(function() {
	console.log('asdfasdfasdf');
	var selectedSodaPrice = 0;
  $('#Sodas li').on('click',function(){
	  selectedSodaPrice = $(this).data('price');
    $('#cost').text(selectedSodaPrice);
  });
  $('#get-soda').on('click',function(){
	var amountPaid = $('#amount-paid').val();
  var change = (amountPaid - selectedSodaPrice);

  if(change < 0) {
  	$('#output').text('NOT ENOUGH MONEY');
  } else {
  	$('#output').text("Your Change is $" + change);
  }

});
})();
