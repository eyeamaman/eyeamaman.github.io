Yo.add("test.test1",function(){var t=function(t,e){var n=t||$(this);e=$.extend({},{widgetName:"test1"},e),n.addClass(e.className)};return $.fn.Test1=function(e){return t($(this),$.extend({},e)),this},$.fn.Test1_basic=function(e){return t($(this),$.extend({},$(this).data("test1"),e)),this},{Test1:t}}),Yo.add("test.test2",function(){var t=function(t,e){var n=t||$(this);e=$.extend({},{widgetName:"test2"},e),n.addClass(e.className)};return $.fn.Test2=function(e){return t($(this),$.extend({},e)),this},$.fn.Test2_basic=function(e){return t($(this),$.extend({},$(this).data("test2"),e)),this},{Test2:t}}),Yo.add("test.test3",function(){var t=function(t,e){var n=t||$(this);e=$.extend({},{widgetName:"test3"},e),n.addClass(e.className)};return $.fn.Test3=function(e){return t($(this),$.extend({},e)),this},$.fn.Test3_basic=function(e){return t($(this),$.extend({},$(this).data("test3"),e)),this},{Test3:t}}),function(){var t=function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()};runjQueryWidget=function(e,n,s){n=t(n),$(e)[n]&&$(e)[n](s||{})};var e=function(t){if(t.attributes.length>0)for(var e=0;e<t.attributes.length;e++)if("d"===t.attributes[e].name.charAt(0)){var n=t.attributes[e].name.indexOf("data-");0===n&&runjQueryWidget(t,t.attributes[e].name.replace("data-",""))}};nodeCycler=function(t){var n=t.children.length;if(e(t),n>0)for(var s=0;s<n;s++)nodeCycler(t.children[s])}}();