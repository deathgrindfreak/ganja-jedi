// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16325__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16325__auto__){
return or__16325__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16325__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26288_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26288_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26293 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26294 = null;
var count__26295 = (0);
var i__26296 = (0);
while(true){
if((i__26296 < count__26295)){
var n = cljs.core._nth.call(null,chunk__26294,i__26296);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26297 = seq__26293;
var G__26298 = chunk__26294;
var G__26299 = count__26295;
var G__26300 = (i__26296 + (1));
seq__26293 = G__26297;
chunk__26294 = G__26298;
count__26295 = G__26299;
i__26296 = G__26300;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26293);
if(temp__4425__auto__){
var seq__26293__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26293__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__26293__$1);
var G__26301 = cljs.core.chunk_rest.call(null,seq__26293__$1);
var G__26302 = c__17109__auto__;
var G__26303 = cljs.core.count.call(null,c__17109__auto__);
var G__26304 = (0);
seq__26293 = G__26301;
chunk__26294 = G__26302;
count__26295 = G__26303;
i__26296 = G__26304;
continue;
} else {
var n = cljs.core.first.call(null,seq__26293__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26305 = cljs.core.next.call(null,seq__26293__$1);
var G__26306 = null;
var G__26307 = (0);
var G__26308 = (0);
seq__26293 = G__26305;
chunk__26294 = G__26306;
count__26295 = G__26307;
i__26296 = G__26308;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26347_26354 = cljs.core.seq.call(null,deps);
var chunk__26348_26355 = null;
var count__26349_26356 = (0);
var i__26350_26357 = (0);
while(true){
if((i__26350_26357 < count__26349_26356)){
var dep_26358 = cljs.core._nth.call(null,chunk__26348_26355,i__26350_26357);
topo_sort_helper_STAR_.call(null,dep_26358,(depth + (1)),state);

var G__26359 = seq__26347_26354;
var G__26360 = chunk__26348_26355;
var G__26361 = count__26349_26356;
var G__26362 = (i__26350_26357 + (1));
seq__26347_26354 = G__26359;
chunk__26348_26355 = G__26360;
count__26349_26356 = G__26361;
i__26350_26357 = G__26362;
continue;
} else {
var temp__4425__auto___26363 = cljs.core.seq.call(null,seq__26347_26354);
if(temp__4425__auto___26363){
var seq__26347_26364__$1 = temp__4425__auto___26363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26347_26364__$1)){
var c__17109__auto___26365 = cljs.core.chunk_first.call(null,seq__26347_26364__$1);
var G__26366 = cljs.core.chunk_rest.call(null,seq__26347_26364__$1);
var G__26367 = c__17109__auto___26365;
var G__26368 = cljs.core.count.call(null,c__17109__auto___26365);
var G__26369 = (0);
seq__26347_26354 = G__26366;
chunk__26348_26355 = G__26367;
count__26349_26356 = G__26368;
i__26350_26357 = G__26369;
continue;
} else {
var dep_26370 = cljs.core.first.call(null,seq__26347_26364__$1);
topo_sort_helper_STAR_.call(null,dep_26370,(depth + (1)),state);

var G__26371 = cljs.core.next.call(null,seq__26347_26364__$1);
var G__26372 = null;
var G__26373 = (0);
var G__26374 = (0);
seq__26347_26354 = G__26371;
chunk__26348_26355 = G__26372;
count__26349_26356 = G__26373;
i__26350_26357 = G__26374;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26351){
var vec__26353 = p__26351;
var x = cljs.core.nth.call(null,vec__26353,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26353,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26353,x,xs,get_deps__$1){
return (function (p1__26309_SHARP_){
return clojure.set.difference.call(null,p1__26309_SHARP_,x);
});})(vec__26353,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26387 = cljs.core.seq.call(null,provides);
var chunk__26388 = null;
var count__26389 = (0);
var i__26390 = (0);
while(true){
if((i__26390 < count__26389)){
var prov = cljs.core._nth.call(null,chunk__26388,i__26390);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26391_26399 = cljs.core.seq.call(null,requires);
var chunk__26392_26400 = null;
var count__26393_26401 = (0);
var i__26394_26402 = (0);
while(true){
if((i__26394_26402 < count__26393_26401)){
var req_26403 = cljs.core._nth.call(null,chunk__26392_26400,i__26394_26402);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26403,prov);

var G__26404 = seq__26391_26399;
var G__26405 = chunk__26392_26400;
var G__26406 = count__26393_26401;
var G__26407 = (i__26394_26402 + (1));
seq__26391_26399 = G__26404;
chunk__26392_26400 = G__26405;
count__26393_26401 = G__26406;
i__26394_26402 = G__26407;
continue;
} else {
var temp__4425__auto___26408 = cljs.core.seq.call(null,seq__26391_26399);
if(temp__4425__auto___26408){
var seq__26391_26409__$1 = temp__4425__auto___26408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26391_26409__$1)){
var c__17109__auto___26410 = cljs.core.chunk_first.call(null,seq__26391_26409__$1);
var G__26411 = cljs.core.chunk_rest.call(null,seq__26391_26409__$1);
var G__26412 = c__17109__auto___26410;
var G__26413 = cljs.core.count.call(null,c__17109__auto___26410);
var G__26414 = (0);
seq__26391_26399 = G__26411;
chunk__26392_26400 = G__26412;
count__26393_26401 = G__26413;
i__26394_26402 = G__26414;
continue;
} else {
var req_26415 = cljs.core.first.call(null,seq__26391_26409__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26415,prov);

var G__26416 = cljs.core.next.call(null,seq__26391_26409__$1);
var G__26417 = null;
var G__26418 = (0);
var G__26419 = (0);
seq__26391_26399 = G__26416;
chunk__26392_26400 = G__26417;
count__26393_26401 = G__26418;
i__26394_26402 = G__26419;
continue;
}
} else {
}
}
break;
}

var G__26420 = seq__26387;
var G__26421 = chunk__26388;
var G__26422 = count__26389;
var G__26423 = (i__26390 + (1));
seq__26387 = G__26420;
chunk__26388 = G__26421;
count__26389 = G__26422;
i__26390 = G__26423;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26387);
if(temp__4425__auto__){
var seq__26387__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26387__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__26387__$1);
var G__26424 = cljs.core.chunk_rest.call(null,seq__26387__$1);
var G__26425 = c__17109__auto__;
var G__26426 = cljs.core.count.call(null,c__17109__auto__);
var G__26427 = (0);
seq__26387 = G__26424;
chunk__26388 = G__26425;
count__26389 = G__26426;
i__26390 = G__26427;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26387__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26395_26428 = cljs.core.seq.call(null,requires);
var chunk__26396_26429 = null;
var count__26397_26430 = (0);
var i__26398_26431 = (0);
while(true){
if((i__26398_26431 < count__26397_26430)){
var req_26432 = cljs.core._nth.call(null,chunk__26396_26429,i__26398_26431);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26432,prov);

var G__26433 = seq__26395_26428;
var G__26434 = chunk__26396_26429;
var G__26435 = count__26397_26430;
var G__26436 = (i__26398_26431 + (1));
seq__26395_26428 = G__26433;
chunk__26396_26429 = G__26434;
count__26397_26430 = G__26435;
i__26398_26431 = G__26436;
continue;
} else {
var temp__4425__auto___26437__$1 = cljs.core.seq.call(null,seq__26395_26428);
if(temp__4425__auto___26437__$1){
var seq__26395_26438__$1 = temp__4425__auto___26437__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26395_26438__$1)){
var c__17109__auto___26439 = cljs.core.chunk_first.call(null,seq__26395_26438__$1);
var G__26440 = cljs.core.chunk_rest.call(null,seq__26395_26438__$1);
var G__26441 = c__17109__auto___26439;
var G__26442 = cljs.core.count.call(null,c__17109__auto___26439);
var G__26443 = (0);
seq__26395_26428 = G__26440;
chunk__26396_26429 = G__26441;
count__26397_26430 = G__26442;
i__26398_26431 = G__26443;
continue;
} else {
var req_26444 = cljs.core.first.call(null,seq__26395_26438__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26444,prov);

var G__26445 = cljs.core.next.call(null,seq__26395_26438__$1);
var G__26446 = null;
var G__26447 = (0);
var G__26448 = (0);
seq__26395_26428 = G__26445;
chunk__26396_26429 = G__26446;
count__26397_26430 = G__26447;
i__26398_26431 = G__26448;
continue;
}
} else {
}
}
break;
}

