// content.js

if(window.location.href.indexOf(".m.") > -1) {
       //alert(window.location)
	   
	   var url = window.location.toString()
	   var url = url.replace('.m.', '.');
	   //alert(url)
	   window.location.replace(url);
	}
	
else if(window.location.href.indexOf("m.") > -1) {
       //alert(window.location)
	   
	   var url = window.location.toString()
	   var url = url.replace('m.', '');
	   //alert(url)
	   window.location.replace(url);
	}

else if(window.location.href.indexOf("mobile.") > -1) {
       var url = window.location.toString()
	   var url = url.replace('mobile.', '');
	   window.location.replace(url);
	}
	
	else if(window.location.href.indexOf(".mobile.") > -1) {
       var url = window.location.toString()
	   var url = url.replace('.mobile.', '.');
	   window.location.replace(url);
	}