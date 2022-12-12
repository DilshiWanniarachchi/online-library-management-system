
 //--- References:- youtube.com 



var novels = document.querySelector('#novels');
var educational = document.querySelector('#educational');
var papers = document.querySelector('#papers');
var documentaries = document.querySelector('#documentaries');
var journals = document.querySelector('#journals');
var shories = document.querySelector('#stories');

var image1 = document.querySelector('#image1');
var detail1 = document.querySelector('#detail1');      
var btn1 = document.querySelector('#btn1');
var image2 = document.querySelector('#image2');
var detail2 = document.querySelector('#detail2');
var btn2 = document.querySelector('#btn2');
var image3 = document.querySelector('#image3');
var detail3 = document.querySelector('#detail3');
var btn3 = document.querySelector('#btn3');
var image4 = document.querySelector('#image4');
var detail4 = document.querySelector('#detail4');
var btn4 = document.querySelector('#btn4');

novels.addEventListener('click', () => {
	image1.src = 'images/novel1.png'
	detail1.innerHTML = '<b><center>Harry Potter<br>and the Prisoner of Azkaban</center></b><br>Harry, Ron and Hermoine return to Hogwarts just as they learn about Sirius Black and his plans to kill Harry. However, when Harry runs into him, he learns that the truth is far from reality.'
	image2.src = 'images/book3.jpg'
	detail2.innerHTML = '<b><center>Les Miserables</center></b><br>A French historical novel by Victor Hugo, first published in 1862, that is considered one of the greatest novels of the 19th century. In the English-speaking world, the novel is usually referred to by its original French title.'
	image3.src = 'images/novel3.jpg'
	detail3.innerHTML = '<b><center>Memorial</center></b><br>A funny and profound story about family in all its strange forms, joyful and hard-won vulnerability, becoming who youre supposed to be, and the limits of life.'
	image4.src = 'images/novel4.jpeg'
	detail4.innerHTML = '<b><center>Perfect tunes</center></b><br>An intoxicating blend of music, love, and family from one of the essential writers of the internet generation.Have you ever wondered what your mother was like before she became your mother, and what she gave up in order to have you?'

	document.getElementById("btn1").addEventListener("click", gotoUrl1)

	function gotoUrl1() {
		window.location.href = "book1.html";  //--- References:-stackoverflow.com
	};

	document.getElementById("btn2").addEventListener("click", gotoUrl2);

	function gotoUrl2() {
		window.location.href ="book2.html";
	};

	document.getElementById("btn3").addEventListener("click", gotoUrl3)

	function gotoUrl3() {
		window.location.href ="book3.html";
	};

	document.getElementById("btn4").addEventListener("click", gotoUrl4);

	function gotoUrl4() {
		window.location.href ="book4.html";
	};


});

educational.addEventListener('click', () => {
	image1.src = 'images/edu1.jpg'
	detail1.innerHTML = '<b><center>Applied Mathematics</center></b><br><b>Author(s): </b>L.bostock & S.Chandler<br><b>Originally published:</b> 1975<br><b>Editor:</b> Sue Chandler'
	image2.src = 'images/edu3.jpg'
	detail2.innerHTML = '<b><center>Effective JAVA</center></b><br><b>Author:</b> Joshua Bloch<br><b>Originally published:</b> 2001'
	image3.src = 'images/edu2.jpg'
	detail3.innerHTML = '<b><center>Java Puzzlers<br>Traps, Pitfalls, and Corner Cases</center></b><br><b>Author(s):</b> Neal Gafter, Joshua Bloch<br><b>Originally published:</b> June 2005'
	image4.src = 'images/edu4.jpg'
	detail4.innerHTML = '<b><center>Analysis and mathematical physics</center></b><br><b>Author:</b> Hans Triebel<br><b>Originally published:</b> 1982'

});

documentaries.addEventListener('click', () => {
	image1.src = 'images/docu1.jpg'
	detail1.innerHTML = '<b><center>Documenting the visual Arts</center></b><br>Bringing together an international range of scholars, as well as filmmakers and curators, this book explores the rich variety in form and content of the contemporary art documentary. '
	image2.src = 'images/docu2.jpeg'
	detail2.innerHTML = '<b><center>A New History of Documentary Film</center></b><br>This Edition offers a much-needed resource, considering the very rapid changes taking place within documentary media.'
	image3.src = 'images/docu3.jpg'
	detail3.innerHTML = 'Since publication of <b>Utopia</b>, there has been a steady stream of literary works that depict a better world, positive utopias in film, however, have been scarce. There is a consensus that utopias in the Morean tradition are not suited to fiction film, and research has accordingly focused on dystopias.'
	image4.src = 'images/docu4.jpg'
	detail4.innerHTML = '<b><center>Gotta get theroux this</center></b><br>In 1994 fledgling journalist Louis Theroux was given a one-off gig on Michael Moores TV Nation, presenting a segment on apocalyptic religious sects.'

});

