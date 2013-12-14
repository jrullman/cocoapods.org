$(window).ready(function(){var e=$('#search input[type="search"]'),t=/\b(platform|on\:\w+\s?)+/,n=$("#search_results div.platform"),r=$("#search_results div.allocations"),i=function(e,t){var n=e.total;n>0?_gaq.push(["_trackEvent","search","with results",t,n]):_gaq.push(["_trackEvent","search","not found",t,0])},s=function(){_gaq.push(["_trackEvent","platform",n.find("input:checked").val()])},o=function(e,t){_gaq.push(["_trackEvent","allocation",e,t])},u=function(e){_gaq.push(["_trackEvent","resultlink","click",e])},a=function(){n.find("label").removeClass("selected"),n.find("input:checked + label").addClass("selected")},f=function(){$("nav.navbar").css("opacity","1"),$("#search").removeClass("active"),$("#results_container").removeClass("active"),$("#search span.amount").hide(),n.hide(),r.hide(),$("#search_results div.results").hide()},l=function(){$("nav.navbar").css("opacity","0"),$("#search").addClass("active"),$("#results_container").addClass("active"),$("#search span.amount").show()},c=function(){n.show(),r.show()},h=function(e){return e.replace(t,"")},p=function(e){$("#search_results div.allocations").hide(),$.getJSON("http://search.cocoapods.org/no_results.json","query="+h(e),function(e,t,n){var r=e.split[0].join(" "),i=e.split[1],s=$("#results_container .no_results .splits");r&&i>0?s.html("<p>We found "+i+" results searching for <a href='javascript:pickyClient.insert(\""+r+"\");'>"+r+"</a>.</p>"):s.html("");var o=$("#results_container .no_results .tags"),u=[];$.each(e.tag,function(e,t){u.push("<a href='javascript:pickyClient.insert(\"tag:"+e+"\");'>"+e+"</a>")}),o.html("<p>Maybe it helps exploring via one of our keywords? </p>"),o.find("p").append(u.sort().join(", ")).append(".")})},d={ios:"iOS",osx:"OS X"},v=/^http/,m=function(e){var t,n,r=e.source;for(var i in r){if(i=="http")return"";n=r[i];if(n.toString().match(v)){t=n;break}}return t?'<a href="'+t+'">Repo</a>':""},g=function(e){var t=d[e.platforms],n=$.map(e.authors,function(e,t){return"<a href=\"javascript:pickyClient.insert('"+t.replace(/[']/,"\\\\'")+"')\">"+t+"</a>"}),r="infos col-lg-8 col-sm-7 col-xs-12",i="actions col-lg-4 col-sm-5 col-xs-12";return'<li class="result">  <div class="'+r+'">'+"    <h3>"+'      <a href="'+e.link+'">'+e.id+"</a>"+'      <span class="version">'+e.version+"</span>"+'      <img class="copy" src="./images/copy-to-clipboard.png" data-clipboard-text="pod \''+e.id+"', '~> "+e.version+"'\">"+'      </img><span class="copy-result flash">Copied!</span><span class="copy-result manual"></span>'+(t?'<span class="os">'+t+"</span>":"")+"    </h3>"+'    <p class="subspecs">'+e.subspecs.join(", ")+"</p>"+"    <p>"+e.summary+"</p>"+'    <p class="author">'+n.join(", ")+"</p>"+"  </div>"+'  <div class="'+i+'">'+"<div class='action-wrapper'>"+m(e)+'    <a href="http://cocoadocs.org/docsets/'+e.id+"/"+e.version+'">Docs</a>'+'    <a href="https://github.com/CocoaPods/Specs/tree/master/'+e.id+"/"+e.version+"/"+e.id+'.podspec">Spec</a>'+"  </div></div>"+"</li>"};pickyClient=new PickyClient({full:"http://search.cocoapods.org/search.json",fullResults:20,live:"http://search.cocoapods.org/search.json",liveResults:20,liveRendered:!0,liveSearchInterval:60,maxSuggestions:5,alwaysShowResults:!0,alwaysShowSelection:!0,wrapResults:'<ol class="results"></ol>',enclosingSelector:"#search",resultsSelector:"#search_results div.results",noResultsSelector:"#results_container .no_results",allocationsSelector:"#search_results div.allocations",hiddenAllocations:"#search_results div.allocations .onrequest",counterSelector:"#search form span.amount",moreSelector:"#search_results .allocations .more",beforeInsert:function(e){if(""!=e){l();var r=e.match(t);if(r){var i=n.find('input[value="'+r[0].replace(/\s+$/g,"")+'"]');i.attr("checked","checked"),n.find("label").removeClass("selected"),n.find("input:checked + label").addClass("selected")}return h(e)}},before:function(e,r){if(e=="")return"";e=e.replace(t,"");var i=n.find("input:checked").val();return i===undefined||i==""?e:i+" "+e},success:function(t,n){i(t,n);if(""==e.val())return!1;0==t.total?p(n):c();var r=t.allocations;return r.each(function(e,t){t.entries=t.entries.map(function(e,t){return g(t)})}),t},after:function(e){$("ol.results img.copy").click(function(){var e=$(this).attr("data-clipboard-text"),t=$(this).siblings("span.copy-result.manual");t.html(e),t.show()});var t=new ZeroClipboard($("ol.results img.copy"),{moviePath:"./flashes/ZeroClipboard.swf",forceHandCursor:!0});t.on("load",function(e){e.on("complete",function(e,t){$(this).siblings("span.copy-result.flash").show()})}),r.find("li").on("click",function(e){var t=$(e.currentTarget);o(t.find(".text").text(),t.find(".count").text())}),$("ol.results").find("a").on("click",function(e){u(e.currentTarget.href)})},qualifiers:{en:{dependencies:"uses",platform:"on"}},groups:[["platform"]],choices:{en:{platform:"",name:"name",author:"author",summary:"summary",dependencies:"dependency",tags:"tag",version:"version","author,name":"author+name","name,author":"name+author","tags,name":"tag+name","name,tags":"name+tag","version,name":"version+name","name,version":"name+version","name,dependencies":"name+dependency","dependencies,name":"dependency+name","author,dependencies":"author+dependency","dependencies,author":"dependency+author","dependencies,version":"dependency+version","version,dependencies":"version+dependency","author,version":"author+version","version,author":"version+author","summary,version":"version+summary","version,summary":"version+summary","tags,summary":"summary+name","summary,tags":"name+summary","summary,name":"summary+name","name,summary":"name+summary","summary,author":"summary+author","author,summary":"author+summary","summary,dependencies":"summary+dependency","dependencies,summary":"dependency+summary","name,dependencies":"name+dependency","dependencies,name":"dependency+name"}},explanations:{en:{author:"written by",versions:"on version",dependencies:"using",name:"named",summary:"with summary",tags:"tagged as"}},explanationDelimiter:{en:"and"},explanationTokenCallback:function(e,t){if(e=="platform"){var n=t.length;return n==2?"<strong>on</strong> both "+t.join(" & "):"only <strong>on</strong> "+t[0]}}}),e.on("input",function(e){""==this.value?(_gaq.push(["_trackEvent","clear"]),f()):l()}),n.find("input").bind("change",function(e){s(),pickyClient.resend(),a(),$("#pod_search").focus()}),$("#search_container").on("click",function(e){$("#search_container input").focus()});var y=function(e){return e.next()},b=function(e){return e.prev()},w=function(e){var t=$("ol.results li.result"),n=t.closest(".selected").first();n.length>0?(n.removeClass("selected"),n=e(n)):n=t.first(),n.addClass("selected")},E=function(){var e=$("ol.results li.result.selected").first();e.length>0&&(window.document.location.href=e.find("a").first().attr("href"))};$("body").keydown(function(e){switch(e.keyCode){case 40:w(y);break;case 38:w(b);break;case 13:E()}}),window.initial_query!=""&&pickyClient.insertFromURL(window.initial_query)});