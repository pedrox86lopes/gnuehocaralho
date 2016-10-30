(function() {
    function htmlreplace(a, b, reflags, element) {    
        if (!element) element = document.body;
        var nodes = element.childNodes;
        var r = new RegExp(a, reflags);
        for (var n=0; n<nodes.length; n++) {
            if (nodes[n].nodeType == Node.TEXT_NODE) {
                nodes[n].textContent = nodes[n].textContent.replace(r, b);
            } else {
                htmlreplace(a, b, reflags, nodes[n]);
            }
        }
    }

    var readyStateCheckInterval = setInterval(function() {
	    if (document.readyState === "complete") {
		    clearInterval(readyStateCheckInterval);

		    htmlreplace("GNU", "GNU EH O CARALHO!!!", 'g');
		    htmlreplace("GNU[gG]", "GNU eh o caralho!!!", 'g');
		    htmlreplace("ubuntu", "gnu eh o caralho porra!!!", 'gi');
                    htmlreplace("gnu/linux","Linux");
                    htmlreplace("anahuac","anahue","gi");
	    }
    }, 10);
})();
