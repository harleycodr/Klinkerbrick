/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/

/*AUTOCOMPLETE EXTENSION TO ALLOW HTML IN AUTOCOMPLETE*/
/*
 * jQuery UI Autocomplete HTML Extension
 *
 * Copyright 2010, Scott González (http://scottgonzalez.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/scottgonzalez/jquery-ui-extensions
 */
(function( $ ) {

var proto = $.ui.autocomplete.prototype,
	initSource = proto._initSource;

function filter( array, term ) {
	var matcher = new RegExp( $.ui.autocomplete.escapeRegex(term), "i" );
	return $.grep( array, function(value) {
		return matcher.test( $( "<div>" ).html( value.label || value.value || value ).text() );
	});
}

$.extend( proto, {
	_initSource: function() {
		if ( this.options.html && $.isArray(this.options.source) ) {
			this.source = function( request, response ) {
				response( filter( this.options.source, request.term ) );
			};
		} else {
			initSource.call( this );
		}
	},

	_renderItem: function( ul, item) {
		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append( $( "<a></a>" )[ this.options.html ? "html" : "text" ]( item.label ) )
			.appendTo( ul );
	}
});

})( jQuery );


/*Countdown Timer*/
/* http://keith-wood.name/countdown.html
   Countdown for jQuery v1.5.9.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
(function($){function Countdown(){this.regional=[];this.regional['']={labels:['Years','Months','Weeks','Days','Hours','Minutes','Seconds'],labels1:['Year','Month','Week','Day','Hour','Minute','Second'],compactLabels:['y','m','w','d'],whichLabels:null,timeSeparator:':',isRTL:false};this._defaults={until:null,since:null,timezone:null,serverSync:null,format:'dHMS',layout:'',compact:false,significant:0,description:'',expiryUrl:'',expiryText:'',alwaysExpire:false,onExpiry:null,onTick:null,tickInterval:1};$.extend(this._defaults,this.regional['']);this._serverSyncs=[]}var w='countdown';var Y=0;var O=1;var W=2;var D=3;var H=4;var M=5;var S=6;$.extend(Countdown.prototype,{markerClassName:'hasCountdown',_timer:setInterval(function(){$.countdown._updateTargets()},980),_timerTargets:[],setDefaults:function(a){this._resetExtraLabels(this._defaults,a);extendRemove(this._defaults,a||{})},UTCDate:function(a,b,c,e,f,g,h,i){if(typeof b=='object'&&b.constructor==Date){i=b.getMilliseconds();h=b.getSeconds();g=b.getMinutes();f=b.getHours();e=b.getDate();c=b.getMonth();b=b.getFullYear()}var d=new Date();d.setUTCFullYear(b);d.setUTCDate(1);d.setUTCMonth(c||0);d.setUTCDate(e||1);d.setUTCHours(f||0);d.setUTCMinutes((g||0)-(Math.abs(a)<30?a*60:a));d.setUTCSeconds(h||0);d.setUTCMilliseconds(i||0);return d},periodsToSeconds:function(a){return a[0]*31557600+a[1]*2629800+a[2]*604800+a[3]*86400+a[4]*3600+a[5]*60+a[6]},_settingsCountdown:function(a,b){if(!b){return $.countdown._defaults}var c=$.data(a,w);return(b=='all'?c.options:c.options[b])},_attachCountdown:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName)){return}c.addClass(this.markerClassName);var d={options:$.extend({},b),_periods:[0,0,0,0,0,0,0]};$.data(a,w,d);this._changeCountdown(a)},_addTarget:function(a){if(!this._hasTarget(a)){this._timerTargets.push(a)}},_hasTarget:function(a){return($.inArray(a,this._timerTargets)>-1)},_removeTarget:function(b){this._timerTargets=$.map(this._timerTargets,function(a){return(a==b?null:a)})},_updateTargets:function(){for(var i=this._timerTargets.length-1;i>=0;i--){this._updateCountdown(this._timerTargets[i])}},_updateCountdown:function(a,b){var c=$(a);b=b||$.data(a,w);if(!b){return}c.html(this._generateHTML(b));c[(this._get(b,'isRTL')?'add':'remove')+'Class']('countdown_rtl');var d=this._get(b,'onTick');if(d){var e=b._hold!='lap'?b._periods:this._calculatePeriods(b,b._show,this._get(b,'significant'),new Date());var f=this._get(b,'tickInterval');if(f==1||this.periodsToSeconds(e)%f==0){d.apply(a,[e])}}var g=b._hold!='pause'&&(b._since?b._now.getTime()<b._since.getTime():b._now.getTime()>=b._until.getTime());if(g&&!b._expiring){b._expiring=true;if(this._hasTarget(a)||this._get(b,'alwaysExpire')){this._removeTarget(a);var h=this._get(b,'onExpiry');if(h){h.apply(a,[])}var i=this._get(b,'expiryText');if(i){var j=this._get(b,'layout');b.options.layout=i;this._updateCountdown(a,b);b.options.layout=j}var k=this._get(b,'expiryUrl');if(k){window.location=k}}b._expiring=false}else if(b._hold=='pause'){this._removeTarget(a)}$.data(a,w,b)},_changeCountdown:function(a,b,c){b=b||{};if(typeof b=='string'){var d=b;b={};b[d]=c}var e=$.data(a,w);if(e){this._resetExtraLabels(e.options,b);extendRemove(e.options,b);this._adjustSettings(a,e);$.data(a,w,e);var f=new Date();if((e._since&&e._since<f)||(e._until&&e._until>f)){this._addTarget(a)}this._updateCountdown(a,e)}},_resetExtraLabels:function(a,b){var c=false;for(var n in b){if(n!='whichLabels'&&n.match(/[Ll]abels/)){c=true;break}}if(c){for(var n in a){if(n.match(/[Ll]abels[0-9]/)){a[n]=null}}}},_adjustSettings:function(a,b){var c;var d=this._get(b,'serverSync');var e=0;var f=null;for(var i=0;i<this._serverSyncs.length;i++){if(this._serverSyncs[i][0]==d){f=this._serverSyncs[i][1];break}}if(f!=null){e=(d?f:0);c=new Date()}else{var g=(d?d.apply(a,[]):null);c=new Date();e=(g?c.getTime()-g.getTime():0);this._serverSyncs.push([d,e])}var h=this._get(b,'timezone');h=(h==null?-c.getTimezoneOffset():h);b._since=this._get(b,'since');if(b._since!=null){b._since=this.UTCDate(h,this._determineTime(b._since,null));if(b._since&&e){b._since.setMilliseconds(b._since.getMilliseconds()+e)}}b._until=this.UTCDate(h,this._determineTime(this._get(b,'until'),c));if(e){b._until.setMilliseconds(b._until.getMilliseconds()+e)}b._show=this._determineShow(b)},_destroyCountdown:function(a){var b=$(a);if(!b.hasClass(this.markerClassName)){return}this._removeTarget(a);b.removeClass(this.markerClassName).empty();$.removeData(a,w)},_pauseCountdown:function(a){this._hold(a,'pause')},_lapCountdown:function(a){this._hold(a,'lap')},_resumeCountdown:function(a){this._hold(a,null)},_hold:function(a,b){var c=$.data(a,w);if(c){if(c._hold=='pause'&&!b){c._periods=c._savePeriods;var d=(c._since?'-':'+');c[c._since?'_since':'_until']=this._determineTime(d+c._periods[0]+'y'+d+c._periods[1]+'o'+d+c._periods[2]+'w'+d+c._periods[3]+'d'+d+c._periods[4]+'h'+d+c._periods[5]+'m'+d+c._periods[6]+'s');this._addTarget(a)}c._hold=b;c._savePeriods=(b=='pause'?c._periods:null);$.data(a,w,c);this._updateCountdown(a,c)}},_getTimesCountdown:function(a){var b=$.data(a,w);return(!b?null:(!b._hold?b._periods:this._calculatePeriods(b,b._show,this._get(b,'significant'),new Date())))},_get:function(a,b){return(a.options[b]!=null?a.options[b]:$.countdown._defaults[b])},_determineTime:function(k,l){var m=function(a){var b=new Date();b.setTime(b.getTime()+a*1000);return b};var n=function(a){a=a.toLowerCase();var b=new Date();var c=b.getFullYear();var d=b.getMonth();var e=b.getDate();var f=b.getHours();var g=b.getMinutes();var h=b.getSeconds();var i=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;var j=i.exec(a);while(j){switch(j[2]||'s'){case's':h+=parseInt(j[1],10);break;case'm':g+=parseInt(j[1],10);break;case'h':f+=parseInt(j[1],10);break;case'd':e+=parseInt(j[1],10);break;case'w':e+=parseInt(j[1],10)*7;break;case'o':d+=parseInt(j[1],10);e=Math.min(e,$.countdown._getDaysInMonth(c,d));break;case'y':c+=parseInt(j[1],10);e=Math.min(e,$.countdown._getDaysInMonth(c,d));break}j=i.exec(a)}return new Date(c,d,e,f,g,h,0)};var o=(k==null?l:(typeof k=='string'?n(k):(typeof k=='number'?m(k):k)));if(o)o.setMilliseconds(0);return o},_getDaysInMonth:function(a,b){return 32-new Date(a,b,32).getDate()},_normalLabels:function(a){return a},_generateHTML:function(c){var d=this._get(c,'significant');c._periods=(c._hold?c._periods:this._calculatePeriods(c,c._show,d,new Date()));var e=false;var f=0;var g=d;var h=$.extend({},c._show);for(var i=Y;i<=S;i++){e|=(c._show[i]=='?'&&c._periods[i]>0);h[i]=(c._show[i]=='?'&&!e?null:c._show[i]);f+=(h[i]?1:0);g-=(c._periods[i]>0?1:0)}var j=[false,false,false,false,false,false,false];for(var i=S;i>=Y;i--){if(c._show[i]){if(c._periods[i]){j[i]=true}else{j[i]=g>0;g--}}}var k=this._get(c,'compact');var l=this._get(c,'layout');var m=(k?this._get(c,'compactLabels'):this._get(c,'labels'));var n=this._get(c,'whichLabels')||this._normalLabels;var o=this._get(c,'timeSeparator');var p=this._get(c,'description')||'';var q=function(a){var b=$.countdown._get(c,'compactLabels'+n(c._periods[a]));return(h[a]?c._periods[a]+(b?b[a]:m[a])+' ':'')};var r=function(a){var b=$.countdown._get(c,'labels'+n(c._periods[a]));return((!d&&h[a])||(d&&j[a])?'<span class="countdown_section"><span class="countdown_amount">'+c._periods[a]+'</span><br/>'+(b?b[a]:m[a])+'</span>':'')};return(l?this._buildLayout(c,h,l,k,d,j):((k?'<span class="countdown_row countdown_amount'+(c._hold?' countdown_holding':'')+'">'+q(Y)+q(O)+q(W)+q(D)+(h[H]?this._minDigits(c._periods[H],2):'')+(h[M]?(h[H]?o:'')+this._minDigits(c._periods[M],2):'')+(h[S]?(h[H]||h[M]?o:'')+this._minDigits(c._periods[S],2):''):'<span class="countdown_row countdown_show'+(d||f)+(c._hold?' countdown_holding':'')+'">'+r(Y)+r(O)+r(W)+r(D)+r(H)+r(M)+r(S))+'</span>'+(p?'<span class="countdown_row countdown_descr">'+p+'</span>':'')))},_buildLayout:function(c,d,e,f,g,h){var j=this._get(c,(f?'compactLabels':'labels'));var k=this._get(c,'whichLabels')||this._normalLabels;var l=function(a){return($.countdown._get(c,(f?'compactLabels':'labels')+k(c._periods[a]))||j)[a]};var m=function(a,b){return Math.floor(a/b)%10};var o={desc:this._get(c,'description'),sep:this._get(c,'timeSeparator'),yl:l(Y),yn:c._periods[Y],ynn:this._minDigits(c._periods[Y],2),ynnn:this._minDigits(c._periods[Y],3),y1:m(c._periods[Y],1),y10:m(c._periods[Y],10),y100:m(c._periods[Y],100),y1000:m(c._periods[Y],1000),ol:l(O),on:c._periods[O],onn:this._minDigits(c._periods[O],2),onnn:this._minDigits(c._periods[O],3),o1:m(c._periods[O],1),o10:m(c._periods[O],10),o100:m(c._periods[O],100),o1000:m(c._periods[O],1000),wl:l(W),wn:c._periods[W],wnn:this._minDigits(c._periods[W],2),wnnn:this._minDigits(c._periods[W],3),w1:m(c._periods[W],1),w10:m(c._periods[W],10),w100:m(c._periods[W],100),w1000:m(c._periods[W],1000),dl:l(D),dn:c._periods[D],dnn:this._minDigits(c._periods[D],2),dnnn:this._minDigits(c._periods[D],3),d1:m(c._periods[D],1),d10:m(c._periods[D],10),d100:m(c._periods[D],100),d1000:m(c._periods[D],1000),hl:l(H),hn:c._periods[H],hnn:this._minDigits(c._periods[H],2),hnnn:this._minDigits(c._periods[H],3),h1:m(c._periods[H],1),h10:m(c._periods[H],10),h100:m(c._periods[H],100),h1000:m(c._periods[H],1000),ml:l(M),mn:c._periods[M],mnn:this._minDigits(c._periods[M],2),mnnn:this._minDigits(c._periods[M],3),m1:m(c._periods[M],1),m10:m(c._periods[M],10),m100:m(c._periods[M],100),m1000:m(c._periods[M],1000),sl:l(S),sn:c._periods[S],snn:this._minDigits(c._periods[S],2),snnn:this._minDigits(c._periods[S],3),s1:m(c._periods[S],1),s10:m(c._periods[S],10),s100:m(c._periods[S],100),s1000:m(c._periods[S],1000)};var p=e;for(var i=Y;i<=S;i++){var q='yowdhms'.charAt(i);var r=new RegExp('\\{'+q+'<\\}(.*)\\{'+q+'>\\}','g');p=p.replace(r,((!g&&d[i])||(g&&h[i])?'$1':''))}$.each(o,function(n,v){var a=new RegExp('\\{'+n+'\\}','g');p=p.replace(a,v)});return p},_minDigits:function(a,b){a=''+a;if(a.length>=b){return a}a='0000000000'+a;return a.substr(a.length-b)},_determineShow:function(a){var b=this._get(a,'format');var c=[];c[Y]=(b.match('y')?'?':(b.match('Y')?'!':null));c[O]=(b.match('o')?'?':(b.match('O')?'!':null));c[W]=(b.match('w')?'?':(b.match('W')?'!':null));c[D]=(b.match('d')?'?':(b.match('D')?'!':null));c[H]=(b.match('h')?'?':(b.match('H')?'!':null));c[M]=(b.match('m')?'?':(b.match('M')?'!':null));c[S]=(b.match('s')?'?':(b.match('S')?'!':null));return c},_calculatePeriods:function(c,d,e,f){c._now=f;c._now.setMilliseconds(0);var g=new Date(c._now.getTime());if(c._since){if(f.getTime()<c._since.getTime()){c._now=f=g}else{f=c._since}}else{g.setTime(c._until.getTime());if(f.getTime()>c._until.getTime()){c._now=f=g}}var h=[0,0,0,0,0,0,0];if(d[Y]||d[O]){var i=$.countdown._getDaysInMonth(f.getFullYear(),f.getMonth());var j=$.countdown._getDaysInMonth(g.getFullYear(),g.getMonth());var k=(g.getDate()==f.getDate()||(g.getDate()>=Math.min(i,j)&&f.getDate()>=Math.min(i,j)));var l=function(a){return(a.getHours()*60+a.getMinutes())*60+a.getSeconds()};var m=Math.max(0,(g.getFullYear()-f.getFullYear())*12+g.getMonth()-f.getMonth()+((g.getDate()<f.getDate()&&!k)||(k&&l(g)<l(f))?-1:0));h[Y]=(d[Y]?Math.floor(m/12):0);h[O]=(d[O]?m-h[Y]*12:0);f=new Date(f.getTime());var n=(f.getDate()==i);var o=$.countdown._getDaysInMonth(f.getFullYear()+h[Y],f.getMonth()+h[O]);if(f.getDate()>o){f.setDate(o)}f.setFullYear(f.getFullYear()+h[Y]);f.setMonth(f.getMonth()+h[O]);if(n){f.setDate(o)}}var p=Math.floor((g.getTime()-f.getTime())/1000);var q=function(a,b){h[a]=(d[a]?Math.floor(p/b):0);p-=h[a]*b};q(W,604800);q(D,86400);q(H,3600);q(M,60);q(S,1);if(p>0&&!c._since){var r=[1,12,4.3482,7,24,60,60];var s=S;var t=1;for(var u=S;u>=Y;u--){if(d[u]){if(h[s]>=t){h[s]=0;p=1}if(p>0){h[u]++;p=0;s=u;t=1}}t*=r[u]}}if(e){for(var u=Y;u<=S;u++){if(e&&h[u]){e--}else if(!e){h[u]=0}}}return h}});function extendRemove(a,b){$.extend(a,b);for(var c in b){if(b[c]==null){a[c]=null}}return a}$.fn.countdown=function(a){var b=Array.prototype.slice.call(arguments,1);if(a=='getTimes'||a=='settings'){return $.countdown['_'+a+'Countdown'].apply($.countdown,[this[0]].concat(b))}return this.each(function(){if(typeof a=='string'){$.countdown['_'+a+'Countdown'].apply($.countdown,[this].concat(b))}else{$.countdown._attachCountdown(this,a)}})};$.countdown=new Countdown()})(jQuery);

/*
 * VIN 65 CORE CODE
*/


