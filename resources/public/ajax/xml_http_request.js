// Compiled by ClojureScript 1.7.48 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__24730,handler){
var map__24731 = p__24730;
var map__24731__$1 = ((((!((map__24731 == null)))?((((map__24731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24731):map__24731);
var uri = cljs.core.get.call(null,map__24731__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__24731__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__24731__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__24731__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__24731__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__24731__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__24731__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__24731,map__24731__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__24729_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__24729_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__24731,map__24731__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___24739 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___24739)){
var response_type_24740 = temp__4425__auto___24739;
this$__$1.responseType = cljs.core.name.call(null,response_type_24740);
} else {
}

var seq__24733_24741 = cljs.core.seq.call(null,headers);
var chunk__24734_24742 = null;
var count__24735_24743 = (0);
var i__24736_24744 = (0);
while(true){
if((i__24736_24744 < count__24735_24743)){
var vec__24737_24745 = cljs.core._nth.call(null,chunk__24734_24742,i__24736_24744);
var k_24746 = cljs.core.nth.call(null,vec__24737_24745,(0),null);
var v_24747 = cljs.core.nth.call(null,vec__24737_24745,(1),null);
this$__$1.setRequestHeader(k_24746,v_24747);

var G__24748 = seq__24733_24741;
var G__24749 = chunk__24734_24742;
var G__24750 = count__24735_24743;
var G__24751 = (i__24736_24744 + (1));
seq__24733_24741 = G__24748;
chunk__24734_24742 = G__24749;
count__24735_24743 = G__24750;
i__24736_24744 = G__24751;
continue;
} else {
var temp__4425__auto___24752 = cljs.core.seq.call(null,seq__24733_24741);
if(temp__4425__auto___24752){
var seq__24733_24753__$1 = temp__4425__auto___24752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24733_24753__$1)){
var c__17109__auto___24754 = cljs.core.chunk_first.call(null,seq__24733_24753__$1);
var G__24755 = cljs.core.chunk_rest.call(null,seq__24733_24753__$1);
var G__24756 = c__17109__auto___24754;
var G__24757 = cljs.core.count.call(null,c__17109__auto___24754);
var G__24758 = (0);
seq__24733_24741 = G__24755;
chunk__24734_24742 = G__24756;
count__24735_24743 = G__24757;
i__24736_24744 = G__24758;
continue;
} else {
var vec__24738_24759 = cljs.core.first.call(null,seq__24733_24753__$1);
var k_24760 = cljs.core.nth.call(null,vec__24738_24759,(0),null);
var v_24761 = cljs.core.nth.call(null,vec__24738_24759,(1),null);
this$__$1.setRequestHeader(k_24760,v_24761);

var G__24762 = cljs.core.next.call(null,seq__24733_24753__$1);
var G__24763 = null;
var G__24764 = (0);
var G__24765 = (0);
seq__24733_24741 = G__24762;
chunk__24734_24742 = G__24763;
count__24735_24743 = G__24764;
i__24736_24744 = G__24765;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16325__auto__ = body;
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map