journals.addEventListener('click', () => {
	image1.src = 'images/journ1.jpeg'
	detail1.innerHTML = '<b><center>The British Journal of Aesthetics</center></b><br> A highly regarded as an international forum for debate in philosophical aesthetics and the philosophy of art. The Journal is published to promote the study and discussion of philosophical questions about aesthetic experience and the arts.'
	image2.src = 'images/journ2.jpeg'
	detail2.innerHTML = '<b><center>Animal Frontiers</center></b><br> An official journal of ASAS, CSAS, EAAP, and AMSA, publishes discussion and position papers that present international perspectives on high-impact, global issues in animal agriculture. '
	image3.src = 'images/journ3.jpeg'
	detail3.innerHTML = '<b><center>Mathematical Medicine and Biology</center></b><br> Publishes original articles with a significant mathematical content addressing topics in medicine and biology. Papers exploiting modern developments in applied mathematics are particularly welcome.'
	image4.src = 'images/journ4.jpeg'
	detail4.innerHTML = '<b><center>AoB Plants</center></b> <br>Explore a collection of high quality articles published in AoB PLANTS, handpicked by the Editor of the journal.'
	
});

stories.addEventListener('click', () => {
	image1.src = 'images/story1.jpg'
	detail1.innerHTML = '<b><center>The Gift of the Magi</center></b><br> A is a short story by O. Henry first published in 1905.<br> The story tells of a young husband and wife and how they deal with the challenge of buying secret Christmas gifts for each other with very little money.'
	image2.src = 'images/story2.jpg'
	detail2.innerHTML = '<b><center>The Piece of String</center></b><br> An 1883 short story by Guy de Maupassant.<br>It is included in the short story collection "Miss Harriet".'
	image3.src = 'images/story3.jpg'
	detail3.innerHTML = '<b><center>The Lady, or the Tiger?</center></b><br> A much-anthologized short story written by Frank R. Stockton for publication in the magazine The Century in 1882. "The Lady, or the Tiger?" has entered the English language as an allegorical expression, a shorthand indication or signifier, for a problem that is unsolvable.'
	image4.src = 'images/story4.jpg'
	detail4.innerHTML = '<b><center>55 Short Stories from the New Yorker</center></b><br>A literary anthology of short fiction first published in The New Yorker magazine from the years 1940 through 1949.'

});

papers.addEventListener('click', () => {
	image1.src = 'images/news1.png'
	detail1.innerHTML = '<b><center>NEW YORK TIMES</center><br>Founded:</b> September 18, 1851<br>(as New-York Daily Times)<br><b>Founder:</b> George Jones<br><b>Publisher:</b> A.G.Sulzberger<br><b>Owner:</b> The New York Times Company<br><b>Opinion editor:</b> Kathleen Kingsbury'
	image2.src = 'images/news2.jpg'
	detail2.innerHTML = '<b><center>THE WALL STREET JOURNAL</center><br>Founded:</b> July 8, 1889<br><b>Founder(s):</b> Charles Dow; Edward Jones<br><b>Publisher:</b> Almar Latour<br><b>Owner:</b> Dow Jones & Company, News Corporation'
	image3.src = 'images/news4.png'
	detail3.innerHTML = '<b><center>NEWSDAY</center><br>Founded:</b> September 3, 1940<br><b>Owner:</b> Patrick Dolan<br><b>Editor:</b> Debbie Henley<br><b>Headquarters:</b> 6 Corporate Center Drive, NY, U.S. 11747'
	image4.src = 'images/news3.jpeg'
	detail4.innerHTML = '<b><center>NEW YORK POST</center><br>Founder:</b> Alexander Hamilton<br>(as The New-York Evening Post)<br><b>Publisher:</b> Sean Giancola<br><b>Owner:</b> News Corp, News Corporation<br><b>Editor(s):</b> Stephen Lynch, Michelle Gotthelf'
	
});

