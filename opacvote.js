/**********************************************************************

This script is a proof of concept for adding a "vote for more copies"
link to the Trinity College Library catalogue, Cambridge University.
It came out of a conversation I had with Kristin Lamb, who works at
Trinity, and I thought this would be a clever way to test it out. 

Version .1 alpha // April 8, 2015.

Please see the Github repository for license and instructions:


Matthew Reidsma, Grand Valley State University, 2015.

***********************************************************************/

// In this version, the script is called by a bookmarklet. In the final
// version, this would likely be loaded in botlogo.html from the 
// Millennium Web Master.

// Define some variables. Break out the first two for easy modification

    // The text of the vote link under the holdings
    var linkLabel = 'Vote for an Extra Copy';

    // The text of the disclaimer
    var linkDisclaimer = 'Duplicates will only be purchased for books with a high number of votes';

    // Full URL for where you put the other files for this script, including http: or https: and trailing slash
    var recorderUrl = 'http://gvsulib.com/temp/OPAC-Vote/'; 

    // Restyle the items table to not have the chunky border. 'true' for yes, 'false' for no.
    var fancyTable = true;

/*********************************************************************

Don't edit below this unless you know what you're doing!

*********************************************************************/

// Define other variables

    var element =  document.getElementById('recordnum'), clicks = 0;

if (typeof(element) != 'undefined' && element != null) { // This is a bib detail page
    
    // Add the custom CSS for the vote button
    var newStylesheet = document.createElement('link');
    newStylesheet.href = recorderUrl + 'opacvote.css';
    newStylesheet.rel = 'stylesheet';
    document.getElementsByTagName('head')[0].appendChild(newStylesheet);
    
    // Get record number of record
    var recordNumber = element.href;
    record = recordNumber.split('record=');
    
    console.log(record[1]);
    
    // Insert link under the holdings table
    var voteLink = document.createElement('div');
    voteLink.id = 'voteClick';
    voteLink.innerText = linkLabel;
    appendToClass('bibContent', voteLink);
    
    // Set click handler for new link
    document.getElementById("voteClick").addEventListener("click", function(){
        
        if(clicks < 1) { // Cannot vote more than once on this visit
        
            // Insert image tag with 1x1 transparent gif return from php script
            // Could use AJAX but Millennium hosted has strict Same Origin controls
            var voteHack = document.createElement('img');
            voteHack.style.display = 'none';
            voteHack.src = recorderUrl + 'opacvote.php?record=' + recordNumber;
            document.body.appendChild(voteHack);
            
            // Add one to clicks to keep folks from voting again
            clicks++;
        }
        
    });
    
    // Class grabbing function modified from Andrew Dunn
    // http://stackoverflow.com/questions/3808808/how-to-get-element-by-class-in-javascript
    function appendToClass(matchClass, content) {
        var elems = document.getElementsByTagName('div'), i;
        for (i in elems) {
            if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
                elems[i].appendChild(content);
            }
        }
    }
    
  
}


    



