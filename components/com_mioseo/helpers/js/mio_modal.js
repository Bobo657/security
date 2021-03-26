var modalWindow = {
	parent:"body",
	windowId:null,
	content:null,
	width:null,
	height:null,
	close:function()
	{
		jQuery(".modal-window").remove();
		jQuery(".modal-overlay").remove();
	},
	open:function()
	{
		modal_style = "";
		if(this.width != null && this.width != 0){
			modal_style = 'style="width:'+(this.width + 50)+'px; height:'+(this.height + 80)+'px;"';
		}
		
		var modal = "";
		modal += "<div class=\"modal-overlay\"></div>";
		modal += "<div id=\"" + this.windowId + "\" "+modal_style+" class=\"modal-window modal mio_modal \">";
		modal += this.content;
		modal += "</div>";
		jQuery(this.parent).append(modal);


		jQuery(".modal-window").append("<a class=\"close-window\">Close</a>");
		jQuery(".close-window").click(function(){modalWindow.close();});
		jQuery(".modal-overlay").click(function(){modalWindow.close();});
	}
};

var openMioModal = function(width, height, source){
	modalWindow.windowId = "myModal";
	
	iframe_style = "";
	if(width != 0 && height != 0){
		modalWindow.width = width;
		modalWindow.height = height;
		iframe_style = 'style="width:'+(width + 50)+'px; height:'+(height + 75)+'px;"';
	}
	
	modalWindow.content = "<iframe "+iframe_style+" class='pub_modal_frame' src='" + source + "'></iframe>";
	modalWindow.open();
};