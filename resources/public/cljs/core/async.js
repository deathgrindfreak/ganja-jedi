// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27362 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27362 = (function (fn_handler,f,meta27363){
this.fn_handler = fn_handler;
this.f = f;
this.meta27363 = meta27363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27364,meta27363__$1){
var self__ = this;
var _27364__$1 = this;
return (new cljs.core.async.t27362(self__.fn_handler,self__.f,meta27363__$1));
});

cljs.core.async.t27362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27364){
var self__ = this;
var _27364__$1 = this;
return self__.meta27363;
});

cljs.core.async.t27362.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27363","meta27363",-1236753611,null)], null);
});

cljs.core.async.t27362.cljs$lang$type = true;

cljs.core.async.t27362.cljs$lang$ctorStr = "cljs.core.async/t27362";

cljs.core.async.t27362.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t27362");
});

cljs.core.async.__GT_t27362 = (function cljs$core$async$fn_handler_$___GT_t27362(fn_handler__$1,f__$1,meta27363){
return (new cljs.core.async.t27362(fn_handler__$1,f__$1,meta27363));
});

}

return (new cljs.core.async.t27362(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args27367 = [];
var len__17364__auto___27370 = arguments.length;
var i__17365__auto___27371 = (0);
while(true){
if((i__17365__auto___27371 < len__17364__auto___27370)){
args27367.push((arguments[i__17365__auto___27371]));

var G__27372 = (i__17365__auto___27371 + (1));
i__17365__auto___27371 = G__27372;
continue;
} else {
}
break;
}

var G__27369 = args27367.length;
switch (G__27369) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27367.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args27374 = [];
var len__17364__auto___27377 = arguments.length;
var i__17365__auto___27378 = (0);
while(true){
if((i__17365__auto___27378 < len__17364__auto___27377)){
args27374.push((arguments[i__17365__auto___27378]));

var G__27379 = (i__17365__auto___27378 + (1));
i__17365__auto___27378 = G__27379;
continue;
} else {
}
break;
}

var G__27376 = args27374.length;
switch (G__27376) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27374.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27381 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27381);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27381,ret){
return (function (){
return fn1.call(null,val_27381);
});})(val_27381,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args27382 = [];
var len__17364__auto___27385 = arguments.length;
var i__17365__auto___27386 = (0);
while(true){
if((i__17365__auto___27386 < len__17364__auto___27385)){
args27382.push((arguments[i__17365__auto___27386]));

var G__27387 = (i__17365__auto___27386 + (1));
i__17365__auto___27386 = G__27387;
continue;
} else {
}
break;
}

var G__27384 = args27382.length;
switch (G__27384) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27382.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17209__auto___27389 = n;
var x_27390 = (0);
while(true){
if((x_27390 < n__17209__auto___27389)){
(a[x_27390] = (0));

var G__27391 = (x_27390 + (1));
x_27390 = G__27391;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27392 = (i + (1));
i = G__27392;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27396 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27396 = (function (alt_flag,flag,meta27397){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27397 = meta27397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27398,meta27397__$1){
var self__ = this;
var _27398__$1 = this;
return (new cljs.core.async.t27396(self__.alt_flag,self__.flag,meta27397__$1));
});})(flag))
;

cljs.core.async.t27396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27398){
var self__ = this;
var _27398__$1 = this;
return self__.meta27397;
});})(flag))
;

cljs.core.async.t27396.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27396.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27397","meta27397",-1828265181,null)], null);
});})(flag))
;

cljs.core.async.t27396.cljs$lang$type = true;

cljs.core.async.t27396.cljs$lang$ctorStr = "cljs.core.async/t27396";

cljs.core.async.t27396.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t27396");
});})(flag))
;

cljs.core.async.__GT_t27396 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27396(alt_flag__$1,flag__$1,meta27397){
return (new cljs.core.async.t27396(alt_flag__$1,flag__$1,meta27397));
});})(flag))
;

}

return (new cljs.core.async.t27396(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27402 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27402 = (function (alt_handler,flag,cb,meta27403){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27403 = meta27403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27404,meta27403__$1){
var self__ = this;
var _27404__$1 = this;
return (new cljs.core.async.t27402(self__.alt_handler,self__.flag,self__.cb,meta27403__$1));
});

cljs.core.async.t27402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27404){
var self__ = this;
var _27404__$1 = this;
return self__.meta27403;
});

cljs.core.async.t27402.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27402.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27402.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27403","meta27403",1838808208,null)], null);
});

cljs.core.async.t27402.cljs$lang$type = true;

cljs.core.async.t27402.cljs$lang$ctorStr = "cljs.core.async/t27402";

cljs.core.async.t27402.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t27402");
});

cljs.core.async.__GT_t27402 = (function cljs$core$async$alt_handler_$___GT_t27402(alt_handler__$1,flag__$1,cb__$1,meta27403){
return (new cljs.core.async.t27402(alt_handler__$1,flag__$1,cb__$1,meta27403));
});

}

