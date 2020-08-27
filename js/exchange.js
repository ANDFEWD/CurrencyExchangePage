/*$.ajax({
  method: 'GET',
  url: 'https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
  success: function(response) {
    var json = JSON.parse(response);
    console.log(json);
  }
});*/


/*$.getJSON("https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", 
	function(data) {

    /*$('#usd').html;*/
    /*console.log(data)*/

/*});*/

$(document).ready(function(){
	$("#btnExchange").click(function () {
		$('#currencis').empty();
		$.ajax({
			type: 'GET',
			url: "https://old.bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
			success: function(data){
				$.each(data,function(index, value){
					if ((value.cc === 'USD')||(value.cc === 'EUR')||(value.cc === 'GBP')||(value.cc === 'CAD')||
					(value.cc === 'PLN')||(value.cc === 'JPY') )
						// let currate = value.rate
						// let  vrate = currate.toFixed(2);
					$('#currencis').append('<tr><td class="currName">'+value.cc+'</td><td class="currRate">'+value.rate.toFixed(2)+'</td></tr>')


					// if (value.cc === 'USD'){
					// 	$('#usd').html(value.rate)
					// }

					// 'EUR','GBP','CAD','PLN','JPY'

					 
    			
				});
				
			}
			});
		});
	});

