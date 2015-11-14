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
var seq__8056_8070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8057_8071 = null;
var count__8058_8072 = (0);
var i__8059_8073 = (0);
while(true){
if((i__8059_8073 < count__8058_8072)){
var f_8074 = cljs.core._nth.call(null,chunk__8057_8071,i__8059_8073);
cljs.core.println.call(null,"  ",f_8074);

var G__8075 = seq__8056_8070;
var G__8076 = chunk__8057_8071;
var G__8077 = count__8058_8072;
var G__8078 = (i__8059_8073 + (1));
seq__8056_8070 = G__8075;
chunk__8057_8071 = G__8076;
count__8058_8072 = G__8077;
i__8059_8073 = G__8078;
continue;
} else {
var temp__4425__auto___8079 = cljs.core.seq.call(null,seq__8056_8070);
if(temp__4425__auto___8079){
var seq__8056_8080__$1 = temp__4425__auto___8079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8056_8080__$1)){
var c__5865__auto___8081 = cljs.core.chunk_first.call(null,seq__8056_8080__$1);
var G__8082 = cljs.core.chunk_rest.call(null,seq__8056_8080__$1);
var G__8083 = c__5865__auto___8081;
var G__8084 = cljs.core.count.call(null,c__5865__auto___8081);
var G__8085 = (0);
seq__8056_8070 = G__8082;
chunk__8057_8071 = G__8083;
count__8058_8072 = G__8084;
i__8059_8073 = G__8085;
continue;
} else {
var f_8086 = cljs.core.first.call(null,seq__8056_8080__$1);
cljs.core.println.call(null,"  ",f_8086);

var G__8087 = cljs.core.next.call(null,seq__8056_8080__$1);
var G__8088 = null;
var G__8089 = (0);
var G__8090 = (0);
seq__8056_8070 = G__8087;
chunk__8057_8071 = G__8088;
count__8058_8072 = G__8089;
i__8059_8073 = G__8090;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8091 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5081__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5081__auto__)){
return or__5081__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8091);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8091)))?cljs.core.second.call(null,arglists_8091):arglists_8091));
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
var seq__8060 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8061 = null;
var count__8062 = (0);
var i__8063 = (0);
while(true){
if((i__8063 < count__8062)){
var vec__8064 = cljs.core._nth.call(null,chunk__8061,i__8063);
var name = cljs.core.nth.call(null,vec__8064,(0),null);
var map__8065 = cljs.core.nth.call(null,vec__8064,(1),null);
var map__8065__$1 = ((((!((map__8065 == null)))?((((map__8065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8065):map__8065);
var doc = cljs.core.get.call(null,map__8065__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8065__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8092 = seq__8060;
var G__8093 = chunk__8061;
var G__8094 = count__8062;
var G__8095 = (i__8063 + (1));
seq__8060 = G__8092;
chunk__8061 = G__8093;
count__8062 = G__8094;
i__8063 = G__8095;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8060);
if(temp__4425__auto__){
var seq__8060__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8060__$1)){
var c__5865__auto__ = cljs.core.chunk_first.call(null,seq__8060__$1);
var G__8096 = cljs.core.chunk_rest.call(null,seq__8060__$1);
var G__8097 = c__5865__auto__;
var G__8098 = cljs.core.count.call(null,c__5865__auto__);
var G__8099 = (0);
seq__8060 = G__8096;
chunk__8061 = G__8097;
count__8062 = G__8098;
i__8063 = G__8099;
continue;
} else {
var vec__8067 = cljs.core.first.call(null,seq__8060__$1);
var name = cljs.core.nth.call(null,vec__8067,(0),null);
var map__8068 = cljs.core.nth.call(null,vec__8067,(1),null);
var map__8068__$1 = ((((!((map__8068 == null)))?((((map__8068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8068):map__8068);
var doc = cljs.core.get.call(null,map__8068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8068__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8100 = cljs.core.next.call(null,seq__8060__$1);
var G__8101 = null;
var G__8102 = (0);
var G__8103 = (0);
seq__8060 = G__8100;
chunk__8061 = G__8101;
count__8062 = G__8102;
i__8063 = G__8103;
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