return (new cljs.core.async.t27402(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27405_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27405_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27406_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27406_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16325__auto__ = wport;
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27407 = (i + (1));
i = G__27407;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16325__auto__ = ret;
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16313__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16313__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16313__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17371__auto__ = [];
var len__17364__auto___27413 = arguments.length;
var i__17365__auto___27414 = (0);
while(true){
if((i__17365__auto___27414 < len__17364__auto___27413)){
args__17371__auto__.push((arguments[i__17365__auto___27414]));

var G__27415 = (i__17365__auto___27414 + (1));
i__17365__auto___27414 = G__27415;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((1) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27410){
var map__27411 = p__27410;
var map__27411__$1 = ((((!((map__27411 == null)))?((((map__27411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27411):map__27411);
var opts = map__27411__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27408){
var G__27409 = cljs.core.first.call(null,seq27408);
var seq27408__$1 = cljs.core.next.call(null,seq27408);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27409,seq27408__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args27416 = [];
var len__17364__auto___27466 = arguments.length;
var i__17365__auto___27467 = (0);
while(true){
if((i__17365__auto___27467 < len__17364__auto___27466)){
args27416.push((arguments[i__17365__auto___27467]));

var G__27468 = (i__17365__auto___27467 + (1));
i__17365__auto___27467 = G__27468;
continue;
} else {
}
break;
}

var G__27418 = args27416.length;
switch (G__27418) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27416.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19508__auto___27470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___27470){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___27470){
return (function (state_27442){
var state_val_27443 = (state_27442[(1)]);
if((state_val_27443 === (7))){
var inst_27438 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27444_27471 = state_27442__$1;
(statearr_27444_27471[(2)] = inst_27438);

(statearr_27444_27471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (1))){
var state_27442__$1 = state_27442;
var statearr_27445_27472 = state_27442__$1;
(statearr_27445_27472[(2)] = null);

(statearr_27445_27472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (4))){
var inst_27421 = (state_27442[(7)]);
var inst_27421__$1 = (state_27442[(2)]);
var inst_27422 = (inst_27421__$1 == null);
var state_27442__$1 = (function (){var statearr_27446 = state_27442;
(statearr_27446[(7)] = inst_27421__$1);

return statearr_27446;
})();
if(cljs.core.truth_(inst_27422)){
var statearr_27447_27473 = state_27442__$1;
(statearr_27447_27473[(1)] = (5));

} else {
var statearr_27448_27474 = state_27442__$1;
(statearr_27448_27474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (13))){
var state_27442__$1 = state_27442;
var statearr_27449_27475 = state_27442__$1;
(statearr_27449_27475[(2)] = null);

(statearr_27449_27475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (6))){
var inst_27421 = (state_27442[(7)]);
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27442__$1,(11),to,inst_27421);
} else {
if((state_val_27443 === (3))){
var inst_27440 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27442__$1,inst_27440);
} else {
if((state_val_27443 === (12))){
var state_27442__$1 = state_27442;
var statearr_27450_27476 = state_27442__$1;
(statearr_27450_27476[(2)] = null);

(statearr_27450_27476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (2))){
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27442__$1,(4),from);
} else {
if((state_val_27443 === (11))){
var inst_27431 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
if(cljs.core.truth_(inst_27431)){
var statearr_27451_27477 = state_27442__$1;
(statearr_27451_27477[(1)] = (12));

} else {
var statearr_27452_27478 = state_27442__$1;
(statearr_27452_27478[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (9))){
var state_27442__$1 = state_27442;
var statearr_27453_27479 = state_27442__$1;
(statearr_27453_27479[(2)] = null);

(statearr_27453_27479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (5))){
var state_27442__$1 = state_27442;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27454_27480 = state_27442__$1;
(statearr_27454_27480[(1)] = (8));

} else {
var statearr_27455_27481 = state_27442__$1;
(statearr_27455_27481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (14))){
var inst_27436 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27456_27482 = state_27442__$1;
(statearr_27456_27482[(2)] = inst_27436);

(statearr_27456_27482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (10))){
var inst_27428 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27457_27483 = state_27442__$1;
(statearr_27457_27483[(2)] = inst_27428);

(statearr_27457_27483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (8))){
var inst_27425 = cljs.core.async.close_BANG_.call(null,to);
var state_27442__$1 = state_27442;
var statearr_27458_27484 = state_27442__$1;
(statearr_27458_27484[(2)] = inst_27425);

(statearr_27458_27484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___27470))
;
return ((function (switch__19443__auto__,c__19508__auto___27470){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_27462 = [null,null,null,null,null,null,null,null];
(statearr_27462[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_27462[(1)] = (1));

return statearr_27462;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_27442){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_27442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e27463){if((e27463 instanceof Object)){
var ex__19447__auto__ = e27463;
var statearr_27464_27485 = state_27442;
(statearr_27464_27485[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27486 = state_27442;
state_27442 = G__27486;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_27442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_27442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___27470))
})();
var state__19510__auto__ = (function (){var statearr_27465 = f__19509__auto__.call(null);
(statearr_27465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___27470);

return statearr_27465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___27470))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27670){
var vec__27671 = p__27670;
var v = cljs.core.nth.call(null,vec__27671,(0),null);
var p = cljs.core.nth.call(null,vec__27671,(1),null);
var job = vec__27671;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19508__auto___27853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___27853,res,vec__27671,v,p,job,jobs,results){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___27853,res,vec__27671,v,p,job,jobs,results){
return (function (state_27676){
var state_val_27677 = (state_27676[(1)]);
if((state_val_27677 === (1))){
var state_27676__$1 = state_27676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27676__$1,(2),res,v);
} else {
if((state_val_27677 === (2))){
var inst_27673 = (state_27676[(2)]);
var inst_27674 = cljs.core.async.close_BANG_.call(null,res);
var state_27676__$1 = (function (){var statearr_27678 = state_27676;
(statearr_27678[(7)] = inst_27673);

return statearr_27678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27676__$1,inst_27674);
} else {
return null;
}
}
});})(c__19508__auto___27853,res,vec__27671,v,p,job,jobs,results))
;
return ((function (switch__19443__auto__,c__19508__auto___27853,res,vec__27671,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0 = (function (){
var statearr_27682 = [null,null,null,null,null,null,null,null];
(statearr_27682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__);

(statearr_27682[(1)] = (1));

return statearr_27682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1 = (function (state_27676){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_27676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e27683){if((e27683 instanceof Object)){
var ex__19447__auto__ = e27683;
var statearr_27684_27854 = state_27676;
(statearr_27684_27854[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27855 = state_27676;
state_27676 = G__27855;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = function(state_27676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1.call(this,state_27676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___27853,res,vec__27671,v,p,job,jobs,results))
})();
var state__19510__auto__ = (function (){var statearr_27685 = f__19509__auto__.call(null);
(statearr_27685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___27853);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___27853,res,vec__27671,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27686){
var vec__27687 = p__27686;
var v = cljs.core.nth.call(null,vec__27687,(0),null);
var p = cljs.core.nth.call(null,vec__27687,(1),null);
var job = vec__27687;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17209__auto___27856 = n;
var __27857 = (0);
while(true){
if((__27857 < n__17209__auto___27856)){
var G__27688_27858 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27688_27858) {
case "compute":
var c__19508__auto___27860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27857,c__19508__auto___27860,G__27688_27858,n__17209__auto___27856,jobs,results,process,async){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (__27857,c__19508__auto___27860,G__27688_27858,n__17209__auto___27856,jobs,results,process,async){
return (function (state_27701){
var state_val_27702 = (state_27701[(1)]);
if((state_val_27702 === (1))){
var state_27701__$1 = state_27701;
var statearr_27703_27861 = state_27701__$1;
(statearr_27703_27861[(2)] = null);

(statearr_27703_27861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (2))){
var state_27701__$1 = state_27701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27701__$1,(4),jobs);
} else {
if((state_val_27702 === (3))){
var inst_27699 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27701__$1,inst_27699);
} else {
if((state_val_27702 === (4))){
var inst_27691 = (state_27701[(2)]);
var inst_27692 = process.call(null,inst_27691);
var state_27701__$1 = state_27701;
if(cljs.core.truth_(inst_27692)){
var statearr_27704_27862 = state_27701__$1;
(statearr_27704_27862[(1)] = (5));

} else {
var statearr_27705_27863 = state_27701__$1;
(statearr_27705_27863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (5))){
var state_27701__$1 = state_27701;
var statearr_27706_27864 = state_27701__$1;
(statearr_27706_27864[(2)] = null);

(statearr_27706_27864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (6))){
var state_27701__$1 = state_27701;
var statearr_27707_27865 = state_27701__$1;
(statearr_27707_27865[(2)] = null);

(statearr_27707_27865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (7))){
var inst_27697 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
var statearr_27708_27866 = state_27701__$1;
(statearr_27708_27866[(2)] = inst_27697);

(statearr_27708_27866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27857,c__19508__auto___27860,G__27688_27858,n__17209__auto___27856,jobs,results,process,async))
;
return ((function (__27857,switch__19443__auto__,c__19508__auto___27860,G__27688_27858,n__17209__auto___27856,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0 = (function (){
var statearr_27712 = [null,null,null,null,null,null,null];
(statearr_27712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__);

(statearr_27712[(1)] = (1));

return statearr_27712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1 = (function (state_27701){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_27701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e27713){if((e27713 instanceof Object)){
var ex__19447__auto__ = e27713;
var statearr_27714_27867 = state_27701;
(statearr_27714_27867[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27868 = state_27701;
state_27701 = G__27868;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = function(state_27701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1.call(this,state_27701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__;
})()
;})(__27857,switch__19443__auto__,c__19508__auto___27860,G__27688_27858,n__17209__auto___27856,jobs,results,process,async))
})();
var state__19510__auto__ = (function (){var statearr_27715 = f__19509__auto__.call(null);
(statearr_27715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___27860);

return statearr_27715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(__27857,c__19508__auto___27860,G__27688_27858,n__17209__auto___27856,jobs,results,process,async))
);


break;
case "async":
var c__19508__auto___27869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27857,c__19508__auto___27869,G__27688_27858,n__17209__auto___27856,jobs,results,process,async){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (__27857,c__19508__auto___27869,G__27688_27858,n__17209__auto___27856,jobs,results,process,async){
return (function (state_27728){
var state_val_27729 = (state_27728[(1)]);
if((state_val_27729 === (1))){
var state_27728__$1 = state_27728;
var statearr_27730_27870 = state_27728__$1;
(statearr_27730_27870[(2)] = null);

(statearr_27730_27870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (2))){
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27728__$1,(4),jobs);
} else {
if((state_val_27729 === (3))){
var inst_27726 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27728__$1,inst_27726);
} else {
if((state_val_27729 === (4))){
var inst_27718 = (state_27728[(2)]);
var inst_27719 = async.call(null,inst_27718);
var state_27728__$1 = state_27728;
if(cljs.core.truth_(inst_27719)){
var statearr_27731_27871 = state_27728__$1;
(statearr_27731_27871[(1)] = (5));

} else {
var statearr_27732_27872 = state_27728__$1;
(statearr_27732_27872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (5))){
var state_27728__$1 = state_27728;
var statearr_27733_27873 = state_27728__$1;
(statearr_27733_27873[(2)] = null);

(statearr_27733_27873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (6))){
var state_27728__$1 = state_27728;
var statearr_27734_27874 = state_27728__$1;
(statearr_27734_27874[(2)] = null);

(statearr_27734_27874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (7))){
var inst_27724 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27735_27875 = state_27728__$1;
(statearr_27735_27875[(2)] = inst_27724);

(statearr_27735_27875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27857,c__19508__auto___27869,G__27688_27858,n__17209__auto___27856,jobs,results,process,async))
;
return ((function (__27857,switch__19443__auto__,c__19508__auto___27869,G__27688_27858,n__17209__auto___27856,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0 = (function (){
var statearr_27739 = [null,null,null,null,null,null,null];
(statearr_27739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__);

(statearr_27739[(1)] = (1));

return statearr_27739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1 = (function (state_27728){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_27728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e27740){if((e27740 instanceof Object)){
var ex__19447__auto__ = e27740;
var statearr_27741_27876 = state_27728;
(statearr_27741_27876[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27877 = state_27728;
state_27728 = G__27877;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = function(state_27728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1.call(this,state_27728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__;
})()
;})(__27857,switch__19443__auto__,c__19508__auto___27869,G__27688_27858,n__17209__auto___27856,jobs,results,process,async))
})();
var state__19510__auto__ = (function (){var statearr_27742 = f__19509__auto__.call(null);
(statearr_27742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___27869);

return statearr_27742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(__27857,c__19508__auto___27869,G__27688_27858,n__17209__auto___27856,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27878 = (__27857 + (1));
__27857 = G__27878;
continue;
} else {
}
break;
}

var c__19508__auto___27879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___27879,jobs,results,process,async){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___27879,jobs,results,process,async){
return (function (state_27764){
var state_val_27765 = (state_27764[(1)]);
if((state_val_27765 === (1))){
var state_27764__$1 = state_27764;
var statearr_27766_27880 = state_27764__$1;
(statearr_27766_27880[(2)] = null);

(statearr_27766_27880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (2))){
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27764__$1,(4),from);
} else {
if((state_val_27765 === (3))){
var inst_27762 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27764__$1,inst_27762);
} else {
if((state_val_27765 === (4))){
var inst_27745 = (state_27764[(7)]);
var inst_27745__$1 = (state_27764[(2)]);
var inst_27746 = (inst_27745__$1 == null);
var state_27764__$1 = (function (){var statearr_27767 = state_27764;
(statearr_27767[(7)] = inst_27745__$1);

return statearr_27767;
})();
if(cljs.core.truth_(inst_27746)){
var statearr_27768_27881 = state_27764__$1;
(statearr_27768_27881[(1)] = (5));

} else {
var statearr_27769_27882 = state_27764__$1;
(statearr_27769_27882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (5))){
var inst_27748 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27764__$1 = state_27764;
var statearr_27770_27883 = state_27764__$1;
(statearr_27770_27883[(2)] = inst_27748);

(statearr_27770_27883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (6))){
var inst_27745 = (state_27764[(7)]);
var inst_27750 = (state_27764[(8)]);
var inst_27750__$1 = cljs.core.async.chan.call(null,(1));
var inst_27751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27752 = [inst_27745,inst_27750__$1];
var inst_27753 = (new cljs.core.PersistentVector(null,2,(5),inst_27751,inst_27752,null));
var state_27764__$1 = (function (){var statearr_27771 = state_27764;
(statearr_27771[(8)] = inst_27750__$1);

return statearr_27771;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27764__$1,(8),jobs,inst_27753);
} else {
if((state_val_27765 === (7))){
var inst_27760 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
var statearr_27772_27884 = state_27764__$1;
(statearr_27772_27884[(2)] = inst_27760);

(statearr_27772_27884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (8))){
var inst_27750 = (state_27764[(8)]);
var inst_27755 = (state_27764[(2)]);
var state_27764__$1 = (function (){var statearr_27773 = state_27764;
(statearr_27773[(9)] = inst_27755);

return statearr_27773;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27764__$1,(9),results,inst_27750);
} else {
if((state_val_27765 === (9))){
var inst_27757 = (state_27764[(2)]);
var state_27764__$1 = (function (){var statearr_27774 = state_27764;
(statearr_27774[(10)] = inst_27757);

return statearr_27774;
})();
var statearr_27775_27885 = state_27764__$1;
(statearr_27775_27885[(2)] = null);

(statearr_27775_27885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___27879,jobs,results,process,async))
;
return ((function (switch__19443__auto__,c__19508__auto___27879,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0 = (function (){
var statearr_27779 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__);

(statearr_27779[(1)] = (1));

return statearr_27779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1 = (function (state_27764){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_27764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e27780){if((e27780 instanceof Object)){
var ex__19447__auto__ = e27780;
var statearr_27781_27886 = state_27764;
(statearr_27781_27886[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27887 = state_27764;
state_27764 = G__27887;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = function(state_27764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1.call(this,state_27764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___27879,jobs,results,process,async))
})();
var state__19510__auto__ = (function (){var statearr_27782 = f__19509__auto__.call(null);
(statearr_27782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___27879);

return statearr_27782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___27879,jobs,results,process,async))
);


var c__19508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto__,jobs,results,process,async){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto__,jobs,results,process,async){
return (function (state_27820){
var state_val_27821 = (state_27820[(1)]);
if((state_val_27821 === (7))){
var inst_27816 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27822_27888 = state_27820__$1;
(statearr_27822_27888[(2)] = inst_27816);

(statearr_27822_27888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (20))){
var state_27820__$1 = state_27820;
var statearr_27823_27889 = state_27820__$1;
(statearr_27823_27889[(2)] = null);

(statearr_27823_27889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (1))){
var state_27820__$1 = state_27820;
var statearr_27824_27890 = state_27820__$1;
(statearr_27824_27890[(2)] = null);

(statearr_27824_27890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (4))){
var inst_27785 = (state_27820[(7)]);
var inst_27785__$1 = (state_27820[(2)]);
var inst_27786 = (inst_27785__$1 == null);
var state_27820__$1 = (function (){var statearr_27825 = state_27820;
(statearr_27825[(7)] = inst_27785__$1);

return statearr_27825;
})();
if(cljs.core.truth_(inst_27786)){
var statearr_27826_27891 = state_27820__$1;
(statearr_27826_27891[(1)] = (5));

} else {
var statearr_27827_27892 = state_27820__$1;
(statearr_27827_27892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (15))){
var inst_27798 = (state_27820[(8)]);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27820__$1,(18),to,inst_27798);
} else {
if((state_val_27821 === (21))){
var inst_27811 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27828_27893 = state_27820__$1;
(statearr_27828_27893[(2)] = inst_27811);

(statearr_27828_27893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (13))){
var inst_27813 = (state_27820[(2)]);
var state_27820__$1 = (function (){var statearr_27829 = state_27820;
(statearr_27829[(9)] = inst_27813);

return statearr_27829;
})();
var statearr_27830_27894 = state_27820__$1;
(statearr_27830_27894[(2)] = null);

(statearr_27830_27894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (6))){
var inst_27785 = (state_27820[(7)]);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27820__$1,(11),inst_27785);
} else {
if((state_val_27821 === (17))){
var inst_27806 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
if(cljs.core.truth_(inst_27806)){
var statearr_27831_27895 = state_27820__$1;
(statearr_27831_27895[(1)] = (19));

} else {
var statearr_27832_27896 = state_27820__$1;
(statearr_27832_27896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (3))){
var inst_27818 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27820__$1,inst_27818);
} else {
if((state_val_27821 === (12))){
var inst_27795 = (state_27820[(10)]);
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27820__$1,(14),inst_27795);
} else {
if((state_val_27821 === (2))){
var state_27820__$1 = state_27820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27820__$1,(4),results);
} else {
if((state_val_27821 === (19))){
var state_27820__$1 = state_27820;
var statearr_27833_27897 = state_27820__$1;
(statearr_27833_27897[(2)] = null);

(statearr_27833_27897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (11))){
var inst_27795 = (state_27820[(2)]);
var state_27820__$1 = (function (){var statearr_27834 = state_27820;
(statearr_27834[(10)] = inst_27795);

return statearr_27834;
})();
var statearr_27835_27898 = state_27820__$1;
(statearr_27835_27898[(2)] = null);

(statearr_27835_27898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (9))){
var state_27820__$1 = state_27820;
var statearr_27836_27899 = state_27820__$1;
(statearr_27836_27899[(2)] = null);

(statearr_27836_27899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (5))){
var state_27820__$1 = state_27820;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27837_27900 = state_27820__$1;
(statearr_27837_27900[(1)] = (8));

} else {
var statearr_27838_27901 = state_27820__$1;
(statearr_27838_27901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (14))){
var inst_27800 = (state_27820[(11)]);
var inst_27798 = (state_27820[(8)]);
var inst_27798__$1 = (state_27820[(2)]);
var inst_27799 = (inst_27798__$1 == null);
var inst_27800__$1 = cljs.core.not.call(null,inst_27799);
var state_27820__$1 = (function (){var statearr_27839 = state_27820;
(statearr_27839[(11)] = inst_27800__$1);

(statearr_27839[(8)] = inst_27798__$1);

return statearr_27839;
})();
if(inst_27800__$1){
var statearr_27840_27902 = state_27820__$1;
(statearr_27840_27902[(1)] = (15));

} else {
var statearr_27841_27903 = state_27820__$1;
(statearr_27841_27903[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (16))){
var inst_27800 = (state_27820[(11)]);
var state_27820__$1 = state_27820;
var statearr_27842_27904 = state_27820__$1;
(statearr_27842_27904[(2)] = inst_27800);

(statearr_27842_27904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (10))){
var inst_27792 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27843_27905 = state_27820__$1;
(statearr_27843_27905[(2)] = inst_27792);

(statearr_27843_27905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (18))){
var inst_27803 = (state_27820[(2)]);
var state_27820__$1 = state_27820;
var statearr_27844_27906 = state_27820__$1;
(statearr_27844_27906[(2)] = inst_27803);

(statearr_27844_27906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27821 === (8))){
var inst_27789 = cljs.core.async.close_BANG_.call(null,to);
var state_27820__$1 = state_27820;
var statearr_27845_27907 = state_27820__$1;
(statearr_27845_27907[(2)] = inst_27789);

(statearr_27845_27907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto__,jobs,results,process,async))
;
return ((function (switch__19443__auto__,c__19508__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0 = (function (){
var statearr_27849 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__);

(statearr_27849[(1)] = (1));

return statearr_27849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1 = (function (state_27820){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_27820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e27850){if((e27850 instanceof Object)){
var ex__19447__auto__ = e27850;
var statearr_27851_27908 = state_27820;
(statearr_27851_27908[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27909 = state_27820;
state_27820 = G__27909;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__ = function(state_27820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1.call(this,state_27820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19444__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto__,jobs,results,process,async))
})();
var state__19510__auto__ = (function (){var statearr_27852 = f__19509__auto__.call(null);
(statearr_27852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto__);

return statearr_27852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto__,jobs,results,process,async))
);

return c__19508__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args27910 = [];
var len__17364__auto___27913 = arguments.length;
var i__17365__auto___27914 = (0);
while(true){
if((i__17365__auto___27914 < len__17364__auto___27913)){
args27910.push((arguments[i__17365__auto___27914]));

var G__27915 = (i__17365__auto___27914 + (1));
i__17365__auto___27914 = G__27915;
continue;
} else {
}
break;
}

var G__27912 = args27910.length;
switch (G__27912) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27910.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args27917 = [];
var len__17364__auto___27920 = arguments.length;
var i__17365__auto___27921 = (0);
while(true){
if((i__17365__auto___27921 < len__17364__auto___27920)){
args27917.push((arguments[i__17365__auto___27921]));

var G__27922 = (i__17365__auto___27921 + (1));
i__17365__auto___27921 = G__27922;
continue;
} else {
}
break;
}

var G__27919 = args27917.length;
switch (G__27919) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27917.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args27924 = [];
var len__17364__auto___27977 = arguments.length;
var i__17365__auto___27978 = (0);
while(true){
if((i__17365__auto___27978 < len__17364__auto___27977)){
args27924.push((arguments[i__17365__auto___27978]));

var G__27979 = (i__17365__auto___27978 + (1));
i__17365__auto___27978 = G__27979;
continue;
} else {
}
break;
}

var G__27926 = args27924.length;
switch (G__27926) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27924.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19508__auto___27981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___27981,tc,fc){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___27981,tc,fc){
return (function (state_27952){
var state_val_27953 = (state_27952[(1)]);
if((state_val_27953 === (7))){
var inst_27948 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27954_27982 = state_27952__$1;
(statearr_27954_27982[(2)] = inst_27948);

(statearr_27954_27982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (1))){
var state_27952__$1 = state_27952;
var statearr_27955_27983 = state_27952__$1;
(statearr_27955_27983[(2)] = null);

(statearr_27955_27983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (4))){
var inst_27929 = (state_27952[(7)]);
var inst_27929__$1 = (state_27952[(2)]);
var inst_27930 = (inst_27929__$1 == null);
var state_27952__$1 = (function (){var statearr_27956 = state_27952;
(statearr_27956[(7)] = inst_27929__$1);

return statearr_27956;
})();
if(cljs.core.truth_(inst_27930)){
var statearr_27957_27984 = state_27952__$1;
(statearr_27957_27984[(1)] = (5));

} else {
var statearr_27958_27985 = state_27952__$1;
(statearr_27958_27985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (13))){
var state_27952__$1 = state_27952;
var statearr_27959_27986 = state_27952__$1;
(statearr_27959_27986[(2)] = null);

(statearr_27959_27986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (6))){
var inst_27929 = (state_27952[(7)]);
var inst_27935 = p.call(null,inst_27929);
var state_27952__$1 = state_27952;
if(cljs.core.truth_(inst_27935)){
var statearr_27960_27987 = state_27952__$1;
(statearr_27960_27987[(1)] = (9));

} else {
var statearr_27961_27988 = state_27952__$1;
(statearr_27961_27988[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (3))){
var inst_27950 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27952__$1,inst_27950);
} else {
if((state_val_27953 === (12))){
var state_27952__$1 = state_27952;
var statearr_27962_27989 = state_27952__$1;
(statearr_27962_27989[(2)] = null);

(statearr_27962_27989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (2))){
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27952__$1,(4),ch);
} else {
if((state_val_27953 === (11))){
var inst_27929 = (state_27952[(7)]);
var inst_27939 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27952__$1,(8),inst_27939,inst_27929);
} else {
if((state_val_27953 === (9))){
var state_27952__$1 = state_27952;
var statearr_27963_27990 = state_27952__$1;
(statearr_27963_27990[(2)] = tc);

(statearr_27963_27990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (5))){
var inst_27932 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27933 = cljs.core.async.close_BANG_.call(null,fc);
var state_27952__$1 = (function (){var statearr_27964 = state_27952;
(statearr_27964[(8)] = inst_27932);

return statearr_27964;
})();
var statearr_27965_27991 = state_27952__$1;
(statearr_27965_27991[(2)] = inst_27933);

(statearr_27965_27991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (14))){
var inst_27946 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
var statearr_27966_27992 = state_27952__$1;
(statearr_27966_27992[(2)] = inst_27946);

(statearr_27966_27992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (10))){
var state_27952__$1 = state_27952;
var statearr_27967_27993 = state_27952__$1;
(statearr_27967_27993[(2)] = fc);

(statearr_27967_27993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27953 === (8))){
var inst_27941 = (state_27952[(2)]);
var state_27952__$1 = state_27952;
if(cljs.core.truth_(inst_27941)){
var statearr_27968_27994 = state_27952__$1;
(statearr_27968_27994[(1)] = (12));

} else {
var statearr_27969_27995 = state_27952__$1;
(statearr_27969_27995[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___27981,tc,fc))
;
return ((function (switch__19443__auto__,c__19508__auto___27981,tc,fc){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_27973 = [null,null,null,null,null,null,null,null,null];
(statearr_27973[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_27973[(1)] = (1));

return statearr_27973;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_27952){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_27952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e27974){if((e27974 instanceof Object)){
var ex__19447__auto__ = e27974;
var statearr_27975_27996 = state_27952;
(statearr_27975_27996[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27997 = state_27952;
state_27952 = G__27997;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_27952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_27952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___27981,tc,fc))
})();
var state__19510__auto__ = (function (){var statearr_27976 = f__19509__auto__.call(null);
(statearr_27976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___27981);

return statearr_27976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___27981,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto__){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto__){
return (function (state_28044){
var state_val_28045 = (state_28044[(1)]);
if((state_val_28045 === (1))){
var inst_28030 = init;
var state_28044__$1 = (function (){var statearr_28046 = state_28044;
(statearr_28046[(7)] = inst_28030);

return statearr_28046;
})();
var statearr_28047_28062 = state_28044__$1;
(statearr_28047_28062[(2)] = null);

(statearr_28047_28062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (2))){
var state_28044__$1 = state_28044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28044__$1,(4),ch);
} else {
if((state_val_28045 === (3))){
var inst_28042 = (state_28044[(2)]);
var state_28044__$1 = state_28044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28044__$1,inst_28042);
} else {
if((state_val_28045 === (4))){
var inst_28033 = (state_28044[(8)]);
var inst_28033__$1 = (state_28044[(2)]);
var inst_28034 = (inst_28033__$1 == null);
var state_28044__$1 = (function (){var statearr_28048 = state_28044;
(statearr_28048[(8)] = inst_28033__$1);

return statearr_28048;
})();
if(cljs.core.truth_(inst_28034)){
var statearr_28049_28063 = state_28044__$1;
(statearr_28049_28063[(1)] = (5));

} else {
var statearr_28050_28064 = state_28044__$1;
(statearr_28050_28064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (5))){
var inst_28030 = (state_28044[(7)]);
var state_28044__$1 = state_28044;
var statearr_28051_28065 = state_28044__$1;
(statearr_28051_28065[(2)] = inst_28030);

(statearr_28051_28065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (6))){
var inst_28033 = (state_28044[(8)]);
var inst_28030 = (state_28044[(7)]);
var inst_28037 = f.call(null,inst_28030,inst_28033);
var inst_28030__$1 = inst_28037;
var state_28044__$1 = (function (){var statearr_28052 = state_28044;
(statearr_28052[(7)] = inst_28030__$1);

return statearr_28052;
})();
var statearr_28053_28066 = state_28044__$1;
(statearr_28053_28066[(2)] = null);

(statearr_28053_28066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28045 === (7))){
var inst_28040 = (state_28044[(2)]);
var state_28044__$1 = state_28044;
var statearr_28054_28067 = state_28044__$1;
(statearr_28054_28067[(2)] = inst_28040);

(statearr_28054_28067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19508__auto__))
;
return ((function (switch__19443__auto__,c__19508__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19444__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19444__auto____0 = (function (){
var statearr_28058 = [null,null,null,null,null,null,null,null,null];
(statearr_28058[(0)] = cljs$core$async$reduce_$_state_machine__19444__auto__);

(statearr_28058[(1)] = (1));

return statearr_28058;
});
var cljs$core$async$reduce_$_state_machine__19444__auto____1 = (function (state_28044){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_28044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e28059){if((e28059 instanceof Object)){
var ex__19447__auto__ = e28059;
var statearr_28060_28068 = state_28044;
(statearr_28060_28068[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28069 = state_28044;
state_28044 = G__28069;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19444__auto__ = function(state_28044){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19444__auto____1.call(this,state_28044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19444__auto____0;
cljs$core$async$reduce_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19444__auto____1;
return cljs$core$async$reduce_$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto__))
})();
var state__19510__auto__ = (function (){var statearr_28061 = f__19509__auto__.call(null);
(statearr_28061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto__);

return statearr_28061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto__))
);

return c__19508__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args28070 = [];
var len__17364__auto___28122 = arguments.length;
var i__17365__auto___28123 = (0);
while(true){
if((i__17365__auto___28123 < len__17364__auto___28122)){
args28070.push((arguments[i__17365__auto___28123]));

var G__28124 = (i__17365__auto___28123 + (1));
i__17365__auto___28123 = G__28124;
continue;
} else {
}
break;
}

var G__28072 = args28070.length;
switch (G__28072) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28070.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto__){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto__){
return (function (state_28097){
var state_val_28098 = (state_28097[(1)]);
if((state_val_28098 === (7))){
var inst_28079 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28099_28126 = state_28097__$1;
(statearr_28099_28126[(2)] = inst_28079);

(statearr_28099_28126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (1))){
var inst_28073 = cljs.core.seq.call(null,coll);
var inst_28074 = inst_28073;
var state_28097__$1 = (function (){var statearr_28100 = state_28097;
(statearr_28100[(7)] = inst_28074);

return statearr_28100;
})();
var statearr_28101_28127 = state_28097__$1;
(statearr_28101_28127[(2)] = null);

(statearr_28101_28127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (4))){
var inst_28074 = (state_28097[(7)]);
var inst_28077 = cljs.core.first.call(null,inst_28074);
var state_28097__$1 = state_28097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28097__$1,(7),ch,inst_28077);
} else {
if((state_val_28098 === (13))){
var inst_28091 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28102_28128 = state_28097__$1;
(statearr_28102_28128[(2)] = inst_28091);

(statearr_28102_28128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (6))){
var inst_28082 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
if(cljs.core.truth_(inst_28082)){
var statearr_28103_28129 = state_28097__$1;
(statearr_28103_28129[(1)] = (8));

} else {
var statearr_28104_28130 = state_28097__$1;
(statearr_28104_28130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (3))){
var inst_28095 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28097__$1,inst_28095);
} else {
if((state_val_28098 === (12))){
var state_28097__$1 = state_28097;
var statearr_28105_28131 = state_28097__$1;
(statearr_28105_28131[(2)] = null);

(statearr_28105_28131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (2))){
var inst_28074 = (state_28097[(7)]);
var state_28097__$1 = state_28097;
if(cljs.core.truth_(inst_28074)){
var statearr_28106_28132 = state_28097__$1;
(statearr_28106_28132[(1)] = (4));

} else {
var statearr_28107_28133 = state_28097__$1;
(statearr_28107_28133[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (11))){
var inst_28088 = cljs.core.async.close_BANG_.call(null,ch);
var state_28097__$1 = state_28097;
var statearr_28108_28134 = state_28097__$1;
(statearr_28108_28134[(2)] = inst_28088);

(statearr_28108_28134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (9))){
var state_28097__$1 = state_28097;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28109_28135 = state_28097__$1;
(statearr_28109_28135[(1)] = (11));

} else {
var statearr_28110_28136 = state_28097__$1;
(statearr_28110_28136[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (5))){
var inst_28074 = (state_28097[(7)]);
var state_28097__$1 = state_28097;
var statearr_28111_28137 = state_28097__$1;
(statearr_28111_28137[(2)] = inst_28074);

(statearr_28111_28137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (10))){
var inst_28093 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28112_28138 = state_28097__$1;
(statearr_28112_28138[(2)] = inst_28093);

(statearr_28112_28138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (8))){
var inst_28074 = (state_28097[(7)]);
var inst_28084 = cljs.core.next.call(null,inst_28074);
var inst_28074__$1 = inst_28084;
var state_28097__$1 = (function (){var statearr_28113 = state_28097;
(statearr_28113[(7)] = inst_28074__$1);

return statearr_28113;
})();
var statearr_28114_28139 = state_28097__$1;
(statearr_28114_28139[(2)] = null);

(statearr_28114_28139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto__))
;
return ((function (switch__19443__auto__,c__19508__auto__){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_28118 = [null,null,null,null,null,null,null,null];
(statearr_28118[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_28118[(1)] = (1));

return statearr_28118;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_28097){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_28097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e28119){if((e28119 instanceof Object)){
var ex__19447__auto__ = e28119;
var statearr_28120_28140 = state_28097;
(statearr_28120_28140[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28141 = state_28097;
state_28097 = G__28141;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_28097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_28097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto__))
})();
var state__19510__auto__ = (function (){var statearr_28121 = f__19509__auto__.call(null);
(statearr_28121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto__);

return statearr_28121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto__))
);

return c__19508__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16961__auto__ = (((_ == null))?null:_);
var m__16962__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,_);
} else {
var m__16962__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16962__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m);
} else {
var m__16962__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28367 = (function (mult,ch,cs,meta28368){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28368 = meta28368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28369,meta28368__$1){
var self__ = this;
var _28369__$1 = this;
return (new cljs.core.async.t28367(self__.mult,self__.ch,self__.cs,meta28368__$1));
});})(cs))
;

cljs.core.async.t28367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28369){
var self__ = this;
var _28369__$1 = this;
return self__.meta28368;
});})(cs))
;

cljs.core.async.t28367.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28367.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28367.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28367.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28367.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28367.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28368","meta28368",-582682696,null)], null);
});})(cs))
;

cljs.core.async.t28367.cljs$lang$type = true;

cljs.core.async.t28367.cljs$lang$ctorStr = "cljs.core.async/t28367";

cljs.core.async.t28367.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t28367");
});})(cs))
;

cljs.core.async.__GT_t28367 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28367(mult__$1,ch__$1,cs__$1,meta28368){
return (new cljs.core.async.t28367(mult__$1,ch__$1,cs__$1,meta28368));
});})(cs))
;

}

return (new cljs.core.async.t28367(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19508__auto___28588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___28588,cs,m,dchan,dctr,done){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___28588,cs,m,dchan,dctr,done){
return (function (state_28500){
var state_val_28501 = (state_28500[(1)]);
if((state_val_28501 === (7))){
var inst_28496 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28502_28589 = state_28500__$1;
(statearr_28502_28589[(2)] = inst_28496);

(statearr_28502_28589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (20))){
var inst_28401 = (state_28500[(7)]);
var inst_28411 = cljs.core.first.call(null,inst_28401);
var inst_28412 = cljs.core.nth.call(null,inst_28411,(0),null);
var inst_28413 = cljs.core.nth.call(null,inst_28411,(1),null);
var state_28500__$1 = (function (){var statearr_28503 = state_28500;
(statearr_28503[(8)] = inst_28412);

return statearr_28503;
})();
if(cljs.core.truth_(inst_28413)){
var statearr_28504_28590 = state_28500__$1;
(statearr_28504_28590[(1)] = (22));

} else {
var statearr_28505_28591 = state_28500__$1;
(statearr_28505_28591[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (27))){
var inst_28372 = (state_28500[(9)]);
var inst_28443 = (state_28500[(10)]);
var inst_28448 = (state_28500[(11)]);
var inst_28441 = (state_28500[(12)]);
var inst_28448__$1 = cljs.core._nth.call(null,inst_28441,inst_28443);
var inst_28449 = cljs.core.async.put_BANG_.call(null,inst_28448__$1,inst_28372,done);
var state_28500__$1 = (function (){var statearr_28506 = state_28500;
(statearr_28506[(11)] = inst_28448__$1);

return statearr_28506;
})();
if(cljs.core.truth_(inst_28449)){
var statearr_28507_28592 = state_28500__$1;
(statearr_28507_28592[(1)] = (30));

} else {
var statearr_28508_28593 = state_28500__$1;
(statearr_28508_28593[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (1))){
var state_28500__$1 = state_28500;
var statearr_28509_28594 = state_28500__$1;
(statearr_28509_28594[(2)] = null);

(statearr_28509_28594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (24))){
var inst_28401 = (state_28500[(7)]);
var inst_28418 = (state_28500[(2)]);
var inst_28419 = cljs.core.next.call(null,inst_28401);
var inst_28381 = inst_28419;
var inst_28382 = null;
var inst_28383 = (0);
var inst_28384 = (0);
var state_28500__$1 = (function (){var statearr_28510 = state_28500;
(statearr_28510[(13)] = inst_28384);

(statearr_28510[(14)] = inst_28418);

(statearr_28510[(15)] = inst_28382);

(statearr_28510[(16)] = inst_28381);

(statearr_28510[(17)] = inst_28383);

return statearr_28510;
})();
var statearr_28511_28595 = state_28500__$1;
(statearr_28511_28595[(2)] = null);

(statearr_28511_28595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (39))){
var state_28500__$1 = state_28500;
var statearr_28515_28596 = state_28500__$1;
(statearr_28515_28596[(2)] = null);

(statearr_28515_28596[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (4))){
var inst_28372 = (state_28500[(9)]);
var inst_28372__$1 = (state_28500[(2)]);
var inst_28373 = (inst_28372__$1 == null);
var state_28500__$1 = (function (){var statearr_28516 = state_28500;
(statearr_28516[(9)] = inst_28372__$1);

return statearr_28516;
})();
if(cljs.core.truth_(inst_28373)){
var statearr_28517_28597 = state_28500__$1;
(statearr_28517_28597[(1)] = (5));

} else {
var statearr_28518_28598 = state_28500__$1;
(statearr_28518_28598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (15))){
var inst_28384 = (state_28500[(13)]);
var inst_28382 = (state_28500[(15)]);
var inst_28381 = (state_28500[(16)]);
var inst_28383 = (state_28500[(17)]);
var inst_28397 = (state_28500[(2)]);
var inst_28398 = (inst_28384 + (1));
var tmp28512 = inst_28382;
var tmp28513 = inst_28381;
var tmp28514 = inst_28383;
var inst_28381__$1 = tmp28513;
var inst_28382__$1 = tmp28512;
var inst_28383__$1 = tmp28514;
var inst_28384__$1 = inst_28398;
var state_28500__$1 = (function (){var statearr_28519 = state_28500;
(statearr_28519[(13)] = inst_28384__$1);

(statearr_28519[(15)] = inst_28382__$1);

(statearr_28519[(18)] = inst_28397);

(statearr_28519[(16)] = inst_28381__$1);

(statearr_28519[(17)] = inst_28383__$1);

return statearr_28519;
})();
var statearr_28520_28599 = state_28500__$1;
(statearr_28520_28599[(2)] = null);

(statearr_28520_28599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (21))){
var inst_28422 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28524_28600 = state_28500__$1;
(statearr_28524_28600[(2)] = inst_28422);

(statearr_28524_28600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (31))){
var inst_28448 = (state_28500[(11)]);
var inst_28452 = done.call(null,null);
var inst_28453 = cljs.core.async.untap_STAR_.call(null,m,inst_28448);
var state_28500__$1 = (function (){var statearr_28525 = state_28500;
(statearr_28525[(19)] = inst_28452);

return statearr_28525;
})();
var statearr_28526_28601 = state_28500__$1;
(statearr_28526_28601[(2)] = inst_28453);

(statearr_28526_28601[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (32))){
var inst_28440 = (state_28500[(20)]);
var inst_28443 = (state_28500[(10)]);
var inst_28441 = (state_28500[(12)]);
var inst_28442 = (state_28500[(21)]);
var inst_28455 = (state_28500[(2)]);
var inst_28456 = (inst_28443 + (1));
var tmp28521 = inst_28440;
var tmp28522 = inst_28441;
var tmp28523 = inst_28442;
var inst_28440__$1 = tmp28521;
var inst_28441__$1 = tmp28522;
var inst_28442__$1 = tmp28523;
var inst_28443__$1 = inst_28456;
var state_28500__$1 = (function (){var statearr_28527 = state_28500;
(statearr_28527[(22)] = inst_28455);

(statearr_28527[(20)] = inst_28440__$1);

(statearr_28527[(10)] = inst_28443__$1);

(statearr_28527[(12)] = inst_28441__$1);

(statearr_28527[(21)] = inst_28442__$1);

return statearr_28527;
})();
var statearr_28528_28602 = state_28500__$1;
(statearr_28528_28602[(2)] = null);

(statearr_28528_28602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (40))){
var inst_28468 = (state_28500[(23)]);
var inst_28472 = done.call(null,null);
var inst_28473 = cljs.core.async.untap_STAR_.call(null,m,inst_28468);
var state_28500__$1 = (function (){var statearr_28529 = state_28500;
(statearr_28529[(24)] = inst_28472);

return statearr_28529;
})();
var statearr_28530_28603 = state_28500__$1;
(statearr_28530_28603[(2)] = inst_28473);

(statearr_28530_28603[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (33))){
var inst_28459 = (state_28500[(25)]);
var inst_28461 = cljs.core.chunked_seq_QMARK_.call(null,inst_28459);
var state_28500__$1 = state_28500;
if(inst_28461){
var statearr_28531_28604 = state_28500__$1;
(statearr_28531_28604[(1)] = (36));

} else {
var statearr_28532_28605 = state_28500__$1;
(statearr_28532_28605[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (13))){
var inst_28391 = (state_28500[(26)]);
var inst_28394 = cljs.core.async.close_BANG_.call(null,inst_28391);
var state_28500__$1 = state_28500;
var statearr_28533_28606 = state_28500__$1;
(statearr_28533_28606[(2)] = inst_28394);

(statearr_28533_28606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (22))){
var inst_28412 = (state_28500[(8)]);
var inst_28415 = cljs.core.async.close_BANG_.call(null,inst_28412);
var state_28500__$1 = state_28500;
var statearr_28534_28607 = state_28500__$1;
(statearr_28534_28607[(2)] = inst_28415);

(statearr_28534_28607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (36))){
var inst_28459 = (state_28500[(25)]);
var inst_28463 = cljs.core.chunk_first.call(null,inst_28459);
var inst_28464 = cljs.core.chunk_rest.call(null,inst_28459);
var inst_28465 = cljs.core.count.call(null,inst_28463);
var inst_28440 = inst_28464;
var inst_28441 = inst_28463;
var inst_28442 = inst_28465;
var inst_28443 = (0);
var state_28500__$1 = (function (){var statearr_28535 = state_28500;
(statearr_28535[(20)] = inst_28440);

(statearr_28535[(10)] = inst_28443);

(statearr_28535[(12)] = inst_28441);

(statearr_28535[(21)] = inst_28442);

return statearr_28535;
})();
var statearr_28536_28608 = state_28500__$1;
(statearr_28536_28608[(2)] = null);

(statearr_28536_28608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (41))){
var inst_28459 = (state_28500[(25)]);
var inst_28475 = (state_28500[(2)]);
var inst_28476 = cljs.core.next.call(null,inst_28459);
var inst_28440 = inst_28476;
var inst_28441 = null;
var inst_28442 = (0);
var inst_28443 = (0);
var state_28500__$1 = (function (){var statearr_28537 = state_28500;
(statearr_28537[(20)] = inst_28440);

(statearr_28537[(27)] = inst_28475);

(statearr_28537[(10)] = inst_28443);

(statearr_28537[(12)] = inst_28441);

(statearr_28537[(21)] = inst_28442);

return statearr_28537;
})();
var statearr_28538_28609 = state_28500__$1;
(statearr_28538_28609[(2)] = null);

(statearr_28538_28609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (43))){
var state_28500__$1 = state_28500;
var statearr_28539_28610 = state_28500__$1;
(statearr_28539_28610[(2)] = null);

(statearr_28539_28610[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (29))){
var inst_28484 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28540_28611 = state_28500__$1;
(statearr_28540_28611[(2)] = inst_28484);

(statearr_28540_28611[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (44))){
var inst_28493 = (state_28500[(2)]);
var state_28500__$1 = (function (){var statearr_28541 = state_28500;
(statearr_28541[(28)] = inst_28493);

return statearr_28541;
})();
var statearr_28542_28612 = state_28500__$1;
(statearr_28542_28612[(2)] = null);

(statearr_28542_28612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (6))){
var inst_28432 = (state_28500[(29)]);
var inst_28431 = cljs.core.deref.call(null,cs);
var inst_28432__$1 = cljs.core.keys.call(null,inst_28431);
var inst_28433 = cljs.core.count.call(null,inst_28432__$1);
var inst_28434 = cljs.core.reset_BANG_.call(null,dctr,inst_28433);
var inst_28439 = cljs.core.seq.call(null,inst_28432__$1);
var inst_28440 = inst_28439;
var inst_28441 = null;
var inst_28442 = (0);
var inst_28443 = (0);
var state_28500__$1 = (function (){var statearr_28543 = state_28500;
(statearr_28543[(20)] = inst_28440);

(statearr_28543[(30)] = inst_28434);

(statearr_28543[(29)] = inst_28432__$1);

(statearr_28543[(10)] = inst_28443);

(statearr_28543[(12)] = inst_28441);

(statearr_28543[(21)] = inst_28442);

return statearr_28543;
})();
var statearr_28544_28613 = state_28500__$1;
(statearr_28544_28613[(2)] = null);

(statearr_28544_28613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (28))){
var inst_28459 = (state_28500[(25)]);
var inst_28440 = (state_28500[(20)]);
var inst_28459__$1 = cljs.core.seq.call(null,inst_28440);
var state_28500__$1 = (function (){var statearr_28545 = state_28500;
(statearr_28545[(25)] = inst_28459__$1);

return statearr_28545;
})();
if(inst_28459__$1){
var statearr_28546_28614 = state_28500__$1;
(statearr_28546_28614[(1)] = (33));

} else {
var statearr_28547_28615 = state_28500__$1;
(statearr_28547_28615[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (25))){
var inst_28443 = (state_28500[(10)]);
var inst_28442 = (state_28500[(21)]);
var inst_28445 = (inst_28443 < inst_28442);
var inst_28446 = inst_28445;
var state_28500__$1 = state_28500;
if(cljs.core.truth_(inst_28446)){
var statearr_28548_28616 = state_28500__$1;
(statearr_28548_28616[(1)] = (27));

} else {
var statearr_28549_28617 = state_28500__$1;
(statearr_28549_28617[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (34))){
var state_28500__$1 = state_28500;
var statearr_28550_28618 = state_28500__$1;
(statearr_28550_28618[(2)] = null);

(statearr_28550_28618[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (17))){
var state_28500__$1 = state_28500;
var statearr_28551_28619 = state_28500__$1;
(statearr_28551_28619[(2)] = null);

(statearr_28551_28619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (3))){
var inst_28498 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28500__$1,inst_28498);
} else {
if((state_val_28501 === (12))){
var inst_28427 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28552_28620 = state_28500__$1;
(statearr_28552_28620[(2)] = inst_28427);

(statearr_28552_28620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (2))){
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28500__$1,(4),ch);
} else {
if((state_val_28501 === (23))){
var state_28500__$1 = state_28500;
var statearr_28553_28621 = state_28500__$1;
(statearr_28553_28621[(2)] = null);

(statearr_28553_28621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (35))){
var inst_28482 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28554_28622 = state_28500__$1;
(statearr_28554_28622[(2)] = inst_28482);

(statearr_28554_28622[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (19))){
var inst_28401 = (state_28500[(7)]);
var inst_28405 = cljs.core.chunk_first.call(null,inst_28401);
var inst_28406 = cljs.core.chunk_rest.call(null,inst_28401);
var inst_28407 = cljs.core.count.call(null,inst_28405);
var inst_28381 = inst_28406;
var inst_28382 = inst_28405;
var inst_28383 = inst_28407;
var inst_28384 = (0);
var state_28500__$1 = (function (){var statearr_28555 = state_28500;
(statearr_28555[(13)] = inst_28384);

(statearr_28555[(15)] = inst_28382);

(statearr_28555[(16)] = inst_28381);

(statearr_28555[(17)] = inst_28383);

return statearr_28555;
})();
var statearr_28556_28623 = state_28500__$1;
(statearr_28556_28623[(2)] = null);

(statearr_28556_28623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (11))){
var inst_28381 = (state_28500[(16)]);
var inst_28401 = (state_28500[(7)]);
var inst_28401__$1 = cljs.core.seq.call(null,inst_28381);
var state_28500__$1 = (function (){var statearr_28557 = state_28500;
(statearr_28557[(7)] = inst_28401__$1);

return statearr_28557;
})();
if(inst_28401__$1){
var statearr_28558_28624 = state_28500__$1;
(statearr_28558_28624[(1)] = (16));

} else {
var statearr_28559_28625 = state_28500__$1;
(statearr_28559_28625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (9))){
var inst_28429 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28560_28626 = state_28500__$1;
(statearr_28560_28626[(2)] = inst_28429);

(statearr_28560_28626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (5))){
var inst_28379 = cljs.core.deref.call(null,cs);
var inst_28380 = cljs.core.seq.call(null,inst_28379);
var inst_28381 = inst_28380;
var inst_28382 = null;
var inst_28383 = (0);
var inst_28384 = (0);
var state_28500__$1 = (function (){var statearr_28561 = state_28500;
(statearr_28561[(13)] = inst_28384);

(statearr_28561[(15)] = inst_28382);

(statearr_28561[(16)] = inst_28381);

(statearr_28561[(17)] = inst_28383);

return statearr_28561;
})();
var statearr_28562_28627 = state_28500__$1;
(statearr_28562_28627[(2)] = null);

(statearr_28562_28627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (14))){
var state_28500__$1 = state_28500;
var statearr_28563_28628 = state_28500__$1;
(statearr_28563_28628[(2)] = null);

(statearr_28563_28628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (45))){
var inst_28490 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28564_28629 = state_28500__$1;
(statearr_28564_28629[(2)] = inst_28490);

(statearr_28564_28629[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (26))){
var inst_28432 = (state_28500[(29)]);
var inst_28486 = (state_28500[(2)]);
var inst_28487 = cljs.core.seq.call(null,inst_28432);
var state_28500__$1 = (function (){var statearr_28565 = state_28500;
(statearr_28565[(31)] = inst_28486);

return statearr_28565;
})();
if(inst_28487){
var statearr_28566_28630 = state_28500__$1;
(statearr_28566_28630[(1)] = (42));

} else {
var statearr_28567_28631 = state_28500__$1;
(statearr_28567_28631[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (16))){
var inst_28401 = (state_28500[(7)]);
var inst_28403 = cljs.core.chunked_seq_QMARK_.call(null,inst_28401);
var state_28500__$1 = state_28500;
if(inst_28403){
var statearr_28568_28632 = state_28500__$1;
(statearr_28568_28632[(1)] = (19));

} else {
var statearr_28569_28633 = state_28500__$1;
(statearr_28569_28633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (38))){
var inst_28479 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28570_28634 = state_28500__$1;
(statearr_28570_28634[(2)] = inst_28479);

(statearr_28570_28634[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (30))){
var state_28500__$1 = state_28500;
var statearr_28571_28635 = state_28500__$1;
(statearr_28571_28635[(2)] = null);

(statearr_28571_28635[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (10))){
var inst_28384 = (state_28500[(13)]);
var inst_28382 = (state_28500[(15)]);
var inst_28390 = cljs.core._nth.call(null,inst_28382,inst_28384);
var inst_28391 = cljs.core.nth.call(null,inst_28390,(0),null);
var inst_28392 = cljs.core.nth.call(null,inst_28390,(1),null);
var state_28500__$1 = (function (){var statearr_28572 = state_28500;
(statearr_28572[(26)] = inst_28391);

return statearr_28572;
})();
if(cljs.core.truth_(inst_28392)){
var statearr_28573_28636 = state_28500__$1;
(statearr_28573_28636[(1)] = (13));

} else {
var statearr_28574_28637 = state_28500__$1;
(statearr_28574_28637[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (18))){
var inst_28425 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28575_28638 = state_28500__$1;
(statearr_28575_28638[(2)] = inst_28425);

(statearr_28575_28638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (42))){
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28500__$1,(45),dchan);
} else {
if((state_val_28501 === (37))){
var inst_28372 = (state_28500[(9)]);
var inst_28459 = (state_28500[(25)]);
var inst_28468 = (state_28500[(23)]);
var inst_28468__$1 = cljs.core.first.call(null,inst_28459);
var inst_28469 = cljs.core.async.put_BANG_.call(null,inst_28468__$1,inst_28372,done);
var state_28500__$1 = (function (){var statearr_28576 = state_28500;
(statearr_28576[(23)] = inst_28468__$1);

return statearr_28576;
})();
if(cljs.core.truth_(inst_28469)){
var statearr_28577_28639 = state_28500__$1;
(statearr_28577_28639[(1)] = (39));

} else {
var statearr_28578_28640 = state_28500__$1;
(statearr_28578_28640[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (8))){
var inst_28384 = (state_28500[(13)]);
var inst_28383 = (state_28500[(17)]);
var inst_28386 = (inst_28384 < inst_28383);
var inst_28387 = inst_28386;
var state_28500__$1 = state_28500;
if(cljs.core.truth_(inst_28387)){
var statearr_28579_28641 = state_28500__$1;
(statearr_28579_28641[(1)] = (10));

} else {
var statearr_28580_28642 = state_28500__$1;
(statearr_28580_28642[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___28588,cs,m,dchan,dctr,done))
;
return ((function (switch__19443__auto__,c__19508__auto___28588,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19444__auto__ = null;
var cljs$core$async$mult_$_state_machine__19444__auto____0 = (function (){
var statearr_28584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28584[(0)] = cljs$core$async$mult_$_state_machine__19444__auto__);

(statearr_28584[(1)] = (1));

return statearr_28584;
});
var cljs$core$async$mult_$_state_machine__19444__auto____1 = (function (state_28500){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_28500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e28585){if((e28585 instanceof Object)){
var ex__19447__auto__ = e28585;
var statearr_28586_28643 = state_28500;
(statearr_28586_28643[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28644 = state_28500;
state_28500 = G__28644;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19444__auto__ = function(state_28500){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19444__auto____1.call(this,state_28500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19444__auto____0;
cljs$core$async$mult_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19444__auto____1;
return cljs$core$async$mult_$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___28588,cs,m,dchan,dctr,done))
})();
var state__19510__auto__ = (function (){var statearr_28587 = f__19509__auto__.call(null);
(statearr_28587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___28588);

return statearr_28587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___28588,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args28645 = [];
var len__17364__auto___28648 = arguments.length;
var i__17365__auto___28649 = (0);
while(true){
if((i__17365__auto___28649 < len__17364__auto___28648)){
args28645.push((arguments[i__17365__auto___28649]));

var G__28650 = (i__17365__auto___28649 + (1));
i__17365__auto___28649 = G__28650;
continue;
} else {
}
break;
}

var G__28647 = args28645.length;
switch (G__28647) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28645.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m);
} else {
var m__16962__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,state_map);
} else {
var m__16962__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,mode);
} else {
var m__16962__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17371__auto__ = [];
var len__17364__auto___28664 = arguments.length;
var i__17365__auto___28665 = (0);
while(true){
if((i__17365__auto___28665 < len__17364__auto___28664)){
args__17371__auto__.push((arguments[i__17365__auto___28665]));

var G__28666 = (i__17365__auto___28665 + (1));
i__17365__auto___28665 = G__28666;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((3) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28658){
var map__28659 = p__28658;
var map__28659__$1 = ((((!((map__28659 == null)))?((((map__28659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28659):map__28659);
var opts = map__28659__$1;
var statearr_28661_28667 = state;
(statearr_28661_28667[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28659,map__28659__$1,opts){
return (function (val){
var statearr_28662_28668 = state;
(statearr_28662_28668[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28659,map__28659__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28663_28669 = state;
(statearr_28663_28669[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28654){
var G__28655 = cljs.core.first.call(null,seq28654);
var seq28654__$1 = cljs.core.next.call(null,seq28654);
var G__28656 = cljs.core.first.call(null,seq28654__$1);
var seq28654__$2 = cljs.core.next.call(null,seq28654__$1);
var G__28657 = cljs.core.first.call(null,seq28654__$2);
var seq28654__$3 = cljs.core.next.call(null,seq28654__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28655,G__28656,G__28657,seq28654__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28833 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28833 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28834){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28834 = meta28834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28835,meta28834__$1){
var self__ = this;
var _28835__$1 = this;
return (new cljs.core.async.t28833(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28834__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28833.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28835){
var self__ = this;
var _28835__$1 = this;
return self__.meta28834;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28833.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28833.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28833.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28833.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28833.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28833.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28833.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28833.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28834","meta28834",-1843431302,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28833.cljs$lang$type = true;

cljs.core.async.t28833.cljs$lang$ctorStr = "cljs.core.async/t28833";

cljs.core.async.t28833.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t28833");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28833 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28833(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28834){
return (new cljs.core.async.t28833(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28834));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28833(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19508__auto___28996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___28996,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___28996,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28933){
var state_val_28934 = (state_28933[(1)]);
if((state_val_28934 === (7))){
var inst_28851 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28935_28997 = state_28933__$1;
(statearr_28935_28997[(2)] = inst_28851);

(statearr_28935_28997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (20))){
var inst_28863 = (state_28933[(7)]);
var state_28933__$1 = state_28933;
var statearr_28936_28998 = state_28933__$1;
(statearr_28936_28998[(2)] = inst_28863);

(statearr_28936_28998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (27))){
var state_28933__$1 = state_28933;
var statearr_28937_28999 = state_28933__$1;
(statearr_28937_28999[(2)] = null);

(statearr_28937_28999[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (1))){
var inst_28839 = (state_28933[(8)]);
var inst_28839__$1 = calc_state.call(null);
var inst_28841 = (inst_28839__$1 == null);
var inst_28842 = cljs.core.not.call(null,inst_28841);
var state_28933__$1 = (function (){var statearr_28938 = state_28933;
(statearr_28938[(8)] = inst_28839__$1);

return statearr_28938;
})();
if(inst_28842){
var statearr_28939_29000 = state_28933__$1;
(statearr_28939_29000[(1)] = (2));

} else {
var statearr_28940_29001 = state_28933__$1;
(statearr_28940_29001[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (24))){
var inst_28886 = (state_28933[(9)]);
var inst_28907 = (state_28933[(10)]);
var inst_28893 = (state_28933[(11)]);
var inst_28907__$1 = inst_28886.call(null,inst_28893);
var state_28933__$1 = (function (){var statearr_28941 = state_28933;
(statearr_28941[(10)] = inst_28907__$1);

return statearr_28941;
})();
if(cljs.core.truth_(inst_28907__$1)){
var statearr_28942_29002 = state_28933__$1;
(statearr_28942_29002[(1)] = (29));

} else {
var statearr_28943_29003 = state_28933__$1;
(statearr_28943_29003[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (4))){
var inst_28854 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28854)){
var statearr_28944_29004 = state_28933__$1;
(statearr_28944_29004[(1)] = (8));

} else {
var statearr_28945_29005 = state_28933__$1;
(statearr_28945_29005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (15))){
var inst_28880 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28880)){
var statearr_28946_29006 = state_28933__$1;
(statearr_28946_29006[(1)] = (19));

} else {
var statearr_28947_29007 = state_28933__$1;
(statearr_28947_29007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (21))){
var inst_28885 = (state_28933[(12)]);
var inst_28885__$1 = (state_28933[(2)]);
var inst_28886 = cljs.core.get.call(null,inst_28885__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28887 = cljs.core.get.call(null,inst_28885__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28888 = cljs.core.get.call(null,inst_28885__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28933__$1 = (function (){var statearr_28948 = state_28933;
(statearr_28948[(12)] = inst_28885__$1);

(statearr_28948[(9)] = inst_28886);

(statearr_28948[(13)] = inst_28887);

return statearr_28948;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28933__$1,(22),inst_28888);
} else {
if((state_val_28934 === (31))){
var inst_28915 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28915)){
var statearr_28949_29008 = state_28933__$1;
(statearr_28949_29008[(1)] = (32));

} else {
var statearr_28950_29009 = state_28933__$1;
(statearr_28950_29009[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (32))){
var inst_28892 = (state_28933[(14)]);
var state_28933__$1 = state_28933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28933__$1,(35),out,inst_28892);
} else {
if((state_val_28934 === (33))){
var inst_28885 = (state_28933[(12)]);
var inst_28863 = inst_28885;
var state_28933__$1 = (function (){var statearr_28951 = state_28933;
(statearr_28951[(7)] = inst_28863);

return statearr_28951;
})();
var statearr_28952_29010 = state_28933__$1;
(statearr_28952_29010[(2)] = null);

(statearr_28952_29010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (13))){
var inst_28863 = (state_28933[(7)]);
var inst_28870 = inst_28863.cljs$lang$protocol_mask$partition0$;
var inst_28871 = (inst_28870 & (64));
var inst_28872 = inst_28863.cljs$core$ISeq$;
var inst_28873 = (inst_28871) || (inst_28872);
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28873)){
var statearr_28953_29011 = state_28933__$1;
(statearr_28953_29011[(1)] = (16));

} else {
var statearr_28954_29012 = state_28933__$1;
(statearr_28954_29012[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (22))){
var inst_28892 = (state_28933[(14)]);
var inst_28893 = (state_28933[(11)]);
var inst_28891 = (state_28933[(2)]);
var inst_28892__$1 = cljs.core.nth.call(null,inst_28891,(0),null);
var inst_28893__$1 = cljs.core.nth.call(null,inst_28891,(1),null);
var inst_28894 = (inst_28892__$1 == null);
var inst_28895 = cljs.core._EQ_.call(null,inst_28893__$1,change);
var inst_28896 = (inst_28894) || (inst_28895);
var state_28933__$1 = (function (){var statearr_28955 = state_28933;
(statearr_28955[(14)] = inst_28892__$1);

(statearr_28955[(11)] = inst_28893__$1);

return statearr_28955;
})();
if(cljs.core.truth_(inst_28896)){
var statearr_28956_29013 = state_28933__$1;
(statearr_28956_29013[(1)] = (23));

} else {
var statearr_28957_29014 = state_28933__$1;
(statearr_28957_29014[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (36))){
var inst_28885 = (state_28933[(12)]);
var inst_28863 = inst_28885;
var state_28933__$1 = (function (){var statearr_28958 = state_28933;
(statearr_28958[(7)] = inst_28863);

return statearr_28958;
})();
var statearr_28959_29015 = state_28933__$1;
(statearr_28959_29015[(2)] = null);

(statearr_28959_29015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (29))){
var inst_28907 = (state_28933[(10)]);
var state_28933__$1 = state_28933;
var statearr_28960_29016 = state_28933__$1;
(statearr_28960_29016[(2)] = inst_28907);

(statearr_28960_29016[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (6))){
var state_28933__$1 = state_28933;
var statearr_28961_29017 = state_28933__$1;
(statearr_28961_29017[(2)] = false);

(statearr_28961_29017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (28))){
var inst_28903 = (state_28933[(2)]);
var inst_28904 = calc_state.call(null);
var inst_28863 = inst_28904;
var state_28933__$1 = (function (){var statearr_28962 = state_28933;
(statearr_28962[(7)] = inst_28863);

(statearr_28962[(15)] = inst_28903);

return statearr_28962;
})();
var statearr_28963_29018 = state_28933__$1;
(statearr_28963_29018[(2)] = null);

(statearr_28963_29018[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (25))){
var inst_28929 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28964_29019 = state_28933__$1;
(statearr_28964_29019[(2)] = inst_28929);

(statearr_28964_29019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (34))){
var inst_28927 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28965_29020 = state_28933__$1;
(statearr_28965_29020[(2)] = inst_28927);

(statearr_28965_29020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (17))){
var state_28933__$1 = state_28933;
var statearr_28966_29021 = state_28933__$1;
(statearr_28966_29021[(2)] = false);

(statearr_28966_29021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (3))){
var state_28933__$1 = state_28933;
var statearr_28967_29022 = state_28933__$1;
(statearr_28967_29022[(2)] = false);

(statearr_28967_29022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (12))){
var inst_28931 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28933__$1,inst_28931);
} else {
if((state_val_28934 === (2))){
var inst_28839 = (state_28933[(8)]);
var inst_28844 = inst_28839.cljs$lang$protocol_mask$partition0$;
var inst_28845 = (inst_28844 & (64));
var inst_28846 = inst_28839.cljs$core$ISeq$;
var inst_28847 = (inst_28845) || (inst_28846);
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28847)){
var statearr_28968_29023 = state_28933__$1;
(statearr_28968_29023[(1)] = (5));

} else {
var statearr_28969_29024 = state_28933__$1;
(statearr_28969_29024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (23))){
var inst_28892 = (state_28933[(14)]);
var inst_28898 = (inst_28892 == null);
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28898)){
var statearr_28970_29025 = state_28933__$1;
(statearr_28970_29025[(1)] = (26));

} else {
var statearr_28971_29026 = state_28933__$1;
(statearr_28971_29026[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (35))){
var inst_28918 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
if(cljs.core.truth_(inst_28918)){
var statearr_28972_29027 = state_28933__$1;
(statearr_28972_29027[(1)] = (36));

} else {
var statearr_28973_29028 = state_28933__$1;
(statearr_28973_29028[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (19))){
var inst_28863 = (state_28933[(7)]);
var inst_28882 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28863);
var state_28933__$1 = state_28933;
var statearr_28974_29029 = state_28933__$1;
(statearr_28974_29029[(2)] = inst_28882);

(statearr_28974_29029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (11))){
var inst_28863 = (state_28933[(7)]);
var inst_28867 = (inst_28863 == null);
var inst_28868 = cljs.core.not.call(null,inst_28867);
var state_28933__$1 = state_28933;
if(inst_28868){
var statearr_28975_29030 = state_28933__$1;
(statearr_28975_29030[(1)] = (13));

} else {
var statearr_28976_29031 = state_28933__$1;
(statearr_28976_29031[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (9))){
var inst_28839 = (state_28933[(8)]);
var state_28933__$1 = state_28933;
var statearr_28977_29032 = state_28933__$1;
(statearr_28977_29032[(2)] = inst_28839);

(statearr_28977_29032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (5))){
var state_28933__$1 = state_28933;
var statearr_28978_29033 = state_28933__$1;
(statearr_28978_29033[(2)] = true);

(statearr_28978_29033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (14))){
var state_28933__$1 = state_28933;
var statearr_28979_29034 = state_28933__$1;
(statearr_28979_29034[(2)] = false);

(statearr_28979_29034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (26))){
var inst_28893 = (state_28933[(11)]);
var inst_28900 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28893);
var state_28933__$1 = state_28933;
var statearr_28980_29035 = state_28933__$1;
(statearr_28980_29035[(2)] = inst_28900);

(statearr_28980_29035[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (16))){
var state_28933__$1 = state_28933;
var statearr_28981_29036 = state_28933__$1;
(statearr_28981_29036[(2)] = true);

(statearr_28981_29036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (38))){
var inst_28923 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28982_29037 = state_28933__$1;
(statearr_28982_29037[(2)] = inst_28923);

(statearr_28982_29037[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (30))){
var inst_28886 = (state_28933[(9)]);
var inst_28887 = (state_28933[(13)]);
var inst_28893 = (state_28933[(11)]);
var inst_28910 = cljs.core.empty_QMARK_.call(null,inst_28886);
var inst_28911 = inst_28887.call(null,inst_28893);
var inst_28912 = cljs.core.not.call(null,inst_28911);
var inst_28913 = (inst_28910) && (inst_28912);
var state_28933__$1 = state_28933;
var statearr_28983_29038 = state_28933__$1;
(statearr_28983_29038[(2)] = inst_28913);

(statearr_28983_29038[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (10))){
var inst_28839 = (state_28933[(8)]);
var inst_28859 = (state_28933[(2)]);
var inst_28860 = cljs.core.get.call(null,inst_28859,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28861 = cljs.core.get.call(null,inst_28859,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28862 = cljs.core.get.call(null,inst_28859,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28863 = inst_28839;
var state_28933__$1 = (function (){var statearr_28984 = state_28933;
(statearr_28984[(7)] = inst_28863);

(statearr_28984[(16)] = inst_28862);

(statearr_28984[(17)] = inst_28861);

(statearr_28984[(18)] = inst_28860);

return statearr_28984;
})();
var statearr_28985_29039 = state_28933__$1;
(statearr_28985_29039[(2)] = null);

(statearr_28985_29039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (18))){
var inst_28877 = (state_28933[(2)]);
var state_28933__$1 = state_28933;
var statearr_28986_29040 = state_28933__$1;
(statearr_28986_29040[(2)] = inst_28877);

(statearr_28986_29040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (37))){
var state_28933__$1 = state_28933;
var statearr_28987_29041 = state_28933__$1;
(statearr_28987_29041[(2)] = null);

(statearr_28987_29041[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28934 === (8))){
var inst_28839 = (state_28933[(8)]);
var inst_28856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28839);
var state_28933__$1 = state_28933;
var statearr_28988_29042 = state_28933__$1;
(statearr_28988_29042[(2)] = inst_28856);

(statearr_28988_29042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___28996,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19443__auto__,c__19508__auto___28996,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19444__auto__ = null;
var cljs$core$async$mix_$_state_machine__19444__auto____0 = (function (){
var statearr_28992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28992[(0)] = cljs$core$async$mix_$_state_machine__19444__auto__);

(statearr_28992[(1)] = (1));

return statearr_28992;
});
var cljs$core$async$mix_$_state_machine__19444__auto____1 = (function (state_28933){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_28933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e28993){if((e28993 instanceof Object)){
var ex__19447__auto__ = e28993;
var statearr_28994_29043 = state_28933;
(statearr_28994_29043[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29044 = state_28933;
state_28933 = G__29044;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19444__auto__ = function(state_28933){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19444__auto____1.call(this,state_28933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19444__auto____0;
cljs$core$async$mix_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19444__auto____1;
return cljs$core$async$mix_$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___28996,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19510__auto__ = (function (){var statearr_28995 = f__19509__auto__.call(null);
(statearr_28995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___28996);

return statearr_28995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___28996,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16962__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p,v,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args29047 = [];
var len__17364__auto___29050 = arguments.length;
var i__17365__auto___29051 = (0);
while(true){
if((i__17365__auto___29051 < len__17364__auto___29050)){
args29047.push((arguments[i__17365__auto___29051]));

var G__29052 = (i__17365__auto___29051 + (1));
i__17365__auto___29051 = G__29052;
continue;
} else {
}
break;
}

var G__29049 = args29047.length;
switch (G__29049) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29047.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p);
} else {
var m__16962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p,v);
} else {
var m__16962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args29055 = [];
var len__17364__auto___29180 = arguments.length;
var i__17365__auto___29181 = (0);
while(true){
if((i__17365__auto___29181 < len__17364__auto___29180)){
args29055.push((arguments[i__17365__auto___29181]));

var G__29182 = (i__17365__auto___29181 + (1));
i__17365__auto___29181 = G__29182;
continue;
} else {
}
break;
}

var G__29057 = args29055.length;
switch (G__29057) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29055.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16325__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16325__auto__,mults){
return (function (p1__29054_SHARP_){
if(cljs.core.truth_(p1__29054_SHARP_.call(null,topic))){
return p1__29054_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29054_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16325__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29058 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29059){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29059 = meta29059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29060,meta29059__$1){
var self__ = this;
var _29060__$1 = this;
return (new cljs.core.async.t29058(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29059__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29060){
var self__ = this;
var _29060__$1 = this;
return self__.meta29059;
});})(mults,ensure_mult))
;

cljs.core.async.t29058.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29058.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29058.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29058.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29058.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29059","meta29059",1362307214,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t29058.cljs$lang$type = true;

cljs.core.async.t29058.cljs$lang$ctorStr = "cljs.core.async/t29058";

cljs.core.async.t29058.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t29058");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29058 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t29058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29059){
return (new cljs.core.async.t29058(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29059));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29058(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19508__auto___29184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___29184,mults,ensure_mult,p){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___29184,mults,ensure_mult,p){
return (function (state_29132){
var state_val_29133 = (state_29132[(1)]);
if((state_val_29133 === (7))){
var inst_29128 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
var statearr_29134_29185 = state_29132__$1;
(statearr_29134_29185[(2)] = inst_29128);

(statearr_29134_29185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (20))){
var state_29132__$1 = state_29132;
var statearr_29135_29186 = state_29132__$1;
(statearr_29135_29186[(2)] = null);

(statearr_29135_29186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (1))){
var state_29132__$1 = state_29132;
var statearr_29136_29187 = state_29132__$1;
(statearr_29136_29187[(2)] = null);

(statearr_29136_29187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (24))){
var inst_29111 = (state_29132[(7)]);
var inst_29120 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29111);
var state_29132__$1 = state_29132;
var statearr_29137_29188 = state_29132__$1;
(statearr_29137_29188[(2)] = inst_29120);

(statearr_29137_29188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (4))){
var inst_29063 = (state_29132[(8)]);
var inst_29063__$1 = (state_29132[(2)]);
var inst_29064 = (inst_29063__$1 == null);
var state_29132__$1 = (function (){var statearr_29138 = state_29132;
(statearr_29138[(8)] = inst_29063__$1);

return statearr_29138;
})();
if(cljs.core.truth_(inst_29064)){
var statearr_29139_29189 = state_29132__$1;
(statearr_29139_29189[(1)] = (5));

} else {
var statearr_29140_29190 = state_29132__$1;
(statearr_29140_29190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (15))){
var inst_29105 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
var statearr_29141_29191 = state_29132__$1;
(statearr_29141_29191[(2)] = inst_29105);

(statearr_29141_29191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (21))){
var inst_29125 = (state_29132[(2)]);
var state_29132__$1 = (function (){var statearr_29142 = state_29132;
(statearr_29142[(9)] = inst_29125);

return statearr_29142;
})();
var statearr_29143_29192 = state_29132__$1;
(statearr_29143_29192[(2)] = null);

(statearr_29143_29192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (13))){
var inst_29087 = (state_29132[(10)]);
var inst_29089 = cljs.core.chunked_seq_QMARK_.call(null,inst_29087);
var state_29132__$1 = state_29132;
if(inst_29089){
var statearr_29144_29193 = state_29132__$1;
(statearr_29144_29193[(1)] = (16));

} else {
var statearr_29145_29194 = state_29132__$1;
(statearr_29145_29194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (22))){
var inst_29117 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
if(cljs.core.truth_(inst_29117)){
var statearr_29146_29195 = state_29132__$1;
(statearr_29146_29195[(1)] = (23));

} else {
var statearr_29147_29196 = state_29132__$1;
(statearr_29147_29196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (6))){
var inst_29113 = (state_29132[(11)]);
var inst_29111 = (state_29132[(7)]);
var inst_29063 = (state_29132[(8)]);
var inst_29111__$1 = topic_fn.call(null,inst_29063);
var inst_29112 = cljs.core.deref.call(null,mults);
var inst_29113__$1 = cljs.core.get.call(null,inst_29112,inst_29111__$1);
var state_29132__$1 = (function (){var statearr_29148 = state_29132;
(statearr_29148[(11)] = inst_29113__$1);

(statearr_29148[(7)] = inst_29111__$1);

return statearr_29148;
})();
if(cljs.core.truth_(inst_29113__$1)){
var statearr_29149_29197 = state_29132__$1;
(statearr_29149_29197[(1)] = (19));

} else {
var statearr_29150_29198 = state_29132__$1;
(statearr_29150_29198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (25))){
var inst_29122 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
var statearr_29151_29199 = state_29132__$1;
(statearr_29151_29199[(2)] = inst_29122);

(statearr_29151_29199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (17))){
var inst_29087 = (state_29132[(10)]);
var inst_29096 = cljs.core.first.call(null,inst_29087);
var inst_29097 = cljs.core.async.muxch_STAR_.call(null,inst_29096);
var inst_29098 = cljs.core.async.close_BANG_.call(null,inst_29097);
var inst_29099 = cljs.core.next.call(null,inst_29087);
var inst_29073 = inst_29099;
var inst_29074 = null;
var inst_29075 = (0);
var inst_29076 = (0);
var state_29132__$1 = (function (){var statearr_29152 = state_29132;
(statearr_29152[(12)] = inst_29074);

(statearr_29152[(13)] = inst_29076);

(statearr_29152[(14)] = inst_29098);

(statearr_29152[(15)] = inst_29075);

(statearr_29152[(16)] = inst_29073);

return statearr_29152;
})();
var statearr_29153_29200 = state_29132__$1;
(statearr_29153_29200[(2)] = null);

(statearr_29153_29200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (3))){
var inst_29130 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29132__$1,inst_29130);
} else {
if((state_val_29133 === (12))){
var inst_29107 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
var statearr_29154_29201 = state_29132__$1;
(statearr_29154_29201[(2)] = inst_29107);

(statearr_29154_29201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (2))){
var state_29132__$1 = state_29132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29132__$1,(4),ch);
} else {
if((state_val_29133 === (23))){
var state_29132__$1 = state_29132;
var statearr_29155_29202 = state_29132__$1;
(statearr_29155_29202[(2)] = null);

(statearr_29155_29202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (19))){
var inst_29113 = (state_29132[(11)]);
var inst_29063 = (state_29132[(8)]);
var inst_29115 = cljs.core.async.muxch_STAR_.call(null,inst_29113);
var state_29132__$1 = state_29132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29132__$1,(22),inst_29115,inst_29063);
} else {
if((state_val_29133 === (11))){
var inst_29087 = (state_29132[(10)]);
var inst_29073 = (state_29132[(16)]);
var inst_29087__$1 = cljs.core.seq.call(null,inst_29073);
var state_29132__$1 = (function (){var statearr_29156 = state_29132;
(statearr_29156[(10)] = inst_29087__$1);

return statearr_29156;
})();
if(inst_29087__$1){
var statearr_29157_29203 = state_29132__$1;
(statearr_29157_29203[(1)] = (13));

} else {
var statearr_29158_29204 = state_29132__$1;
(statearr_29158_29204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (9))){
var inst_29109 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
var statearr_29159_29205 = state_29132__$1;
(statearr_29159_29205[(2)] = inst_29109);

(statearr_29159_29205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (5))){
var inst_29070 = cljs.core.deref.call(null,mults);
var inst_29071 = cljs.core.vals.call(null,inst_29070);
var inst_29072 = cljs.core.seq.call(null,inst_29071);
var inst_29073 = inst_29072;
var inst_29074 = null;
var inst_29075 = (0);
var inst_29076 = (0);
var state_29132__$1 = (function (){var statearr_29160 = state_29132;
(statearr_29160[(12)] = inst_29074);

(statearr_29160[(13)] = inst_29076);

(statearr_29160[(15)] = inst_29075);

(statearr_29160[(16)] = inst_29073);

return statearr_29160;
})();
var statearr_29161_29206 = state_29132__$1;
(statearr_29161_29206[(2)] = null);

(statearr_29161_29206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (14))){
var state_29132__$1 = state_29132;
var statearr_29165_29207 = state_29132__$1;
(statearr_29165_29207[(2)] = null);

(statearr_29165_29207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (16))){
var inst_29087 = (state_29132[(10)]);
var inst_29091 = cljs.core.chunk_first.call(null,inst_29087);
var inst_29092 = cljs.core.chunk_rest.call(null,inst_29087);
var inst_29093 = cljs.core.count.call(null,inst_29091);
var inst_29073 = inst_29092;
var inst_29074 = inst_29091;
var inst_29075 = inst_29093;
var inst_29076 = (0);
var state_29132__$1 = (function (){var statearr_29166 = state_29132;
(statearr_29166[(12)] = inst_29074);

(statearr_29166[(13)] = inst_29076);

(statearr_29166[(15)] = inst_29075);

(statearr_29166[(16)] = inst_29073);

return statearr_29166;
})();
var statearr_29167_29208 = state_29132__$1;
(statearr_29167_29208[(2)] = null);

(statearr_29167_29208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (10))){
var inst_29074 = (state_29132[(12)]);
var inst_29076 = (state_29132[(13)]);
var inst_29075 = (state_29132[(15)]);
var inst_29073 = (state_29132[(16)]);
var inst_29081 = cljs.core._nth.call(null,inst_29074,inst_29076);
var inst_29082 = cljs.core.async.muxch_STAR_.call(null,inst_29081);
var inst_29083 = cljs.core.async.close_BANG_.call(null,inst_29082);
var inst_29084 = (inst_29076 + (1));
var tmp29162 = inst_29074;
var tmp29163 = inst_29075;
var tmp29164 = inst_29073;
var inst_29073__$1 = tmp29164;
var inst_29074__$1 = tmp29162;
var inst_29075__$1 = tmp29163;
var inst_29076__$1 = inst_29084;
var state_29132__$1 = (function (){var statearr_29168 = state_29132;
(statearr_29168[(17)] = inst_29083);

(statearr_29168[(12)] = inst_29074__$1);

(statearr_29168[(13)] = inst_29076__$1);

(statearr_29168[(15)] = inst_29075__$1);

(statearr_29168[(16)] = inst_29073__$1);

return statearr_29168;
})();
var statearr_29169_29209 = state_29132__$1;
(statearr_29169_29209[(2)] = null);

(statearr_29169_29209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (18))){
var inst_29102 = (state_29132[(2)]);
var state_29132__$1 = state_29132;
var statearr_29170_29210 = state_29132__$1;
(statearr_29170_29210[(2)] = inst_29102);

(statearr_29170_29210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29133 === (8))){
var inst_29076 = (state_29132[(13)]);
var inst_29075 = (state_29132[(15)]);
var inst_29078 = (inst_29076 < inst_29075);
var inst_29079 = inst_29078;
var state_29132__$1 = state_29132;
if(cljs.core.truth_(inst_29079)){
var statearr_29171_29211 = state_29132__$1;
(statearr_29171_29211[(1)] = (10));

} else {
var statearr_29172_29212 = state_29132__$1;
(statearr_29172_29212[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___29184,mults,ensure_mult,p))
;
return ((function (switch__19443__auto__,c__19508__auto___29184,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_29176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29176[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_29176[(1)] = (1));

return statearr_29176;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_29132){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_29132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e29177){if((e29177 instanceof Object)){
var ex__19447__auto__ = e29177;
var statearr_29178_29213 = state_29132;
(statearr_29178_29213[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29214 = state_29132;
state_29132 = G__29214;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_29132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_29132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___29184,mults,ensure_mult,p))
})();
var state__19510__auto__ = (function (){var statearr_29179 = f__19509__auto__.call(null);
(statearr_29179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___29184);

return statearr_29179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___29184,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args29215 = [];
var len__17364__auto___29218 = arguments.length;
var i__17365__auto___29219 = (0);
while(true){
if((i__17365__auto___29219 < len__17364__auto___29218)){
args29215.push((arguments[i__17365__auto___29219]));

var G__29220 = (i__17365__auto___29219 + (1));
i__17365__auto___29219 = G__29220;
continue;
} else {
}
break;
}

var G__29217 = args29215.length;
switch (G__29217) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29215.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args29222 = [];
var len__17364__auto___29225 = arguments.length;
var i__17365__auto___29226 = (0);
while(true){
if((i__17365__auto___29226 < len__17364__auto___29225)){
args29222.push((arguments[i__17365__auto___29226]));

var G__29227 = (i__17365__auto___29226 + (1));
i__17365__auto___29226 = G__29227;
continue;
} else {
}
break;
}

var G__29224 = args29222.length;
switch (G__29224) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29222.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args29229 = [];
var len__17364__auto___29300 = arguments.length;
var i__17365__auto___29301 = (0);
while(true){
if((i__17365__auto___29301 < len__17364__auto___29300)){
args29229.push((arguments[i__17365__auto___29301]));

var G__29302 = (i__17365__auto___29301 + (1));
i__17365__auto___29301 = G__29302;
continue;
} else {
}
break;
}

var G__29231 = args29229.length;
switch (G__29231) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29229.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19508__auto___29304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___29304,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___29304,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29270){
var state_val_29271 = (state_29270[(1)]);
if((state_val_29271 === (7))){
var state_29270__$1 = state_29270;
var statearr_29272_29305 = state_29270__$1;
(statearr_29272_29305[(2)] = null);

(statearr_29272_29305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (1))){
var state_29270__$1 = state_29270;
var statearr_29273_29306 = state_29270__$1;
(statearr_29273_29306[(2)] = null);

(statearr_29273_29306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (4))){
var inst_29234 = (state_29270[(7)]);
var inst_29236 = (inst_29234 < cnt);
var state_29270__$1 = state_29270;
if(cljs.core.truth_(inst_29236)){
var statearr_29274_29307 = state_29270__$1;
(statearr_29274_29307[(1)] = (6));

} else {
var statearr_29275_29308 = state_29270__$1;
(statearr_29275_29308[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (15))){
var inst_29266 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
var statearr_29276_29309 = state_29270__$1;
(statearr_29276_29309[(2)] = inst_29266);

(statearr_29276_29309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (13))){
var inst_29259 = cljs.core.async.close_BANG_.call(null,out);
var state_29270__$1 = state_29270;
var statearr_29277_29310 = state_29270__$1;
(statearr_29277_29310[(2)] = inst_29259);

(statearr_29277_29310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (6))){
var state_29270__$1 = state_29270;
var statearr_29278_29311 = state_29270__$1;
(statearr_29278_29311[(2)] = null);

(statearr_29278_29311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (3))){
var inst_29268 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29270__$1,inst_29268);
} else {
if((state_val_29271 === (12))){
var inst_29256 = (state_29270[(8)]);
var inst_29256__$1 = (state_29270[(2)]);
var inst_29257 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29256__$1);
var state_29270__$1 = (function (){var statearr_29279 = state_29270;
(statearr_29279[(8)] = inst_29256__$1);

return statearr_29279;
})();
if(cljs.core.truth_(inst_29257)){
var statearr_29280_29312 = state_29270__$1;
(statearr_29280_29312[(1)] = (13));

} else {
var statearr_29281_29313 = state_29270__$1;
(statearr_29281_29313[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (2))){
var inst_29233 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29234 = (0);
var state_29270__$1 = (function (){var statearr_29282 = state_29270;
(statearr_29282[(9)] = inst_29233);

(statearr_29282[(7)] = inst_29234);

return statearr_29282;
})();
var statearr_29283_29314 = state_29270__$1;
(statearr_29283_29314[(2)] = null);

(statearr_29283_29314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (11))){
var inst_29234 = (state_29270[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29270,(10),Object,null,(9));
var inst_29243 = chs__$1.call(null,inst_29234);
var inst_29244 = done.call(null,inst_29234);
var inst_29245 = cljs.core.async.take_BANG_.call(null,inst_29243,inst_29244);
var state_29270__$1 = state_29270;
var statearr_29284_29315 = state_29270__$1;
(statearr_29284_29315[(2)] = inst_29245);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29270__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (9))){
var inst_29234 = (state_29270[(7)]);
var inst_29247 = (state_29270[(2)]);
var inst_29248 = (inst_29234 + (1));
var inst_29234__$1 = inst_29248;
var state_29270__$1 = (function (){var statearr_29285 = state_29270;
(statearr_29285[(10)] = inst_29247);

(statearr_29285[(7)] = inst_29234__$1);

return statearr_29285;
})();
var statearr_29286_29316 = state_29270__$1;
(statearr_29286_29316[(2)] = null);

(statearr_29286_29316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (5))){
var inst_29254 = (state_29270[(2)]);
var state_29270__$1 = (function (){var statearr_29287 = state_29270;
(statearr_29287[(11)] = inst_29254);

return statearr_29287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29270__$1,(12),dchan);
} else {
if((state_val_29271 === (14))){
var inst_29256 = (state_29270[(8)]);
var inst_29261 = cljs.core.apply.call(null,f,inst_29256);
var state_29270__$1 = state_29270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29270__$1,(16),out,inst_29261);
} else {
if((state_val_29271 === (16))){
var inst_29263 = (state_29270[(2)]);
var state_29270__$1 = (function (){var statearr_29288 = state_29270;
(statearr_29288[(12)] = inst_29263);

return statearr_29288;
})();
var statearr_29289_29317 = state_29270__$1;
(statearr_29289_29317[(2)] = null);

(statearr_29289_29317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (10))){
var inst_29238 = (state_29270[(2)]);
var inst_29239 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29270__$1 = (function (){var statearr_29290 = state_29270;
(statearr_29290[(13)] = inst_29238);

return statearr_29290;
})();
var statearr_29291_29318 = state_29270__$1;
(statearr_29291_29318[(2)] = inst_29239);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29270__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (8))){
var inst_29252 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
var statearr_29292_29319 = state_29270__$1;
(statearr_29292_29319[(2)] = inst_29252);

(statearr_29292_29319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___29304,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19443__auto__,c__19508__auto___29304,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_29296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29296[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_29296[(1)] = (1));

return statearr_29296;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_29270){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_29270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e29297){if((e29297 instanceof Object)){
var ex__19447__auto__ = e29297;
var statearr_29298_29320 = state_29270;
(statearr_29298_29320[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29321 = state_29270;
state_29270 = G__29321;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_29270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_29270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___29304,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19510__auto__ = (function (){var statearr_29299 = f__19509__auto__.call(null);
(statearr_29299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___29304);

return statearr_29299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___29304,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args29323 = [];
var len__17364__auto___29379 = arguments.length;
var i__17365__auto___29380 = (0);
while(true){
if((i__17365__auto___29380 < len__17364__auto___29379)){
args29323.push((arguments[i__17365__auto___29380]));

var G__29381 = (i__17365__auto___29380 + (1));
i__17365__auto___29380 = G__29381;
continue;
} else {
}
break;
}

var G__29325 = args29323.length;
switch (G__29325) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29323.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19508__auto___29383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___29383,out){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___29383,out){
return (function (state_29355){
var state_val_29356 = (state_29355[(1)]);
if((state_val_29356 === (7))){
var inst_29334 = (state_29355[(7)]);
var inst_29335 = (state_29355[(8)]);
var inst_29334__$1 = (state_29355[(2)]);
var inst_29335__$1 = cljs.core.nth.call(null,inst_29334__$1,(0),null);
var inst_29336 = cljs.core.nth.call(null,inst_29334__$1,(1),null);
var inst_29337 = (inst_29335__$1 == null);
var state_29355__$1 = (function (){var statearr_29357 = state_29355;
(statearr_29357[(7)] = inst_29334__$1);

(statearr_29357[(9)] = inst_29336);

(statearr_29357[(8)] = inst_29335__$1);

return statearr_29357;
})();
if(cljs.core.truth_(inst_29337)){
var statearr_29358_29384 = state_29355__$1;
(statearr_29358_29384[(1)] = (8));

} else {
var statearr_29359_29385 = state_29355__$1;
(statearr_29359_29385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (1))){
var inst_29326 = cljs.core.vec.call(null,chs);
var inst_29327 = inst_29326;
var state_29355__$1 = (function (){var statearr_29360 = state_29355;
(statearr_29360[(10)] = inst_29327);

return statearr_29360;
})();
var statearr_29361_29386 = state_29355__$1;
(statearr_29361_29386[(2)] = null);

(statearr_29361_29386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (4))){
var inst_29327 = (state_29355[(10)]);
var state_29355__$1 = state_29355;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29355__$1,(7),inst_29327);
} else {
if((state_val_29356 === (6))){
var inst_29351 = (state_29355[(2)]);
var state_29355__$1 = state_29355;
var statearr_29362_29387 = state_29355__$1;
(statearr_29362_29387[(2)] = inst_29351);

(statearr_29362_29387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (3))){
var inst_29353 = (state_29355[(2)]);
var state_29355__$1 = state_29355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29355__$1,inst_29353);
} else {
if((state_val_29356 === (2))){
var inst_29327 = (state_29355[(10)]);
var inst_29329 = cljs.core.count.call(null,inst_29327);
var inst_29330 = (inst_29329 > (0));
var state_29355__$1 = state_29355;
if(cljs.core.truth_(inst_29330)){
var statearr_29364_29388 = state_29355__$1;
(statearr_29364_29388[(1)] = (4));

} else {
var statearr_29365_29389 = state_29355__$1;
(statearr_29365_29389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (11))){
var inst_29327 = (state_29355[(10)]);
var inst_29344 = (state_29355[(2)]);
var tmp29363 = inst_29327;
var inst_29327__$1 = tmp29363;
var state_29355__$1 = (function (){var statearr_29366 = state_29355;
(statearr_29366[(10)] = inst_29327__$1);

(statearr_29366[(11)] = inst_29344);

return statearr_29366;
})();
var statearr_29367_29390 = state_29355__$1;
(statearr_29367_29390[(2)] = null);

(statearr_29367_29390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (9))){
var inst_29335 = (state_29355[(8)]);
var state_29355__$1 = state_29355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29355__$1,(11),out,inst_29335);
} else {
if((state_val_29356 === (5))){
var inst_29349 = cljs.core.async.close_BANG_.call(null,out);
var state_29355__$1 = state_29355;
var statearr_29368_29391 = state_29355__$1;
(statearr_29368_29391[(2)] = inst_29349);

(statearr_29368_29391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (10))){
var inst_29347 = (state_29355[(2)]);
var state_29355__$1 = state_29355;
var statearr_29369_29392 = state_29355__$1;
(statearr_29369_29392[(2)] = inst_29347);

(statearr_29369_29392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29356 === (8))){
var inst_29327 = (state_29355[(10)]);
var inst_29334 = (state_29355[(7)]);
var inst_29336 = (state_29355[(9)]);
var inst_29335 = (state_29355[(8)]);
var inst_29339 = (function (){var cs = inst_29327;
var vec__29332 = inst_29334;
var v = inst_29335;
var c = inst_29336;
return ((function (cs,vec__29332,v,c,inst_29327,inst_29334,inst_29336,inst_29335,state_val_29356,c__19508__auto___29383,out){
return (function (p1__29322_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29322_SHARP_);
});
;})(cs,vec__29332,v,c,inst_29327,inst_29334,inst_29336,inst_29335,state_val_29356,c__19508__auto___29383,out))
})();
var inst_29340 = cljs.core.filterv.call(null,inst_29339,inst_29327);
var inst_29327__$1 = inst_29340;
var state_29355__$1 = (function (){var statearr_29370 = state_29355;
(statearr_29370[(10)] = inst_29327__$1);

return statearr_29370;
})();
var statearr_29371_29393 = state_29355__$1;
(statearr_29371_29393[(2)] = null);

(statearr_29371_29393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___29383,out))
;
return ((function (switch__19443__auto__,c__19508__auto___29383,out){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_29375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29375[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_29375[(1)] = (1));

return statearr_29375;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_29355){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_29355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e29376){if((e29376 instanceof Object)){
var ex__19447__auto__ = e29376;
var statearr_29377_29394 = state_29355;
(statearr_29377_29394[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29395 = state_29355;
state_29355 = G__29395;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_29355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_29355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___29383,out))
})();
var state__19510__auto__ = (function (){var statearr_29378 = f__19509__auto__.call(null);
(statearr_29378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___29383);

return statearr_29378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___29383,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args29396 = [];
var len__17364__auto___29445 = arguments.length;
var i__17365__auto___29446 = (0);
while(true){
if((i__17365__auto___29446 < len__17364__auto___29445)){
args29396.push((arguments[i__17365__auto___29446]));

var G__29447 = (i__17365__auto___29446 + (1));
i__17365__auto___29446 = G__29447;
continue;
} else {
}
break;
}

var G__29398 = args29396.length;
switch (G__29398) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29396.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19508__auto___29449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___29449,out){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___29449,out){
return (function (state_29422){
var state_val_29423 = (state_29422[(1)]);
if((state_val_29423 === (7))){
var inst_29404 = (state_29422[(7)]);
var inst_29404__$1 = (state_29422[(2)]);
var inst_29405 = (inst_29404__$1 == null);
var inst_29406 = cljs.core.not.call(null,inst_29405);
var state_29422__$1 = (function (){var statearr_29424 = state_29422;
(statearr_29424[(7)] = inst_29404__$1);

return statearr_29424;
})();
if(inst_29406){
var statearr_29425_29450 = state_29422__$1;
(statearr_29425_29450[(1)] = (8));

} else {
var statearr_29426_29451 = state_29422__$1;
(statearr_29426_29451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (1))){
var inst_29399 = (0);
var state_29422__$1 = (function (){var statearr_29427 = state_29422;
(statearr_29427[(8)] = inst_29399);

return statearr_29427;
})();
var statearr_29428_29452 = state_29422__$1;
(statearr_29428_29452[(2)] = null);

(statearr_29428_29452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (4))){
var state_29422__$1 = state_29422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29422__$1,(7),ch);
} else {
if((state_val_29423 === (6))){
var inst_29417 = (state_29422[(2)]);
var state_29422__$1 = state_29422;
var statearr_29429_29453 = state_29422__$1;
(statearr_29429_29453[(2)] = inst_29417);

(statearr_29429_29453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (3))){
var inst_29419 = (state_29422[(2)]);
var inst_29420 = cljs.core.async.close_BANG_.call(null,out);
var state_29422__$1 = (function (){var statearr_29430 = state_29422;
(statearr_29430[(9)] = inst_29419);

return statearr_29430;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29422__$1,inst_29420);
} else {
if((state_val_29423 === (2))){
var inst_29399 = (state_29422[(8)]);
var inst_29401 = (inst_29399 < n);
var state_29422__$1 = state_29422;
if(cljs.core.truth_(inst_29401)){
var statearr_29431_29454 = state_29422__$1;
(statearr_29431_29454[(1)] = (4));

} else {
var statearr_29432_29455 = state_29422__$1;
(statearr_29432_29455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (11))){
var inst_29399 = (state_29422[(8)]);
var inst_29409 = (state_29422[(2)]);
var inst_29410 = (inst_29399 + (1));
var inst_29399__$1 = inst_29410;
var state_29422__$1 = (function (){var statearr_29433 = state_29422;
(statearr_29433[(8)] = inst_29399__$1);

(statearr_29433[(10)] = inst_29409);

return statearr_29433;
})();
var statearr_29434_29456 = state_29422__$1;
(statearr_29434_29456[(2)] = null);

(statearr_29434_29456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (9))){
var state_29422__$1 = state_29422;
var statearr_29435_29457 = state_29422__$1;
(statearr_29435_29457[(2)] = null);

(statearr_29435_29457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (5))){
var state_29422__$1 = state_29422;
var statearr_29436_29458 = state_29422__$1;
(statearr_29436_29458[(2)] = null);

(statearr_29436_29458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (10))){
var inst_29414 = (state_29422[(2)]);
var state_29422__$1 = state_29422;
var statearr_29437_29459 = state_29422__$1;
(statearr_29437_29459[(2)] = inst_29414);

(statearr_29437_29459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (8))){
var inst_29404 = (state_29422[(7)]);
var state_29422__$1 = state_29422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29422__$1,(11),out,inst_29404);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___29449,out))
;
return ((function (switch__19443__auto__,c__19508__auto___29449,out){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_29441 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29441[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_29441[(1)] = (1));

return statearr_29441;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_29422){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_29422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object)){
var ex__19447__auto__ = e29442;
var statearr_29443_29460 = state_29422;
(statearr_29443_29460[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29461 = state_29422;
state_29422 = G__29461;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_29422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_29422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___29449,out))
})();
var state__19510__auto__ = (function (){var statearr_29444 = f__19509__auto__.call(null);
(statearr_29444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___29449);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___29449,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29469 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29469 = (function (map_LT_,f,ch,meta29470){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29470 = meta29470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29471,meta29470__$1){
var self__ = this;
var _29471__$1 = this;
return (new cljs.core.async.t29469(self__.map_LT_,self__.f,self__.ch,meta29470__$1));
});

cljs.core.async.t29469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29471){
var self__ = this;
var _29471__$1 = this;
return self__.meta29470;
});

cljs.core.async.t29469.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29469.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29469.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29472 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29472 = (function (map_LT_,f,ch,meta29470,_,fn1,meta29473){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29470 = meta29470;
this._ = _;
this.fn1 = fn1;
this.meta29473 = meta29473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29474,meta29473__$1){
var self__ = this;
var _29474__$1 = this;
return (new cljs.core.async.t29472(self__.map_LT_,self__.f,self__.ch,self__.meta29470,self__._,self__.fn1,meta29473__$1));
});})(___$1))
;

cljs.core.async.t29472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29474){
var self__ = this;
var _29474__$1 = this;
return self__.meta29473;
});})(___$1))
;

cljs.core.async.t29472.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29472.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29472.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29462_SHARP_){
return f1.call(null,(((p1__29462_SHARP_ == null))?null:self__.f.call(null,p1__29462_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29472.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29470","meta29470",-1560174056,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t29469","cljs.core.async/t29469",-1193231914,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29473","meta29473",1957563894,null)], null);
});})(___$1))
;

cljs.core.async.t29472.cljs$lang$type = true;

cljs.core.async.t29472.cljs$lang$ctorStr = "cljs.core.async/t29472";

cljs.core.async.t29472.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t29472");
});})(___$1))
;

cljs.core.async.__GT_t29472 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29472(map_LT___$1,f__$1,ch__$1,meta29470__$1,___$2,fn1__$1,meta29473){
return (new cljs.core.async.t29472(map_LT___$1,f__$1,ch__$1,meta29470__$1,___$2,fn1__$1,meta29473));
});})(___$1))
;

}

return (new cljs.core.async.t29472(self__.map_LT_,self__.f,self__.ch,self__.meta29470,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16313__auto__ = ret;
if(cljs.core.truth_(and__16313__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16313__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29469.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29470","meta29470",-1560174056,null)], null);
});

cljs.core.async.t29469.cljs$lang$type = true;

cljs.core.async.t29469.cljs$lang$ctorStr = "cljs.core.async/t29469";

cljs.core.async.t29469.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t29469");
});

cljs.core.async.__GT_t29469 = (function cljs$core$async$map_LT__$___GT_t29469(map_LT___$1,f__$1,ch__$1,meta29470){
return (new cljs.core.async.t29469(map_LT___$1,f__$1,ch__$1,meta29470));
});

}

return (new cljs.core.async.t29469(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29478 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29478 = (function (map_GT_,f,ch,meta29479){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29479 = meta29479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29480,meta29479__$1){
var self__ = this;
var _29480__$1 = this;
return (new cljs.core.async.t29478(self__.map_GT_,self__.f,self__.ch,meta29479__$1));
});

cljs.core.async.t29478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29480){
var self__ = this;
var _29480__$1 = this;
return self__.meta29479;
});

cljs.core.async.t29478.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29478.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29478.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29479","meta29479",1557330551,null)], null);
});

cljs.core.async.t29478.cljs$lang$type = true;

cljs.core.async.t29478.cljs$lang$ctorStr = "cljs.core.async/t29478";

cljs.core.async.t29478.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t29478");
});

cljs.core.async.__GT_t29478 = (function cljs$core$async$map_GT__$___GT_t29478(map_GT___$1,f__$1,ch__$1,meta29479){
return (new cljs.core.async.t29478(map_GT___$1,f__$1,ch__$1,meta29479));
});

}

return (new cljs.core.async.t29478(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29484 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29484 = (function (filter_GT_,p,ch,meta29485){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29485 = meta29485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29486,meta29485__$1){
var self__ = this;
var _29486__$1 = this;
return (new cljs.core.async.t29484(self__.filter_GT_,self__.p,self__.ch,meta29485__$1));
});

cljs.core.async.t29484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29486){
var self__ = this;
var _29486__$1 = this;
return self__.meta29485;
});

cljs.core.async.t29484.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29484.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29484.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29484.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29484.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29484.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29484.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29485","meta29485",-153505457,null)], null);
});

cljs.core.async.t29484.cljs$lang$type = true;

cljs.core.async.t29484.cljs$lang$ctorStr = "cljs.core.async/t29484";

cljs.core.async.t29484.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t29484");
});

cljs.core.async.__GT_t29484 = (function cljs$core$async$filter_GT__$___GT_t29484(filter_GT___$1,p__$1,ch__$1,meta29485){
return (new cljs.core.async.t29484(filter_GT___$1,p__$1,ch__$1,meta29485));
});

}

return (new cljs.core.async.t29484(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args29487 = [];
var len__17364__auto___29531 = arguments.length;
var i__17365__auto___29532 = (0);
while(true){
if((i__17365__auto___29532 < len__17364__auto___29531)){
args29487.push((arguments[i__17365__auto___29532]));

var G__29533 = (i__17365__auto___29532 + (1));
i__17365__auto___29532 = G__29533;
continue;
} else {
}
break;
}

var G__29489 = args29487.length;
switch (G__29489) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29487.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19508__auto___29535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___29535,out){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___29535,out){
return (function (state_29510){
var state_val_29511 = (state_29510[(1)]);
if((state_val_29511 === (7))){
var inst_29506 = (state_29510[(2)]);
var state_29510__$1 = state_29510;
var statearr_29512_29536 = state_29510__$1;
(statearr_29512_29536[(2)] = inst_29506);

(statearr_29512_29536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (1))){
var state_29510__$1 = state_29510;
var statearr_29513_29537 = state_29510__$1;
(statearr_29513_29537[(2)] = null);

(statearr_29513_29537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (4))){
var inst_29492 = (state_29510[(7)]);
var inst_29492__$1 = (state_29510[(2)]);
var inst_29493 = (inst_29492__$1 == null);
var state_29510__$1 = (function (){var statearr_29514 = state_29510;
(statearr_29514[(7)] = inst_29492__$1);

return statearr_29514;
})();
if(cljs.core.truth_(inst_29493)){
var statearr_29515_29538 = state_29510__$1;
(statearr_29515_29538[(1)] = (5));

} else {
var statearr_29516_29539 = state_29510__$1;
(statearr_29516_29539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (6))){
var inst_29492 = (state_29510[(7)]);
var inst_29497 = p.call(null,inst_29492);
var state_29510__$1 = state_29510;
if(cljs.core.truth_(inst_29497)){
var statearr_29517_29540 = state_29510__$1;
(statearr_29517_29540[(1)] = (8));

} else {
var statearr_29518_29541 = state_29510__$1;
(statearr_29518_29541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (3))){
var inst_29508 = (state_29510[(2)]);
var state_29510__$1 = state_29510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29510__$1,inst_29508);
} else {
if((state_val_29511 === (2))){
var state_29510__$1 = state_29510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29510__$1,(4),ch);
} else {
if((state_val_29511 === (11))){
var inst_29500 = (state_29510[(2)]);
var state_29510__$1 = state_29510;
var statearr_29519_29542 = state_29510__$1;
(statearr_29519_29542[(2)] = inst_29500);

(statearr_29519_29542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (9))){
var state_29510__$1 = state_29510;
var statearr_29520_29543 = state_29510__$1;
(statearr_29520_29543[(2)] = null);

(statearr_29520_29543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (5))){
var inst_29495 = cljs.core.async.close_BANG_.call(null,out);
var state_29510__$1 = state_29510;
var statearr_29521_29544 = state_29510__$1;
(statearr_29521_29544[(2)] = inst_29495);

(statearr_29521_29544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (10))){
var inst_29503 = (state_29510[(2)]);
var state_29510__$1 = (function (){var statearr_29522 = state_29510;
(statearr_29522[(8)] = inst_29503);

return statearr_29522;
})();
var statearr_29523_29545 = state_29510__$1;
(statearr_29523_29545[(2)] = null);

(statearr_29523_29545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (8))){
var inst_29492 = (state_29510[(7)]);
var state_29510__$1 = state_29510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29510__$1,(11),out,inst_29492);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___29535,out))
;
return ((function (switch__19443__auto__,c__19508__auto___29535,out){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_29527 = [null,null,null,null,null,null,null,null,null];
(statearr_29527[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_29527[(1)] = (1));

return statearr_29527;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_29510){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_29510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e29528){if((e29528 instanceof Object)){
var ex__19447__auto__ = e29528;
var statearr_29529_29546 = state_29510;
(statearr_29529_29546[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29547 = state_29510;
state_29510 = G__29547;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_29510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_29510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___29535,out))
})();
var state__19510__auto__ = (function (){var statearr_29530 = f__19509__auto__.call(null);
(statearr_29530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___29535);

return statearr_29530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___29535,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args29548 = [];
var len__17364__auto___29551 = arguments.length;
var i__17365__auto___29552 = (0);
while(true){
if((i__17365__auto___29552 < len__17364__auto___29551)){
args29548.push((arguments[i__17365__auto___29552]));

var G__29553 = (i__17365__auto___29552 + (1));
i__17365__auto___29552 = G__29553;
continue;
} else {
}
break;
}

var G__29550 = args29548.length;
switch (G__29550) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29548.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto__){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto__){
return (function (state_29720){
var state_val_29721 = (state_29720[(1)]);
if((state_val_29721 === (7))){
var inst_29716 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
var statearr_29722_29763 = state_29720__$1;
(statearr_29722_29763[(2)] = inst_29716);

(statearr_29722_29763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (20))){
var inst_29686 = (state_29720[(7)]);
var inst_29697 = (state_29720[(2)]);
var inst_29698 = cljs.core.next.call(null,inst_29686);
var inst_29672 = inst_29698;
var inst_29673 = null;
var inst_29674 = (0);
var inst_29675 = (0);
var state_29720__$1 = (function (){var statearr_29723 = state_29720;
(statearr_29723[(8)] = inst_29675);

(statearr_29723[(9)] = inst_29674);

(statearr_29723[(10)] = inst_29697);

(statearr_29723[(11)] = inst_29672);

(statearr_29723[(12)] = inst_29673);

return statearr_29723;
})();
var statearr_29724_29764 = state_29720__$1;
(statearr_29724_29764[(2)] = null);

(statearr_29724_29764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (1))){
var state_29720__$1 = state_29720;
var statearr_29725_29765 = state_29720__$1;
(statearr_29725_29765[(2)] = null);

(statearr_29725_29765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (4))){
var inst_29661 = (state_29720[(13)]);
var inst_29661__$1 = (state_29720[(2)]);
var inst_29662 = (inst_29661__$1 == null);
var state_29720__$1 = (function (){var statearr_29726 = state_29720;
(statearr_29726[(13)] = inst_29661__$1);

return statearr_29726;
})();
if(cljs.core.truth_(inst_29662)){
var statearr_29727_29766 = state_29720__$1;
(statearr_29727_29766[(1)] = (5));

} else {
var statearr_29728_29767 = state_29720__$1;
(statearr_29728_29767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (15))){
var state_29720__$1 = state_29720;
var statearr_29732_29768 = state_29720__$1;
(statearr_29732_29768[(2)] = null);

(statearr_29732_29768[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (21))){
var state_29720__$1 = state_29720;
var statearr_29733_29769 = state_29720__$1;
(statearr_29733_29769[(2)] = null);

(statearr_29733_29769[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (13))){
var inst_29675 = (state_29720[(8)]);
var inst_29674 = (state_29720[(9)]);
var inst_29672 = (state_29720[(11)]);
var inst_29673 = (state_29720[(12)]);
var inst_29682 = (state_29720[(2)]);
var inst_29683 = (inst_29675 + (1));
var tmp29729 = inst_29674;
var tmp29730 = inst_29672;
var tmp29731 = inst_29673;
var inst_29672__$1 = tmp29730;
var inst_29673__$1 = tmp29731;
var inst_29674__$1 = tmp29729;
var inst_29675__$1 = inst_29683;
var state_29720__$1 = (function (){var statearr_29734 = state_29720;
(statearr_29734[(8)] = inst_29675__$1);

(statearr_29734[(9)] = inst_29674__$1);

(statearr_29734[(14)] = inst_29682);

(statearr_29734[(11)] = inst_29672__$1);

(statearr_29734[(12)] = inst_29673__$1);

return statearr_29734;
})();
var statearr_29735_29770 = state_29720__$1;
(statearr_29735_29770[(2)] = null);

(statearr_29735_29770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (22))){
var state_29720__$1 = state_29720;
var statearr_29736_29771 = state_29720__$1;
(statearr_29736_29771[(2)] = null);

(statearr_29736_29771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (6))){
var inst_29661 = (state_29720[(13)]);
var inst_29670 = f.call(null,inst_29661);
var inst_29671 = cljs.core.seq.call(null,inst_29670);
var inst_29672 = inst_29671;
var inst_29673 = null;
var inst_29674 = (0);
var inst_29675 = (0);
var state_29720__$1 = (function (){var statearr_29737 = state_29720;
(statearr_29737[(8)] = inst_29675);

(statearr_29737[(9)] = inst_29674);

(statearr_29737[(11)] = inst_29672);

(statearr_29737[(12)] = inst_29673);

return statearr_29737;
})();
var statearr_29738_29772 = state_29720__$1;
(statearr_29738_29772[(2)] = null);

(statearr_29738_29772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (17))){
var inst_29686 = (state_29720[(7)]);
var inst_29690 = cljs.core.chunk_first.call(null,inst_29686);
var inst_29691 = cljs.core.chunk_rest.call(null,inst_29686);
var inst_29692 = cljs.core.count.call(null,inst_29690);
var inst_29672 = inst_29691;
var inst_29673 = inst_29690;
var inst_29674 = inst_29692;
var inst_29675 = (0);
var state_29720__$1 = (function (){var statearr_29739 = state_29720;
(statearr_29739[(8)] = inst_29675);

(statearr_29739[(9)] = inst_29674);

(statearr_29739[(11)] = inst_29672);

(statearr_29739[(12)] = inst_29673);

return statearr_29739;
})();
var statearr_29740_29773 = state_29720__$1;
(statearr_29740_29773[(2)] = null);

(statearr_29740_29773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (3))){
var inst_29718 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29720__$1,inst_29718);
} else {
if((state_val_29721 === (12))){
var inst_29706 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
var statearr_29741_29774 = state_29720__$1;
(statearr_29741_29774[(2)] = inst_29706);

(statearr_29741_29774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (2))){
var state_29720__$1 = state_29720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29720__$1,(4),in$);
} else {
if((state_val_29721 === (23))){
var inst_29714 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
var statearr_29742_29775 = state_29720__$1;
(statearr_29742_29775[(2)] = inst_29714);

(statearr_29742_29775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (19))){
var inst_29701 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
var statearr_29743_29776 = state_29720__$1;
(statearr_29743_29776[(2)] = inst_29701);

(statearr_29743_29776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (11))){
var inst_29672 = (state_29720[(11)]);
var inst_29686 = (state_29720[(7)]);
var inst_29686__$1 = cljs.core.seq.call(null,inst_29672);
var state_29720__$1 = (function (){var statearr_29744 = state_29720;
(statearr_29744[(7)] = inst_29686__$1);

return statearr_29744;
})();
if(inst_29686__$1){
var statearr_29745_29777 = state_29720__$1;
(statearr_29745_29777[(1)] = (14));

} else {
var statearr_29746_29778 = state_29720__$1;
(statearr_29746_29778[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (9))){
var inst_29708 = (state_29720[(2)]);
var inst_29709 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29720__$1 = (function (){var statearr_29747 = state_29720;
(statearr_29747[(15)] = inst_29708);

return statearr_29747;
})();
if(cljs.core.truth_(inst_29709)){
var statearr_29748_29779 = state_29720__$1;
(statearr_29748_29779[(1)] = (21));

} else {
var statearr_29749_29780 = state_29720__$1;
(statearr_29749_29780[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (5))){
var inst_29664 = cljs.core.async.close_BANG_.call(null,out);
var state_29720__$1 = state_29720;
var statearr_29750_29781 = state_29720__$1;
(statearr_29750_29781[(2)] = inst_29664);

(statearr_29750_29781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (14))){
var inst_29686 = (state_29720[(7)]);
var inst_29688 = cljs.core.chunked_seq_QMARK_.call(null,inst_29686);
var state_29720__$1 = state_29720;
if(inst_29688){
var statearr_29751_29782 = state_29720__$1;
(statearr_29751_29782[(1)] = (17));

} else {
var statearr_29752_29783 = state_29720__$1;
(statearr_29752_29783[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (16))){
var inst_29704 = (state_29720[(2)]);
var state_29720__$1 = state_29720;
var statearr_29753_29784 = state_29720__$1;
(statearr_29753_29784[(2)] = inst_29704);

(statearr_29753_29784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29721 === (10))){
var inst_29675 = (state_29720[(8)]);
var inst_29673 = (state_29720[(12)]);
var inst_29680 = cljs.core._nth.call(null,inst_29673,inst_29675);
var state_29720__$1 = state_29720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29720__$1,(13),out,inst_29680);
} else {
if((state_val_29721 === (18))){
var inst_29686 = (state_29720[(7)]);
var inst_29695 = cljs.core.first.call(null,inst_29686);
var state_29720__$1 = state_29720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29720__$1,(20),out,inst_29695);
} else {
if((state_val_29721 === (8))){
var inst_29675 = (state_29720[(8)]);
var inst_29674 = (state_29720[(9)]);
var inst_29677 = (inst_29675 < inst_29674);
var inst_29678 = inst_29677;
var state_29720__$1 = state_29720;
if(cljs.core.truth_(inst_29678)){
var statearr_29754_29785 = state_29720__$1;
(statearr_29754_29785[(1)] = (10));

} else {
var statearr_29755_29786 = state_29720__$1;
(statearr_29755_29786[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto__))
;
return ((function (switch__19443__auto__,c__19508__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19444__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19444__auto____0 = (function (){
var statearr_29759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29759[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19444__auto__);

(statearr_29759[(1)] = (1));

return statearr_29759;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19444__auto____1 = (function (state_29720){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_29720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e29760){if((e29760 instanceof Object)){
var ex__19447__auto__ = e29760;
var statearr_29761_29787 = state_29720;
(statearr_29761_29787[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29788 = state_29720;
state_29720 = G__29788;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19444__auto__ = function(state_29720){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19444__auto____1.call(this,state_29720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19444__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19444__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto__))
})();
var state__19510__auto__ = (function (){var statearr_29762 = f__19509__auto__.call(null);
(statearr_29762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto__);

return statearr_29762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto__))
);

return c__19508__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args29789 = [];
var len__17364__auto___29792 = arguments.length;
var i__17365__auto___29793 = (0);
while(true){
if((i__17365__auto___29793 < len__17364__auto___29792)){
args29789.push((arguments[i__17365__auto___29793]));

var G__29794 = (i__17365__auto___29793 + (1));
i__17365__auto___29793 = G__29794;
continue;
} else {
}
break;
}

var G__29791 = args29789.length;
switch (G__29791) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29789.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args29796 = [];
var len__17364__auto___29799 = arguments.length;
var i__17365__auto___29800 = (0);
while(true){
if((i__17365__auto___29800 < len__17364__auto___29799)){
args29796.push((arguments[i__17365__auto___29800]));

var G__29801 = (i__17365__auto___29800 + (1));
i__17365__auto___29800 = G__29801;
continue;
} else {
}
break;
}

var G__29798 = args29796.length;
switch (G__29798) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29796.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args29803 = [];
var len__17364__auto___29854 = arguments.length;
var i__17365__auto___29855 = (0);
while(true){
if((i__17365__auto___29855 < len__17364__auto___29854)){
args29803.push((arguments[i__17365__auto___29855]));

var G__29856 = (i__17365__auto___29855 + (1));
i__17365__auto___29855 = G__29856;
continue;
} else {
}
break;
}

var G__29805 = args29803.length;
switch (G__29805) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29803.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19508__auto___29858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___29858,out){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___29858,out){
return (function (state_29829){
var state_val_29830 = (state_29829[(1)]);
if((state_val_29830 === (7))){
var inst_29824 = (state_29829[(2)]);
var state_29829__$1 = state_29829;
var statearr_29831_29859 = state_29829__$1;
(statearr_29831_29859[(2)] = inst_29824);

(statearr_29831_29859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (1))){
var inst_29806 = null;
var state_29829__$1 = (function (){var statearr_29832 = state_29829;
(statearr_29832[(7)] = inst_29806);

return statearr_29832;
})();
var statearr_29833_29860 = state_29829__$1;
(statearr_29833_29860[(2)] = null);

(statearr_29833_29860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (4))){
var inst_29809 = (state_29829[(8)]);
var inst_29809__$1 = (state_29829[(2)]);
var inst_29810 = (inst_29809__$1 == null);
var inst_29811 = cljs.core.not.call(null,inst_29810);
var state_29829__$1 = (function (){var statearr_29834 = state_29829;
(statearr_29834[(8)] = inst_29809__$1);

return statearr_29834;
})();
if(inst_29811){
var statearr_29835_29861 = state_29829__$1;
(statearr_29835_29861[(1)] = (5));

} else {
var statearr_29836_29862 = state_29829__$1;
(statearr_29836_29862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (6))){
var state_29829__$1 = state_29829;
var statearr_29837_29863 = state_29829__$1;
(statearr_29837_29863[(2)] = null);

(statearr_29837_29863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (3))){
var inst_29826 = (state_29829[(2)]);
var inst_29827 = cljs.core.async.close_BANG_.call(null,out);
var state_29829__$1 = (function (){var statearr_29838 = state_29829;
(statearr_29838[(9)] = inst_29826);

return statearr_29838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29829__$1,inst_29827);
} else {
if((state_val_29830 === (2))){
var state_29829__$1 = state_29829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29829__$1,(4),ch);
} else {
if((state_val_29830 === (11))){
var inst_29809 = (state_29829[(8)]);
var inst_29818 = (state_29829[(2)]);
var inst_29806 = inst_29809;
var state_29829__$1 = (function (){var statearr_29839 = state_29829;
(statearr_29839[(7)] = inst_29806);

(statearr_29839[(10)] = inst_29818);

return statearr_29839;
})();
var statearr_29840_29864 = state_29829__$1;
(statearr_29840_29864[(2)] = null);

(statearr_29840_29864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (9))){
var inst_29809 = (state_29829[(8)]);
var state_29829__$1 = state_29829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29829__$1,(11),out,inst_29809);
} else {
if((state_val_29830 === (5))){
var inst_29809 = (state_29829[(8)]);
var inst_29806 = (state_29829[(7)]);
var inst_29813 = cljs.core._EQ_.call(null,inst_29809,inst_29806);
var state_29829__$1 = state_29829;
if(inst_29813){
var statearr_29842_29865 = state_29829__$1;
(statearr_29842_29865[(1)] = (8));

} else {
var statearr_29843_29866 = state_29829__$1;
(statearr_29843_29866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (10))){
var inst_29821 = (state_29829[(2)]);
var state_29829__$1 = state_29829;
var statearr_29844_29867 = state_29829__$1;
(statearr_29844_29867[(2)] = inst_29821);

(statearr_29844_29867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (8))){
var inst_29806 = (state_29829[(7)]);
var tmp29841 = inst_29806;
var inst_29806__$1 = tmp29841;
var state_29829__$1 = (function (){var statearr_29845 = state_29829;
(statearr_29845[(7)] = inst_29806__$1);

return statearr_29845;
})();
var statearr_29846_29868 = state_29829__$1;
(statearr_29846_29868[(2)] = null);

(statearr_29846_29868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___29858,out))
;
return ((function (switch__19443__auto__,c__19508__auto___29858,out){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_29850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29850[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_29850[(1)] = (1));

return statearr_29850;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_29829){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_29829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e29851){if((e29851 instanceof Object)){
var ex__19447__auto__ = e29851;
var statearr_29852_29869 = state_29829;
(statearr_29852_29869[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29870 = state_29829;
state_29829 = G__29870;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_29829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_29829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___29858,out))
})();
var state__19510__auto__ = (function (){var statearr_29853 = f__19509__auto__.call(null);
(statearr_29853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___29858);

return statearr_29853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___29858,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args29871 = [];
var len__17364__auto___29941 = arguments.length;
var i__17365__auto___29942 = (0);
while(true){
if((i__17365__auto___29942 < len__17364__auto___29941)){
args29871.push((arguments[i__17365__auto___29942]));

var G__29943 = (i__17365__auto___29942 + (1));
i__17365__auto___29942 = G__29943;
continue;
} else {
}
break;
}

var G__29873 = args29871.length;
switch (G__29873) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29871.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19508__auto___29945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___29945,out){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___29945,out){
return (function (state_29911){
var state_val_29912 = (state_29911[(1)]);
if((state_val_29912 === (7))){
var inst_29907 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29913_29946 = state_29911__$1;
(statearr_29913_29946[(2)] = inst_29907);

(statearr_29913_29946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (1))){
var inst_29874 = (new Array(n));
var inst_29875 = inst_29874;
var inst_29876 = (0);
var state_29911__$1 = (function (){var statearr_29914 = state_29911;
(statearr_29914[(7)] = inst_29876);

(statearr_29914[(8)] = inst_29875);

return statearr_29914;
})();
var statearr_29915_29947 = state_29911__$1;
(statearr_29915_29947[(2)] = null);

(statearr_29915_29947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (4))){
var inst_29879 = (state_29911[(9)]);
var inst_29879__$1 = (state_29911[(2)]);
var inst_29880 = (inst_29879__$1 == null);
var inst_29881 = cljs.core.not.call(null,inst_29880);
var state_29911__$1 = (function (){var statearr_29916 = state_29911;
(statearr_29916[(9)] = inst_29879__$1);

return statearr_29916;
})();
if(inst_29881){
var statearr_29917_29948 = state_29911__$1;
(statearr_29917_29948[(1)] = (5));

} else {
var statearr_29918_29949 = state_29911__$1;
(statearr_29918_29949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (15))){
var inst_29901 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29919_29950 = state_29911__$1;
(statearr_29919_29950[(2)] = inst_29901);

(statearr_29919_29950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (13))){
var state_29911__$1 = state_29911;
var statearr_29920_29951 = state_29911__$1;
(statearr_29920_29951[(2)] = null);

(statearr_29920_29951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (6))){
var inst_29876 = (state_29911[(7)]);
var inst_29897 = (inst_29876 > (0));
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29897)){
var statearr_29921_29952 = state_29911__$1;
(statearr_29921_29952[(1)] = (12));

} else {
var statearr_29922_29953 = state_29911__$1;
(statearr_29922_29953[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (3))){
var inst_29909 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29911__$1,inst_29909);
} else {
if((state_val_29912 === (12))){
var inst_29875 = (state_29911[(8)]);
var inst_29899 = cljs.core.vec.call(null,inst_29875);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29911__$1,(15),out,inst_29899);
} else {
if((state_val_29912 === (2))){
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(4),ch);
} else {
if((state_val_29912 === (11))){
var inst_29891 = (state_29911[(2)]);
var inst_29892 = (new Array(n));
var inst_29875 = inst_29892;
var inst_29876 = (0);
var state_29911__$1 = (function (){var statearr_29923 = state_29911;
(statearr_29923[(10)] = inst_29891);

(statearr_29923[(7)] = inst_29876);

(statearr_29923[(8)] = inst_29875);

return statearr_29923;
})();
var statearr_29924_29954 = state_29911__$1;
(statearr_29924_29954[(2)] = null);

(statearr_29924_29954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (9))){
var inst_29875 = (state_29911[(8)]);
var inst_29889 = cljs.core.vec.call(null,inst_29875);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29911__$1,(11),out,inst_29889);
} else {
if((state_val_29912 === (5))){
var inst_29876 = (state_29911[(7)]);
var inst_29875 = (state_29911[(8)]);
var inst_29884 = (state_29911[(11)]);
var inst_29879 = (state_29911[(9)]);
var inst_29883 = (inst_29875[inst_29876] = inst_29879);
var inst_29884__$1 = (inst_29876 + (1));
var inst_29885 = (inst_29884__$1 < n);
var state_29911__$1 = (function (){var statearr_29925 = state_29911;
(statearr_29925[(11)] = inst_29884__$1);

(statearr_29925[(12)] = inst_29883);

return statearr_29925;
})();
if(cljs.core.truth_(inst_29885)){
var statearr_29926_29955 = state_29911__$1;
(statearr_29926_29955[(1)] = (8));

} else {
var statearr_29927_29956 = state_29911__$1;
(statearr_29927_29956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (14))){
var inst_29904 = (state_29911[(2)]);
var inst_29905 = cljs.core.async.close_BANG_.call(null,out);
var state_29911__$1 = (function (){var statearr_29929 = state_29911;
(statearr_29929[(13)] = inst_29904);

return statearr_29929;
})();
var statearr_29930_29957 = state_29911__$1;
(statearr_29930_29957[(2)] = inst_29905);

(statearr_29930_29957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (10))){
var inst_29895 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29931_29958 = state_29911__$1;
(statearr_29931_29958[(2)] = inst_29895);

(statearr_29931_29958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (8))){
var inst_29875 = (state_29911[(8)]);
var inst_29884 = (state_29911[(11)]);
var tmp29928 = inst_29875;
var inst_29875__$1 = tmp29928;
var inst_29876 = inst_29884;
var state_29911__$1 = (function (){var statearr_29932 = state_29911;
(statearr_29932[(7)] = inst_29876);

(statearr_29932[(8)] = inst_29875__$1);

return statearr_29932;
})();
var statearr_29933_29959 = state_29911__$1;
(statearr_29933_29959[(2)] = null);

(statearr_29933_29959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___29945,out))
;
return ((function (switch__19443__auto__,c__19508__auto___29945,out){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_29937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29937[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_29937[(1)] = (1));

return statearr_29937;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_29911){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_29911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e29938){if((e29938 instanceof Object)){
var ex__19447__auto__ = e29938;
var statearr_29939_29960 = state_29911;
(statearr_29939_29960[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29961 = state_29911;
state_29911 = G__29961;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_29911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_29911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___29945,out))
})();
var state__19510__auto__ = (function (){var statearr_29940 = f__19509__auto__.call(null);
(statearr_29940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___29945);

return statearr_29940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___29945,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args29962 = [];
var len__17364__auto___30036 = arguments.length;
var i__17365__auto___30037 = (0);
while(true){
if((i__17365__auto___30037 < len__17364__auto___30036)){
args29962.push((arguments[i__17365__auto___30037]));

var G__30038 = (i__17365__auto___30037 + (1));
i__17365__auto___30037 = G__30038;
continue;
} else {
}
break;
}

var G__29964 = args29962.length;
switch (G__29964) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29962.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19508__auto___30040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___30040,out){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___30040,out){
return (function (state_30006){
var state_val_30007 = (state_30006[(1)]);
if((state_val_30007 === (7))){
var inst_30002 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30008_30041 = state_30006__$1;
(statearr_30008_30041[(2)] = inst_30002);

(statearr_30008_30041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (1))){
var inst_29965 = [];
var inst_29966 = inst_29965;
var inst_29967 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30006__$1 = (function (){var statearr_30009 = state_30006;
(statearr_30009[(7)] = inst_29966);

(statearr_30009[(8)] = inst_29967);

return statearr_30009;
})();
var statearr_30010_30042 = state_30006__$1;
(statearr_30010_30042[(2)] = null);

(statearr_30010_30042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (4))){
var inst_29970 = (state_30006[(9)]);
var inst_29970__$1 = (state_30006[(2)]);
var inst_29971 = (inst_29970__$1 == null);
var inst_29972 = cljs.core.not.call(null,inst_29971);
var state_30006__$1 = (function (){var statearr_30011 = state_30006;
(statearr_30011[(9)] = inst_29970__$1);

return statearr_30011;
})();
if(inst_29972){
var statearr_30012_30043 = state_30006__$1;
(statearr_30012_30043[(1)] = (5));

} else {
var statearr_30013_30044 = state_30006__$1;
(statearr_30013_30044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (15))){
var inst_29996 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30014_30045 = state_30006__$1;
(statearr_30014_30045[(2)] = inst_29996);

(statearr_30014_30045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (13))){
var state_30006__$1 = state_30006;
var statearr_30015_30046 = state_30006__$1;
(statearr_30015_30046[(2)] = null);

(statearr_30015_30046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (6))){
var inst_29966 = (state_30006[(7)]);
var inst_29991 = inst_29966.length;
var inst_29992 = (inst_29991 > (0));
var state_30006__$1 = state_30006;
if(cljs.core.truth_(inst_29992)){
var statearr_30016_30047 = state_30006__$1;
(statearr_30016_30047[(1)] = (12));

} else {
var statearr_30017_30048 = state_30006__$1;
(statearr_30017_30048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (3))){
var inst_30004 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30006__$1,inst_30004);
} else {
if((state_val_30007 === (12))){
var inst_29966 = (state_30006[(7)]);
var inst_29994 = cljs.core.vec.call(null,inst_29966);
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30006__$1,(15),out,inst_29994);
} else {
if((state_val_30007 === (2))){
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30006__$1,(4),ch);
} else {
if((state_val_30007 === (11))){
var inst_29970 = (state_30006[(9)]);
var inst_29974 = (state_30006[(10)]);
var inst_29984 = (state_30006[(2)]);
var inst_29985 = [];
var inst_29986 = inst_29985.push(inst_29970);
var inst_29966 = inst_29985;
var inst_29967 = inst_29974;
var state_30006__$1 = (function (){var statearr_30018 = state_30006;
(statearr_30018[(11)] = inst_29986);

(statearr_30018[(7)] = inst_29966);

(statearr_30018[(8)] = inst_29967);

(statearr_30018[(12)] = inst_29984);

return statearr_30018;
})();
var statearr_30019_30049 = state_30006__$1;
(statearr_30019_30049[(2)] = null);

(statearr_30019_30049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (9))){
var inst_29966 = (state_30006[(7)]);
var inst_29982 = cljs.core.vec.call(null,inst_29966);
var state_30006__$1 = state_30006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30006__$1,(11),out,inst_29982);
} else {
if((state_val_30007 === (5))){
var inst_29970 = (state_30006[(9)]);
var inst_29974 = (state_30006[(10)]);
var inst_29967 = (state_30006[(8)]);
var inst_29974__$1 = f.call(null,inst_29970);
var inst_29975 = cljs.core._EQ_.call(null,inst_29974__$1,inst_29967);
var inst_29976 = cljs.core.keyword_identical_QMARK_.call(null,inst_29967,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29977 = (inst_29975) || (inst_29976);
var state_30006__$1 = (function (){var statearr_30020 = state_30006;
(statearr_30020[(10)] = inst_29974__$1);

return statearr_30020;
})();
if(cljs.core.truth_(inst_29977)){
var statearr_30021_30050 = state_30006__$1;
(statearr_30021_30050[(1)] = (8));

} else {
var statearr_30022_30051 = state_30006__$1;
(statearr_30022_30051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (14))){
var inst_29999 = (state_30006[(2)]);
var inst_30000 = cljs.core.async.close_BANG_.call(null,out);
var state_30006__$1 = (function (){var statearr_30024 = state_30006;
(statearr_30024[(13)] = inst_29999);

return statearr_30024;
})();
var statearr_30025_30052 = state_30006__$1;
(statearr_30025_30052[(2)] = inst_30000);

(statearr_30025_30052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (10))){
var inst_29989 = (state_30006[(2)]);
var state_30006__$1 = state_30006;
var statearr_30026_30053 = state_30006__$1;
(statearr_30026_30053[(2)] = inst_29989);

(statearr_30026_30053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30007 === (8))){
var inst_29970 = (state_30006[(9)]);
var inst_29966 = (state_30006[(7)]);
var inst_29974 = (state_30006[(10)]);
var inst_29979 = inst_29966.push(inst_29970);
var tmp30023 = inst_29966;
var inst_29966__$1 = tmp30023;
var inst_29967 = inst_29974;
var state_30006__$1 = (function (){var statearr_30027 = state_30006;
(statearr_30027[(14)] = inst_29979);

(statearr_30027[(7)] = inst_29966__$1);

(statearr_30027[(8)] = inst_29967);

return statearr_30027;
})();
var statearr_30028_30054 = state_30006__$1;
(statearr_30028_30054[(2)] = null);

(statearr_30028_30054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19508__auto___30040,out))
;
return ((function (switch__19443__auto__,c__19508__auto___30040,out){
return (function() {
var cljs$core$async$state_machine__19444__auto__ = null;
var cljs$core$async$state_machine__19444__auto____0 = (function (){
var statearr_30032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30032[(0)] = cljs$core$async$state_machine__19444__auto__);

(statearr_30032[(1)] = (1));

return statearr_30032;
});
var cljs$core$async$state_machine__19444__auto____1 = (function (state_30006){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_30006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e30033){if((e30033 instanceof Object)){
var ex__19447__auto__ = e30033;
var statearr_30034_30055 = state_30006;
(statearr_30034_30055[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30056 = state_30006;
state_30006 = G__30056;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
cljs$core$async$state_machine__19444__auto__ = function(state_30006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19444__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19444__auto____1.call(this,state_30006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19444__auto____0;
cljs$core$async$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19444__auto____1;
return cljs$core$async$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___30040,out))
})();
var state__19510__auto__ = (function (){var statearr_30035 = f__19509__auto__.call(null);
(statearr_30035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___30040);

return statearr_30035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___30040,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map