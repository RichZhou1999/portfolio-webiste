(function(g){var window=this;'use strict';var Dcb=function(a,b){a.Oa("onAutonavCoundownStarted",b)},x5=function(a,b,c){g.mo(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Xf(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.MI&&(b.lengthText?(e=b.lengthText||null,f=b.Mu||null):b.lengthSeconds&&(e=g.nO(b.lengthSeconds),f=g.nO(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.KI(d).type;var l=b instanceof g.MI?b.isLivePlayback:null,m=b instanceof g.MI?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],w=[];n&&r.push(n);p&&(r.push(p),w.push(p));q&&w.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.KL("Watch $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Wn(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:w.join(" \u2022 "),autoplayAlternativeHeader:b.Oq};b instanceof g.LI&&(c.playlist_length=b.playlistLength);a.update(c)},y5=function(a){var b=a.V(),c=b.u;
g.W.call(this,{G:"a",K:"ytp-autonav-suggestion-card",X:{href:"{{url}}",target:c?b.T:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",Ga:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],X:{style:"{{background}}"},W:[{G:"div",X:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ga:["ytp-autonav-live-stamp"],qa:"Live"},{G:"div",
Ga:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"},{G:"div",K:"ytp-autonav-list-overlay",W:[{G:"div",K:"ytp-autonav-mix-text",qa:"Mix"},{G:"div",K:"ytp-autonav-mix-icon"}]}]},{G:"div",Ga:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],qa:"{{title}}"},{G:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],qa:"{{author}}"},{G:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],qa:"{{views_and_publish_time}}"}]});this.F=a;this.suggestion=
null;this.j=c;this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress)},z5=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{G:"div",K:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.I=b;this.D=void 0;this.B=0;this.container=new g.W({G:"div",K:"ytp-autonav-endscreen-countdown-container"});g.H(this,this.container);this.container.Ca(this.element);b=a.V();var d=b.u;this.F=a;this.suggestion=null;this.onVideoDataChange("newdata",this.F.getVideoData());this.S(a,"videodatachange",this.onVideoDataChange);var e=["ytp-autonav-endscreen-upnext-thumbnail"];b.N("web_rounded_thumbnails")&&e.push("rounded-thumbnail");
this.j=new g.W({G:"div",K:"ytp-autonav-endscreen-upnext-container",X:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},W:[{G:"div",K:"ytp-autonav-endscreen-upnext-header"},{G:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",qa:"{{autoplayAlternativeHeader}}"},{G:"a",K:"ytp-autonav-endscreen-link-container",X:{href:"{{url}}",target:d?b.T:""},W:[{G:"div",Ga:e,X:{style:"{{background}}"},W:[{G:"div",
X:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],qa:"{{duration}}"},{G:"div",Ga:["ytp-autonav-live-stamp"],qa:"Live"},{G:"div",Ga:["ytp-autonav-upcoming-stamp"],qa:"Upcoming"}]},{G:"div",K:"ytp-autonav-endscreen-video-info",W:[{G:"div",K:"ytp-autonav-endscreen-premium-badge"},{G:"div",K:"ytp-autonav-endscreen-upnext-title",qa:"{{title}}"},{G:"div",K:"ytp-autonav-endscreen-upnext-author",qa:"{{author}}"},{G:"div",K:"ytp-autonav-view-and-date",qa:"{{views_and_publish_time}}"},{G:"div",
K:"ytp-autonav-author-and-view",qa:"{{author_and_views}}"}]}]}]});g.H(this,this.j);this.j.Ca(this.container.element);d||this.S(this.j.Ea("ytp-autonav-endscreen-link-container"),"click",this.VO);this.F.qb(this.container.element,this,115127);this.F.qb(this.j.Ea("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({G:"div",K:"ytp-autonav-overlay"});g.H(this,this.overlay);this.overlay.Ca(this.container.element);this.u=new g.W({G:"div",K:"ytp-autonav-endscreen-button-container"});
g.H(this,this.u);this.u.Ca(this.container.element);this.cancelButton=new g.W({G:"button",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.N("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{"aria-label":"Cancel autoplay"},qa:"Cancel"});g.H(this,this.cancelButton);this.cancelButton.Ca(this.u.element);this.cancelButton.Pa("click",this.EX,this);this.F.qb(this.cancelButton.element,this,115129);this.playButton=new g.W({G:"a",Ga:["ytp-autonav-endscreen-upnext-button",
"ytp-autonav-endscreen-upnext-play-button",b.N("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],X:{href:"{{url}}",role:"button","aria-label":"Play next video"},qa:"Play Now"});g.H(this,this.playButton);this.playButton.Ca(this.u.element);this.playButton.Pa("click",this.VO,this);this.F.qb(this.playButton.element,this,115130);this.C=new g.$n(function(){Ecb(c)},500);
g.H(this,this.C);this.UO();this.S(a,"autonavvisibility",this.UO);this.F.N("web_autonav_color_transition")&&(this.S(a,"autonavchange",this.DX),this.S(a,"onAutonavCoundownStarted",this.d3))},A5=function(a){var b=a.F.ek(!0,a.F.isFullscreen());
g.mo(a.container.element,"ytp-autonav-endscreen-small-mode",a.Sg(b));g.mo(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.OG);g.mo(a.F.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.F.Gf());g.mo(a.F.getRootNode(),"countdown-running",a.lk());g.mo(a.container.element,"ytp-player-content",a.F.Gf());g.Bl(a.overlay.element,{width:b.width+"px"});if(!a.lk()){a.F.Gf()?Fcb(a,Math.round(Gcb(a)/1E3)):Fcb(a);b=!!a.suggestion&&!!a.suggestion.Oq;var c=a.F.Gf()||!b;
g.mo(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.mo(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.lN(a.u,a.F.Gf());g.mo(a.element,"ytp-enable-w2w-color-transitions",Hcb(a))}},Ecb=function(a){var b=Gcb(a),c=Math,d=c.min;
var e=a.B?Date.now()-a.B:0;c=d.call(c,e,b);Fcb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.lk()?a.select(!0):a.lk()&&a.C.start()},Gcb=function(a){if(a.F.isFullscreen()){var b;
a=null==(b=a.F.getVideoData())?void 0:b.Uv;return-1===a||void 0===a?8E3:a}return 0<=a.F.xr()?a.F.xr():g.NG(a.F.V().experiments,"autoplay_time")||1E4},Hcb=function(a){var b;
return!(null==(b=a.F.getVideoData())||!b.watchToWatchTransitionRenderer)},Fcb=function(a,b){b=void 0===b?-1:b;
a=a.j.Ea("ytp-autonav-endscreen-upnext-header");g.Re(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.Pe("Up next in $SECONDS".slice(0,d)));var e=g.Oe("span");g.go(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.Xe(e,b);a.appendChild(e);a.appendChild(g.Pe("Up next in $SECONDS".slice(d+c.length)));return}}g.Xe(a,"Up next")},B5=function(a,b){g.W.call(this,{G:"div",
Ga:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},C5=function(a){g.W.call(this,{G:"div",
Ga:["ytp-upnext","ytp-player-content"],X:{"aria-label":"{{aria_label}}"},W:[{G:"div",K:"ytp-cued-thumbnail-overlay-image",X:{style:"{{background}}"}},{G:"span",K:"ytp-upnext-top",W:[{G:"span",K:"ytp-upnext-header",qa:"Up Next"},{G:"span",K:"ytp-upnext-title",qa:"{{title}}"},{G:"span",K:"ytp-upnext-author",qa:"{{author}}"}]},{G:"a",K:"ytp-upnext-autoplay-icon",X:{role:"button",href:"{{url}}","aria-label":"Play next video"},W:[{G:"svg",X:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
W:[{G:"circle",K:"ytp-svg-autoplay-circle",X:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",K:"ytp-svg-autoplay-ring",X:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",K:"ytp-svg-fill",X:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",K:"ytp-upnext-bottom",W:[{G:"span",K:"ytp-upnext-cancel"},{G:"span",K:"ytp-upnext-paused",
qa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.D=this.Ea("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.$n(this.YD,5E3,this);this.u=0;var b=this.Ea("ytp-upnext-cancel");this.cancelButton=new g.W({G:"button",Ga:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:"0","aria-label":"Cancel autoplay"},qa:"Cancel"});g.H(this,this.cancelButton);this.cancelButton.Pa("click",this.FX,this);this.cancelButton.Ca(b);this.cancelButton&&this.api.qb(this.cancelButton.element,
this,115129);g.H(this,this.C);this.api.qb(this.element,this,18788);b=this.Ea("ytp-upnext-autoplay-icon");this.S(b,"click",this.GX);this.api.qb(b,this,115130);this.WO();this.S(a,"autonavvisibility",this.WO);this.S(a,"mdxnowautoplaying",this.P3);this.S(a,"mdxautoplaycanceled",this.Q3);g.mo(this.element,"ytp-upnext-mobile",this.api.V().isMobile)},Icb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.Uv;return-1===a||void 0===a?8E3:a}return 0<=a.api.xr()?a.api.xr():g.NG(a.api.V().experiments,"autoplay_time")||1E4},Jcb=function(a,b){b=Icb(a,b);
var c=Math,d=c.min;var e=(0,g.R)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.lk()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.lk()&&a.j.start()},D5=function(a){B5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({G:"div",K:"ytp-suggestion-panel",W:[{G:"div",Ga:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],qa:"More videos"}]});this.J=new g.W({G:"div",K:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new z5(this.player);g.H(this,this.u);this.u.Ca(this.element);a.getVideoData().dc?this.j=this.u:(this.j=new C5(a),g.tQ(this.player,this.j.element,4),g.H(this,this.j));this.overlay=new g.W({G:"div",
K:"ytp-autonav-overlay-cancelled-state"});g.H(this,this.overlay);this.overlay.Ca(this.element);this.C=new g.MF(this);g.H(this,this.C);g.H(this,this.table);this.table.Ca(this.element);this.table.show();g.H(this,this.J);this.J.Ca(this.table.element);this.hide()},E5=function(a){var b=a.Gf();
b!==a.D&&(a.D=b,a.player.ma("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},F5=function(a,b){g.W.call(this,{G:"button",
Ga:["ytp-watch-on-youtube-button","ytp-button"],qa:"{{content}}"});this.F=a;this.buttonType=this.buttonType=b;b=this.F.getVideoData();if(a.N("embeds_enable_server_driven_watch_again_on_youtube")){var c,d;if(c=(a=null==(c=b.watchNextResponse)?void 0:null==(d=c.playerOverlays)?void 0:d.playerOverlayRenderer)&&g.Q(a.watchOnYoutubeButton,g.gKa))this.j=c}if(this.j)this.update({content:this.j.title}),this.F.Cg(this.element,this),this.F.rh(this.element,this.j.trackingParams||null);else{switch(this.buttonType){case 1:c=
"Watch again on YouTube";d=156915;break;case 2:c="Continue watching on YouTube";d=156942;break;default:c="Continue watching on YouTube",d=156942}this.update({content:c});this.F.qb(this.element,this,d)}2===this.buttonType&&g.io(this.element,"ytp-continue-watching-button");this.Pa("click",this.onClick);g.lN(this,!0)},G5=function(a,b){B5.call(this,a,"embeds-lite-endscreen");
this.F=a;this.j=b;this.F.qb(this.element,this,156943);this.watchButton=new F5(a,2);g.H(this,this.watchButton);this.watchButton.Ca(this.element);this.hide()},Kcb=function(a){B5.call(this,a,"subscribecard-endscreen");
this.j=new g.W({G:"div",K:"ytp-subscribe-card",W:[{G:"img",K:"ytp-author-image",X:{src:"{{profilePicture}}"}},{G:"div",K:"ytp-subscribe-card-right",W:[{G:"div",K:"ytp-author-name",qa:"{{author}}"},{G:"div",K:"html5-subscribe-button-container"}]}]});g.H(this,this.j);this.j.Ca(this.element);var b=a.getVideoData();this.subscribeButton=new g.fS("Subscribe",null,"Unsubscribe",null,!0,!1,b.Ll,b.subscribed,"trailer-endscreen",null,null,a);g.H(this,this.subscribeButton);this.subscribeButton.Ca(this.j.Ea("html5-subscribe-button-container"));
this.S(a,"videodatachange",this.La);this.La();this.hide()},H5=function(a){var b=a.V(),c=g.PF||g.HH?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.W.call(this,{G:"a",Ga:e,X:{href:"{{url}}",target:d?b.T:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},W:[{G:"div",K:"ytp-videowall-still-image",X:{style:"{{background}}"}},{G:"span",K:"ytp-videowall-still-info",X:{"aria-hidden":"true"},W:[{G:"span",K:"ytp-videowall-still-info-bg",W:[{G:"span",K:"ytp-videowall-still-info-content",X:c,W:[{G:"span",K:"ytp-videowall-still-info-title",
qa:"{{title}}"},{G:"span",K:"ytp-videowall-still-info-author",qa:"{{author_and_views}}"},{G:"span",K:"ytp-videowall-still-info-live",qa:"Live"},{G:"span",K:"ytp-videowall-still-info-duration",qa:"{{duration}}"}]}]}]},{G:"span",Ga:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{G:"span",K:"ytp-videowall-still-listlabel-length",W:[" (",{G:"span",qa:"{{playlist_length}}"},")"]}]},{G:"span",
Ga:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],X:{"aria-hidden":"true"},W:[{G:"span",K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{G:"span",K:"ytp-videowall-still-listlabel-length",qa:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.MF(this);g.H(this,this.j);this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress);this.j.S(a,"videodatachange",this.onVideoDataChange);a.Cg(this.element,this);this.onVideoDataChange()},I5=function(a){B5.call(this,
a,"videowall-endscreen");
var b=this;this.F=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.J=!1;this.T=null;this.u=new g.MF(this);g.H(this,this.u);this.Z=a.N("web_rounded_thumbnails");this.I=new g.$n(function(){g.io(b.element,"ytp-show-tiles")},0);
g.H(this,this.I);var c=new g.W({G:"button",Ga:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":"Previous"},W:[g.qN()]});g.H(this,c);c.Ca(this.element);c.Pa("click",this.KX,this);this.table=new g.iN({G:"div",K:"ytp-endscreen-content"});g.H(this,this.table);this.table.Ca(this.element);c=new g.W({G:"button",Ga:["ytp-button","ytp-endscreen-next"],X:{"aria-label":"Next"},W:[g.rN()]});g.H(this,c);c.Ca(this.element);c.Pa("click",this.JX,this);a.getVideoData().dc?this.j=new z5(a,!0):this.j=new C5(a);
g.H(this,this.j);g.tQ(this.player,this.j.element,4);a.qb(this.element,this,158789);this.hide()},J5=function(a){return g.uQ(a.player)&&a.Wz()&&!a.C},Lcb=function(a){var b,c,d,e;
return(null==(b=a.videoData)?0:null==(c=b.suggestions)?0:c.length)?null==(d=a.videoData)?void 0:d.suggestions:[null==(e=a.videoData)?void 0:g.OI(e)]},K5=function(a){var b=a.Gf();
b!==a.J&&(a.J=b,a.player.ma("autonavvisibility"))},L5=function(a){B5.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new F5(a,1);g.H(this,this.watchButton);this.watchButton.Ca(this.element);g.O4a(a)&&(this.j=new g.v2(a,g.gQ(a)),g.H(this,this.j),this.u=new g.W({G:"div",Ga:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],X:{tabIndex:"-1"},W:[this.j]}),g.H(this,this.u),this.j.Ca(this.u.element),this.u.Ca(this.element));a.qb(this.element,this,156914);this.hide()},Pcb=function(a){g.bR.call(this,a);
var b=this;this.endScreen=null;this.u=this.j=this.B=this.C=!1;this.listeners=new g.MF(this);g.H(this,this.listeners);var c=a.V(),d=a.getVideoData();d=d&&0!==d.endSeconds;if(g.Mw(g.aI(c))&&d&&!g.qQ(a))this.u=!0,this.endScreen=new G5(a,g.gQ(a));else{var e;(null==(e=g.gQ(a))?0:e.jk())?this.endScreen=new L5(a):Mcb(a)?(this.C=!0,Ncb(this),this.j?this.endScreen=new D5(a):this.endScreen=new I5(a)):c.Ag?this.endScreen=new Kcb(a):this.endScreen=new B5(a)}g.H(this,this.endScreen);g.tQ(a,this.endScreen.element,
4);Ocb(this);this.listeners.S(a,"videodatachange",this.onVideoDataChange,this);this.listeners.S(a,g.PB("endscreen"),function(f){b.onCueRangeEnter(f)});
this.listeners.S(a,g.QB("endscreen"),function(f){b.onCueRangeExit(f)})},Ncb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Xd&&a.B===b.dc)return!1;a.j=b.Xd;a.B=b.dc;return!0},Mcb=function(a){a=a.V();
return a.xd&&!a.Ag},Ocb=function(a){a.player.Qf("endscreen");
var b=a.player.getVideoData();b=new g.NB(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.NB(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.He([b,c])};
g.lV.prototype.Jy=g.ca(37,function(a){this.wM!==a&&(this.wM=a,this.Jk())});
g.WS.prototype.uq=g.ca(36,function(a){this.u!==a&&(this.u=a,this.La())});
g.lV.prototype.uq=g.ca(35,function(a){this.shareButton&&this.shareButton.uq(a)});
g.LS.prototype.tq=g.ca(34,function(a){this.j!==a&&(this.j=a,this.La())});
g.lV.prototype.tq=g.ca(33,function(a){this.overflowButton&&this.overflowButton.tq(a)});
g.RR.prototype.xC=g.ca(32,function(a){this.xM!==a&&(this.xM=a,this.Oo())});
g.mQ.prototype.xr=g.ca(6,function(){return this.app.xr()});
g.hZ.prototype.xr=g.ca(5,function(){return this.getVideoData().rH});g.v(y5,g.W);y5.prototype.select=function(){this.F.Wm(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.tA||void 0)&&this.F.rb(this.element)};
y5.prototype.onClick=function(a){g.CR(a,this.F,this.j,this.suggestion.sessionData||void 0)&&this.select()};
y5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.mz(a)||(this.select(),g.lz(a))}};g.v(z5,g.W);g.k=z5.prototype;g.k.fD=function(a){this.suggestion!==a&&(this.suggestion=a,x5(this.j,a),this.playButton.updateValue("url",this.suggestion.Wn()),A5(this))};
g.k.lk=function(){return 0<this.B};
g.k.Py=function(){this.lk()||(this.B=Date.now(),Ecb(this),Dcb(this.F,Gcb(this)),g.mo(this.F.getRootNode(),"countdown-running",this.lk()))};
g.k.ev=function(){this.yq();Ecb(this);var a=this.j.Ea("ytp-autonav-endscreen-upnext-header");a&&g.Xe(a,"Up next")};
g.k.yq=function(){this.lk()&&(this.C.stop(),this.B=0)};
g.k.select=function(a){this.F.nextVideo(!1,void 0===a?!1:a);this.yq()};
g.k.VO=function(a){g.CR(a,this.F)&&(a.currentTarget===this.playButton.element?this.F.rb(this.playButton.element):a.currentTarget===this.j.Ea("ytp-autonav-endscreen-link-container")&&(a=this.j.Ea("ytp-autonav-endscreen-link-container"),this.F.Sa(a,!0),this.F.rb(a)),this.select())};
g.k.EX=function(){this.F.rb(this.cancelButton.element);g.oQ(this.F,!0);this.D&&this.F.Oa("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.aQ)?void 0:c.command};
g.k.d3=function(a){if(Hcb(this)){var b=this.F.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.yO(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.yO(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.yO(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.yO(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.yO(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.yO(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.mo(this.element,"ytp-w2w-animate",!0)}};
g.k.DX=function(a){this.F.N("web_autonav_color_transition")&&2!==a&&g.mo(this.element,"ytp-w2w-animate",!1)};
g.k.UO=function(){var a=this.F.Gf();this.I&&this.sb!==a&&g.lN(this,a);A5(this);this.F.Sa(this.container.element,a);this.F.Sa(this.cancelButton.element,a);this.F.Sa(this.j.Ea("ytp-autonav-endscreen-link-container"),a);this.F.Sa(this.playButton.element,a)};
g.k.Sg=function(a){return 400>a.width||459>a.height};g.v(B5,g.W);g.k=B5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Wz=function(){return!1};
g.k.Gf=function(){return!1};
g.k.aT=function(){return!1};g.v(C5,g.W);g.k=C5.prototype;g.k.YD=function(){this.notification&&(this.C.stop(),this.Dc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.fD=function(a){this.suggestion=a;x5(this,a,"hqdefault.jpg")};
g.k.WO=function(){g.lN(this,this.api.Gf());this.api.Sa(this.element,this.api.Gf());this.api.Sa(this.Ea("ytp-upnext-autoplay-icon"),this.api.Gf());this.cancelButton&&this.api.Sa(this.cancelButton.element,this.api.Gf())};
g.k.Y3=function(){window.focus();this.YD()};
g.k.Py=function(a){var b=this;this.lk()||(g.Bz("a11y-announce","Up Next "+this.suggestion.title),this.u=(0,g.R)(),this.j=new g.$n(function(){Jcb(b,a)},25),Jcb(this,a),Dcb(this.api,Icb(this,a)));
g.ko(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.W.prototype.hide.call(this)};
g.k.lk=function(){return!!this.j};
g.k.ev=function(){this.yq();this.u=(0,g.R)();Jcb(this);g.io(this.element,"ytp-upnext-autoplay-paused")};
g.k.yq=function(){this.lk()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.V().N("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.YD(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.Xf()}),this.B=this.S(this.notification,"click",this.Y3),this.C.start())}this.yq();this.api.nextVideo(!1,a)};
g.k.GX=function(a){!g.We(this.cancelButton.element,g.hz(a))&&g.CR(a,this.api)&&(this.api.Gf()&&this.api.rb(this.Ea("ytp-upnext-autoplay-icon")),this.select())};
g.k.FX=function(){this.api.Gf()&&this.cancelButton&&this.api.rb(this.cancelButton.element);g.oQ(this.api,!0)};
g.k.P3=function(a){this.api.getPresentingPlayerType();this.show();this.Py(a)};
g.k.Q3=function(){this.api.getPresentingPlayerType();this.yq();this.hide()};
g.k.ra=function(){this.yq();this.YD();g.W.prototype.ra.call(this)};g.v(D5,B5);g.k=D5.prototype;g.k.create=function(){B5.prototype.create.call(this);this.C.S(this.player,"appresize",this.Az);this.C.S(this.player,"onVideoAreaChange",this.Az);this.C.S(this.player,"videodatachange",this.onVideoDataChange);this.C.S(this.player,"autonavchange",this.XO);this.C.S(this.player,"autonavcancel",this.HX);this.onVideoDataChange()};
g.k.show=function(){B5.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.oQ(this.player,!1);g.uQ(this.player)&&this.Wz()&&!this.B?(E5(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Py():3===this.videoData.autonavState&&this.j.ev()):(g.oQ(this.player,!0),E5(this));this.Az()};
g.k.hide=function(){B5.prototype.hide.call(this);this.j.ev();E5(this)};
g.k.Az=function(){var a=this.player.ek(!0,this.player.isFullscreen());E5(this);A5(this.u);g.mo(this.element,"ytp-autonav-cancelled-small-mode",this.Sg(a));g.mo(this.element,"ytp-autonav-cancelled-tiny-mode",this.mF(a));g.mo(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Bl(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.t(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.t(b.value);b=c.next().value;c=c.next().value;g.mo(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){var b=g.OI(this.videoData);b&&(this.j.fD(b),this.j!==this.u&&this.u.fD(b));for(b=0;b<Qcb.length;++b){var c=Qcb[b];if(a&&a[c]){this.videos[b]=new y5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,x5(d,c));g.H(this,this.videos[b]);this.videos[b].Ca(this.J.element)}}}this.Az()}};
g.k.XO=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.j.yq(),this.sb&&this.Az()):(this.I=!0,this.Gf()&&(2===a?this.j.Py():3===a&&this.j.ev()))};
g.k.HX=function(a){a?this.XO(1):(this.B=null,this.I=!1)};
g.k.Wz=function(){return 1!==this.videoData.autonavState};
g.k.Sg=function(a){return(910>a.width||459>a.height)&&!this.mF(a)&&!(400>=a.width||360>=a.height)};
g.k.mF=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Gf=function(){return this.sb&&g.uQ(this.player)&&this.Wz()&&!this.B};
var Qcb=[1,3,2,4];g.v(F5,g.W);g.k=F5.prototype;g.k.onClick=function(a){this.j?this.F.Oa("innertubeCommand",this.j.onTap):g.DR(this.getVideoUrl(),this.F,a);this.F.rb(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.F.getVideoUrl(a,!1,!1,!0);var b=this.F.V();if(g.JH(b)||g.TH(b)){var c={};b.Ka&&g.JH(b)&&g.QP(c,b.loaderUrl);g.JH(b)&&g.dQ(this.F,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.AP(c,b);a=g.ci(a,c)}return a};
g.k.Sa=function(){this.F.Sa(this.element,this.sb&&this.ya)};
g.k.show=function(){g.W.prototype.show.call(this);this.Sa()};
g.k.hide=function(){g.W.prototype.hide.call(this);this.Sa()};
g.k.hc=function(a){g.W.prototype.hc.call(this,a);this.Sa()};g.v(G5,B5);G5.prototype.show=function(){3!==this.player.getPlayerState()&&(B5.prototype.show.call(this),this.j.Jy(!0),this.j.uq(!0),this.F.V().Il||this.j.tq(!0),this.F.Sa(this.element,!0),this.watchButton.hc(!0))};
G5.prototype.hide=function(){B5.prototype.hide.call(this);this.j.Jy(!1);this.j.uq(!1);this.j.tq(!1);this.F.Sa(this.element,!1);this.watchButton.hc(!1)};g.v(Kcb,B5);Kcb.prototype.La=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Ll;var b=this.subscribeButton;a.subscribed?b.j():b.u()};g.v(H5,g.W);H5.prototype.select=function(){this.api.Wm(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.tA||void 0)&&this.api.rb(this.element)};
H5.prototype.onClick=function(a){g.CR(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
H5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.mz(a)||(this.select(),g.lz(a))}};
H5.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.D?!1:b.u};g.v(I5,B5);g.k=I5.prototype;g.k.create=function(){B5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Xo();this.u.S(this.player,"appresize",this.Xo);this.u.S(this.player,"onVideoAreaChange",this.Xo);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.u.S(this.player,"autonavchange",this.LH);this.u.S(this.player,"autonavcancel",this.IX);a=this.videoData.autonavState;a!==this.T&&this.LH(a);this.u.S(this.element,"transitionend",this.o5)};
g.k.destroy=function(){g.vA(this.u);g.bb(this.stills);this.stills=[];B5.prototype.destroy.call(this);g.ko(this.element,"ytp-show-tiles");this.I.stop();this.T=this.videoData.autonavState};
g.k.Wz=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.sb;B5.prototype.show.call(this);Lcb(this);g.ko(this.element,"ytp-show-tiles");this.player.V().isMobile?g.bo(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.oQ(this.player,!1);J5(this)?(K5(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Py():3===this.videoData.autonavState&&this.j.ev()):(g.oQ(this.player,!0),K5(this));a!==this.sb&&
this.player.Sa(this.element,!0)};
g.k.hide=function(){var a=this.sb;B5.prototype.hide.call(this);this.j.ev();K5(this);a!==this.sb&&this.player.Sa(this.element,!1)};
g.k.o5=function(a){g.hz(a)===this.element&&this.Xo()};
g.k.Xo=function(){var a=Lcb(this);if(a.length){g.io(this.element,"ytp-endscreen-paginate");var b=this.F.ek(!0,this.F.isFullscreen()),c=g.gQ(this.F);c&&(c=c.ag()?48:32,b.width-=2*c);var d=b.width/b.height,e=96/54,f=c=2,h=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=a.length,n=Math.pow(2,2);var p=m*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-n;for(p-=n;0<p&&(c<h||f<l);){var q=c/2,r=f/2,w=c<=h-2&&p>=r*n,x=f<=l-2&&p>=q*n;if((q+1)/r*e/d>d/(q/(r+1)*e)&&x)p-=q*n,f+=2;else if(w)p-=r*n,c+=2;else if(x)p-=q*
n,f+=2;else break}e=!1;p>=3*n&&6>=m*n-p&&(4<=f||4<=c)&&(e=!0);n=96*c;p=54*f;d=n/p<d?b.height/p:b.width/n;d=Math.min(d,2);n=Math.floor(Math.min(b.width,n*d));p=Math.floor(Math.min(b.height,p*d));b=this.table.element;b.ariaLive="polite";g.Ll(b,n,p);g.Bl(b,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.fD(g.OI(this.videoData));this.j instanceof z5&&A5(this.j);g.mo(this.element,"ytp-endscreen-takeover",J5(this));K5(this);n+=4;p+=4;d=0;b.ariaBusy="true";for(h=0;h<c;h++)for(l=0;l<f;l++)if(q=d,w=0,e&&
h>=c-2&&l>=f-2?w=1:0===l%2&&0===h%2&&(2>l&&2>h?0===l&&0===h&&(w=2):w=2),q=g.ee(q+this.B,m),0!==w){r=this.stills[d];r||(r=new H5(this.player),this.stills[d]=r,b.appendChild(r.element));x=Math.floor(p*l/f);var z=Math.floor(n*h/c),B=Math.floor(p*(l+w)/f)-x-4,C=Math.floor(n*(h+w)/c)-z-4;g.Hl(r.element,z,x);g.Ll(r.element,C,B);g.Bl(r.element,"transitionDelay",(l+h)/20+"s");g.mo(r.element,"ytp-videowall-still-mini",1===w);g.mo(r.element,"ytp-videowall-still-large",2<w);this.Z&&(w=Math.max(C,B),g.mo(r.element,
"ytp-videowall-still-round-large",256<=w),g.mo(r.element,"ytp-videowall-still-round-medium",96<w&&256>w),g.mo(r.element,"ytp-videowall-still-round-small",96>=w));q=a[q];r.suggestion!==q&&(r.suggestion=q,w=r.api.V(),x=g.ho(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",x5(r,q,x),g.JH(w)&&(x=q.Wn(),z={},w.Ka&&g.QP(z,w.loaderUrl),g.dQ(r.api,"addEmbedsConversionTrackingParams",[z]),x=g.ci(x,g.AP(z,"emb_rel_end")),r.updateValue("url",x)),(q=(q=q.sessionData)&&q.itct)&&r.api.rh(r.element,
q));d++}b.ariaBusy="false";g.mo(this.element,"ytp-endscreen-paginate",d<m);for(a=this.stills.length-1;a>=d;a--)c=this.stills[a],g.Te(c.element),g.ab(c);this.stills.length=d}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Xo())};
g.k.JX=function(){this.B+=this.stills.length;this.Xo()};
g.k.KX=function(){this.B-=this.stills.length;this.Xo()};
g.k.aT=function(){return this.j.lk()};
g.k.LH=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.yq(),this.sb&&this.Xo()):(this.D=!0,this.sb&&J5(this)&&(2===a?this.j.Py():3===a&&this.j.ev()))};
g.k.IX=function(a){if(a){for(a=0;a<this.stills.length;a++)this.F.Sa(this.stills[a].element,!0);this.LH(1)}else this.C=null,this.D=!1;this.Xo()};
g.k.Gf=function(){return this.sb&&J5(this)};g.v(L5,B5);L5.prototype.show=function(){if(3!==this.player.getPlayerState()){B5.prototype.show.call(this);var a=this.u;if(a){var b=0<this.j.suggestionData.length;g.mo(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.gQ(this.player))||c.xC(!0);this.player.Sa(this.element,!0);this.watchButton.hc(!0)}};
L5.prototype.hide=function(){B5.prototype.hide.call(this);var a;null==(a=g.gQ(this.player))||a.xC(!1);this.player.Sa(this.element,!1);this.watchButton.hc(!1)};g.v(Pcb,g.bR);g.k=Pcb.prototype;g.k.Ev=function(){var a;if((null==(a=g.gQ(this.player))?0:a.jk())||this.u)return!0;a=this.player.getVideoData();var b;var c=!!((null==a?0:g.OI(a))||(null==a?0:null==(b=a.suggestions)?0:b.length));b=!Mcb(this.player)||c;c=a.Dj||g.TH(a.u);var d=this.player.DA();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Gf=function(){return this.endScreen.Gf()};
g.k.G1=function(){return this.Gf()?this.endScreen.aT():!1};
g.k.ra=function(){this.player.Qf("endscreen");g.bR.prototype.ra.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.vb().Ue.get("heartbeat"),d=g.OI(a);!d||b.videoId!==d.videoId||a.JI?(this.player.Wm(b.videoId,void 0,void 0,!0,!0,b),c&&c.uF("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.bR.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.bR.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Ev()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){Ocb(this);this.C&&Ncb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new D5(this.player):this.endScreen=new I5(this.player),g.H(this,this.endScreen),g.tQ(this.player,this.endScreen.element,4))};g.aR("endscreen",Pcb);})(_yt_player);
