// Compiled by ClojureScript 1.7.48 {}
goog.provide('ganja_jedi.pres');
goog.require('cljs.core');
goog.require('ajax.core');
/**
 * Ajax call for getting news posts
 */
ganja_jedi.pres.get_news_posts = (function ganja_jedi$pres$get_news_posts(){
return ajax.core.GET.call(null,"/news",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (data){
return cljs.core.map.call(null,(function (item){
return null;
}),data);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (xhr,status,error){
return null;
}),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
});

//# sourceMappingURL=pres.js.map