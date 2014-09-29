$(document).ready(function(){


		
	var url=$(location).attr('href');
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/About-Us')
		{
				var imgsrc='header-aboutus.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/About-Us/Meet-the-Team')
		{
				var imgsrc='header-aboutus.jpg';
		}		
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/About-Us/Our-Mission')
		{
				var imgsrc='header-aboutus.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/About-Us/Why-Klinker-Brick')
		{
				var imgsrc='header-aboutus.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/About-our-Wines')
		{
			var imgsrc='header-ourwines.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/About-our-Wines/Old-Vines')
		{
			var imgsrc='header-ourwines.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/About-our-Wines/Our-Old-Vine-Vineyards')
		{
			var imgsrc='header-ourwines.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/About-our-Wines/The-Birth-of-a-Ghost')
		{
			var imgsrc='header-ourwines.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/About-our-Wines/Medals-and-Awards')
		{
			var imgsrc='header-ourwines.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/Wine-Club')
		{
			var imgsrc='header-wineclub.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/Shop')
		{
			var imgsrc='header-shop.jpg';
		}
		if(url==='http://klinkerbrickdev.uswest.vin65dev.com/For-the-Trade')
		{
			var imgsrc='header-forthetrade.jpg';
		}
		
		
			$('#headerimage').html('<img src=/assets/images/'+ imgsrc + ' />');
		
		console.log(url);
		
});