// quote constructor
var Quote = function(quote, author){
	this.quote = quote;
	this.author = author;
	this.ranking = 3;
	this.addQuoteToArray = function(){
		quotesArr.push(this);
	}
	this.renderQuoteContainer = function (){
		var quoteContainer = $('<div class="quote-container">');
		var quoteChangeContainer = $('<div class="quote-change-container">');
		quoteContainer.append('<h5 class="author-main">' +this.author+ '</h5>', quoteChangeContainer, '<p>'+this.quote+'</p>');
		quoteChangeContainer.append('<div class="ranking">'+this.ranking+'</div>', '<input type="submit" value="Delete">');
		return quoteContainer;

	};
}



// quote instances
var quote1 = new Quote('When your only tool is a hammer, all problems start looking like nails.', 'Oscar Wilde');
var quote2 = new Quote('99 percent of lawyers give the rest a bad name.', 'Oscar Wilde');
var quote3 = new Quote('Artificial intelligence is no match for natural stupidity.', 'Oscar Wilde');
var quote4 = new Quote("I don't have a solution, but I do admire the problem.", 'Beavis Miller');
var quote5 = new Quote('The only substitute for good manners is fast reflexes.', 'Beavis Miller');
var quote6 = new Quote("Support bacteria - they're the only culture some people have.", 'Butthead Johnson');
var quote7 = new Quote('Letting the cat out of the bag is a whole lot easier than putting it back in.', 'Butthead Johnson');
var quote8 = new Quote('Well, here I am! What are your other two wishes?', 'Butthead Johnson');
var quote9 = new Quote('There are a lot of really dumb roads to follow', 'Butthead Johnson');
var quote10 = new Quote('I am the coolest cucumber.', 'Bill Clinton');

// quotes array
var quotesArr = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];


var renderQuotesArr = function (){
	for (var i=0; i<quotesArr.length; i++){
  		$('.main-quote-list').append(quotesArr[i].renderQuoteContainer());
  	}
};







$(document).on('ready', function() {
	renderQuotesArr();
  $('#submit-quote').on('click', function(e){
  	e.preventDefault();
  	var quoteText = $('#quote-text').val();
  	var quoteAuthor = $('#quote-author').val();

  	var newQuote = new Quote(quoteText, quoteAuthor);
  	newQuote.addQuoteToArray();
  	$('.main-quote-list').empty();
  	renderQuotesArr();
  	$('#quote-text').val('');
  	$('#quote-author').val('');
  });
});