var G__26449 = cljs.core.next.call(null,seq__26387__$1);
var G__26450 = null;
var G__26451 = (0);
var G__26452 = (0);
seq__26387 = G__26449;
chunk__26388 = G__26450;
count__26389 = G__26451;
i__26390 = G__26452;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26457_26461 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26458_26462 = null;
var count__26459_26463 = (0);
var i__26460_26464 = (0);
while(true){
if((i__26460_26464 < count__26459_26463)){
var ns_26465 = cljs.core._nth.call(null,chunk__26458_26462,i__26460_26464);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26465);

var G__26466 = seq__26457_26461;
var G__26467 = chunk__26458_26462;
var G__26468 = count__26459_26463;
var G__26469 = (i__26460_26464 + (1));
seq__26457_26461 = G__26466;
chunk__26458_26462 = G__26467;
count__26459_26463 = G__26468;
i__26460_26464 = G__26469;
continue;
} else {
var temp__4425__auto___26470 = cljs.core.seq.call(null,seq__26457_26461);
if(temp__4425__auto___26470){
var seq__26457_26471__$1 = temp__4425__auto___26470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26457_26471__$1)){
var c__17109__auto___26472 = cljs.core.chunk_first.call(null,seq__26457_26471__$1);
var G__26473 = cljs.core.chunk_rest.call(null,seq__26457_26471__$1);
var G__26474 = c__17109__auto___26472;
var G__26475 = cljs.core.count.call(null,c__17109__auto___26472);
var G__26476 = (0);
seq__26457_26461 = G__26473;
chunk__26458_26462 = G__26474;
count__26459_26463 = G__26475;
i__26460_26464 = G__26476;
continue;
} else {
var ns_26477 = cljs.core.first.call(null,seq__26457_26471__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26477);

var G__26478 = cljs.core.next.call(null,seq__26457_26471__$1);
var G__26479 = null;
var G__26480 = (0);
var G__26481 = (0);
seq__26457_26461 = G__26478;
chunk__26458_26462 = G__26479;
count__26459_26463 = G__26480;
i__26460_26464 = G__26481;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 * in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16325__auto__ = goog.require__;
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26482__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26483__i = 0, G__26483__a = new Array(arguments.length -  0);
while (G__26483__i < G__26483__a.length) {G__26483__a[G__26483__i] = arguments[G__26483__i + 0]; ++G__26483__i;}
  args = new cljs.core.IndexedSeq(G__26483__a,0);
} 
return G__26482__delegate.call(this,args);};
G__26482.cljs$lang$maxFixedArity = 0;
G__26482.cljs$lang$applyTo = (function (arglist__26484){
var args = cljs.core.seq(arglist__26484);
return G__26482__delegate(args);
});
G__26482.cljs$core$IFn$_invoke$arity$variadic = G__26482__delegate;
return G__26482;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26486 = cljs.core._EQ_;
var expr__26487 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26486.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26487))){
var path_parts = ((function (pred__26486,expr__26487){
return (function (p1__26485_SHARP_){
return clojure.string.split.call(null,p1__26485_SHARP_,/[\/\\]/);
});})(pred__26486,expr__26487))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26486,expr__26487){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e26489){if((e26489 instanceof Error)){
var e = e26489;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26489;

}
}})());
});
;})(path_parts,sep,root,pred__26486,expr__26487))
} else {
if(cljs.core.truth_(pred__26486.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26487))){
return ((function (pred__26486,expr__26487){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26486,expr__26487){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26486,expr__26487))
);

return deferred.addErrback(((function (deferred,pred__26486,expr__26487){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26486,expr__26487))
);
});
;})(pred__26486,expr__26487))
} else {
return ((function (pred__26486,expr__26487){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26486,expr__26487))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26490,callback){
var map__26493 = p__26490;
var map__26493__$1 = ((((!((map__26493 == null)))?((((map__26493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26493):map__26493);
var file_msg = map__26493__$1;
var request_url = cljs.core.get.call(null,map__26493__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26493,map__26493__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26493,map__26493__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto__){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto__){
return (function (state_26517){
var state_val_26518 = (state_26517[(1)]);
if((state_val_26518 === (7))){
var inst_26513 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
var statearr_26519_26539 = state_26517__$1;
(statearr_26519_26539[(2)] = inst_26513);

(statearr_26519_26539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (1))){
var state_26517__$1 = state_26517;
var statearr_26520_26540 = state_26517__$1;
(statearr_26520_26540[(2)] = null);

(statearr_26520_26540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (4))){
var inst_26497 = (state_26517[(7)]);
var inst_26497__$1 = (state_26517[(2)]);
var state_26517__$1 = (function (){var statearr_26521 = state_26517;
(statearr_26521[(7)] = inst_26497__$1);

return statearr_26521;
})();
if(cljs.core.truth_(inst_26497__$1)){
var statearr_26522_26541 = state_26517__$1;
(statearr_26522_26541[(1)] = (5));

} else {
var statearr_26523_26542 = state_26517__$1;
(statearr_26523_26542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (6))){
var state_26517__$1 = state_26517;
var statearr_26524_26543 = state_26517__$1;
(statearr_26524_26543[(2)] = null);

(statearr_26524_26543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (3))){
var inst_26515 = (state_26517[(2)]);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26517__$1,inst_26515);
} else {
if((state_val_26518 === (2))){
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26517__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26518 === (11))){
var inst_26509 = (state_26517[(2)]);
var state_26517__$1 = (function (){var statearr_26525 = state_26517;
(statearr_26525[(8)] = inst_26509);

return statearr_26525;
})();
var statearr_26526_26544 = state_26517__$1;
(statearr_26526_26544[(2)] = null);

(statearr_26526_26544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (9))){
var inst_26503 = (state_26517[(9)]);
var inst_26501 = (state_26517[(10)]);
var inst_26505 = inst_26503.call(null,inst_26501);
var state_26517__$1 = state_26517;
var statearr_26527_26545 = state_26517__$1;
(statearr_26527_26545[(2)] = inst_26505);

(statearr_26527_26545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (5))){
var inst_26497 = (state_26517[(7)]);
var inst_26499 = figwheel.client.file_reloading.blocking_load.call(null,inst_26497);
var state_26517__$1 = state_26517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26517__$1,(8),inst_26499);
} else {
if((state_val_26518 === (10))){
var inst_26501 = (state_26517[(10)]);
var inst_26507 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26501);
var state_26517__$1 = state_26517;
var statearr_26528_26546 = state_26517__$1;
(statearr_26528_26546[(2)] = inst_26507);

(statearr_26528_26546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26518 === (8))){
var inst_26503 = (state_26517[(9)]);
var inst_26497 = (state_26517[(7)]);
var inst_26501 = (state_26517[(2)]);
var inst_26502 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26503__$1 = cljs.core.get.call(null,inst_26502,inst_26497);
var state_26517__$1 = (function (){var statearr_26529 = state_26517;
(statearr_26529[(9)] = inst_26503__$1);

(statearr_26529[(10)] = inst_26501);

return statearr_26529;
})();
if(cljs.core.truth_(inst_26503__$1)){
var statearr_26530_26547 = state_26517__$1;
(statearr_26530_26547[(1)] = (9));

} else {
var statearr_26531_26548 = state_26517__$1;
(statearr_26531_26548[(1)] = (10));

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
});})(c__19508__auto__))
;
return ((function (switch__19443__auto__,c__19508__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19444__auto__ = null;
var figwheel$client$file_reloading$state_machine__19444__auto____0 = (function (){
var statearr_26535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26535[(0)] = figwheel$client$file_reloading$state_machine__19444__auto__);

(statearr_26535[(1)] = (1));

return statearr_26535;
});
var figwheel$client$file_reloading$state_machine__19444__auto____1 = (function (state_26517){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_26517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e26536){if((e26536 instanceof Object)){
var ex__19447__auto__ = e26536;
var statearr_26537_26549 = state_26517;
(statearr_26537_26549[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26550 = state_26517;
state_26517 = G__26550;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19444__auto__ = function(state_26517){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19444__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19444__auto____1.call(this,state_26517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19444__auto____0;
figwheel$client$file_reloading$state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19444__auto____1;
return figwheel$client$file_reloading$state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto__))
})();
var state__19510__auto__ = (function (){var statearr_26538 = f__19509__auto__.call(null);
(statearr_26538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto__);

return statearr_26538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto__))
);

return c__19508__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26551,callback){
var map__26554 = p__26551;
var map__26554__$1 = ((((!((map__26554 == null)))?((((map__26554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26554):map__26554);
var file_msg = map__26554__$1;
var namespace = cljs.core.get.call(null,map__26554__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26554,map__26554__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26554,map__26554__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26556){
var map__26559 = p__26556;
var map__26559__$1 = ((((!((map__26559 == null)))?((((map__26559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26559):map__26559);
var file_msg = map__26559__$1;
var namespace = cljs.core.get.call(null,map__26559__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16313__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16313__auto__){
var or__16325__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
var or__16325__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16325__auto____$1)){
return or__16325__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16313__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26561,callback){
var map__26564 = p__26561;
var map__26564__$1 = ((((!((map__26564 == null)))?((((map__26564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26564):map__26564);
var file_msg = map__26564__$1;
var request_url = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26564__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19508__auto___26652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___26652,out){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___26652,out){
return (function (state_26634){
var state_val_26635 = (state_26634[(1)]);
if((state_val_26635 === (1))){
var inst_26612 = cljs.core.nth.call(null,files,(0),null);
var inst_26613 = cljs.core.nthnext.call(null,files,(1));
var inst_26614 = files;
var state_26634__$1 = (function (){var statearr_26636 = state_26634;
(statearr_26636[(7)] = inst_26614);

(statearr_26636[(8)] = inst_26613);

(statearr_26636[(9)] = inst_26612);

return statearr_26636;
})();
var statearr_26637_26653 = state_26634__$1;
(statearr_26637_26653[(2)] = null);

(statearr_26637_26653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (2))){
var inst_26614 = (state_26634[(7)]);
var inst_26617 = (state_26634[(10)]);
var inst_26617__$1 = cljs.core.nth.call(null,inst_26614,(0),null);
var inst_26618 = cljs.core.nthnext.call(null,inst_26614,(1));
var inst_26619 = (inst_26617__$1 == null);
var inst_26620 = cljs.core.not.call(null,inst_26619);
var state_26634__$1 = (function (){var statearr_26638 = state_26634;
(statearr_26638[(11)] = inst_26618);

(statearr_26638[(10)] = inst_26617__$1);

return statearr_26638;
})();
if(inst_26620){
var statearr_26639_26654 = state_26634__$1;
(statearr_26639_26654[(1)] = (4));

} else {
var statearr_26640_26655 = state_26634__$1;
(statearr_26640_26655[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (3))){
var inst_26632 = (state_26634[(2)]);
var state_26634__$1 = state_26634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26634__$1,inst_26632);
} else {
if((state_val_26635 === (4))){
var inst_26617 = (state_26634[(10)]);
var inst_26622 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26617);
var state_26634__$1 = state_26634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26634__$1,(7),inst_26622);
} else {
if((state_val_26635 === (5))){
var inst_26628 = cljs.core.async.close_BANG_.call(null,out);
var state_26634__$1 = state_26634;
var statearr_26641_26656 = state_26634__$1;
(statearr_26641_26656[(2)] = inst_26628);

(statearr_26641_26656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (6))){
var inst_26630 = (state_26634[(2)]);
var state_26634__$1 = state_26634;
var statearr_26642_26657 = state_26634__$1;
(statearr_26642_26657[(2)] = inst_26630);

(statearr_26642_26657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26635 === (7))){
var inst_26618 = (state_26634[(11)]);
var inst_26624 = (state_26634[(2)]);
var inst_26625 = cljs.core.async.put_BANG_.call(null,out,inst_26624);
var inst_26614 = inst_26618;
var state_26634__$1 = (function (){var statearr_26643 = state_26634;
(statearr_26643[(7)] = inst_26614);

(statearr_26643[(12)] = inst_26625);

return statearr_26643;
})();
var statearr_26644_26658 = state_26634__$1;
(statearr_26644_26658[(2)] = null);

(statearr_26644_26658[(1)] = (2));


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
});})(c__19508__auto___26652,out))
;
return ((function (switch__19443__auto__,c__19508__auto___26652,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto____0 = (function (){
var statearr_26648 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26648[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto__);

(statearr_26648[(1)] = (1));

return statearr_26648;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto____1 = (function (state_26634){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_26634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e26649){if((e26649 instanceof Object)){
var ex__19447__auto__ = e26649;
var statearr_26650_26659 = state_26634;
(statearr_26650_26659[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26660 = state_26634;
state_26634 = G__26660;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto__ = function(state_26634){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto____1.call(this,state_26634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___26652,out))
})();
var state__19510__auto__ = (function (){var statearr_26651 = f__19509__auto__.call(null);
(statearr_26651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___26652);

return statearr_26651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___26652,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26661,opts){
var map__26665 = p__26661;
var map__26665__$1 = ((((!((map__26665 == null)))?((((map__26665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26665):map__26665);
var eval_body__$1 = cljs.core.get.call(null,map__26665__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16313__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16313__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16313__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26667){var e = e26667;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26668_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26668_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26673){
var vec__26674 = p__26673;
var k = cljs.core.nth.call(null,vec__26674,(0),null);
var v = cljs.core.nth.call(null,vec__26674,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26675){
var vec__26676 = p__26675;
var k = cljs.core.nth.call(null,vec__26676,(0),null);
var v = cljs.core.nth.call(null,vec__26676,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26680,p__26681){
var map__26928 = p__26680;
var map__26928__$1 = ((((!((map__26928 == null)))?((((map__26928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26928):map__26928);
var opts = map__26928__$1;
var before_jsload = cljs.core.get.call(null,map__26928__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26928__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26928__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26929 = p__26681;
var map__26929__$1 = ((((!((map__26929 == null)))?((((map__26929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26929):map__26929);
var msg = map__26929__$1;
var files = cljs.core.get.call(null,map__26929__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26929__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26929__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27082){
var state_val_27083 = (state_27082[(1)]);
if((state_val_27083 === (7))){
var inst_26943 = (state_27082[(7)]);
var inst_26945 = (state_27082[(8)]);
var inst_26946 = (state_27082[(9)]);
var inst_26944 = (state_27082[(10)]);
var inst_26951 = cljs.core._nth.call(null,inst_26944,inst_26946);
var inst_26952 = figwheel.client.file_reloading.eval_body.call(null,inst_26951,opts);
var inst_26953 = (inst_26946 + (1));
var tmp27084 = inst_26943;
var tmp27085 = inst_26945;
var tmp27086 = inst_26944;
var inst_26943__$1 = tmp27084;
var inst_26944__$1 = tmp27086;
var inst_26945__$1 = tmp27085;
var inst_26946__$1 = inst_26953;
var state_27082__$1 = (function (){var statearr_27087 = state_27082;
(statearr_27087[(7)] = inst_26943__$1);

(statearr_27087[(11)] = inst_26952);

(statearr_27087[(8)] = inst_26945__$1);

(statearr_27087[(9)] = inst_26946__$1);

(statearr_27087[(10)] = inst_26944__$1);

return statearr_27087;
})();
var statearr_27088_27174 = state_27082__$1;
(statearr_27088_27174[(2)] = null);

(statearr_27088_27174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (20))){
var inst_26986 = (state_27082[(12)]);
var inst_26994 = figwheel.client.file_reloading.sort_files.call(null,inst_26986);
var state_27082__$1 = state_27082;
var statearr_27089_27175 = state_27082__$1;
(statearr_27089_27175[(2)] = inst_26994);

(statearr_27089_27175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (27))){
var state_27082__$1 = state_27082;
var statearr_27090_27176 = state_27082__$1;
(statearr_27090_27176[(2)] = null);

(statearr_27090_27176[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (1))){
var inst_26935 = (state_27082[(13)]);
var inst_26932 = before_jsload.call(null,files);
var inst_26933 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26934 = (function (){return ((function (inst_26935,inst_26932,inst_26933,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26677_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26677_SHARP_);
});
;})(inst_26935,inst_26932,inst_26933,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26935__$1 = cljs.core.filter.call(null,inst_26934,files);
var inst_26936 = cljs.core.not_empty.call(null,inst_26935__$1);
var state_27082__$1 = (function (){var statearr_27091 = state_27082;
(statearr_27091[(14)] = inst_26933);

(statearr_27091[(15)] = inst_26932);

(statearr_27091[(13)] = inst_26935__$1);

return statearr_27091;
})();
if(cljs.core.truth_(inst_26936)){
var statearr_27092_27177 = state_27082__$1;
(statearr_27092_27177[(1)] = (2));

} else {
var statearr_27093_27178 = state_27082__$1;
(statearr_27093_27178[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (24))){
var state_27082__$1 = state_27082;
var statearr_27094_27179 = state_27082__$1;
(statearr_27094_27179[(2)] = null);

(statearr_27094_27179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (39))){
var inst_27036 = (state_27082[(16)]);
var state_27082__$1 = state_27082;
var statearr_27095_27180 = state_27082__$1;
(statearr_27095_27180[(2)] = inst_27036);

(statearr_27095_27180[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (46))){
var inst_27077 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27096_27181 = state_27082__$1;
(statearr_27096_27181[(2)] = inst_27077);

(statearr_27096_27181[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (4))){
var inst_26980 = (state_27082[(2)]);
var inst_26981 = cljs.core.List.EMPTY;
var inst_26982 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26981);
var inst_26983 = (function (){return ((function (inst_26980,inst_26981,inst_26982,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26678_SHARP_){
var and__16313__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26678_SHARP_);
if(cljs.core.truth_(and__16313__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26678_SHARP_));
} else {
return and__16313__auto__;
}
});
;})(inst_26980,inst_26981,inst_26982,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26984 = cljs.core.filter.call(null,inst_26983,files);
var inst_26985 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26986 = cljs.core.concat.call(null,inst_26984,inst_26985);
var state_27082__$1 = (function (){var statearr_27097 = state_27082;
(statearr_27097[(17)] = inst_26982);

(statearr_27097[(18)] = inst_26980);

(statearr_27097[(12)] = inst_26986);

return statearr_27097;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27098_27182 = state_27082__$1;
(statearr_27098_27182[(1)] = (16));

} else {
var statearr_27099_27183 = state_27082__$1;
(statearr_27099_27183[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (15))){
var inst_26970 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27100_27184 = state_27082__$1;
(statearr_27100_27184[(2)] = inst_26970);

(statearr_27100_27184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (21))){
var inst_26996 = (state_27082[(19)]);
var inst_26996__$1 = (state_27082[(2)]);
var inst_26997 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26996__$1);
var state_27082__$1 = (function (){var statearr_27101 = state_27082;
(statearr_27101[(19)] = inst_26996__$1);

return statearr_27101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27082__$1,(22),inst_26997);
} else {
if((state_val_27083 === (31))){
var inst_27080 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27082__$1,inst_27080);
} else {
if((state_val_27083 === (32))){
var inst_27036 = (state_27082[(16)]);
var inst_27041 = inst_27036.cljs$lang$protocol_mask$partition0$;
var inst_27042 = (inst_27041 & (64));
var inst_27043 = inst_27036.cljs$core$ISeq$;
var inst_27044 = (inst_27042) || (inst_27043);
var state_27082__$1 = state_27082;
if(cljs.core.truth_(inst_27044)){
var statearr_27102_27185 = state_27082__$1;
(statearr_27102_27185[(1)] = (35));

} else {
var statearr_27103_27186 = state_27082__$1;
(statearr_27103_27186[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (40))){
var inst_27057 = (state_27082[(20)]);
var inst_27056 = (state_27082[(2)]);
var inst_27057__$1 = cljs.core.get.call(null,inst_27056,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27058 = cljs.core.get.call(null,inst_27056,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27059 = cljs.core.not_empty.call(null,inst_27057__$1);
var state_27082__$1 = (function (){var statearr_27104 = state_27082;
(statearr_27104[(21)] = inst_27058);

(statearr_27104[(20)] = inst_27057__$1);

return statearr_27104;
})();
if(cljs.core.truth_(inst_27059)){
var statearr_27105_27187 = state_27082__$1;
(statearr_27105_27187[(1)] = (41));

} else {
var statearr_27106_27188 = state_27082__$1;
(statearr_27106_27188[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (33))){
var state_27082__$1 = state_27082;
var statearr_27107_27189 = state_27082__$1;
(statearr_27107_27189[(2)] = false);

(statearr_27107_27189[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (13))){
var inst_26956 = (state_27082[(22)]);
var inst_26960 = cljs.core.chunk_first.call(null,inst_26956);
var inst_26961 = cljs.core.chunk_rest.call(null,inst_26956);
var inst_26962 = cljs.core.count.call(null,inst_26960);
var inst_26943 = inst_26961;
var inst_26944 = inst_26960;
var inst_26945 = inst_26962;
var inst_26946 = (0);
var state_27082__$1 = (function (){var statearr_27108 = state_27082;
(statearr_27108[(7)] = inst_26943);

(statearr_27108[(8)] = inst_26945);

(statearr_27108[(9)] = inst_26946);

(statearr_27108[(10)] = inst_26944);

return statearr_27108;
})();
var statearr_27109_27190 = state_27082__$1;
(statearr_27109_27190[(2)] = null);

(statearr_27109_27190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (22))){
var inst_27004 = (state_27082[(23)]);
var inst_26996 = (state_27082[(19)]);
var inst_26999 = (state_27082[(24)]);
var inst_27000 = (state_27082[(25)]);
var inst_26999__$1 = (state_27082[(2)]);
var inst_27000__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26999__$1);
var inst_27001 = (function (){var all_files = inst_26996;
var res_SINGLEQUOTE_ = inst_26999__$1;
var res = inst_27000__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27004,inst_26996,inst_26999,inst_27000,inst_26999__$1,inst_27000__$1,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26679_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26679_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27004,inst_26996,inst_26999,inst_27000,inst_26999__$1,inst_27000__$1,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27002 = cljs.core.filter.call(null,inst_27001,inst_26999__$1);
var inst_27003 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27004__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27003);
var inst_27005 = cljs.core.not_empty.call(null,inst_27004__$1);
var state_27082__$1 = (function (){var statearr_27110 = state_27082;
(statearr_27110[(23)] = inst_27004__$1);

(statearr_27110[(26)] = inst_27002);

(statearr_27110[(24)] = inst_26999__$1);

(statearr_27110[(25)] = inst_27000__$1);

return statearr_27110;
})();
if(cljs.core.truth_(inst_27005)){
var statearr_27111_27191 = state_27082__$1;
(statearr_27111_27191[(1)] = (23));

} else {
var statearr_27112_27192 = state_27082__$1;
(statearr_27112_27192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (36))){
var state_27082__$1 = state_27082;
var statearr_27113_27193 = state_27082__$1;
(statearr_27113_27193[(2)] = false);

(statearr_27113_27193[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (41))){
var inst_27057 = (state_27082[(20)]);
var inst_27061 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27062 = cljs.core.map.call(null,inst_27061,inst_27057);
var inst_27063 = cljs.core.pr_str.call(null,inst_27062);
var inst_27064 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27063)].join('');
var inst_27065 = figwheel.client.utils.log.call(null,inst_27064);
var state_27082__$1 = state_27082;
var statearr_27114_27194 = state_27082__$1;
(statearr_27114_27194[(2)] = inst_27065);

(statearr_27114_27194[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (43))){
var inst_27058 = (state_27082[(21)]);
var inst_27068 = (state_27082[(2)]);
var inst_27069 = cljs.core.not_empty.call(null,inst_27058);
var state_27082__$1 = (function (){var statearr_27115 = state_27082;
(statearr_27115[(27)] = inst_27068);

return statearr_27115;
})();
if(cljs.core.truth_(inst_27069)){
var statearr_27116_27195 = state_27082__$1;
(statearr_27116_27195[(1)] = (44));

} else {
var statearr_27117_27196 = state_27082__$1;
(statearr_27117_27196[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (29))){
var inst_27004 = (state_27082[(23)]);
var inst_27002 = (state_27082[(26)]);
var inst_26996 = (state_27082[(19)]);
var inst_26999 = (state_27082[(24)]);
var inst_27000 = (state_27082[(25)]);
var inst_27036 = (state_27082[(16)]);
var inst_27032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27035 = (function (){var all_files = inst_26996;
var res_SINGLEQUOTE_ = inst_26999;
var res = inst_27000;
var files_not_loaded = inst_27002;
var dependencies_that_loaded = inst_27004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27004,inst_27002,inst_26996,inst_26999,inst_27000,inst_27036,inst_27032,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27034){
var map__27118 = p__27034;
var map__27118__$1 = ((((!((map__27118 == null)))?((((map__27118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27118):map__27118);
var namespace = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27004,inst_27002,inst_26996,inst_26999,inst_27000,inst_27036,inst_27032,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27036__$1 = cljs.core.group_by.call(null,inst_27035,inst_27002);
var inst_27038 = (inst_27036__$1 == null);
var inst_27039 = cljs.core.not.call(null,inst_27038);
var state_27082__$1 = (function (){var statearr_27120 = state_27082;
(statearr_27120[(28)] = inst_27032);

(statearr_27120[(16)] = inst_27036__$1);

return statearr_27120;
})();
if(inst_27039){
var statearr_27121_27197 = state_27082__$1;
(statearr_27121_27197[(1)] = (32));

} else {
var statearr_27122_27198 = state_27082__$1;
(statearr_27122_27198[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (44))){
var inst_27058 = (state_27082[(21)]);
var inst_27071 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27058);
var inst_27072 = cljs.core.pr_str.call(null,inst_27071);
var inst_27073 = [cljs.core.str("not required: "),cljs.core.str(inst_27072)].join('');
var inst_27074 = figwheel.client.utils.log.call(null,inst_27073);
var state_27082__$1 = state_27082;
var statearr_27123_27199 = state_27082__$1;
(statearr_27123_27199[(2)] = inst_27074);

(statearr_27123_27199[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (6))){
var inst_26977 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27124_27200 = state_27082__$1;
(statearr_27124_27200[(2)] = inst_26977);

(statearr_27124_27200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (28))){
var inst_27002 = (state_27082[(26)]);
var inst_27029 = (state_27082[(2)]);
var inst_27030 = cljs.core.not_empty.call(null,inst_27002);
var state_27082__$1 = (function (){var statearr_27125 = state_27082;
(statearr_27125[(29)] = inst_27029);

return statearr_27125;
})();
if(cljs.core.truth_(inst_27030)){
var statearr_27126_27201 = state_27082__$1;
(statearr_27126_27201[(1)] = (29));

} else {
var statearr_27127_27202 = state_27082__$1;
(statearr_27127_27202[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (25))){
var inst_27000 = (state_27082[(25)]);
var inst_27016 = (state_27082[(2)]);
var inst_27017 = cljs.core.not_empty.call(null,inst_27000);
var state_27082__$1 = (function (){var statearr_27128 = state_27082;
(statearr_27128[(30)] = inst_27016);

return statearr_27128;
})();
if(cljs.core.truth_(inst_27017)){
var statearr_27129_27203 = state_27082__$1;
(statearr_27129_27203[(1)] = (26));

} else {
var statearr_27130_27204 = state_27082__$1;
(statearr_27130_27204[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (34))){
var inst_27051 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
if(cljs.core.truth_(inst_27051)){
var statearr_27131_27205 = state_27082__$1;
(statearr_27131_27205[(1)] = (38));

} else {
var statearr_27132_27206 = state_27082__$1;
(statearr_27132_27206[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (17))){
var state_27082__$1 = state_27082;
var statearr_27133_27207 = state_27082__$1;
(statearr_27133_27207[(2)] = recompile_dependents);

(statearr_27133_27207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (3))){
var state_27082__$1 = state_27082;
var statearr_27134_27208 = state_27082__$1;
(statearr_27134_27208[(2)] = null);

(statearr_27134_27208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (12))){
var inst_26973 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27135_27209 = state_27082__$1;
(statearr_27135_27209[(2)] = inst_26973);

(statearr_27135_27209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (2))){
var inst_26935 = (state_27082[(13)]);
var inst_26942 = cljs.core.seq.call(null,inst_26935);
var inst_26943 = inst_26942;
var inst_26944 = null;
var inst_26945 = (0);
var inst_26946 = (0);
var state_27082__$1 = (function (){var statearr_27136 = state_27082;
(statearr_27136[(7)] = inst_26943);

(statearr_27136[(8)] = inst_26945);

(statearr_27136[(9)] = inst_26946);

(statearr_27136[(10)] = inst_26944);

return statearr_27136;
})();
var statearr_27137_27210 = state_27082__$1;
(statearr_27137_27210[(2)] = null);

(statearr_27137_27210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (23))){
var inst_27004 = (state_27082[(23)]);
var inst_27002 = (state_27082[(26)]);
var inst_26996 = (state_27082[(19)]);
var inst_26999 = (state_27082[(24)]);
var inst_27000 = (state_27082[(25)]);
var inst_27007 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27009 = (function (){var all_files = inst_26996;
var res_SINGLEQUOTE_ = inst_26999;
var res = inst_27000;
var files_not_loaded = inst_27002;
var dependencies_that_loaded = inst_27004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27004,inst_27002,inst_26996,inst_26999,inst_27000,inst_27007,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27008){
var map__27138 = p__27008;
var map__27138__$1 = ((((!((map__27138 == null)))?((((map__27138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27138):map__27138);
var request_url = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27004,inst_27002,inst_26996,inst_26999,inst_27000,inst_27007,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27010 = cljs.core.reverse.call(null,inst_27004);
var inst_27011 = cljs.core.map.call(null,inst_27009,inst_27010);
var inst_27012 = cljs.core.pr_str.call(null,inst_27011);
var inst_27013 = figwheel.client.utils.log.call(null,inst_27012);
var state_27082__$1 = (function (){var statearr_27140 = state_27082;
(statearr_27140[(31)] = inst_27007);

return statearr_27140;
})();
var statearr_27141_27211 = state_27082__$1;
(statearr_27141_27211[(2)] = inst_27013);

(statearr_27141_27211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (35))){
var state_27082__$1 = state_27082;
var statearr_27142_27212 = state_27082__$1;
(statearr_27142_27212[(2)] = true);

(statearr_27142_27212[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (19))){
var inst_26986 = (state_27082[(12)]);
var inst_26992 = figwheel.client.file_reloading.expand_files.call(null,inst_26986);
var state_27082__$1 = state_27082;
var statearr_27143_27213 = state_27082__$1;
(statearr_27143_27213[(2)] = inst_26992);

(statearr_27143_27213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (11))){
var state_27082__$1 = state_27082;
var statearr_27144_27214 = state_27082__$1;
(statearr_27144_27214[(2)] = null);

(statearr_27144_27214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (9))){
var inst_26975 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27145_27215 = state_27082__$1;
(statearr_27145_27215[(2)] = inst_26975);

(statearr_27145_27215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (5))){
var inst_26945 = (state_27082[(8)]);
var inst_26946 = (state_27082[(9)]);
var inst_26948 = (inst_26946 < inst_26945);
var inst_26949 = inst_26948;
var state_27082__$1 = state_27082;
if(cljs.core.truth_(inst_26949)){
var statearr_27146_27216 = state_27082__$1;
(statearr_27146_27216[(1)] = (7));

} else {
var statearr_27147_27217 = state_27082__$1;
(statearr_27147_27217[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (14))){
var inst_26956 = (state_27082[(22)]);
var inst_26965 = cljs.core.first.call(null,inst_26956);
var inst_26966 = figwheel.client.file_reloading.eval_body.call(null,inst_26965,opts);
var inst_26967 = cljs.core.next.call(null,inst_26956);
var inst_26943 = inst_26967;
var inst_26944 = null;
var inst_26945 = (0);
var inst_26946 = (0);
var state_27082__$1 = (function (){var statearr_27148 = state_27082;
(statearr_27148[(7)] = inst_26943);

(statearr_27148[(8)] = inst_26945);

(statearr_27148[(32)] = inst_26966);

(statearr_27148[(9)] = inst_26946);

(statearr_27148[(10)] = inst_26944);

return statearr_27148;
})();
var statearr_27149_27218 = state_27082__$1;
(statearr_27149_27218[(2)] = null);

(statearr_27149_27218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (45))){
var state_27082__$1 = state_27082;
var statearr_27150_27219 = state_27082__$1;
(statearr_27150_27219[(2)] = null);

(statearr_27150_27219[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (26))){
var inst_27004 = (state_27082[(23)]);
var inst_27002 = (state_27082[(26)]);
var inst_26996 = (state_27082[(19)]);
var inst_26999 = (state_27082[(24)]);
var inst_27000 = (state_27082[(25)]);
var inst_27019 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27021 = (function (){var all_files = inst_26996;
var res_SINGLEQUOTE_ = inst_26999;
var res = inst_27000;
var files_not_loaded = inst_27002;
var dependencies_that_loaded = inst_27004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27004,inst_27002,inst_26996,inst_26999,inst_27000,inst_27019,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27020){
var map__27151 = p__27020;
var map__27151__$1 = ((((!((map__27151 == null)))?((((map__27151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27151):map__27151);
var namespace = cljs.core.get.call(null,map__27151__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27004,inst_27002,inst_26996,inst_26999,inst_27000,inst_27019,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27022 = cljs.core.map.call(null,inst_27021,inst_27000);
var inst_27023 = cljs.core.pr_str.call(null,inst_27022);
var inst_27024 = figwheel.client.utils.log.call(null,inst_27023);
var inst_27025 = (function (){var all_files = inst_26996;
var res_SINGLEQUOTE_ = inst_26999;
var res = inst_27000;
var files_not_loaded = inst_27002;
var dependencies_that_loaded = inst_27004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27004,inst_27002,inst_26996,inst_26999,inst_27000,inst_27019,inst_27021,inst_27022,inst_27023,inst_27024,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27004,inst_27002,inst_26996,inst_26999,inst_27000,inst_27019,inst_27021,inst_27022,inst_27023,inst_27024,state_val_27083,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27026 = setTimeout(inst_27025,(10));
var state_27082__$1 = (function (){var statearr_27153 = state_27082;
(statearr_27153[(33)] = inst_27019);

(statearr_27153[(34)] = inst_27024);

return statearr_27153;
})();
var statearr_27154_27220 = state_27082__$1;
(statearr_27154_27220[(2)] = inst_27026);

(statearr_27154_27220[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (16))){
var state_27082__$1 = state_27082;
var statearr_27155_27221 = state_27082__$1;
(statearr_27155_27221[(2)] = reload_dependents);

(statearr_27155_27221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (38))){
var inst_27036 = (state_27082[(16)]);
var inst_27053 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27036);
var state_27082__$1 = state_27082;
var statearr_27156_27222 = state_27082__$1;
(statearr_27156_27222[(2)] = inst_27053);

(statearr_27156_27222[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (30))){
var state_27082__$1 = state_27082;
var statearr_27157_27223 = state_27082__$1;
(statearr_27157_27223[(2)] = null);

(statearr_27157_27223[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (10))){
var inst_26956 = (state_27082[(22)]);
var inst_26958 = cljs.core.chunked_seq_QMARK_.call(null,inst_26956);
var state_27082__$1 = state_27082;
if(inst_26958){
var statearr_27158_27224 = state_27082__$1;
(statearr_27158_27224[(1)] = (13));

} else {
var statearr_27159_27225 = state_27082__$1;
(statearr_27159_27225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (18))){
var inst_26990 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
if(cljs.core.truth_(inst_26990)){
var statearr_27160_27226 = state_27082__$1;
(statearr_27160_27226[(1)] = (19));

} else {
var statearr_27161_27227 = state_27082__$1;
(statearr_27161_27227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (42))){
var state_27082__$1 = state_27082;
var statearr_27162_27228 = state_27082__$1;
(statearr_27162_27228[(2)] = null);

(statearr_27162_27228[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (37))){
var inst_27048 = (state_27082[(2)]);
var state_27082__$1 = state_27082;
var statearr_27163_27229 = state_27082__$1;
(statearr_27163_27229[(2)] = inst_27048);

(statearr_27163_27229[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27083 === (8))){
var inst_26943 = (state_27082[(7)]);
var inst_26956 = (state_27082[(22)]);
var inst_26956__$1 = cljs.core.seq.call(null,inst_26943);
var state_27082__$1 = (function (){var statearr_27164 = state_27082;
(statearr_27164[(22)] = inst_26956__$1);

return statearr_27164;
})();
if(inst_26956__$1){
var statearr_27165_27230 = state_27082__$1;
(statearr_27165_27230[(1)] = (10));

} else {
var statearr_27166_27231 = state_27082__$1;
(statearr_27166_27231[(1)] = (11));

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
}
});})(c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19443__auto__,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto____0 = (function (){
var statearr_27170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27170[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto__);

(statearr_27170[(1)] = (1));

return statearr_27170;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto____1 = (function (state_27082){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_27082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e27171){if((e27171 instanceof Object)){
var ex__19447__auto__ = e27171;
var statearr_27172_27232 = state_27082;
(statearr_27172_27232[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27233 = state_27082;
state_27082 = G__27233;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto__ = function(state_27082){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto____1.call(this,state_27082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19510__auto__ = (function (){var statearr_27173 = f__19509__auto__.call(null);
(statearr_27173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto__);

return statearr_27173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto__,map__26928,map__26928__$1,opts,before_jsload,on_jsload,reload_dependents,map__26929,map__26929__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19508__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27236,link){
var map__27239 = p__27236;
var map__27239__$1 = ((((!((map__27239 == null)))?((((map__27239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27239):map__27239);
var file = cljs.core.get.call(null,map__27239__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27239,map__27239__$1,file){
return (function (p1__27234_SHARP_,p2__27235_SHARP_){
if(cljs.core._EQ_.call(null,p1__27234_SHARP_,p2__27235_SHARP_)){
return p1__27234_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27239,map__27239__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27245){
var map__27246 = p__27245;
var map__27246__$1 = ((((!((map__27246 == null)))?((((map__27246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27246):map__27246);
var match_length = cljs.core.get.call(null,map__27246__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27246__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27241_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27241_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args27248 = [];
var len__17364__auto___27251 = arguments.length;
var i__17365__auto___27252 = (0);
while(true){
if((i__17365__auto___27252 < len__17364__auto___27251)){
args27248.push((arguments[i__17365__auto___27252]));

var G__27253 = (i__17365__auto___27252 + (1));
i__17365__auto___27252 = G__27253;
continue;
} else {
}
break;
}

var G__27250 = args27248.length;
switch (G__27250) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27248.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27255_SHARP_,p2__27256_SHARP_){
return cljs.core.assoc.call(null,p1__27255_SHARP_,cljs.core.get.call(null,p2__27256_SHARP_,key),p2__27256_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27257){
var map__27260 = p__27257;
var map__27260__$1 = ((((!((map__27260 == null)))?((((map__27260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27260):map__27260);
var f_data = map__27260__$1;
var file = cljs.core.get.call(null,map__27260__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27262,files_msg){
var map__27269 = p__27262;
var map__27269__$1 = ((((!((map__27269 == null)))?((((map__27269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27269):map__27269);
var opts = map__27269__$1;
var on_cssload = cljs.core.get.call(null,map__27269__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27271_27275 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27272_27276 = null;
var count__27273_27277 = (0);
var i__27274_27278 = (0);
while(true){
if((i__27274_27278 < count__27273_27277)){
var f_27279 = cljs.core._nth.call(null,chunk__27272_27276,i__27274_27278);
figwheel.client.file_reloading.reload_css_file.call(null,f_27279);

var G__27280 = seq__27271_27275;
var G__27281 = chunk__27272_27276;
var G__27282 = count__27273_27277;
var G__27283 = (i__27274_27278 + (1));
seq__27271_27275 = G__27280;
chunk__27272_27276 = G__27281;
count__27273_27277 = G__27282;
i__27274_27278 = G__27283;
continue;
} else {
var temp__4425__auto___27284 = cljs.core.seq.call(null,seq__27271_27275);
if(temp__4425__auto___27284){
var seq__27271_27285__$1 = temp__4425__auto___27284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27271_27285__$1)){
var c__17109__auto___27286 = cljs.core.chunk_first.call(null,seq__27271_27285__$1);
var G__27287 = cljs.core.chunk_rest.call(null,seq__27271_27285__$1);
var G__27288 = c__17109__auto___27286;
var G__27289 = cljs.core.count.call(null,c__17109__auto___27286);
var G__27290 = (0);
seq__27271_27275 = G__27287;
chunk__27272_27276 = G__27288;
count__27273_27277 = G__27289;
i__27274_27278 = G__27290;
continue;
} else {
var f_27291 = cljs.core.first.call(null,seq__27271_27285__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27291);

var G__27292 = cljs.core.next.call(null,seq__27271_27285__$1);
var G__27293 = null;
var G__27294 = (0);
var G__27295 = (0);
seq__27271_27275 = G__27292;
chunk__27272_27276 = G__27293;
count__27273_27277 = G__27294;
i__27274_27278 = G__27295;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27269,map__27269__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27269,map__27269__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map