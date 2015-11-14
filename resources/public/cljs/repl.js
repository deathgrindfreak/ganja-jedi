// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26236_26250 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26237_26251 = null;
var count__26238_26252 = (0);
var i__26239_26253 = (0);
while(true){
if((i__26239_26253 < count__26238_26252)){
var f_26254 = cljs.core._nth.call(null,chunk__26237_26251,i__26239_26253);
cljs.core.println.call(null,"  ",f_26254);

var G__26255 = seq__26236_26250;
var G__26256 = chunk__26237_26251;
var G__26257 = count__26238_26252;
var G__26258 = (i__26239_26253 + (1));
seq__26236_26250 = G__26255;
chunk__26237_26251 = G__26256;
count__26238_26252 = G__26257;
i__26239_26253 = G__26258;
continue;
} else {
var temp__4425__auto___26259 = cljs.core.seq.call(null,seq__26236_26250);
if(temp__4425__auto___26259){
var seq__26236_26260__$1 = temp__4425__auto___26259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26236_26260__$1)){
var c__17109__auto___26261 = cljs.core.chunk_first.call(null,seq__26236_26260__$1);
var G__26262 = cljs.core.chunk_rest.call(null,seq__26236_26260__$1);
var G__26263 = c__17109__auto___26261;
var G__26264 = cljs.core.count.call(null,c__17109__auto___26261);
var G__26265 = (0);
seq__26236_26250 = G__26262;
chunk__26237_26251 = G__26263;
count__26238_26252 = G__26264;
i__26239_26253 = G__26265;
continue;
} else {
var f_26266 = cljs.core.first.call(null,seq__26236_26260__$1);
cljs.core.println.call(null,"  ",f_26266);

var G__26267 = cljs.core.next.call(null,seq__26236_26260__$1);
var G__26268 = null;
var G__26269 = (0);
var G__26270 = (0);
seq__26236_26250 = G__26267;
chunk__26237_26251 = G__26268;
count__26238_26252 = G__26269;
i__26239_26253 = G__26270;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26271 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16325__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26271);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26271)))?cljs.core.second.call(null,arglists_26271):arglists_26271));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26240 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26241 = null;
var count__26242 = (0);
var i__26243 = (0);
while(true){
if((i__26243 < count__26242)){
var vec__26244 = cljs.core._nth.call(null,chunk__26241,i__26243);
var name = cljs.core.nth.call(null,vec__26244,(0),null);
var map__26245 = cljs.core.nth.call(null,vec__26244,(1),null);
var map__26245__$1 = ((((!((map__26245 == null)))?((((map__26245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26245):map__26245);
var doc = cljs.core.get.call(null,map__26245__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26245__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26272 = seq__26240;
var G__26273 = chunk__26241;
var G__26274 = count__26242;
var G__26275 = (i__26243 + (1));
seq__26240 = G__26272;
chunk__26241 = G__26273;
count__26242 = G__26274;
i__26243 = G__26275;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26240);
if(temp__4425__auto__){
var seq__26240__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26240__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__26240__$1);
var G__26276 = cljs.core.chunk_rest.call(null,seq__26240__$1);
var G__26277 = c__17109__auto__;
var G__26278 = cljs.core.count.call(null,c__17109__auto__);
var G__26279 = (0);
seq__26240 = G__26276;
chunk__26241 = G__26277;
count__26242 = G__26278;
i__26243 = G__26279;
continue;
} else {
var vec__26247 = cljs.core.first.call(null,seq__26240__$1);
var name = cljs.core.nth.call(null,vec__26247,(0),null);
var map__26248 = cljs.core.nth.call(null,vec__26247,(1),null);
var map__26248__$1 = ((((!((map__26248 == null)))?((((map__26248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26248):map__26248);
var doc = cljs.core.get.call(null,map__26248__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26248__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26280 = cljs.core.next.call(null,seq__26240__$1);
var G__26281 = null;
var G__26282 = (0);
var G__26283 = (0);
seq__26240 = G__26280;
chunk__26241 = G__26281;
count__26242 = G__26282;
i__26243 = G__26283;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map