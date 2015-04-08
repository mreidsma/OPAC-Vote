# Trinity College OPAC Voting Bookmarklet

This is a proof of concept hack for Trinity College Library (Cambridge University). The idea is to dynamically add a vote button under the holdings table that would allow folks to "vote" fo the library to purchase more copies of the book. The idea is to reach the kind of audience that doesn't bother putting a hold on a book that is out.

The idea was Kristin Lamb's, of Trinity College Library. I thought this would be an easy way to test the concept out before throwing a lot of College development time at it, so I wrote this on my lunch break on Wednesday, April 8th, 2015. It's not pefect, and may have been affected by a bit of soup that spilld on my keyboard. 

## Installation

For testing purposes, I'm hosting all of the server-side scripts (the JS is pulled from the raw version here on Github). All you need to do is create a bookmark with the following URL, save it to your bookmarks bar, and then click it when you're on a record page in Trinity College Library's Catalogue:

`javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://raw.githubusercontent.com/mreidsma/OPAC-Vote/master/opacvote.js';})();`

The code needs some cleanup, and Trinity would probably want a more sophisticated way to store the record numbers of the items students vote for (or even add some more info, like author, title, date, etc.). As it is, the votes are recorded to a CSV file stored on the server with the php script that mimics the transparent gif called when the vote link is clicked (to get around the same origin policy of hosted Millennium servers - the php echos back a proper gif response, so the browser will be happy, too).

You can see the CSV of votes here: [http://gvsulib.com/temp/Opac-vote/opacvote.csv](http://gvsulib.com/temp/Opac-vote/opacvote.csv)

## License

Do whatever you want with this! (For good, not evil.)

## Questions?

You can find me at [reidsmam@gvsu.edu](mailto:reidsmam@gvsu.edu) or on Twitter at [@mreidsma](http://twitter.com/mreidsma). I write on the web at [matthewreidsma.com](http://matthewreidsma.com).

