//<![CDATA[
var _0x5c01f6=function(){var s=!0;return function(a,e){var t=s?function(){if(1,e){var t=e.apply(a,arguments);return e=null,t}}:function(){};return s=!1,t}}(),_0x247609=_0x5c01f6(this,function(){return!new("undefined"!=typeof window?window:"object"==typeof process&&"function"==typeof require&&"object"==typeof global?global:this).RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}").test(_0x247609)});_0x247609(),$(function(l){l.fn.lazyyard=function(){return this.each(function(){var s=l(this),t=s.attr("src"),a="/w"+Math.round(s.width())+"-h"+Math.round(s.height())+"-p-k-no-nu",i="";function e(){var t,a=l(window).height(),e=l(window).scrollTop();s.offset().top<e+a&&((t=new Image).onload=function(){s.addClass("lazy-yard")},t.src=i)}i=t.match("s72-c")?t.replace("/s72-c",a):t.match("w72-h")?t.replace("/w72-h72-p-k-no-nu",a):t,l(window).on("load resize scroll",e),e()})}}),$(function(){function o(F,H,t,K){var a;(H.match("mega-menu")||H.match("ticker-posts")||H.match("hot-posts")||H.match("slide-posts")||H.match("feat-big")||H.match("slider")||H.match("col-left")||H.match("col-right")||H.match("mini-slide")||H.match("grid-small")||H.match("grid-big")||H.match("feat-list")||H.match("post-list")||H.match("related"))&&(a="",a="recent"==K?"/feeds/posts/default?alt=json-in-script&max-results="+t:"random"==K?"/feeds/posts/default?max-results="+t+"&start-index="+(Math.floor(Math.random()*t)+1)+"&alt=json-in-script":"/feeds/posts/default/-/"+K+"?alt=json-in-script&max-results="+t,$.ajax({url:a,type:"get",dataType:"jsonp",beforeSend:function(){H.match("ticker-posts")?F.html('<ul class="loading-post">Loading......</ul>').parent().addClass("show-ticker"):H.match("hot-posts")?F.html('<div class="hot-loader"/>').parent().addClass("show-hot"):H.match("slide-posts")?F.html('<div class="loader"></div>').parent().addClass("show-slide"):H.match("slider")?F.html('<div class="loader"></div>').parent().addClass("show-slider"):H.match("mini-slide")&&F.html('<div class="loader"></div>').parent().addClass("show-slide")},success:function(t){var a;H.match("mega-menu")?a='<ul class="mega-menu-inner">':H.match("ticker-posts")?a='<ul class="ticker-widget">':H.match("hot-posts")?a='<ul class="hot-posts">':H.match("slide-posts")?a='<ul class="slide-posts">':H.match("feat-big")?a='<ul class="feat-big">':H.match("slider")?a='<ul class="main-slider">':H.match("col-right")||H.match("col-left")?a='<ul class="feat-col">':H.match("mini-slide")?a='<ul class="slide-posts">':H.match("grid-small")?a='<ul class="grid-small">':H.match("grid-big")?a='<ul class="grid-big">':H.match("feat-list")?a='<ul class="feat-list">':H.match("post-list")?a='<ul class="custom-widget">':H.match("related")&&(a='<ul class="related-posts">');var e,s,i,l,o,n,r,c,d,m,h,p,u,f,g,v,b,w,y,x,k,C,A,P,T,_,D,L=t.feed.entry;if(null!=L){for(var I=0,j=L;I<j.length;I++){var q=function(t,a){for(var e=0;e<t[a].link.length;e++)if("alternate"==t[a].link[e].rel){var s=t[a].link[e].href;break}return s}(j,I),M='<a href="'+q+'">'+j[I].title.$t+"</a>",O=(D=_=P=A=void 0,T=(k=j)[C=I].title.$t,_=k[C].content.$t,D=$("<div>").html(_),"media$thumbnail"in k[C]?(P=(A=k[C].media$thumbnail.url).replace("/s72-c","/w680"),A.match("img.youtube.com")&&(P=A.replace("/default.","/hqdefault."))):P=-1<_.indexOf("<img")?D.find("img:first").attr("src"):noThumbnail,'<img class="post-thumb" alt="'+T+'" src="'+P+'"/>'),z=null!=(y=j)[x=I].category?'<span class="post-tag">'+y[x].category[0].term+"</span>":"",E='<span class="post-author">'+j[I].author[0].name.$t+" </span>",S=(g=void 0,g=j[I].published.$t,v=g.substring(0,4),b=g.substring(5,7),w=g.substring(8,10),'<span class="post-date">'+monthFormat[parseInt(b,10)-1]+" "+w+", "+v+"</span>"),B=(f=j[I].content.$t,'<p class="post-snippet">'+$("<div>").html(f).text().trim().substr(0,86)+"…</p>"),W=(u=j[I].content.$t,'<p class="post-snippet">'+$("<div>").html(u).text().trim().substr(0,150)+"…</p>"),Y="";H.match("mega-menu")?Y+='<div class="mega-item item-'+I+'"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="'+q+'">'+O+"</a>"+z+'</div><h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div></div></div>":H.match("ticker-posts")?Y+='<li class="ticker-item item-'+I+'"><a class="post-image-link" href="'+q+'">'+O+'</a><h2 class="post-title">'+M+"</h2>"+z+"</li>":H.match("hot-posts")?Y+=0==I?'<li class="hot-item item-'+I+'"><div class="hot-item-inner"><a class="post-image-link" href="'+q+'">'+O+'</a><div class="post-info">'+z+'<h2 class="post-title">'+M+'</h2><div class="post-meta">'+E+S+"</div></div></div></li>":'<li class="hot-item item-'+I+'"><div class="hot-item-inner"><a class="post-image-link" href="'+q+'">'+O+'</a><div class="post-info">'+z+'<h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div></div></div></li>":H.match("slide-posts")?Y+='<li class="car-item item-'+(I+1)+'"><div class="car-item-inner"><a class="post-image-link" href="'+q+'">'+O+'</a><div class="post-info-wrap"><div class="post-info">'+z+'<h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div>"+B+"</div></div></div></li>":H.match("feat-big")?Y+=0==I?'<li class="feat-item item-big item-'+I+'"><div class="feat-inner"><a class="post-image-link" href="'+q+'">'+O+"</a>"+z+'<div class="post-info"><h2 class="post-title">'+M+'</h2><div class="post-meta">'+E+S+"</div>"+B+"</div></div></li>":'<li class="feat-item item-small item-'+I+'"><a class="post-image-link" href="'+q+'">'+O+'</a><div class="post-info"><h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div></div></li>":H.match("slider")?Y+='<li class="slider-item item-'+(I+1)+'"><div class="slider-item-inner"><a class="post-image-link" href="'+q+'">'+O+'</a><div class="post-info-wrap"><div class="post-info">'+z+'<h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div>"+B+"</div></div></div></li>":H.match("col-left")||H.match("col-right")?Y+=0==I?'<li class="feat-item item-big item-'+I+'"><div class="feat-inner"><a class="post-image-link" href="'+q+'">'+O+"</a>"+z+'<div class="post-info"><h2 class="post-title">'+M+'</h2><div class="post-meta">'+E+S+"</div>"+B+"</div></div></li>":'<li class="feat-item item-small item-'+I+'"><a class="post-image-link" href="'+q+'">'+O+'</a><div class="post-info"><h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div></div></li>":H.match("mini-slide")?Y+='<li class="car-item item-'+(I+1)+'"><div class="car-item-inner"><a class="post-image-link" href="'+q+'">'+O+'</a><div class="post-info-wrap"><div class="post-info">'+z+'<h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div></div></div></div></li>":H.match("grid-small")?Y+='<li class="feat-item item-small item-'+I+'"><div class="post-image-wrap"><a class="post-image-link" href="'+q+'">'+O+"</a>"+z+'</div><div class="post-info"><h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div></div></li>":H.match("grid-big")?Y+='<li class="feat-item item-big item-'+I+'"><div class="feat-inner"><a class="post-image-link" href="'+q+'">'+O+"</a>"+z+'<div class="post-info"><h2 class="post-title">'+M+'</h2><div class="post-meta">'+E+S+"</div>"+B+"</div></div></li>":H.match("feat-list")?Y+='<li class="feat-item item-'+I+'"><div class="feat-inner"><a class="post-image-link" href="'+q+'">'+O+"</a>"+z+'<div class="post-info"><h2 class="post-title">'+M+'</h2><div class="post-meta">'+E+S+"</div>"+W+"</div></div></li>":H.match("post-list")?Y+='<li class="item-'+I+'"><a class="post-image-link" href="'+q+'">'+O+'</a><h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div></div></li>":H.match("related")&&(Y+='<li class="related-item item-'+I+'"><div class="post-image-wrap"><a class="post-image-link" href="'+q+'">'+O+"</a>"+z+'</div><h2 class="post-title">'+M+'</h2><div class="post-meta">'+S+"</div></li>"),a+=Y}a+="</ul>"}else a='<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown-o"/></ul>';H.match("mega-menu")?(F.addClass("has-sub mega-menu").append(a),F.find("a:first").attr("href",function(t,a){return a="recent"==K||"random"==K?a.replace(a,"/search/?&max-results="+postPerPage):a.replace(a,"/search/label/"+K+"?&max-results="+postPerPage)})):H.match("ticker-posts")?(F.html(a).parent().addClass("show-ticker"),e={items:1,animateIn:"fadeInUp",animateOut:"fadeOutUp",smartSpeed:0,rtl:!1,nav:!0,navText:["",""],loop:!0,autoplay:!0,autoplayHoverPause:!0,dots:!1,mouseDrag:!1,touchDrag:!1,freeDrag:!1,pullDrag:!1},F.find(".ticker-widget").owlCarousel(e)):H.match("hot-posts")?F.html(a).parent().addClass("show-hot"):H.match("slide-posts")?(F.html(a).parent().addClass("show-slide"),s=F.find(".slide-posts"),i={items:3},l={items:4,loop:!0},(o={})[0]={items:1},o[768]=i,o[1e3]=l,(n={items:4,rtl:!1,nav:!0,navText:["",""],loop:!0,margin:10,autoplay:!0,autoplayHoverPause:!0,dots:!1,mouseDrag:!1,touchDrag:!1,freeDrag:!1,pullDrag:!1,responsiveClass:!0}).responsive=o,s.owlCarousel(n),F.parent().find(".widget-title").append('<a class="view-all" href="/search/label/'+K+"?&max-results="+postPerPage+'">'+messages.viewAll+"</a>")):H.match("slider")?(F.html(a).parent().addClass("show-slider"),r={items:1,animateIn:"fadeInRight",animateOut:"fadeOutRight",smartSpeed:0,rtl:!1,nav:!0,navText:["",""],loop:!0,autoplay:!0,autoplayHoverPause:!0,dots:!1,mouseDrag:!1,touchDrag:!1,freeDrag:!1,pullDrag:!1},F.find(".main-slider").owlCarousel(r),F.parent().find(".widget-title").append('<a class="view-all" href="/search/label/'+K+"?&max-results="+postPerPage+'">'+messages.viewAll+"</a>")):H.match("mini-slide")?(F.html(a).parent().addClass("show-slide"),c=F.find(".slide-posts"),d={items:3},m={items:3,loop:!0},(h={})[0]={items:1},h[768]=d,h[1e3]=m,(p={items:3,rtl:!1,nav:!0,navText:["",""],loop:!0,margin:10,autoplay:!1,autoplayHoverPause:!0,dots:!1,mouseDrag:!1,touchDrag:!1,freeDrag:!1,pullDrag:!1,responsiveClass:!0}).responsive=h,c.owlCarousel(p),F.parent().find(".widget-title").append('<a class="view-all" href="/search/label/'+K+"?&max-results="+postPerPage+'">'+messages.viewAll+"</a>")):H.match("feat-big")||H.match("feat-list")||H.match("col-left")||H.match("col-right")||H.match("grid-small")||H.match("grid-big")?(F.parent().find(".widget-title").append('<a class="view-all" href="/search/label/'+K+"?&max-results="+postPerPage+'">'+messages.viewAll+"</a>"),(H.match("col-left")||H.match("col-right"))&&(H.match("col-right")&&F.parent().addClass("col-right"),F.parent().addClass("col-width")),F.html(a).parent().addClass("show-widget")):F.html(a),F.find(".post-thumb").lazyyard()}}))}$(".index-post .post-image-link .post-thumb, .PopularPosts .post-image-link .post-thumb, .FeaturedPost .entry-image-link .post-thumb,.about-author .author-avatar, .item-post .post-body img").lazyyard(),$("#main-menu").each(function(){for(var t=$(this).find(".LinkList ul > li").children("a"),a=t.length,e=0;e<a;e++){var s,i=t.eq(e),l=i.text();"_"!==l.charAt(0)&&"_"===t.eq(e+1).text().charAt(0)&&(s=i.parent()).append('<ul class="sub-menu m-sub"/>'),"_"===l.charAt(0)&&(i.text(l.replace("_","")),i.parent().appendTo(s.children(".sub-menu")))}for(e=0;e<a;e++){var o,n=t.eq(e),r=n.text();"_"!==r.charAt(0)&&"_"===t.eq(e+1).text().charAt(0)&&(o=n.parent()).append('<ul class="sub-menu2 m-sub"/>'),"_"===r.charAt(0)&&(n.text(r.replace("_","")),n.parent().appendTo(o.children(".sub-menu2")))}$("#main-menu ul li ul").parent("li").addClass("has-sub"),$("#main-menu ul > li a").each(function(){var t=$(this),a=t.text().trim(),e=a.toLowerCase(),s=a.split("-")[0];e.match("-text")&&(t.attr("data-title",s),t.parent("li").addClass("li-home").find("> a").text(s)),a.match("-icon")&&(t.attr("data-title",s),t.parent("li").addClass("li-home li-home-icon").find("> a").html('<i class="fa fa-home"/>'))}),$("#main-menu .widget").addClass("show-menu")}),$("#main-menu-nav").clone().appendTo(".mobile-menu"),$(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'),$(".mobile-menu ul > li a").each(function(){var t=$(this),a=t.attr("href").trim(),e=a.toLowerCase(),s=a.split("/")[0],i=t.data("title");t.parent("li.li-home").find("> a").text(i),e.match("mega-menu")&&t.attr("href","/search/label/"+s+"?&max-results="+postPerPage)}),$(".slide-menu-toggle").on("click",function(){$("body").toggleClass("nav-active")}),$(".mobile-menu ul li .submenu-toggle").on("click",function(t){$(this).parent().hasClass("has-sub")&&(t.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))}),$(".show-search, .show-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeIn(250).find("input").focus()}),$(".hide-search, .hide-mobile-search").on("click",function(){$("#nav-search, .mobile-search-form").fadeOut(250).find("input").blur()}),$(".Label a, a.b-label").attr("href",function(t,a){return a.replace(a,a+"?&max-results="+postPerPage)}),$(".avatar-image-container img").attr("src",function(t,a){return a=(a=a.replace("/s35-c/","/s45-c/")).replace("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png")}),$(".index-post .post-image-link img").attr("src",function(t,a){return a=a.replace("https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png",noThumbnail)}),$(".author-description a").each(function(){$(this).attr("target","_blank")}),$.each($(".list-label li a"),function(){var t="#"+("000000"+Math.floor(16777215*Math.random()).toString(16)).slice(-6);$(this).css("background-color",t)}),$(".post-nav").each(function(){var t=$("a.prev-post-link").attr("href"),a=$("a.next-post-link").attr("href");$.ajax({url:t,type:"get",success:function(t){var a=$(t).find(".blog-post h1.post-title").text();$(".post-prev a .post-nav-inner p").text(a)}}),$.ajax({url:a,type:"get",success:function(t){var a=$(t).find(".blog-post h1.post-title").text();$(".post-next a .post-nav-inner p").text(a)}})}),$(".post-body strike").each(function(){var t=$(this),a=t.text();a.match("left-sidebar")&&t.replaceWith("<style>.item #main-wrapper{float:right;padding:0 15px 0 0px}.item #sidebar-wrapper{float:left}margin:0}</style>"),a.match("right-sidebar")&&t.replaceWith("<style>.item #main-wrapper{float:left;padding:0 0 0 15px}.item #sidebar-wrapper{float:right}</style>"),a.match("full-width")&&t.replaceWith("<style>.item #main-wrapper{width:100%;padding:0}.item #sidebar-wrapper{display:none}.item #content-wrapper > .container{margin:0}</style>")}),$("#main-wrapper, #sidebar-wrapper").each(function(){var t;1==fixedSidebar&&(t={additionalMarginTop:25,additionalMarginBottom:25},$(this).theiaStickySidebar(t))}),$(".back-top").each(function(){var t=$(this);$(window).on("scroll",function(){100<=$(this).scrollTop()?t.fadeIn(250):t.fadeOut(250)}),t.click(function(){var t={scrollTop:0};$("html, body").animate(t,500)})}),$("#main-menu #main-menu-nav li").each(function(){var t=$(this),a=t.find("a").attr("href").trim();o(t,a.toLowerCase(),5,a.split("/")[0])}),$("#break-section .widget-content").each(function(){var t=$(this),a=t.text().trim(),e=a.toLowerCase(),s=a.split("/");o(t,e,s[0],s[1])}),$("#hot-section .widget-content").each(function(){var t=$(this),a=t.text().trim();o(t,a.toLowerCase(),4,a.split("/")[0])}),$("#carousel-section .widget-content").each(function(){var t=$(this),a=t.text().trim(),e=a.toLowerCase(),s=a.split("/");o(t,e,s[0],s[1])}),$(".featured-posts .widget-content").each(function(){var t,a,e=$(this),s=e.text().trim(),i=s.toLowerCase(),l=s.split("/");a=i.match("feat-big")?(t=5,l[0]):(t=l[0],l[1]),o(e,i,t,a)}),$(".common-widget .widget-content").each(function(){var t=$(this),a=t.text().trim(),e=a.toLowerCase(),s=a.split("/");o(t,e,s[0],s[1])}),$(".related-ready").each(function(){var t=$(this),a=t.find(".related-tag").data("label");o(t,"related",3,a)}),$(".blog-post-comments").each(function(){var t,a=commentsSystem,e=(disqus_blogger_current_url,'<div class="fb-comments" data-width="100%" data-href="'+$(location).attr("href")+'" data-numposts="5"></div>'),s="comments-system-"+a;"blogger"==a?$(this).addClass(s).show():"disqus"==a?((t=document.createElement("script")).type="text/javascript",t.async=!0,t.src="//"+disqusShortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t),$("#comments, #gpluscomments").remove(),$(this).append('<div id="disqus_thread"/>').addClass(s).show()):"facebook"==a?($("#comments, #gpluscomments").remove(),$(this).append(e).addClass(s).show()):"hide"==a?$(this).hide():$(this).addClass("comments-system-default").show()})}),$(document).scroll(function(){1==fixedMenu&&$(window).on("scroll",function(t){var a,e=0;$(this).scrollTop()<240?(e=$(".header-header").height(),$(".header-menu, .mobile-header").removeClass("scrolled-header")):($(".header-menu, .mobile-header").addClass("scrolled-header"),(a={}).marginTop=e,$("body").css(a))})});
//]]>