var vin65 = {
	modal : {
		loadingGraphic : '<img src="https://s3.amazonaws.com/assetss3.vin65.com/images/loading.gif">',

		loadModalWindow: function(template) {
			d = new Date();
			modalWindow = $.get("/index.cfm?method=layouts.showModalLayout&timeStamp=" + d.getTime(),function(data){
				$("body").append(data);	
				$("#v65-modalContent").css("max-height", $(window).height()-120);
				$("#v65-modalContent").html(vin65.modal.loadingGraphic);
				$("#v65-modalContent").load(template,function(){
					/*Engine.design.headers();*/
					/*We need to do something here so that all the functions work in the modal*/
					$("form.v65-customForm").submit(function(){
						vin65.form.processSubmitForm(this);
						return false;
					});	

				});
			});
		},
		
		setupLinks: function() {
			$("#v65-loginForm").submit(function(){
				vin65.modal.processLogin();
				return false;
			});			
			$("#v65-forgotPasswordForm").submit(function(){
				vin65.modal.processForgotPassword();
				return false;
			});				
			$("#v65-modalForgotPasswordLink").click(function(){
				vin65.modal.forgotPassword();
				return false;
			});
			
			/*I don't think we need this*/
			$(".v65-modalCloseWindow").click(function(){
				vin65.modal.forgotPassword();
				return false;
			});	
			/*--------------------------*/
		},

		login: function(referrerQueryString) {
			d = new Date();
			modalWindow = $.get("/index.cfm?method=layouts.showModalLayout&timeStamp=" + d.getTime(),function(data){
				$("body").append(data);											   
				$("#v65-modalContent").html(vin65.modal.loadingGraphic);
				$("#v65-modalContent").load("/index.cfm?method=memberlogin.showModalLogin&timeStamp=" + d.getTime() + "&referrerQueryString=" + escape(referrerQueryString) + "&modalLayout=1",'',function() {
					vin65.modal.setupLinks();																						  
				});
			});
		},

		processLogin: function() {
			d = new Date();
			formLabelsAndValues=$("#v65-loginForm").serialize();
			$("#v65-modalContent").html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=memberlogin.processModalLogin&modalLayout=1&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
				vin65.modal.loginResponse(response);
			});
			return false;
		},
		
		loginResponse: function(response) {
			if($("status",response).text() == "2") return;
			$("#v65-modalContent").html(response);
			vin65.modal.setupLinks();																						  	
		},

		forgotPassword: function() {
			d = new Date();
			$("#v65-modalContent").html(vin65.modal.loadingGraphic);
			$("#v65-modalContent").load("/index.cfm?method=memberlogin.showModalForgot&timeStamp=" + d.getTime(),'',function(){
				vin65.modal.setupLinks();																						  	
			});
		},
		
		processForgotPassword: function () {
			d = new Date();
			formLabelsAndValues=$("#v65-forgotPasswordForm").serialize();
			$("#v65-modalContent").html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=memberlogin.processModalForgot&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
				vin65.modal.forgotPasswordResponse(response);
			});
			return false;
		},	
		
		forgotPasswordResponse: function(response) {
			if($("status",response).text() == "2") return;
			$("#v65-modalContent").html(response);
			vin65.modal.setupLinks();																						  	
		},
		
		closeWindow: function() {
			$("#v65-modalContainer").remove();											   
		}
	},

	cart : {
		processAddToCart: function(form) {
			if ($("#v65-modalCartDropdown").length == 0){
				//Modal doesn't exist on page - do traditional style processing
				formLabelsAndValues=$(form).serialize();
				window.location.href = '/index.cfm?method=cart.addToCart&' + formLabelsAndValues;
			} else {
				vin65.quickView.closeQuickView();
				formLabelsAndValues=$(form).serialize();
				target=$("body").offset().top;
				$("#v65-modalCartDropdown").hide();
				$('html,body').animate({scrollTop: target},400,function() { 
					//Stuff placed in here will execute twice//
				});
				vin65.cart.postToCart(formLabelsAndValues);
				return false;
			}
		},
		postToCart: function(formLabelsAndValues) {
			d = new Date();
			$("#v65-modalCartDropdown").show().html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=cart.addToCart&modalLayout=1&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
				vin65.cart.cartResponse(response);
			});
		},
		cartResponse: function(response) {
			if($("status",response).text() == "2") return;
			$("#v65-modalCart").replaceWith(response).hide();
			$("#v65-modalCartDropdown").slideDown();
			$("#v65-itemAddedText").fadeIn().slideDown().delay(3000);
			$("#v65-itemAddedText").slideUp().fadeOut();
		},
		toggleCart: function() {
			var cartVisible = $("#v65-modalCartDropdown").is(':visible');
			if(cartVisible == true) {
				vin65.cart.hideCart();			
			} else {
				vin65.cart.showCart();	
			}
		},
		showCart: function()  {
			$("#v65-modalCartDropdown").slideDown("slow");
			$('#v65-modalCart').addClass('v65-modalCartSelected');
		},
		hideCart: function() {
			$("#v65-modalCartDropdown").slideUp("slow");
			$('#v65-modalCart').removeClass('v65-modalCartSelected');
		}
	},
	checkout : {
		editProfile: function() {
			$("#v65-billInfoNoEdit").fadeOut();
			$("#v65-billingInformation").fadeIn();
		},
		changeCountry: function() {
			$("[v65js=billCountryCode]").change(function() {
				d = new Date();
				countryCode=$("[v65js=billCountryCode]").val();
				$("[v65js=billAddressBlock]").load("/index.cfm?method=checkout.loadBillAddressBlock&billCountryCode=" + countryCode + "&timeStamp=" + d.getTime(),function() {
					vin65.checkout.reloadBillingElements();
				});
			});
			$("body").on("change", "[v65js=shipCountryCode]",function() {
				d = new Date();
				countryCode=$("[v65js=shipCountryCode]").val();
				$("[v65js=shipAddressBlock]").load("/index.cfm?method=checkout.loadShipAddressBlock&shipCountryCode=" + countryCode + "&timeStamp=" + d.getTime(),function() {
					vin65.checkout.reloadBillingElements();
				});
			});
		},
		toggleShipping: function() {
			d = new Date();
			shipTo=$("[name=shipTo]:checked").val();
			if (shipTo===undefined) {
				shipTo=$("#shipTo").val();
			}
			if (shipTo.substring(0,14) == 'PickupAtWinery') {
				$('#v65-shippingInformation').fadeOut();
				$('#v65-fieldset-shippingOptions').fadeOut();
				vin65.checkout.reloadBillingElements();
			} else {
				switch(shipTo) {
					case 'BillingAddress': 
						$('#v65-shippingInformation').fadeOut();
						$('#v65-fieldset-shippingOptions').fadeIn();
						vin65.checkout.reloadBillingElements();
						break;
					case 'ShippingAddress':
						$('#v65-shippingInformation').fadeIn();
						$("#v65-shippingInformation").html(vin65.modal.loadingGraphic);
						$("#v65-shippingInformation").load("/index.cfm?method=checkout.loadShipMember&shipMemberID=&timeStamp=" + d.getTime(),function() { 
							vin65.checkout.reloadBillingElements();
						});
						break;
					default:
						$("#v65-shippingInformation").fadeIn();
						$("#v65-shippingInformation").html(vin65.modal.loadingGraphic);
						$("#v65-shippingInformation").load("/index.cfm?method=checkout.loadShipMember&=&timeStamp=" + d.getTime() + "&shipMemberID=" + shipTo, function() {
							vin65.checkout.reloadBillingElements();		
						});
				}
			}
		},
		changeShippingType: function(formElement) {
			d = new Date();
			test=$(formElement).attr("name");
			shippingStrategyID=test.substr(16,8) + '-' + test.substr(24,4)  + '-' + test.substr(28,4) + '-' + test.substr(32,4) + '-' + test.substr(36,12);
			shippingTypeID=$(formElement).val();
			$.get('/index.cfm?method=checkout.adjustShippingType&timeStamp=' + d.getTime() + '&shippingStrategyID=' + shippingStrategyID + '&shippingTypeID=' + shippingTypeID, '',function() {
				vin65.checkout.reloadOrderSummary();
			});			
			return false;
		},
		reloadBillingElements: function() {
			d = new Date();
			shipTo=$("[name=shipTo]:checked").val();
			if (shipTo===undefined) {
				shipTo=$("#shipTo").val();
			};
			if (shipTo.substring(0,14) == 'PickupAtWinery') {
				address='',
				address2='',
				city='',
				shippingStateCode='';
				shippingZipCode='';
				isPickup=1;
			} else {
				switch(shipTo)
				{
				case 'BillingAddress':
					address=$('#v65-billAddress').val();
					address2=$('#v65-billAddress2').val();
					city=$('#v65-billCity').val();
					shippingStateCode=$('#v65-billStateCode').val();
					shippingZipCode=$('#v65-billZipCode').val();
					isPickup=0;
					break;
				case 'ShippingAddress':
					address=$('#v65-shipAddress').val();
					address2=$('#v65-shipAddress2').val();
					city=$('#v65-shipCity').val();
					shippingStateCode=$('#v65-shipStateCode').val();
					shippingZipCode=$('#v65-shipZipCode').val();
					isPickup=0;
					break;
				default:
					address=$('#v65-shipAddress').val();
					address2=$('#v65-shipAddress2').val();
					city=$('#v65-shipCity').val();
					shippingStateCode=$('#v65-shipStateCode').val();
					shippingZipCode=$('#v65-shipZipCode').val();
					isPickup=0;
				}				
			}
			if (address==undefined) {address='';}
			if (address2==undefined) {address2='';}
			if (city==undefined) {city='';}
			if (shippingStateCode==undefined) {shippingStateCode='';}
			if (shippingZipCode==undefined) {
				shippingZipCode='';
			}			
			$.ajax({
			  url: '/index.cfm?method=checkout.alterShippingStateCode',
			  data: {address:address, address2:address2, city:city, shippingStateCode:shippingStateCode, shippingZipCode:shippingZipCode, isPickup:isPickup, shipTo:shipTo, timeStamp:d.getTime()},
			  success: function(){
			  	//Need a callback because ajax is ascynronis
			  	vin65.checkout.reloadShippingOptions();
			  	vin65.checkout.reloadOrderSummary();
			  },
			  dataType: "html",
			  async: false
			});
		},
		reloadOrderSummary: function() {
			d = new Date();
			$("#v65-checkoutCartSummaryMini").html(vin65.modal.loadingGraphic);
			$("#v65-checkoutCartSummaryMini").load('/index.cfm?method=checkout.orderSummary&timeStamp=' + d.getTime());
			$("#v65-checkoutCartSummaryMiniBottom").html(vin65.modal.loadingGraphic);
			$("#v65-checkoutCartSummaryMiniBottom").load('/index.cfm?method=checkout.orderSummaryBottom&timeStamp=' + d.getTime());
		},
		reloadShippingOptions: function() {
			d = new Date();
			$("#v65-shippingOptions").html(vin65.modal.loadingGraphic);
			$("#v65-shippingOptions").load('/index.cfm?method=checkout.shippingOptions&timeStamp=' + d.getTime());
		},
		hidePaymentMethod: function() {
			//$("#v65-paymentMethodWrapper").hide("slow");
			$("#v65-fieldset-paymentMethod").hide("slow");
		},
		showPaymentMethod: function() {
			//$("#v65-paymentMethodWrapper").show("slow");
			$("#v65-fieldset-paymentMethod").show("slow");
		},
		processCouponCode: function(form) {
			d = new Date();
			formLabelsAndValues=$(form).serialize();
			$.post('/index.cfm?method=checkout.addCouponToCart&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
				vin65.checkout.reloadOrderSummary();
				vin65.checkout.reloadShippingOptions();
				$('#v65-CouponCode').val('');
			});
			return false;
		},
		processGiftCard: function(form) {
			d = new Date();
			formLabelsAndValues=$(form).serialize();
			$.post('/index.cfm?method=checkout.addGiftCardToCart&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
				vin65.checkout.reloadOrderSummary();
				$('#v65-GiftCode').val('');
			});
			return false;
		},
		removeDoubleClick: function() {
			$(".v65ProcessOrder").submit(function() {
				submitButtons=$('.v65ProcessOrder button[type=submit]');
				processingText=submitButtons.attr("data-text");
				submitButtons
					.attr('disabled','disabled')
					.html('<span>' + processingText + '</span>')
					.removeClass("largeBtn").addClass("altLargeBtn");
			});
		},
		toggleCreditCard: function() {
			if ($("[v65js=v65-paymentType]").val()=='OnAccount') {
				$("[v65js=v65-creditCardInfo]").fadeOut();
			} else {
				$("[v65js=v65-creditCardInfo]").fadeIn();
			}
		},
		memberCreditCardID: function() {
			if ($("[v65js=memberCreditCardID]").val() == 'AddNew') {
				$('[v65js=v65creditCard]').show();	
				$('[v65js=useCardOnFile]').show();	
			} else {
				$('[v65js=v65creditCard]').hide();	
				$('[v65js=useCardOnFile]').hide();	
				
			}
		},
		processPrimeAddToCart: function(productSKU) {
			d = new Date();
			$("#v65-shippingOptions").html(vin65.modal.loadingGraphic);
			$.getJSON("/index.cfm?method=checkout.addPrimeToCart&timeStamp=" + d.getTime(),{productSKU:productSKU},function(response) {
				vin65.checkout.reloadShippingOptions();
				vin65.checkout.reloadOrderSummary();	
			});
		},

		loginToPrimeProgram: function() {
			d = new Date();
			modalWindow = $.get("/index.cfm?method=layouts.showModalLayout&timeStamp=" + d.getTime(),function(data){
				$("body").append(data);											   
				$("#v65-modalContent").html(vin65.modal.loadingGraphic);
				$("#v65-modalContent").load("/index.cfm?method=checkout.showPrimeLogin&timeStamp=" + d.getTime() + "&modalLayout=1",'',function() {
					$("[v65js=primeErrorMessage]").hide();
					$("[v65js=processPrimeLogin]").submit(function(){
						vin65.checkout.processPrimeProgramLogin();
						return false;
					});			

				});
			});
		},

		processPrimeProgramLogin: function() {
			d = new Date();
			$("[v65js=primeErrorMessage]").show();
			$("[v65js=primeErrorMessage]").html(vin65.modal.loadingGraphic);
			$("[v65js=primeForm]").hide();
			email=$("input[name=BillEmail]").val();
			membershipNumber=$("input[name=membershipNumber]").val();
			$.getJSON("/index.cfm?method=checkout.processPrimeLogin&timeStamp=" + d.getTime(),{email:email,membershipNumber:membershipNumber},function(response) {
				if (response.isValid == 1) {
					vin65.modal.closeWindow();
					vin65.checkout.reloadShippingOptions();
					vin65.checkout.reloadOrderSummary();
				} else {
					$("[v65js=primeErrorMessage]").html(response.errorMessage);
					$("[v65js=primeForm]").show();					
				}	
			});
			return false;
		},

		maxLength: function() {
			$(document).on('keyup blur', '[v65js=v65-orderNotes], [v65js=v65-giftMessage]', function() { 
				var maxlength = $(this).attr('maxlength'); 
				$maxlength = $(this).siblings('[v65js=v65-maxLength]'); 
				var val = $(this).val(); 
				if (maxlength > 1) {				
					var amountLeft=maxlength-val.length;
					if (val.length > maxlength) { 
						$(this).val(val.slice(0, maxlength)); 
						$maxlength.html('0');	
					}  else {
						$maxlength.html(amountLeft);	
					}
				}
			}); 
		}
	},
	club : {
		changeCountry: function() {
			$("[v65js=clubBillCountryCode]").change(function() {
				d = new Date();
				countryCode=$("[v65js=clubBillCountryCode]").val();
				$("[v65js=billAddressBlock]").load("/index.cfm?method=clubs.loadBillAddressBlock&billCountryCode=" + countryCode + "&timeStamp=" + d.getTime(),function() {
					/*Save for Callback later*/
				});
			});
			$("[v65js=clubShipCountryCode]").change(function() {
				d = new Date();
				countryCode=$("[v65js=clubShipCountryCode]").val();
				$("[v65js=shipAddressBlock]").load("/index.cfm?method=clubs.loadShipAddressBlock&shipCountryCode=" + countryCode + "&timeStamp=" + d.getTime(),function() {
					/*Save for Callback later*/
				});
			});
		},
		editProfile: function() {
			$("#v65-billInfoNoEdit").fadeOut();
			$("#v65-billingInformation").fadeIn();
		},
		toggleShipping: function() {
			shipTo=$("#shipTo").val();
			if (shipTo == 'BillingAddress' || shipTo.substring(0,14) == 'PickupAtWinery') {
				$('#v65-clubShippingInformation').fadeOut();
			} else {
				$('#v65-clubShippingInformation').fadeIn();
			}
		},
		toggleGiftMessage: function() {
			giftMessage=$('input[name=isGift]:checked').val();
			if(giftMessage == 1) {
				$('#v65-clubGiftMessage').fadeIn();
			} else {
				$('#v65-clubGiftMessage').fadeOut();
			}
		},
		memberCreditCardID: function() {
			if ($("[v65js=memberCreditCardID]").val() == 'AddNew') {
				$('[v65js=CreditCardInfo]').show();	
			} else {
				$('[v65js=CreditCardInfo]').hide();	
			}
		}				
	},
	product : {
		productZoom:function(){
			$(document).on({
			    mouseenter: function () {
			        $(this).after("<div class='v65-productZoomIcon'></div>");
			    },
			    mouseleave: function () {
			        $(this).parent().find(".v65-productZoomIcon").remove();
			    }
			}, "[v65js=productZoom]"); //pass the element as an argument to .on
		},
		switchProductImage: function(srcName,altName) {
			/*Version 2 Images*/
			$("#v65-productImage img:first").attr({
				src: srcName,
				alt: altName
			});  
			/*Products V3 Images*/
			$("[v65js=productLargePhoto] img:first").attr({
				src: srcName,
				alt: altName
			});  

			var newSrcName = srcName.split('/'),
			newSrcName = newSrcName[newSrcName.length - 1];

			$("[v65js=productLargePhoto] a").attr({
				href: "javascript:vin65.modal.loadModalWindow('/index.cfm?method=products.viewLargeImage&image="+newSrcName+"');"
			}); 
		},
		addReview: function(productID) {
			d = new Date();
			$("#addReview").load('/index.cfm?method=products.addReview&productID=' + productID + '&timeStamp=' + d.getTime());	
		},
		
		processAddReview: function(form) {
			d = new Date();
			formLabelsAndValues=$(form).serialize();
			$("[v65js=v65-ProductRating]").html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=products.addReviewSuccess&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
					vin65.product.reviewResponse(response);
			});
		},
		reviewResponse: function(response) {
			if($("status",response).text() == "2") return;
			$("[v65js=v65-ProductRating]").html(response).hide();
			$("[v65js=v65-ProductRating]").slideDown();
			//On Callback - reset the review form for Firefox
			$("form#v65-addProductReview").submit(function(){
				vin65.product.processAddReview(this);
				return false;
			});				
		}, 
		updateReviews: function(productID) {
			d = new Date();
			$("#productRatings").load('/index.cfm?method=products.reviewWidget&productID=' + productID + '&timeStamp=' + d.getTime());	
		},
		tabPicker : function() {
			$("#v65-productStoreDrilldownTabs li a").click(function() {
				parentElement=$(this).parent();
				currentIndex=$("#v65-productStoreDrilldownTabs li").index(parentElement);
				vin65.product.showTab(currentIndex);
				return false;
			});
		},
		showTab : function(tIndex) {
			$("#v65-productStoreDrilldownTabs li a").removeClass('on');
			$("#v65-productStoreDrilldownTabs li a:eq("+tIndex+")").addClass('on');
			$(".v65-productStoreDrilldownTabContent").hide(); 
			$(".v65-productStoreDrilldownTabContent:eq("+tIndex+")").show(); 
		},
		showReviewTab : function() {
			if ($("[v65js=reviewTab]").length == 0) {
				vin65.product.showTab(1);	
			} else {
				/*V3*/
				$(".v65-product-tabs li").removeClass('v65-product-tabs-active');
				$("[v65js=reviewTabLink]").addClass('v65-product-tabs-active');
				$(".v65-product-tab").removeClass('v65-product-tab-active'); 
				$("[v65js=reviewTab]").addClass('v65-product-tab-active');
	
				/*Old School*/
				$("#v65-productStoreDrilldownTabs li a").removeClass('on');
				$("[v65js=reviewTabLink]").addClass('on');
				$(".v65-productStoreDrilldownTabContent").hide(); 
				$("[v65js=reviewTab]").show(); 
			}
		},	
		tabPickerV3 : function() {
			$(".v65-product-tabs li a").click(function(event) {
				parentElement=$(this).parent();
				currentIndex=$(".v65-product-tabs li").index(parentElement);
				vin65.product.showTabV3(currentIndex);
				return false;
			});
		},
		
		showTabV3 : function(tIndex) {
			$(".v65-product-tabs li").removeClass('v65-product-tabs-active');
			$(".v65-product-tabs li:eq("+currentIndex+")").addClass('v65-product-tabs-active');
			$(".v65-product-tab").removeClass('v65-product-tab-active'); 
			$(".v65-product-tab:eq("+currentIndex+")").addClass('v65-product-tab-active');
		},	
		
		emailAFriend: function(productID) {
			d = new Date();
			modalWindow = $.get("/index.cfm?method=layouts.showModalLayout&timeStamp=" + d.getTime(),function(data){
				$("body").append(data);											   
				$("#v65-modalContent").load("/index.cfm?method=products.emailAFriend&productID=" + productID + '&timeStamp=' + d.getTime(),'',function() {
					vin65.product.emailAFriendLinks();
				});
			});
		},
		
		emailAFriendLinks: function() {
			$("#v65-emailAFriend").submit(function(){
				vin65.product.processEmailAFriend();
				return false;
			});	
		},		
		
		processEmailAFriend: function() {
			d = new Date();
			formLabelsAndValues=$("#v65-emailAFriend").serialize();
			$("#v65-modalContent").html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=products.processEmailAFriend&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
				vin65.product.emailAFriendResponse(response);
			});
			return false;
		},

		emailAFriendResponse: function(response) {
			if($("status",response).text() == "2") return;
			$("#v65-modalContent").html(response);
			vin65.product.emailAFriendLinks();
		},

		clearSearch: function() {
			$("#v65-searchWidgetInput input").focus(function() {
				$(this).attr('value','');
			});
			/*
			$("#v65-searchWidgetInput input").blur(function() {
				alert($(this).val());
				if ($(this).val() == "") {
					alert($(this)[0].defaultValue);
					$(this).val($(this)[0].defaultValue);
				}
			});	
			*/
		},
		
		autoSuggest: function() {
			if ($("#v65-autoSuggest").length) {
				$("#v65-autoSuggest").autocomplete({
					source: function(request,response) {
						var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
						$.getJSON("/index.cfm?method=products.autoSuggestJson",{term:request.term},function(origJSON) {				
							response( $.map(origJSON,function(item) {
								return {
									label: item.label.replace(
										new RegExp(
											"(?![^&;]+;)(?!<[^<>]*)(" +
											$.ui.autocomplete.escapeRegex(request.term) +
											")(?![^<>]*>)(?![^&;]+;)", "gi"
										), "<strong>$1</strong>" ),
									value: item.value,
									linkURL: item.linkURL,
									option: this
								};
							}) );				
						});
						/*
						$.getJSON("/index.cfm?method=products.autoSuggestJson",{term:request.term},function(j) {
							response(j);							
						});
						*/
					},
					minLength: 3,
					html: true,
					select: function(event,products) {
						window.location.href = products.item.linkURL;
						return false;
					}
				});
			}
		}
	},
	productSet : {
		/*v65js="ProductCustomSetItemCount"*/
		/* If array doesn't exist - create array with item count items */
		
		
		selectProduct: function(productID,currentRow) {
			$("[v65js=ProductCustomSetData" + currentRow + "]").html(vin65.modal.loadingGraphic);
			$("[v65js=ProductCustomSetPhoto" + currentRow + "]").html(vin65.modal.loadingGraphic);
			d = new Date();
			$.get("/index.cfm?method=pproductset.product&timeStamp=" + d.getTime() + '&productID=' + productID,function(response){
				data=$(response).find("[v65js=ProductCustomSetData]").html();
				$("[v65js=ProductCustomSetData" + currentRow + "]").html(data);
				photo=$(response).find("[v65js=ProductCustomSetPhoto]").html();
				$("[v65js=ProductCustomSetPhoto" + currentRow + "]").html(photo);
				sku=$(response).find("[v65js=ProductCustomSetSKU]").html();
				$("[v65js=ProductSKU" + currentRow + "]").val(sku);
				price=$(response).find("[v65js=ProductCustomSetPrice]").html();
				vin65.productSet.recalculatePrice(price,currentRow);
			});
		},
		recalculatePrice: function(price,currentRow) {
			if (typeof priceArray === 'undefined') {
			   alert('no Array');
			}
			priceArray[currentRow-1]=price;
			$.get("/index.cfm?method=pproductset.calculatePrice&timeStamp=" + d.getTime() + '&prices=' + priceArray,function(response){
				$("[v65js=ProductCustomSetPriceTop]").html(response);
				$("[v65js=ProductCustomSetPriceBottom]").html(response);
			});
			
		}, 
		addToCart: function() {
			d = new Date();
			


			$("[v65js=ProductCustomSet]").attr('action','/index.cfm?method=cart.addMultipleToCart');
			$("[v65js=ProductCustomSet]").attr('method','post');
			$("[v65js=ProductCustomSet]").submit();
			/*
			formLabelsAndValues=$("[v65js=ProductCustomSet]").serialize();
			alert(formsLabelsAndValues);
			window.location = '/index.cfm?'
			$.post('/index.cfm?method=cart.addMultipleToCart&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
					
			});
			*/
		}
	},
	quickView : {
		quickView: function() {
			$("[v65js=productsForQuickview]").hover(
				function() {
					$(this).children("[v65js=quickViewButton]").stop(true, true).fadeIn(200);			
					//show .v65-quickView on click
					$(this).children("[v65js=quickViewButton]").unbind('click').click(function(event) {
						event.preventDefault();
						var linkAttribute = $(this).attr("href");
						$(this).stop(true, true).fadeOut(200); 
						vin65.quickView.loadQuickviewWindow(this,linkAttribute);
					});
				},
				  function () {
					$(this).children("[v65js=quickViewButton]").stop(true, true).fadeOut(200);
				  }				
			);
		},
		loadQuickviewWindow: function(clicktarget,template) {
			d = new Date();
			$("[v65js=quickView]").remove(); /*Remove Existing Element*/
			quickViewWindow = $.get("/index.cfm?method=layouts.showQuickViewLayout&timeStamp=" + d.getTime(),function(layout){
				$("body").append(layout);
				/*$(clicktarget).parent().append(layout); Add Element To parent*/
				$("[v65js=quickView]").fadeIn(200);
				$("[v65js=quickViewContent]").load(template + "&timeStamp=" + d.getTime(),function(){
				});
				$("[v65js=quickViewButton]").hide();
			});
		},
		closeQuickView: function() {
			$("[v65js=quickView]").fadeOut(200,function() {
				$("[v65js=quickView]").remove(); /*Remove Existing Element*/
			});
		},
		tabPicker : function() {
			$(document).on("click", "[v65js=quickView] .v65-product-tabs li a", function(event) {
				parentElement=$(this).parent();
				currentIndex=$("[v65js=quickView] .v65-product-tabs li").index(parentElement);
				vin65.quickView.showTab(currentIndex);
				return false;
			});
		},
		showTab : function(tIndex) {
			$("[v65js=quickView] .v65-product-tabs li").removeClass('v65-product-tabs-active');
			$("[v65js=quickView] .v65-product-tabs li:eq("+currentIndex+")").addClass('v65-product-tabs-active');
			$("[v65js=quickView] .v65-product-tab").removeClass('v65-product-tab-active'); 
			$("[v65js=quickView] .v65-product-tab:eq("+currentIndex+")").addClass('v65-product-tab-active');
		}		
	},
	subscribe : {
		subscribeForm: function() {
			$("#v65-subscribeWidget form").submit(function(){
				vin65.subscribe.processSubscribeWidget();
				return false;
			});
			var email=$("#v65-subscribeWidget input[name='email']");
			email.focus(function(){
				email.val('');
			});
			email.blur(function() {
				if ($(this).val() == "") {
					$(this).val($(this)[0].defaultValue);
				}
			});
		},
		processSubscribeWidget: function(form) {
			d = new Date();
			formLabelsAndValues=$("#v65-subscribeWidget form").serialize();
			$("#v65-subscribeWidget").html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=memberSubscribe.processSubscribeWidget&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
					vin65.subscribe.subscribeWidgetResponse(response);
			});
		},
		subscribeWidgetResponse: function(response) {
			if($("status",response).text() == "2") return;
			$("#v65-subscribeWidget").replaceWith(response);
			vin65.subscribe.subscribeForm();
		}		
	},
	shipping : {
		processShippingWidget: function(form) {
			d = new Date();
			formLabelsAndValues=$(form).serialize();
			$("#v65-shippingWidgetResults").html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=shipping.shippingWidget&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
					vin65.shipping.shippingWidgetResponse(response);
			});
		},
		shippingWidgetResponse: function(response) {
			if($("status",response).text() == "2") return;
			$("#v65-shippingWidgetResults").html(response);
		}		
	},
	blog : {
		toggleArchives: function(blogYear) {
			$("[vin65js=v65-blogArchiveYear" + blogYear + "]").toggle('fast');
		},
		processAddComment: function(form) {
			d = new Date();
			formLabelsAndValues=$(form).serialize();
			$("#v65-commentFormWrapper").html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=blog.addBlogCommentSuccess&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
					vin65.blog.commentResponse(response);
			});
		},
		commentResponse: function(response) {
			if($("status",response).text() == "2") return;
			$("#v65-commentFormWrapper").hide();
			$("#v65-commentFormWrapper").replaceWith(response).hide().slideDown("slow");
			//On Callback - reset the blog form for Firefox
			$("form#v65-addComment").submit(function(){
				vin65.blog.processAddComment(this);
				return false;
			});
		},
		emailAFriend: function(blogEntryID) {
			d = new Date();
			modalWindow = $.get("/index.cfm?method=layouts.showModalLayout&timeStamp=" + d.getTime(),function(data){
				$("body").append(data);											   
				$("#v65-modalContent").load("/index.cfm?method=blog.emailAFriend&blogEntryID=" + blogEntryID + '&timeStamp=' + d.getTime(),'',function() {
					vin65.blog.emailAFriendLinks();
				});
			});
		},
		
		emailAFriendLinks: function() {
			$("#v65-emailAFriend").submit(function(){
				vin65.blog.processEmailAFriend();
				return false;
			});	
		},		
		
		processEmailAFriend: function() {
			d = new Date();
			formLabelsAndValues=$("#v65-emailAFriend").serialize();
			$("#v65-modalContent").html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=blog.processEmailAFriend&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
				vin65.product.emailAFriendResponse(response);
			});
			return false;
		},

		emailAFriendResponse: function(response) {
			if($("status",response).text() == "2") return;
			$("#v65-modalContent").html(response);
			vin65.blog.emailAFriendLinks();
		}
		
	},
	form: {
		processSubmitForm: function(form) {
			d = new Date();
			formLabelsAndValues=$(form).serialize();
			formDiv=$(form).find("[name=FormDivID]").val();
			$("#" + formDiv).html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=pformV2.processForm&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
					vin65.form.formResponse(response,formDiv);
			});
		},
		formResponse: function(response,formDiv) {
			if($("status",response).text() == "2") return;
			$("#" + formDiv).hide();
			$("#" + formDiv).replaceWith(response).hide().slideDown("slow");
			//On Callback - reset the form for Firefox
			$("form.v65-customForm").submit(function(){
				vin65.form.processSubmitForm(this);
				return false;
			});
		}		
	},
	businessLocator: {
		countryCodeChange: function() {
			vin65.businessLocator.stateCodeSelector();
		},
		businessLocationCategoryChange: function() {
			vin65.businessLocator.stateCodeSelector();
		},
		stateCodeChange: function() {
			vin65.businessLocator.citySelector();
		},
		cityCodeChange: function() {
			d = new Date();
			submitLocation='/index.cfm?method=pbusinesslocator.businessList&timeStamp=' + d.getTime();
			formLabelsAndValues=$("form#v65-businessLocatorSelectByCity").serialize();
			$("#v65-BusinessList").html(vin65.modal.loadingGraphic);
			$.post(submitLocation,formLabelsAndValues, function(response) {
				vin65.businessLocator.businessList(response);
			});
		},
		selectByZipCodeSubmit: function() {
			d = new Date();
			var submitLocation='/index.cfm?method=pbusinesslocator.businessList&timeStamp=' + d.getTime();
			formLabelsAndValues=$("form#v65-businessLocatorSelectByZipCode").serialize();
			$("#v65-BusinessList").html(vin65.modal.loadingGraphic);
			$.post(submitLocation,formLabelsAndValues, function(response) {
				vin65.businessLocator.businessList(response);
			});
		},
		stateCodeSelector: function() {
			d = new Date();
			formLabelsAndValues=$("form#v65-businessLocatorSelectByCity").serialize();
			$.getJSON("/index.cfm?method=pbusinesslocator.stateSelector&timeStamp=" + d.getTime() + '&' + formLabelsAndValues,{}, function(j){
				var options = '';
				for (var i = 0; i < j.length; i++) {
					options += '<option value="' + j[i].optionValue + '" ' + j[i].optionSelected + ' >' + j[i].optionDisplay + '</option>';
				}
				$("#v65-businessLocatorStateCode").html(options);
			});
			vin65.businessLocator.citySelector();
		},
		citySelector: function() {
			d = new Date();
			formLabelsAndValues=$("form#v65-businessLocatorSelectByCity").serialize();
			$.getJSON("/index.cfm?method=pbusinesslocator.citySelector&timeStamp=" + d.getTime() + '&' + formLabelsAndValues,{}, function(j){
				var options = '';
				for (var i = 0; i < j.length; i++) {
					options += '<option value="' + j[i].optionValue + '" ' + j[i].optionSelected + ' >' + j[i].optionDisplay + '</option>';
				}
				$("#v65-businessLocatorCity").html(options);
			});
		},
		businessList: function(response) {
			if($("status",response).text() == "2") return;
			businessresults=$(response).find(".lisquery");
			$("#v65-BusinessList").html(businessresults);
			Json=eval($(response).find("#MapJson").html());
			vin65.businessLocator.initializeMap(Json[0].lat,Json[0].long,Json);	
		},		
		initializeMap: function(lat,long,mapPoints,level) {
			var myLatLng = new google.maps.LatLng(lat,long);
			if(level==undefined){
				if(lat==0){			
					var myOptions = {
						center: myLatLng,
						zoom: 1,
						panControl: true,
						zoomControl: true,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
				}else{			
					var myOptions = {
						center: myLatLng,
						zoom: 12,
						panControl: true,
						zoomControl: true,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
				}
			}else{
				var myOptions = {
					center: myLatLng,
					zoom: level,
					panControl: true,
					zoomControl: true,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
			}
			var map = new google.maps.Map(document.getElementById("v65-map_canvas"), myOptions);
			for (var i = 0; i < mapPoints.length; i++) {
				point = new google.maps.LatLng(mapPoints[i].lat,mapPoints[i].long);
				html=mapPoints[i].html;
				vin65.businessLocator.createMarker(map, point, html, i+1);
			}
		},
		createMarker: function(map, point, htmlString, count) {
			if(html != ''){
				var image = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter_withshadow&chld='+count+'|ff776b';
				var marker = new google.maps.Marker({
					position: point,
					map: map,
					icon : image
				});
				var infoWindow = new google.maps.InfoWindow;
				google.maps.event.addListener(marker, 'click', function(){
					var marker = this;
					var latLng = marker.getPosition();
					infoWindow.setContent(htmlString);
					infoWindow.open(map, marker);
				});
			}
			return marker;
		}
	},
	calendar: {
		processLoadCalendar: function(eventCalendarID,goToDate,pageID) {
			d = new Date();
			$("#v65-CalendarWrapper").html(vin65.modal.loadingGraphic);
			$.get('/index.cfm?method=pCalendar.calendar&timeStamp=' + d.getTime() + '&eventCalendarID=' + eventCalendarID + '&goToDate=' + goToDate + '&pageID=' + pageID, function(response) {
					vin65.calendar.calendarResponse(response);
			});
		},
		calendarResponse: function(response) {
			$("#v65-CalendarWrapper").hide();
			$("#v65-CalendarWrapper").replaceWith(response).hide().slideDown("slow");
		},
		eventDailyWidget: function(eventCalendarID,fromDate,toDate,showWithNoEvents) {
			d = new Date();
			$("[v65js=eventDailyWidget]").html(vin65.modal.loadingGraphic);
			$.get('/index.cfm?method=pCalendar.eventDailyWidget&timeStamp=' + d.getTime() + '&eventCalendarID=' + eventCalendarID + '&fromDate=' + fromDate + '&toDate=' + toDate + '&showWithNoEvents=' + showWithNoEvents, function(response) {
					$("[v65js=eventDailyWidget]").html(response);
			});	
		},
		eventCalendarWidget: function(eventCalendarID,fromDate) {
			d = new Date();
			$("[v65js=eventCalendarWidget]").html(vin65.modal.loadingGraphic);
			$.get('/index.cfm?method=pCalendar.eventCalendarWidget&timeStamp=' + d.getTime() + '&eventCalendarID=' + eventCalendarID + '&fromDate=' + fromDate, function(response) {
					$("[v65js=eventCalendarWidget]").html(response);
			});	
		}		
	},
	poll: {
		processPoll: function(form) {
			d = new Date();
			formLabelsAndValues=$(form).serialize();
			formDiv=$(form).find("[name=PollDivID]").val();
			$("#" + formDiv).html(vin65.modal.loadingGraphic);
			$.post('/index.cfm?method=ppoll.processPoll&timeStamp=' + d.getTime(),formLabelsAndValues, function(response) {
					vin65.poll.formResponse(response,formDiv);
			});
		},
		formResponse: function(response,formDiv) {
			if($("status",response).text() == "2") return;
			$("#" + formDiv).hide();
			$("#" + formDiv).replaceWith(response).hide().slideDown("slow");
			//On Callback - reset the blog form for Firefox
			$("form.v65-pollForm").submit(function(){
				vin65.poll.processPoll(this);
				return false;
			});
		}
	},
	member: {
		toggleReEnterPrimaryCard: function() {
			if ($("[v65js=UseCardOnFile]").is(':checked')==true) {	
				$("[v65js=ReEnterPrimaryCard]").show();
			} else {
				$("[v65js=ReEnterPrimaryCard]").hide();
			}
		}
	},
	memberPrime: {

		loginToPrimeProgram: function() {
			d = new Date();
			$("[v65js=primeErrorMessage]").hide();
			$("[v65js=processPrimeNoMemberLogin]").submit(function() {
				$("[v65js=primeErrorMessage]").show();
				$("[v65js=primeErrorMessage]").html(vin65.modal.loadingGraphic);
				$("[v65js=processPrimeNoMemberLogin]").hide();
				membershipNumber=$("input[name=membershipNumber]").val();
				$.getJSON("/index.cfm?method=memberPrime.processPrimeLogin&timeStamp=" + d.getTime(),{membershipNumber:membershipNumber},function(response) {
					if (response.isValid == 1) {
						window.location.href = '/index.cfm?method=memberPrime.member';
					} else {
						$("[v65js=primeErrorMessage]").html(response.errorMessage);
						$("[v65js=processPrimeNoMemberLogin]").show();					
					}	
				});
				return false;
			});
		}
	}
}


$(document).ready(function(){
	vin65.checkout.removeDoubleClick();
	vin65.checkout.changeCountry();
	vin65.club.changeCountry();
	vin65.product.autoSuggest();
	vin65.quickView.quickView();
	vin65.quickView.tabPicker();
	vin65.product.tabPickerV3();
	vin65.product.clearSearch();
	vin65.memberPrime.loginToPrimeProgram();
	vin65.product.productZoom();

	$("[v65js=modalLoginLink]").click(function(){
		referrerQueryString=$(this).attr('referrerQueryString');
		if (typeof(referrerQueryString) == "undefined") {
			referrerQueryString='';
		} 
		vin65.modal.login(referrerQueryString);
		return false;
	});
	$("a.v65-modalLink").click(function(){
		template=$(this).attr('href');
		if (template.indexOf("?") == -1) {
			vin65.modal.loadModalWindow(template + '?modalLayout=1');
		} else {
			vin65.modal.loadModalWindow(template + '&modalLayout=1');	
		}
		return false;
	});	

	$("[v65js=addToCart]").on("submit",function(){
		vin65.cart.processAddToCart(this);
		return false;
	});

		
	
	$("form#v65-addProductReview").submit(function(){
		vin65.product.processAddReview(this);
		return false;
	});	
	
	$("#v65-shippingWidgetForm").change(function(){
		shippingForm=$("form#v65-shippingWidgetForm")
		vin65.shipping.processShippingWidget(shippingForm);
		return false;
	});
	vin65.subscribe.subscribeForm();
	$("#v65-checkBilling").on("change", "#v65-billStateCode", function(){
		vin65.checkout.reloadBillingElements();
	});
	$("#v65-checkBilling").on("change", "#v65-billZipCode", function(){
		vin65.checkout.reloadBillingElements();
	});	
	
	$("#v65-checkBilling").on("change","#v65-shipStateCode",function(){	
		vin65.checkout.reloadBillingElements();
	});	
	$("#v65-checkBilling").on("change", "#v65-shipZipCode", function(){
		vin65.checkout.reloadBillingElements();
	});		
	$("#v65-couponFormWrapper form").submit(function() {
		vin65.checkout.processCouponCode(this);
		return false;												 
	});
	$("#v65-giftCardFormWrapper form").submit(function() {
		vin65.checkout.processGiftCard(this);
		return false;												 
	});	
	$("[v65js=v65-paymentType]").change(function() {
		vin65.checkout.toggleCreditCard();								
	});
	vin65.checkout.maxLength();
	$("form#v65-addComment").submit(function(){
		vin65.blog.processAddComment(this);
		return false;
	});
		
	/*
	$("form.v65-customForm").submit(function(){
		vin65.form.processSubmitForm(this);
		return false;
	});	
	*/
	$("form.v65-customForm").on("submit",function(){
		vin65.form.processSubmitForm(this);
		return false;
	});	
	$("form.v65-pollForm").submit(function(){
		vin65.poll.processPoll(this);
		return false;
	});	
	vin65.product.tabPicker();
	$("#v65-businessLocatorCategory").change(function(){
		vin65.businessLocator.businessLocationCategoryChange();
	});
	$("#v65-businessLocatorCountryCode").change(function(){
		vin65.businessLocator.countryCodeChange();	
	});
	$("#v65-businessLocatorStateCode").change(function(){
		vin65.businessLocator.stateCodeChange();	
	});
	$("#v65-businessLocatorCity").change(function(){
		vin65.businessLocator.cityCodeChange();	
	});	
	$("form#v65-businessLocatorSelectByZipCode").submit(function(){
		vin65.businessLocator.selectByZipCodeSubmit();	
		return false;
	});
	
	$("[v65js=ProductCustomSetSelect]").change(function() {
		vin65.productSet.selectProduct($(this).val(),$(this).next("[v65js=ProductCustomSetRow]").val());
	});	
});



/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
/*DO NOT ADD CUSTOM JS TO THIS DOCUMENT*/
