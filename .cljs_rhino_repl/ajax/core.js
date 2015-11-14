// Compiled by ClojureScript 1.7.48 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 */
ajax.core.AjaxImpl = {};

/**
 * Makes an actual ajax request.  All parameters except opts
 * are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7 == null)))){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__5717__auto__ = (((this$ == null))?null:this$);
var m__5718__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__5717__auto__)]);
if(!((m__5718__auto__ == null))){
return m__5718__auto__.call(null,this$,uri,method,body,headers,handler,opts);
} else {
var m__5718__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__5718__auto____$1 == null))){
return m__5718__auto____$1.call(null,this$,uri,method,body,headers,handler,opts);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 */
ajax.core.AjaxRequest = {};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__5717__auto__ = (((this$ == null))?null:this$);
var m__5718__auto__ = (ajax.core._abort[goog.typeOf(x__5717__auto__)]);
if(!((m__5718__auto__ == null))){
return m__5718__auto__.call(null,this$);
} else {
var m__5718__auto____$1 = (ajax.core._abort["_"]);
if(!((m__5718__auto____$1 == null))){
return m__5718__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo.
 */
ajax.core.DirectlySubmittable = {};


/**
 * An abstraction for an ajax response.
 */
ajax.core.AjaxResponse = {};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.core._status = (function ajax$core$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__5717__auto__ = (((this$ == null))?null:this$);
var m__5718__auto__ = (ajax.core._status[goog.typeOf(x__5717__auto__)]);
if(!((m__5718__auto__ == null))){
return m__5718__auto__.call(null,this$);
} else {
var m__5718__auto____$1 = (ajax.core._status["_"]);
if(!((m__5718__auto____$1 == null))){
return m__5718__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.core._status_text = (function ajax$core$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__5717__auto__ = (((this$ == null))?null:this$);
var m__5718__auto__ = (ajax.core._status_text[goog.typeOf(x__5717__auto__)]);
if(!((m__5718__auto__ == null))){
return m__5718__auto__.call(null,this$);
} else {
var m__5718__auto____$1 = (ajax.core._status_text["_"]);
if(!((m__5718__auto____$1 == null))){
return m__5718__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format
 * such as a blob or arraybuffer.
 */
ajax.core._body = (function ajax$core$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__5717__auto__ = (((this$ == null))?null:this$);
var m__5718__auto__ = (ajax.core._body[goog.typeOf(x__5717__auto__)]);
if(!((m__5718__auto__ == null))){
return m__5718__auto__.call(null,this$);
} else {
var m__5718__auto____$1 = (ajax.core._body["_"]);
if(!((m__5718__auto____$1 == null))){
return m__5718__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__5717__auto__ = (((this$ == null))?null:this$);
var m__5718__auto__ = (ajax.core._get_response_header[goog.typeOf(x__5717__auto__)]);
if(!((m__5718__auto__ == null))){
return m__5718__auto__.call(null,this$,header);
} else {
var m__5718__auto____$1 = (ajax.core._get_response_header["_"]);
if(!((m__5718__auto____$1 == null))){
return m__5718__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__5717__auto__ = (((this$ == null))?null:this$);
var m__5718__auto__ = (ajax.core._was_aborted[goog.typeOf(x__5717__auto__)]);
if(!((m__5718__auto__ == null))){
return m__5718__auto__.call(null,this$);
} else {
var m__5718__auto____$1 = (ajax.core._was_aborted["_"]);
if(!((m__5718__auto____$1 == null))){
return m__5718__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__5081__auto__ = ((!((params == null)))?(((false) || (params.ajax$core$DirectlySubmittable$))?true:(((!params.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params):false)):cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params));
if(or__5081__auto__){
return or__5081__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__9083){
var map__9084 = p__9083;
var map__9084__$1 = ((((!((map__9084 == null)))?((((map__9084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9084):map__9084);
var timeout = cljs.core.get.call(null,map__9084__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9084__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var this$__$1 = this;
var G__9086 = this$__$1;
goog.events.listen(G__9086,goog.net.EventType.COMPLETE,((function (G__9086,this$__$1,map__9084,map__9084__$1,timeout,with_credentials){
return (function (p1__9082_SHARP_){
return handler.call(null,p1__9082_SHARP_.target);
});})(G__9086,this$__$1,map__9084,map__9084__$1,timeout,with_credentials))
);

G__9086.setTimeoutInterval(timeout);

G__9086.setWithCredentials(with_credentials);

G__9086.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__9086;
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
ajax.core.ready_state = (function ajax$core$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__9088){
var map__9089 = p__9088;
var map__9089__$1 = ((((!((map__9089 == null)))?((((map__9089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9089):map__9089);
var timeout = cljs.core.get.call(null,map__9089__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9089__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__9089__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9089,map__9089__$1,timeout,with_credentials,response_format){
return (function (p1__9087_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.core.ready_state.call(null,p1__9087_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__9089,map__9089__$1,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___9097 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___9097)){
var response_type_9098 = temp__4425__auto___9097;
this$__$1.responseType = cljs.core.name.call(null,response_type_9098);
} else {
}

var seq__9091_9099 = cljs.core.seq.call(null,headers);
var chunk__9092_9100 = null;
var count__9093_9101 = (0);
var i__9094_9102 = (0);
while(true){
if((i__9094_9102 < count__9093_9101)){
var vec__9095_9103 = cljs.core._nth.call(null,chunk__9092_9100,i__9094_9102);
var k_9104 = cljs.core.nth.call(null,vec__9095_9103,(0),null);
var v_9105 = cljs.core.nth.call(null,vec__9095_9103,(1),null);
this$__$1.setRequestHeader(k_9104,v_9105);

var G__9106 = seq__9091_9099;
var G__9107 = chunk__9092_9100;
var G__9108 = count__9093_9101;
var G__9109 = (i__9094_9102 + (1));
seq__9091_9099 = G__9106;
chunk__9092_9100 = G__9107;
count__9093_9101 = G__9108;
i__9094_9102 = G__9109;
continue;
} else {
var temp__4425__auto___9110 = cljs.core.seq.call(null,seq__9091_9099);
if(temp__4425__auto___9110){
var seq__9091_9111__$1 = temp__4425__auto___9110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9091_9111__$1)){
var c__5865__auto___9112 = cljs.core.chunk_first.call(null,seq__9091_9111__$1);
var G__9113 = cljs.core.chunk_rest.call(null,seq__9091_9111__$1);
var G__9114 = c__5865__auto___9112;
var G__9115 = cljs.core.count.call(null,c__5865__auto___9112);
var G__9116 = (0);
seq__9091_9099 = G__9113;
chunk__9092_9100 = G__9114;
count__9093_9101 = G__9115;
i__9094_9102 = G__9116;
continue;
} else {
var vec__9096_9117 = cljs.core.first.call(null,seq__9091_9111__$1);
var k_9118 = cljs.core.nth.call(null,vec__9096_9117,(0),null);
var v_9119 = cljs.core.nth.call(null,vec__9096_9117,(1),null);
this$__$1.setRequestHeader(k_9118,v_9119);

var G__9120 = cljs.core.next.call(null,seq__9091_9111__$1);
var G__9121 = null;
var G__9122 = (0);
var G__9123 = (0);
seq__9091_9099 = G__9120;
chunk__9092_9100 = G__9121;
count__9093_9101 = G__9122;
i__9094_9102 = G__9123;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5081__auto__ = body;
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__9124){
var map__9125 = p__9124;
var map__9125__$1 = ((((!((map__9125 == null)))?((((map__9125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9125):map__9125);
var id = cljs.core.get.call(null,map__9125__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__9125__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var priority = cljs.core.get.call(null,map__9125__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__9125__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,ajax.core._body.call(null,xhrio));
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(){
var args9127 = [];
var len__6120__auto___9130 = arguments.length;
var i__6121__auto___9131 = (0);
while(true){
if((i__6121__auto___9131 < len__6120__auto___9130)){
args9127.push((arguments[i__6121__auto___9131]));

var G__9132 = (i__6121__auto___9131 + (1));
i__6121__auto___9131 = G__9132;
continue;
} else {
}
break;
}

var G__9129 = args9127.length;
switch (G__9129) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9127.length)].join('')));

}
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.edn_response_format.call(null);
});

ajax.core.edn_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.transit_write = (function ajax$core$transit_write(){
var args9134 = [];
var len__6120__auto___9137 = arguments.length;
var i__6121__auto___9138 = (0);
while(true){
if((i__6121__auto___9138 < len__6120__auto___9137)){
args9134.push((arguments[i__6121__auto___9138]));

var G__9139 = (i__6121__auto___9138 + (1));
i__6121__auto___9138 = G__9139;
continue;
} else {
}
break;
}

var G__9136 = args9134.length;
switch (G__9136) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9134.length)].join('')));

}
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2 = (function (writer,params){
return cognitect.transit.write.call(null,writer,params);
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return (function (params){
return cognitect.transit.write.call(null,writer,params);
});
});

ajax.core.transit_write.cljs$lang$maxFixedArity = 2;
ajax.core.transit_request_format = (function ajax$core$transit_request_format(){
var args9141 = [];
var len__6120__auto___9147 = arguments.length;
var i__6121__auto___9148 = (0);
while(true){
if((i__6121__auto___9148 < len__6120__auto___9147)){
args9141.push((arguments[i__6121__auto___9148]));

var G__9149 = (i__6121__auto___9148 + (1));
i__6121__auto___9148 = G__9149;
continue;
} else {
}
break;
}

var G__9143 = args9141.length;
switch (G__9143) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9141.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__9144){
var map__9145 = p__9144;
var map__9145__$1 = ((((!((map__9145 == null)))?((((map__9145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9145):map__9145);
var opts = map__9145__$1;
var type = cljs.core.get.call(null,map__9145__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer = cljs.core.get.call(null,map__9145__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var writer__$1 = (function (){var or__5081__auto__ = writer;
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__5081__auto____$1 = type;
if(cljs.core.truth_(or__5081__auto____$1)){
return or__5081__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read = (function ajax$core$transit_read(){
var args9151 = [];
var len__6120__auto___9154 = arguments.length;
var i__6121__auto___9155 = (0);
while(true){
if((i__6121__auto___9155 < len__6120__auto___9154)){
args9151.push((arguments[i__6121__auto___9155]));

var G__9156 = (i__6121__auto___9155 + (1));
i__6121__auto___9155 = G__9156;
continue;
} else {
}
break;
}

var G__9153 = args9151.length;
switch (G__9153) {
case 3:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9151.length)].join('')));

}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3 = (function (reader,raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$lang$maxFixedArity = 3;
ajax.core.transit_response_format = (function ajax$core$transit_response_format(){
var args9158 = [];
var len__6120__auto___9164 = arguments.length;
var i__6121__auto___9165 = (0);
while(true){
if((i__6121__auto___9165 < len__6120__auto___9164)){
args9158.push((arguments[i__6121__auto___9165]));

var G__9166 = (i__6121__auto___9165 + (1));
i__6121__auto___9165 = G__9166;
continue;
} else {
}
break;
}

var G__9160 = args9158.length;
switch (G__9160) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9158.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__9161){
var map__9162 = p__9161;
var map__9162__$1 = ((((!((map__9162 == null)))?((((map__9162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9162):map__9162);
var opts = map__9162__$1;
var type = cljs.core.get.call(null,map__9162__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader = cljs.core.get.call(null,map__9162__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var raw = cljs.core.get.call(null,map__9162__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader__$1 = (function (){var or__5081__auto__ = reader;
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__5081__auto____$1 = type;
if(cljs.core.truth_(or__5081__auto____$1)){
return or__5081__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(){
var args9168 = [];
var len__6120__auto___9171 = arguments.length;
var i__6121__auto___9172 = (0);
while(true){
if((i__6121__auto___9172 < len__6120__auto___9171)){
args9168.push((arguments[i__6121__auto___9172]));

var G__9173 = (i__6121__auto___9172 + (1));
i__6121__auto___9172 = G__9173;
continue;
} else {
}
break;
}

var G__9170 = args9168.length;
switch (G__9170) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9168.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function ajax$core$json_read(){
var args9175 = [];
var len__6120__auto___9178 = arguments.length;
var i__6121__auto___9179 = (0);
while(true){
if((i__6121__auto___9179 < len__6120__auto___9178)){
args9175.push((arguments[i__6121__auto___9179]));

var G__9180 = (i__6121__auto___9179 + (1));
i__6121__auto___9179 = G__9180;
continue;
} else {
}
break;
}

var G__9177 = args9175.length;
switch (G__9177) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9175.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__5069__auto__ = prefix;
if(cljs.core.truth_(and__5069__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__5069__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__5069__auto__ = prefix;
if(cljs.core.truth_(and__5069__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__5069__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__5069__auto__ = prefix;
if(cljs.core.truth_(and__5069__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__5069__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__5069__auto__ = prefix;
if(cljs.core.truth_(and__5069__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__5069__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(){
var args9182 = [];
var len__6120__auto___9188 = arguments.length;
var i__6121__auto___9189 = (0);
while(true){
if((i__6121__auto___9189 < len__6120__auto___9188)){
args9182.push((arguments[i__6121__auto___9189]));

var G__9190 = (i__6121__auto___9189 + (1));
i__6121__auto___9189 = G__9190;
continue;
} else {
}
break;
}

var G__9184 = args9182.length;
switch (G__9184) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9182.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__9185){
var map__9186 = p__9185;
var map__9186__$1 = ((((!((map__9186 == null)))?((((map__9186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9186):map__9186);
var prefix = cljs.core.get.call(null,map__9186__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__9186__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__9186__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(){
var args9192 = [];
var len__6120__auto___9195 = arguments.length;
var i__6121__auto___9196 = (0);
while(true){
if((i__6121__auto___9196 < len__6120__auto___9195)){
args9192.push((arguments[i__6121__auto___9196]));

var G__9197 = (i__6121__auto___9196 + (1));
i__6121__auto___9196 = G__9197;
continue;
} else {
}
break;
}

var G__9194 = args9192.length;
switch (G__9194) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9192.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.accept_entry = (function ajax$core$accept_entry(){
var args9199 = [];
var len__6120__auto___9202 = arguments.length;
var i__6121__auto___9203 = (0);
while(true){
if((i__6121__auto___9203 < len__6120__auto___9202)){
args9199.push((arguments[i__6121__auto___9203]));

var G__9204 = (i__6121__auto___9203 + (1));
i__6121__auto___9203 = G__9204;
continue;
} else {
}
break;
}

var G__9201 = args9199.length;
switch (G__9201) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9199.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__5081__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__5081__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(){
var args9206 = [];
var len__6120__auto___9209 = arguments.length;
var i__6121__auto___9210 = (0);
while(true){
if((i__6121__auto___9210 < len__6120__auto___9209)){
args9206.push((arguments[i__6121__auto___9210]));

var G__9211 = (i__6121__auto___9210 + (1));
i__6121__auto___9210 = G__9211;
continue;
} else {
}
break;
}

var G__9208 = args9206.length;
switch (G__9208) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9206.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__9213){
var map__9216 = p__9213;
var map__9216__$1 = ((((!((map__9216 == null)))?((((map__9216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9216):map__9216);
var opts = map__9216__$1;
var response_format = cljs.core.get.call(null,map__9216__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__5081__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.call(null,opts,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(){
var args9218 = [];
var len__6120__auto___9221 = arguments.length;
var i__6121__auto___9222 = (0);
while(true){
if((i__6121__auto___9222 < len__6120__auto___9221)){
args9218.push((arguments[i__6121__auto___9222]));

var G__9223 = (i__6121__auto___9222 + (1));
i__6121__auto___9222 = G__9223;
continue;
} else {
}
break;
}

var G__9220 = args9218.length;
switch (G__9220) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9218.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (opts,xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__9225){
var map__9228 = p__9225;
var map__9228__$1 = ((((!((map__9228 == null)))?((((map__9228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9228):map__9228);
var opts = map__9228__$1;
var response_format = cljs.core.get.call(null,map__9228__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,opts),response_format));
} else {
return ajax.core.accept_entry.call(null,opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(){
var args9230 = [];
var len__6120__auto___9233 = arguments.length;
var i__6121__auto___9234 = (0);
while(true){
if((i__6121__auto___9234 < len__6120__auto___9233)){
args9230.push((arguments[i__6121__auto___9234]));

var G__9235 = (i__6121__auto___9234 + (1));
i__6121__auto___9234 = G__9235;
continue;
} else {
}
break;
}

var G__9232 = args9230.length;
switch (G__9232) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9230.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null);
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__9237){
var map__9240 = p__9237;
var map__9240__$1 = ((((!((map__9240 == null)))?((((map__9240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9240):map__9240);
var opts = map__9240__$1;
var response_format = cljs.core.get.call(null,map__9240__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__9242,xhrio){
var map__9245 = p__9242;
var map__9245__$1 = ((((!((map__9245 == null)))?((((map__9245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9245):map__9245);
var description = cljs.core.get.call(null,map__9245__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.core._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(){
var args__6127__auto__ = [];
var len__6120__auto___9251 = arguments.length;
var i__6121__auto___9252 = (0);
while(true){
if((i__6121__auto___9252 < len__6120__auto___9251)){
args__6127__auto__.push((arguments[i__6121__auto___9252]));

var G__9253 = (i__6121__auto___9252 + (1));
i__6121__auto___9252 = G__9253;
continue;
} else {
}
break;
}

var argseq__6128__auto__ = ((((3) < args__6127__auto__.length))?(new cljs.core.IndexedSeq(args__6127__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6128__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq9247){
var G__9248 = cljs.core.first.call(null,seq9247);
var seq9247__$1 = cljs.core.next.call(null,seq9247);
var G__9249 = cljs.core.first.call(null,seq9247__$1);
var seq9247__$2 = cljs.core.next.call(null,seq9247__$1);
var G__9250 = cljs.core.first.call(null,seq9247__$2);
var seq9247__$3 = cljs.core.next.call(null,seq9247__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__9248,G__9249,G__9250,seq9247__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__9254,xhrio){
var map__9260 = p__9254;
var map__9260__$1 = ((((!((map__9260 == null)))?((((map__9260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9260):map__9260);
var format = map__9260__$1;
var read = cljs.core.get.call(null,map__9260__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__9263 = status;
switch (G__9263) {
case (-1):
if(cljs.core.truth_(ajax.core._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e9264){if((e9264 instanceof Object)){
var e = e9264;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e9264;

}
}
}
}catch (e9262){if((e9262 instanceof Object)){
var e = e9262;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e9262;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__9266,p__9267){
var map__9274 = p__9266;
var map__9274__$1 = ((((!((map__9274 == null)))?((((map__9274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9274):map__9274);
var uri = cljs.core.get.call(null,map__9274__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__9274__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__9274__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__9274__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__9274__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var map__9275 = p__9267;
var map__9275__$1 = ((((!((map__9275 == null)))?((((map__9275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9275):map__9275);
var content_type = cljs.core.get.call(null,map__9275__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__5081__auto__ = headers;
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers__$1], null);
} else {
var map__9278 = ajax.core.get_request_format.call(null,format);
var map__9278__$1 = ((((!((map__9278 == null)))?((((map__9278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9278):map__9278);
var write = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type__$1 = cljs.core.get.call(null,map__9278__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?write.call(null,params):(cljs.core.truth_(ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",[cljs.core.str(content_type__$1),cljs.core.str("; charset=utf-8")].join('')], null):null);
var headers__$2 = cljs.core.merge.call(null,headers__$1,content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(){
var args9280 = [];
var len__6120__auto___9283 = arguments.length;
var i__6121__auto___9284 = (0);
while(true){
if((i__6121__auto___9284 < len__6120__auto___9283)){
args9280.push((arguments[i__6121__auto___9284]));

var G__9285 = (i__6121__auto___9284 + (1));
i__6121__auto___9284 = G__9285;
continue;
} else {
}
break;
}

var G__9282 = args9280.length;
switch (G__9282) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9280.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__9287){
var map__9290 = p__9287;
var map__9290__$1 = ((((!((map__9290 == null)))?((((map__9290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9290):map__9290);
var handler = cljs.core.get.call(null,map__9290__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__9292){
var map__9296 = p__9292;
var map__9296__$1 = ((((!((map__9296 == null)))?((((map__9296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9296):map__9296);
var opts = map__9296__$1;
var method = cljs.core.get.call(null,map__9296__$1,new cljs.core.Keyword(null,"method","method",55703592));
var api = cljs.core.get.call(null,map__9296__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var response_format = ajax.core.get_response_format.call(null,opts);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__9298 = ajax.core.process_inputs.call(null,opts,response_format);
var uri = cljs.core.nth.call(null,vec__9298,(0),null);
var body = cljs.core.nth.call(null,vec__9298,(1),null);
var headers = cljs.core.nth.call(null,vec__9298,(2),null);
var handler = ajax.core.base_handler.call(null,response_format,opts);
var api__$1 = (function (){var or__5081__auto__ = api;
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request.call(null,api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__9300 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__9300) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_2.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__9303 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__9303) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__9305_SHARP_){
return ajax.core.keyword_response_format_2.call(null,p1__9305_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(){
var args9306 = [];
var len__6120__auto___9319 = arguments.length;
var i__6121__auto___9320 = (0);
while(true){
if((i__6121__auto___9320 < len__6120__auto___9319)){
args9306.push((arguments[i__6121__auto___9320]));

var G__9321 = (i__6121__auto___9320 + (1));
i__6121__auto___9320 = G__9321;
continue;
} else {
}
break;
}

var G__9308 = args9306.length;
switch (G__9308) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9306.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__9309,p__9310){
var map__9311 = p__9309;
var map__9311__$1 = ((((!((map__9311 == null)))?((((map__9311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9311):map__9311);
var handler = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__9311__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__9312 = p__9310;
var ok = cljs.core.nth.call(null,vec__9312,(0),null);
var result = cljs.core.nth.call(null,vec__9312,(1),null);
var temp__4423__auto___9323 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___9323)){
var h_9324 = temp__4423__auto___9323;
h_9324.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__9314){
var map__9315 = p__9314;
var map__9315__$1 = ((((!((map__9315 == null)))?((((map__9315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9315):map__9315);
var handler = cljs.core.get.call(null,map__9315__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__9315__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__9315__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__9315,map__9315__$1,handler,error_handler,finally$){
return (function (p__9317){
var vec__9318 = p__9317;
var ok = cljs.core.nth.call(null,vec__9318,(0),null);
var result = cljs.core.nth.call(null,vec__9318,(1),null);
var temp__4423__auto___9325 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___9325)){
var h_9326 = temp__4423__auto___9325;
h_9326.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__9315,map__9315__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__9327){
var map__9330 = p__9327;
var map__9330__$1 = ((((!((map__9330 == null)))?((((map__9330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9330):map__9330);
var opts = map__9330__$1;
var method = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"params","params",710516235));

var needs_format = cljs.core.not.call(null,(function (){var or__5081__auto__ = ajax.core.submittable_QMARK_.call(null,params);
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return cljs.core._EQ_.call(null,method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__5081__auto__ = format;
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(){
var args__6127__auto__ = [];
var len__6120__auto___9334 = arguments.length;
var i__6121__auto___9335 = (0);
while(true){
if((i__6121__auto___9335 < len__6120__auto___9334)){
args__6127__auto__.push((arguments[i__6121__auto___9335]));

var G__9336 = (i__6121__auto___9335 + (1));
i__6121__auto___9335 = G__9336;
continue;
} else {
}
break;
}

var argseq__6128__auto__ = ((((1) < args__6127__auto__.length))?(new cljs.core.IndexedSeq(args__6127__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6128__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8192__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__8192__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8192__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq9332){
var G__9333 = cljs.core.first.call(null,seq9332);
var seq9332__$1 = cljs.core.next.call(null,seq9332);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__9333,seq9332__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(){
var args__6127__auto__ = [];
var len__6120__auto___9339 = arguments.length;
var i__6121__auto___9340 = (0);
while(true){
if((i__6121__auto___9340 < len__6120__auto___9339)){
args__6127__auto__.push((arguments[i__6121__auto___9340]));

var G__9341 = (i__6121__auto___9340 + (1));
i__6121__auto___9340 = G__9341;
continue;
} else {
}
break;
}

var argseq__6128__auto__ = ((((1) < args__6127__auto__.length))?(new cljs.core.IndexedSeq(args__6127__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6128__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8192__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__8192__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8192__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq9337){
var G__9338 = cljs.core.first.call(null,seq9337);
var seq9337__$1 = cljs.core.next.call(null,seq9337);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__9338,seq9337__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(){
var args__6127__auto__ = [];
var len__6120__auto___9344 = arguments.length;
var i__6121__auto___9345 = (0);
while(true){
if((i__6121__auto___9345 < len__6120__auto___9344)){
args__6127__auto__.push((arguments[i__6121__auto___9345]));

var G__9346 = (i__6121__auto___9345 + (1));
i__6121__auto___9345 = G__9346;
continue;
} else {
}
break;
}

var argseq__6128__auto__ = ((((1) < args__6127__auto__.length))?(new cljs.core.IndexedSeq(args__6127__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6128__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8192__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__8192__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8192__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq9342){
var G__9343 = cljs.core.first.call(null,seq9342);
var seq9342__$1 = cljs.core.next.call(null,seq9342);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__9343,seq9342__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(){
var args__6127__auto__ = [];
var len__6120__auto___9349 = arguments.length;
var i__6121__auto___9350 = (0);
while(true){
if((i__6121__auto___9350 < len__6120__auto___9349)){
args__6127__auto__.push((arguments[i__6121__auto___9350]));

var G__9351 = (i__6121__auto___9350 + (1));
i__6121__auto___9350 = G__9351;
continue;
} else {
}
break;
}

var argseq__6128__auto__ = ((((1) < args__6127__auto__.length))?(new cljs.core.IndexedSeq(args__6127__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6128__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8192__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__8192__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8192__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq9347){
var G__9348 = cljs.core.first.call(null,seq9347);
var seq9347__$1 = cljs.core.next.call(null,seq9347);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__9348,seq9347__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(){
var args__6127__auto__ = [];
var len__6120__auto___9354 = arguments.length;
var i__6121__auto___9355 = (0);
while(true){
if((i__6121__auto___9355 < len__6120__auto___9354)){
args__6127__auto__.push((arguments[i__6121__auto___9355]));

var G__9356 = (i__6121__auto___9355 + (1));
i__6121__auto___9355 = G__9356;
continue;
} else {
}
break;
}

var argseq__6128__auto__ = ((((1) < args__6127__auto__.length))?(new cljs.core.IndexedSeq(args__6127__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6128__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8192__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__8192__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8192__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq9352){
var G__9353 = cljs.core.first.call(null,seq9352);
var seq9352__$1 = cljs.core.next.call(null,seq9352);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__9353,seq9352__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(){
var args__6127__auto__ = [];
var len__6120__auto___9359 = arguments.length;
var i__6121__auto___9360 = (0);
while(true){
if((i__6121__auto___9360 < len__6120__auto___9359)){
args__6127__auto__.push((arguments[i__6121__auto___9360]));

var G__9361 = (i__6121__auto___9360 + (1));
i__6121__auto___9360 = G__9361;
continue;
} else {
}
break;
}

var argseq__6128__auto__ = ((((1) < args__6127__auto__.length))?(new cljs.core.IndexedSeq(args__6127__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6128__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8192__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__8192__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8192__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq9357){
var G__9358 = cljs.core.first.call(null,seq9357);
var seq9357__$1 = cljs.core.next.call(null,seq9357);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__9358,seq9357__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(){
var args__6127__auto__ = [];
var len__6120__auto___9364 = arguments.length;
var i__6121__auto___9365 = (0);
while(true){
if((i__6121__auto___9365 < len__6120__auto___9364)){
args__6127__auto__.push((arguments[i__6121__auto___9365]));

var G__9366 = (i__6121__auto___9365 + (1));
i__6121__auto___9365 = G__9366;
continue;
} else {
}
break;
}

var argseq__6128__auto__ = ((((1) < args__6127__auto__.length))?(new cljs.core.IndexedSeq(args__6127__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6128__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8192__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__8192__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8192__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq9362){
var G__9363 = cljs.core.first.call(null,seq9362);
var seq9362__$1 = cljs.core.next.call(null,seq9362);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__9363,seq9362__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(){
var args__6127__auto__ = [];
var len__6120__auto___9369 = arguments.length;
var i__6121__auto___9370 = (0);
while(true){
if((i__6121__auto___9370 < len__6120__auto___9369)){
args__6127__auto__.push((arguments[i__6121__auto___9370]));

var G__9371 = (i__6121__auto___9370 + (1));
i__6121__auto___9370 = G__9371;
continue;
} else {
}
break;
}

var argseq__6128__auto__ = ((((1) < args__6127__auto__.length))?(new cljs.core.IndexedSeq(args__6127__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6128__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__8192__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__8192__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__8192__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq9367){
var G__9368 = cljs.core.first.call(null,seq9367);
var seq9367__$1 = cljs.core.next.call(null,seq9367);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__9368,seq9367__$1);
});

//# sourceMappingURL=core.js.map