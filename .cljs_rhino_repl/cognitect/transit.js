// Compiled by ClojureScript 1.7.48 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__9495_9499 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__9496_9500 = null;
var count__9497_9501 = (0);
var i__9498_9502 = (0);
while(true){
if((i__9498_9502 < count__9497_9501)){
var k_9503 = cljs.core._nth.call(null,chunk__9496_9500,i__9498_9502);
var v_9504 = (b[k_9503]);
(a[k_9503] = v_9504);

var G__9505 = seq__9495_9499;
var G__9506 = chunk__9496_9500;
var G__9507 = count__9497_9501;
var G__9508 = (i__9498_9502 + (1));
seq__9495_9499 = G__9505;
chunk__9496_9500 = G__9506;
count__9497_9501 = G__9507;
i__9498_9502 = G__9508;
continue;
} else {
var temp__4425__auto___9509 = cljs.core.seq.call(null,seq__9495_9499);
if(temp__4425__auto___9509){
var seq__9495_9510__$1 = temp__4425__auto___9509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9495_9510__$1)){
var c__5865__auto___9511 = cljs.core.chunk_first.call(null,seq__9495_9510__$1);
var G__9512 = cljs.core.chunk_rest.call(null,seq__9495_9510__$1);
var G__9513 = c__5865__auto___9511;
var G__9514 = cljs.core.count.call(null,c__5865__auto___9511);
var G__9515 = (0);
seq__9495_9499 = G__9512;
chunk__9496_9500 = G__9513;
count__9497_9501 = G__9514;
i__9498_9502 = G__9515;
continue;
} else {
var k_9516 = cljs.core.first.call(null,seq__9495_9510__$1);
var v_9517 = (b[k_9516]);
(a[k_9516] = v_9517);

var G__9518 = cljs.core.next.call(null,seq__9495_9510__$1);
var G__9519 = null;
var G__9520 = (0);
var G__9521 = (0);
seq__9495_9499 = G__9518;
chunk__9496_9500 = G__9519;
count__9497_9501 = G__9520;
i__9498_9502 = G__9521;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var args9522 = [];
var len__6120__auto___9525 = arguments.length;
var i__6121__auto___9526 = (0);
while(true){
if((i__6121__auto___9526 < len__6120__auto___9525)){
args9522.push((arguments[i__6121__auto___9526]));

var G__9527 = (i__6121__auto___9526 + (1));
i__6121__auto___9526 = G__9527;
continue;
} else {
}
break;
}

var G__9524 = args9522.length;
switch (G__9524) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9522.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__9529 = (i + (2));
var G__9530 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__9529;
ret = G__9530;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9531_9535 = cljs.core.seq.call(null,v);
var chunk__9532_9536 = null;
var count__9533_9537 = (0);
var i__9534_9538 = (0);
while(true){
if((i__9534_9538 < count__9533_9537)){
var x_9539 = cljs.core._nth.call(null,chunk__9532_9536,i__9534_9538);
ret.push(x_9539);

var G__9540 = seq__9531_9535;
var G__9541 = chunk__9532_9536;
var G__9542 = count__9533_9537;
var G__9543 = (i__9534_9538 + (1));
seq__9531_9535 = G__9540;
chunk__9532_9536 = G__9541;
count__9533_9537 = G__9542;
i__9534_9538 = G__9543;
continue;
} else {
var temp__4425__auto___9544 = cljs.core.seq.call(null,seq__9531_9535);
if(temp__4425__auto___9544){
var seq__9531_9545__$1 = temp__4425__auto___9544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9531_9545__$1)){
var c__5865__auto___9546 = cljs.core.chunk_first.call(null,seq__9531_9545__$1);
var G__9547 = cljs.core.chunk_rest.call(null,seq__9531_9545__$1);
var G__9548 = c__5865__auto___9546;
var G__9549 = cljs.core.count.call(null,c__5865__auto___9546);
var G__9550 = (0);
seq__9531_9535 = G__9547;
chunk__9532_9536 = G__9548;
count__9533_9537 = G__9549;
i__9534_9538 = G__9550;
continue;
} else {
var x_9551 = cljs.core.first.call(null,seq__9531_9545__$1);
ret.push(x_9551);

var G__9552 = cljs.core.next.call(null,seq__9531_9545__$1);
var G__9553 = null;
var G__9554 = (0);
var G__9555 = (0);
seq__9531_9535 = G__9552;
chunk__9532_9536 = G__9553;
count__9533_9537 = G__9554;
i__9534_9538 = G__9555;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9556_9560 = cljs.core.seq.call(null,v);
var chunk__9557_9561 = null;
var count__9558_9562 = (0);
var i__9559_9563 = (0);
while(true){
if((i__9559_9563 < count__9558_9562)){
var x_9564 = cljs.core._nth.call(null,chunk__9557_9561,i__9559_9563);
ret.push(x_9564);

var G__9565 = seq__9556_9560;
var G__9566 = chunk__9557_9561;
var G__9567 = count__9558_9562;
var G__9568 = (i__9559_9563 + (1));
seq__9556_9560 = G__9565;
chunk__9557_9561 = G__9566;
count__9558_9562 = G__9567;
i__9559_9563 = G__9568;
continue;
} else {
var temp__4425__auto___9569 = cljs.core.seq.call(null,seq__9556_9560);
if(temp__4425__auto___9569){
var seq__9556_9570__$1 = temp__4425__auto___9569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9556_9570__$1)){
var c__5865__auto___9571 = cljs.core.chunk_first.call(null,seq__9556_9570__$1);
var G__9572 = cljs.core.chunk_rest.call(null,seq__9556_9570__$1);
var G__9573 = c__5865__auto___9571;
var G__9574 = cljs.core.count.call(null,c__5865__auto___9571);
var G__9575 = (0);
seq__9556_9560 = G__9572;
chunk__9557_9561 = G__9573;
count__9558_9562 = G__9574;
i__9559_9563 = G__9575;
continue;
} else {
var x_9576 = cljs.core.first.call(null,seq__9556_9570__$1);
ret.push(x_9576);

var G__9577 = cljs.core.next.call(null,seq__9556_9570__$1);
var G__9578 = null;
var G__9579 = (0);
var G__9580 = (0);
seq__9556_9560 = G__9577;
chunk__9557_9561 = G__9578;
count__9558_9562 = G__9579;
i__9559_9563 = G__9580;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9581_9585 = cljs.core.seq.call(null,v);
var chunk__9582_9586 = null;
var count__9583_9587 = (0);
var i__9584_9588 = (0);
while(true){
if((i__9584_9588 < count__9583_9587)){
var x_9589 = cljs.core._nth.call(null,chunk__9582_9586,i__9584_9588);
ret.push(x_9589);

var G__9590 = seq__9581_9585;
var G__9591 = chunk__9582_9586;
var G__9592 = count__9583_9587;
var G__9593 = (i__9584_9588 + (1));
seq__9581_9585 = G__9590;
chunk__9582_9586 = G__9591;
count__9583_9587 = G__9592;
i__9584_9588 = G__9593;
continue;
} else {
var temp__4425__auto___9594 = cljs.core.seq.call(null,seq__9581_9585);
if(temp__4425__auto___9594){
var seq__9581_9595__$1 = temp__4425__auto___9594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9581_9595__$1)){
var c__5865__auto___9596 = cljs.core.chunk_first.call(null,seq__9581_9595__$1);
var G__9597 = cljs.core.chunk_rest.call(null,seq__9581_9595__$1);
var G__9598 = c__5865__auto___9596;
var G__9599 = cljs.core.count.call(null,c__5865__auto___9596);
var G__9600 = (0);
seq__9581_9585 = G__9597;
chunk__9582_9586 = G__9598;
count__9583_9587 = G__9599;
i__9584_9588 = G__9600;
continue;
} else {
var x_9601 = cljs.core.first.call(null,seq__9581_9595__$1);
ret.push(x_9601);

var G__9602 = cljs.core.next.call(null,seq__9581_9595__$1);
var G__9603 = null;
var G__9604 = (0);
var G__9605 = (0);
seq__9581_9585 = G__9602;
chunk__9582_9586 = G__9603;
count__9583_9587 = G__9604;
i__9584_9588 = G__9605;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var args9606 = [];
var len__6120__auto___9617 = arguments.length;
var i__6121__auto___9618 = (0);
while(true){
if((i__6121__auto___9618 < len__6120__auto___9617)){
args9606.push((arguments[i__6121__auto___9618]));

var G__9619 = (i__6121__auto___9618 + (1));
i__6121__auto___9618 = G__9619;
continue;
} else {
}
break;
}

var G__9608 = args9606.length;
switch (G__9608) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9606.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__9609 = obj;
G__9609.push(kfn.call(null,k),vfn.call(null,v));

return G__9609;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x9610 = cljs.core.clone.call(null,handlers);
x9610.forEach = ((function (x9610,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__9611 = cljs.core.seq.call(null,coll);
var chunk__9612 = null;
var count__9613 = (0);
var i__9614 = (0);
while(true){
if((i__9614 < count__9613)){
var vec__9615 = cljs.core._nth.call(null,chunk__9612,i__9614);
var k = cljs.core.nth.call(null,vec__9615,(0),null);
var v = cljs.core.nth.call(null,vec__9615,(1),null);
f.call(null,v,k);

var G__9621 = seq__9611;
var G__9622 = chunk__9612;
var G__9623 = count__9613;
var G__9624 = (i__9614 + (1));
seq__9611 = G__9621;
chunk__9612 = G__9622;
count__9613 = G__9623;
i__9614 = G__9624;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9611);
if(temp__4425__auto__){
var seq__9611__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9611__$1)){
var c__5865__auto__ = cljs.core.chunk_first.call(null,seq__9611__$1);
var G__9625 = cljs.core.chunk_rest.call(null,seq__9611__$1);
var G__9626 = c__5865__auto__;
var G__9627 = cljs.core.count.call(null,c__5865__auto__);
var G__9628 = (0);
seq__9611 = G__9625;
chunk__9612 = G__9626;
count__9613 = G__9627;
i__9614 = G__9628;
continue;
} else {
var vec__9616 = cljs.core.first.call(null,seq__9611__$1);
var k = cljs.core.nth.call(null,vec__9616,(0),null);
var v = cljs.core.nth.call(null,vec__9616,(1),null);
f.call(null,v,k);

var G__9629 = cljs.core.next.call(null,seq__9611__$1);
var G__9630 = null;
var G__9631 = (0);
var G__9632 = (0);
seq__9611 = G__9629;
chunk__9612 = G__9630;
count__9613 = G__9631;
i__9614 = G__9632;
continue;
}
} else {
return null;
}
}
break;
}
});})(x9610,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x9610;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var args9633 = [];
var len__6120__auto___9639 = arguments.length;
var i__6121__auto___9640 = (0);
while(true){
if((i__6121__auto___9640 < len__6120__auto___9639)){
args9633.push((arguments[i__6121__auto___9640]));

var G__9641 = (i__6121__auto___9640 + (1));
i__6121__auto___9640 = G__9641;
continue;
} else {
}
break;
}

var G__9635 = args9633.length;
switch (G__9635) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9633.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t9636 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t9636 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta9637){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta9637 = meta9637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t9636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9638,meta9637__$1){
var self__ = this;
var _9638__$1 = this;
return (new cognitect.transit.t9636(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta9637__$1));
});

cognitect.transit.t9636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9638){
var self__ = this;
var _9638__$1 = this;
return self__.meta9637;
});

cognitect.transit.t9636.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t9636.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t9636.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t9636.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t9636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta9637","meta9637",995524463,null)], null);
});

cognitect.transit.t9636.cljs$lang$type = true;

cognitect.transit.t9636.cljs$lang$ctorStr = "cognitect.transit/t9636";

cognitect.transit.t9636.cljs$lang$ctorPrWriter = (function (this__5660__auto__,writer__5661__auto__,opt__5662__auto__){
return cljs.core._write.call(null,writer__5661__auto__,"cognitect.transit/t9636");
});

cognitect.transit.__GT_t9636 = (function cognitect$transit$__GT_t9636(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9637){
return (new cognitect.transit.t9636(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9637));
});

}

return (new cognitect.transit.t9636(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map