plugin.updateStatus = theWebUI.updateStatus;
theWebUI.updateStatus = function()
{	
	var self = theWebUI;
	var speedDL = (self.total.speedDL>0 && self.total.speedDL<100*1024*1024) ? theConverter.speed(self.total.speedDL) : '0' + theUILang.kbs;
	var speedUL = (self.total.speedUL>0 && self.total.speedUL<100*1024*1024) ? theConverter.speed(self.total.speedUL) : '0' + theUILang.kbs;
	document.title = 'D: ' + speedDL + ' U: '+ speedUL + ' -  ruTorrent v' + self.version;
	plugin.updateStatus();
}

theWebUI.setStatusUpdate();