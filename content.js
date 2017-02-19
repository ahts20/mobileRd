// content.js
if(window.location.href.indexOf(".m.") > -1) {
       //alert(window.location)
	   
	   var url = window.location.toString()
	   var url = url.replace('.m.', '.');
	   //alert(url)
	   window.location.replace(url);
	}
	
if(window.location.href.indexOf("m.") > -1) {
       //alert(window.location)
	   
	   var url = window.location.toString()
	   var url = url.replace('m.', '');
	   //alert(url)
	   window.location.replace(url);
	}