
(function(){
  var selectedSodaPrice = 0;
$('#Soda li').on('click',function(){
  selectedSodaPrice = $(this).data('price');
  $('#task').text(selectedSodaPrice);
});
$('#get-soda').on('click',function(){
 var amountPaid = $('#amount-paid').val();
 var charge = (amountPaid - selectedSodaPrice);

});
