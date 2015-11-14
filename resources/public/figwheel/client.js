// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25124 = cljs.core._EQ_;
var expr__25125 = (function (){var or__16325__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25124.call(null,"true",expr__25125))){
return true;
} else {
if(cljs.core.truth_(pred__25124.call(null,"false",expr__25125))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25125)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25127__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25128__i = 0, G__25128__a = new Array(arguments.length -  0);
while (G__25128__i < G__25128__a.length) {G__25128__a[G__25128__i] = arguments[G__25128__i + 0]; ++G__25128__i;}
  args = new cljs.core.IndexedSeq(G__25128__a,0);
} 
return G__25127__delegate.call(this,args);};
G__25127.cljs$lang$maxFixedArity = 0;
G__25127.cljs$lang$applyTo = (function (arglist__25129){
var args = cljs.core.seq(arglist__25129);
return G__25127__delegate(args);
});
G__25127.cljs$core$IFn$_invoke$arity$variadic = G__25127__delegate;
return G__25127;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25130){
var map__25133 = p__25130;
var map__25133__$1 = ((((!((map__25133 == null)))?((((map__25133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25133):map__25133);
var message = cljs.core.get.call(null,map__25133__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25133__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16325__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16325__auto__)){
return or__16325__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16313__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16313__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16313__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19508__auto___25295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___25295,ch){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___25295,ch){
return (function (state_25264){
var state_val_25265 = (state_25264[(1)]);
if((state_val_25265 === (7))){
var inst_25260 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25266_25296 = state_25264__$1;
(statearr_25266_25296[(2)] = inst_25260);

(statearr_25266_25296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (1))){
var state_25264__$1 = state_25264;
var statearr_25267_25297 = state_25264__$1;
(statearr_25267_25297[(2)] = null);

(statearr_25267_25297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (4))){
var inst_25217 = (state_25264[(7)]);
var inst_25217__$1 = (state_25264[(2)]);
var state_25264__$1 = (function (){var statearr_25268 = state_25264;
(statearr_25268[(7)] = inst_25217__$1);

return statearr_25268;
})();
if(cljs.core.truth_(inst_25217__$1)){
var statearr_25269_25298 = state_25264__$1;
(statearr_25269_25298[(1)] = (5));

} else {
var statearr_25270_25299 = state_25264__$1;
(statearr_25270_25299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (15))){
var inst_25224 = (state_25264[(8)]);
var inst_25239 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25224);
var inst_25240 = cljs.core.first.call(null,inst_25239);
var inst_25241 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25240);
var inst_25242 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25241)].join('');
var inst_25243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25242);
var state_25264__$1 = state_25264;
var statearr_25271_25300 = state_25264__$1;
(statearr_25271_25300[(2)] = inst_25243);

(statearr_25271_25300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (13))){
var inst_25248 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25272_25301 = state_25264__$1;
(statearr_25272_25301[(2)] = inst_25248);

(statearr_25272_25301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (6))){
var state_25264__$1 = state_25264;
var statearr_25273_25302 = state_25264__$1;
(statearr_25273_25302[(2)] = null);

(statearr_25273_25302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (17))){
var inst_25246 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25274_25303 = state_25264__$1;
(statearr_25274_25303[(2)] = inst_25246);

(statearr_25274_25303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (3))){
var inst_25262 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25264__$1,inst_25262);
} else {
if((state_val_25265 === (12))){
var inst_25223 = (state_25264[(9)]);
var inst_25237 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25223,opts);
var state_25264__$1 = state_25264;
if(cljs.core.truth_(inst_25237)){
var statearr_25275_25304 = state_25264__$1;
(statearr_25275_25304[(1)] = (15));

} else {
var statearr_25276_25305 = state_25264__$1;
(statearr_25276_25305[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (2))){
var state_25264__$1 = state_25264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25264__$1,(4),ch);
} else {
if((state_val_25265 === (11))){
var inst_25224 = (state_25264[(8)]);
var inst_25229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25230 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25224);
var inst_25231 = cljs.core.async.timeout.call(null,(1000));
var inst_25232 = [inst_25230,inst_25231];
var inst_25233 = (new cljs.core.PersistentVector(null,2,(5),inst_25229,inst_25232,null));
var state_25264__$1 = state_25264;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25264__$1,(14),inst_25233);
} else {
if((state_val_25265 === (9))){
var inst_25224 = (state_25264[(8)]);
var inst_25250 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25251 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25224);
var inst_25252 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25251);
var inst_25253 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25252)].join('');
var inst_25254 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25253);
var state_25264__$1 = (function (){var statearr_25277 = state_25264;
(statearr_25277[(10)] = inst_25250);

return statearr_25277;
})();
var statearr_25278_25306 = state_25264__$1;
(statearr_25278_25306[(2)] = inst_25254);

(statearr_25278_25306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (5))){
var inst_25217 = (state_25264[(7)]);
var inst_25219 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25220 = (new cljs.core.PersistentArrayMap(null,2,inst_25219,null));
var inst_25221 = (new cljs.core.PersistentHashSet(null,inst_25220,null));
var inst_25222 = figwheel.client.focus_msgs.call(null,inst_25221,inst_25217);
var inst_25223 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25222);
var inst_25224 = cljs.core.first.call(null,inst_25222);
var inst_25225 = figwheel.client.autoload_QMARK_.call(null);
var state_25264__$1 = (function (){var statearr_25279 = state_25264;
(statearr_25279[(8)] = inst_25224);

(statearr_25279[(9)] = inst_25223);

return statearr_25279;
})();
if(cljs.core.truth_(inst_25225)){
var statearr_25280_25307 = state_25264__$1;
(statearr_25280_25307[(1)] = (8));

} else {
var statearr_25281_25308 = state_25264__$1;
(statearr_25281_25308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (14))){
var inst_25235 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25282_25309 = state_25264__$1;
(statearr_25282_25309[(2)] = inst_25235);

(statearr_25282_25309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (16))){
var state_25264__$1 = state_25264;
var statearr_25283_25310 = state_25264__$1;
(statearr_25283_25310[(2)] = null);

(statearr_25283_25310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (10))){
var inst_25256 = (state_25264[(2)]);
var state_25264__$1 = (function (){var statearr_25284 = state_25264;
(statearr_25284[(11)] = inst_25256);

return statearr_25284;
})();
var statearr_25285_25311 = state_25264__$1;
(statearr_25285_25311[(2)] = null);

(statearr_25285_25311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (8))){
var inst_25223 = (state_25264[(9)]);
var inst_25227 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25223,opts);
var state_25264__$1 = state_25264;
if(cljs.core.truth_(inst_25227)){
var statearr_25286_25312 = state_25264__$1;
(statearr_25286_25312[(1)] = (11));

} else {
var statearr_25287_25313 = state_25264__$1;
(statearr_25287_25313[(1)] = (12));

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
});})(c__19508__auto___25295,ch))
;
return ((function (switch__19443__auto__,c__19508__auto___25295,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19444__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19444__auto____0 = (function (){
var statearr_25291 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25291[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19444__auto__);

(statearr_25291[(1)] = (1));

return statearr_25291;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19444__auto____1 = (function (state_25264){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_25264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e25292){if((e25292 instanceof Object)){
var ex__19447__auto__ = e25292;
var statearr_25293_25314 = state_25264;
(statearr_25293_25314[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25315 = state_25264;
state_25264 = G__25315;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19444__auto__ = function(state_25264){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19444__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19444__auto____1.call(this,state_25264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19444__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19444__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___25295,ch))
})();
var state__19510__auto__ = (function (){var statearr_25294 = f__19509__auto__.call(null);
(statearr_25294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___25295);

return statearr_25294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___25295,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25316_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25316_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25323 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25323){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25321 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25322 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25321,_STAR_print_newline_STAR_25322,base_path_25323){
return (function() { 
var G__25324__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25325__i = 0, G__25325__a = new Array(arguments.length -  0);
while (G__25325__i < G__25325__a.length) {G__25325__a[G__25325__i] = arguments[G__25325__i + 0]; ++G__25325__i;}
  args = new cljs.core.IndexedSeq(G__25325__a,0);
} 
return G__25324__delegate.call(this,args);};
G__25324.cljs$lang$maxFixedArity = 0;
G__25324.cljs$lang$applyTo = (function (arglist__25326){
var args = cljs.core.seq(arglist__25326);
return G__25324__delegate(args);
});
G__25324.cljs$core$IFn$_invoke$arity$variadic = G__25324__delegate;
return G__25324;
})()
;})(_STAR_print_fn_STAR_25321,_STAR_print_newline_STAR_25322,base_path_25323))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25322;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25321;
}}catch (e25320){if((e25320 instanceof Error)){
var e = e25320;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25323], null));
} else {
var e = e25320;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25323))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25327){
var map__25334 = p__25327;
var map__25334__$1 = ((((!((map__25334 == null)))?((((map__25334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25334):map__25334);
var opts = map__25334__$1;
var build_id = cljs.core.get.call(null,map__25334__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25334,map__25334__$1,opts,build_id){
return (function (p__25336){
var vec__25337 = p__25336;
var map__25338 = cljs.core.nth.call(null,vec__25337,(0),null);
var map__25338__$1 = ((((!((map__25338 == null)))?((((map__25338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25338):map__25338);
var msg = map__25338__$1;
var msg_name = cljs.core.get.call(null,map__25338__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25337,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25337,map__25338,map__25338__$1,msg,msg_name,_,map__25334,map__25334__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25337,map__25338,map__25338__$1,msg,msg_name,_,map__25334,map__25334__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25334,map__25334__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25344){
var vec__25345 = p__25344;
var map__25346 = cljs.core.nth.call(null,vec__25345,(0),null);
var map__25346__$1 = ((((!((map__25346 == null)))?((((map__25346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25346):map__25346);
var msg = map__25346__$1;
var msg_name = cljs.core.get.call(null,map__25346__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25345,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25348){
var map__25358 = p__25348;
var map__25358__$1 = ((((!((map__25358 == null)))?((((map__25358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25358):map__25358);
var on_compile_warning = cljs.core.get.call(null,map__25358__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25358__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25358,map__25358__$1,on_compile_warning,on_compile_fail){
return (function (p__25360){
var vec__25361 = p__25360;
var map__25362 = cljs.core.nth.call(null,vec__25361,(0),null);
var map__25362__$1 = ((((!((map__25362 == null)))?((((map__25362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25362):map__25362);
var msg = map__25362__$1;
var msg_name = cljs.core.get.call(null,map__25362__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25361,(1));
var pred__25364 = cljs.core._EQ_;
var expr__25365 = msg_name;
if(cljs.core.truth_(pred__25364.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25365))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25364.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25365))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25358,map__25358__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto__,msg_hist,msg_names,msg){
return (function (state_25581){
var state_val_25582 = (state_25581[(1)]);
if((state_val_25582 === (7))){
var inst_25505 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25505)){
var statearr_25583_25629 = state_25581__$1;
(statearr_25583_25629[(1)] = (8));

} else {
var statearr_25584_25630 = state_25581__$1;
(statearr_25584_25630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (20))){
var inst_25575 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25585_25631 = state_25581__$1;
(statearr_25585_25631[(2)] = inst_25575);

(statearr_25585_25631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (27))){
var inst_25571 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25586_25632 = state_25581__$1;
(statearr_25586_25632[(2)] = inst_25571);

(statearr_25586_25632[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (1))){
var inst_25498 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25498)){
var statearr_25587_25633 = state_25581__$1;
(statearr_25587_25633[(1)] = (2));

} else {
var statearr_25588_25634 = state_25581__$1;
(statearr_25588_25634[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (24))){
var inst_25573 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25589_25635 = state_25581__$1;
(statearr_25589_25635[(2)] = inst_25573);

(statearr_25589_25635[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (4))){
var inst_25579 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25581__$1,inst_25579);
} else {
if((state_val_25582 === (15))){
var inst_25577 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25590_25636 = state_25581__$1;
(statearr_25590_25636[(2)] = inst_25577);

(statearr_25590_25636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (21))){
var inst_25536 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25591_25637 = state_25581__$1;
(statearr_25591_25637[(2)] = inst_25536);

(statearr_25591_25637[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (31))){
var inst_25560 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25560)){
var statearr_25592_25638 = state_25581__$1;
(statearr_25592_25638[(1)] = (34));

} else {
var statearr_25593_25639 = state_25581__$1;
(statearr_25593_25639[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (32))){
var inst_25569 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25594_25640 = state_25581__$1;
(statearr_25594_25640[(2)] = inst_25569);

(statearr_25594_25640[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (33))){
var inst_25558 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25595_25641 = state_25581__$1;
(statearr_25595_25641[(2)] = inst_25558);

(statearr_25595_25641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (13))){
var inst_25519 = figwheel.client.heads_up.clear.call(null);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(16),inst_25519);
} else {
if((state_val_25582 === (22))){
var inst_25540 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25541 = figwheel.client.heads_up.append_message.call(null,inst_25540);
var state_25581__$1 = state_25581;
var statearr_25596_25642 = state_25581__$1;
(statearr_25596_25642[(2)] = inst_25541);

(statearr_25596_25642[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (36))){
var inst_25567 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25597_25643 = state_25581__$1;
(statearr_25597_25643[(2)] = inst_25567);

(statearr_25597_25643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (29))){
var inst_25551 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25598_25644 = state_25581__$1;
(statearr_25598_25644[(2)] = inst_25551);

(statearr_25598_25644[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (6))){
var inst_25500 = (state_25581[(7)]);
var state_25581__$1 = state_25581;
var statearr_25599_25645 = state_25581__$1;
(statearr_25599_25645[(2)] = inst_25500);

(statearr_25599_25645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (28))){
var inst_25547 = (state_25581[(2)]);
var inst_25548 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25549 = figwheel.client.heads_up.display_warning.call(null,inst_25548);
var state_25581__$1 = (function (){var statearr_25600 = state_25581;
(statearr_25600[(8)] = inst_25547);

return statearr_25600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(29),inst_25549);
} else {
if((state_val_25582 === (25))){
var inst_25545 = figwheel.client.heads_up.clear.call(null);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(28),inst_25545);
} else {
if((state_val_25582 === (34))){
var inst_25562 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(37),inst_25562);
} else {
if((state_val_25582 === (17))){
var inst_25527 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25601_25646 = state_25581__$1;
(statearr_25601_25646[(2)] = inst_25527);

(statearr_25601_25646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (3))){
var inst_25517 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25517)){
var statearr_25602_25647 = state_25581__$1;
(statearr_25602_25647[(1)] = (13));

} else {
var statearr_25603_25648 = state_25581__$1;
(statearr_25603_25648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (12))){
var inst_25513 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25604_25649 = state_25581__$1;
(statearr_25604_25649[(2)] = inst_25513);

(statearr_25604_25649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (2))){
var inst_25500 = (state_25581[(7)]);
var inst_25500__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25581__$1 = (function (){var statearr_25605 = state_25581;
(statearr_25605[(7)] = inst_25500__$1);

return statearr_25605;
})();
if(cljs.core.truth_(inst_25500__$1)){
var statearr_25606_25650 = state_25581__$1;
(statearr_25606_25650[(1)] = (5));

} else {
var statearr_25607_25651 = state_25581__$1;
(statearr_25607_25651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (23))){
var inst_25543 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25543)){
var statearr_25608_25652 = state_25581__$1;
(statearr_25608_25652[(1)] = (25));

} else {
var statearr_25609_25653 = state_25581__$1;
(statearr_25609_25653[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (35))){
var state_25581__$1 = state_25581;
var statearr_25610_25654 = state_25581__$1;
(statearr_25610_25654[(2)] = null);

(statearr_25610_25654[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (19))){
var inst_25538 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25538)){
var statearr_25611_25655 = state_25581__$1;
(statearr_25611_25655[(1)] = (22));

} else {
var statearr_25612_25656 = state_25581__$1;
(statearr_25612_25656[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (11))){
var inst_25509 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25613_25657 = state_25581__$1;
(statearr_25613_25657[(2)] = inst_25509);

(statearr_25613_25657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (9))){
var inst_25511 = figwheel.client.heads_up.clear.call(null);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(12),inst_25511);
} else {
if((state_val_25582 === (5))){
var inst_25502 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25581__$1 = state_25581;
var statearr_25614_25658 = state_25581__$1;
(statearr_25614_25658[(2)] = inst_25502);

(statearr_25614_25658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (14))){
var inst_25529 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25529)){
var statearr_25615_25659 = state_25581__$1;
(statearr_25615_25659[(1)] = (18));

} else {
var statearr_25616_25660 = state_25581__$1;
(statearr_25616_25660[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (26))){
var inst_25553 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25581__$1 = state_25581;
if(cljs.core.truth_(inst_25553)){
var statearr_25617_25661 = state_25581__$1;
(statearr_25617_25661[(1)] = (30));

} else {
var statearr_25618_25662 = state_25581__$1;
(statearr_25618_25662[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (16))){
var inst_25521 = (state_25581[(2)]);
var inst_25522 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25523 = figwheel.client.format_messages.call(null,inst_25522);
var inst_25524 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25525 = figwheel.client.heads_up.display_error.call(null,inst_25523,inst_25524);
var state_25581__$1 = (function (){var statearr_25619 = state_25581;
(statearr_25619[(9)] = inst_25521);

return statearr_25619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(17),inst_25525);
} else {
if((state_val_25582 === (30))){
var inst_25555 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25556 = figwheel.client.heads_up.display_warning.call(null,inst_25555);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(33),inst_25556);
} else {
if((state_val_25582 === (10))){
var inst_25515 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25620_25663 = state_25581__$1;
(statearr_25620_25663[(2)] = inst_25515);

(statearr_25620_25663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (18))){
var inst_25531 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25532 = figwheel.client.format_messages.call(null,inst_25531);
var inst_25533 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25534 = figwheel.client.heads_up.display_error.call(null,inst_25532,inst_25533);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(21),inst_25534);
} else {
if((state_val_25582 === (37))){
var inst_25564 = (state_25581[(2)]);
var state_25581__$1 = state_25581;
var statearr_25621_25664 = state_25581__$1;
(statearr_25621_25664[(2)] = inst_25564);

(statearr_25621_25664[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25582 === (8))){
var inst_25507 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25581__$1 = state_25581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25581__$1,(11),inst_25507);
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
});})(c__19508__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19443__auto__,c__19508__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto____0 = (function (){
var statearr_25625 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25625[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto__);

(statearr_25625[(1)] = (1));

return statearr_25625;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto____1 = (function (state_25581){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_25581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e25626){if((e25626 instanceof Object)){
var ex__19447__auto__ = e25626;
var statearr_25627_25665 = state_25581;
(statearr_25627_25665[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25666 = state_25581;
state_25581 = G__25666;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto__ = function(state_25581){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto____1.call(this,state_25581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto__,msg_hist,msg_names,msg))
})();
var state__19510__auto__ = (function (){var statearr_25628 = f__19509__auto__.call(null);
(statearr_25628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto__);

return statearr_25628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto__,msg_hist,msg_names,msg))
);

return c__19508__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19508__auto___25729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto___25729,ch){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto___25729,ch){
return (function (state_25712){
var state_val_25713 = (state_25712[(1)]);
if((state_val_25713 === (1))){
var state_25712__$1 = state_25712;
var statearr_25714_25730 = state_25712__$1;
(statearr_25714_25730[(2)] = null);

(statearr_25714_25730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (2))){
var state_25712__$1 = state_25712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25712__$1,(4),ch);
} else {
if((state_val_25713 === (3))){
var inst_25710 = (state_25712[(2)]);
var state_25712__$1 = state_25712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25712__$1,inst_25710);
} else {
if((state_val_25713 === (4))){
var inst_25700 = (state_25712[(7)]);
var inst_25700__$1 = (state_25712[(2)]);
var state_25712__$1 = (function (){var statearr_25715 = state_25712;
(statearr_25715[(7)] = inst_25700__$1);

return statearr_25715;
})();
if(cljs.core.truth_(inst_25700__$1)){
var statearr_25716_25731 = state_25712__$1;
(statearr_25716_25731[(1)] = (5));

} else {
var statearr_25717_25732 = state_25712__$1;
(statearr_25717_25732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (5))){
var inst_25700 = (state_25712[(7)]);
var inst_25702 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25700);
var state_25712__$1 = state_25712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25712__$1,(8),inst_25702);
} else {
if((state_val_25713 === (6))){
var state_25712__$1 = state_25712;
var statearr_25718_25733 = state_25712__$1;
(statearr_25718_25733[(2)] = null);

(statearr_25718_25733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (7))){
var inst_25708 = (state_25712[(2)]);
var state_25712__$1 = state_25712;
var statearr_25719_25734 = state_25712__$1;
(statearr_25719_25734[(2)] = inst_25708);

(statearr_25719_25734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25713 === (8))){
var inst_25704 = (state_25712[(2)]);
var state_25712__$1 = (function (){var statearr_25720 = state_25712;
(statearr_25720[(8)] = inst_25704);

return statearr_25720;
})();
var statearr_25721_25735 = state_25712__$1;
(statearr_25721_25735[(2)] = null);

(statearr_25721_25735[(1)] = (2));


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
});})(c__19508__auto___25729,ch))
;
return ((function (switch__19443__auto__,c__19508__auto___25729,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19444__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19444__auto____0 = (function (){
var statearr_25725 = [null,null,null,null,null,null,null,null,null];
(statearr_25725[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19444__auto__);

(statearr_25725[(1)] = (1));

return statearr_25725;
});
var figwheel$client$heads_up_plugin_$_state_machine__19444__auto____1 = (function (state_25712){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_25712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e25726){if((e25726 instanceof Object)){
var ex__19447__auto__ = e25726;
var statearr_25727_25736 = state_25712;
(statearr_25727_25736[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25737 = state_25712;
state_25712 = G__25737;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19444__auto__ = function(state_25712){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19444__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19444__auto____1.call(this,state_25712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19444__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19444__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto___25729,ch))
})();
var state__19510__auto__ = (function (){var statearr_25728 = f__19509__auto__.call(null);
(statearr_25728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto___25729);

return statearr_25728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto___25729,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19508__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19508__auto__){
return (function (){
var f__19509__auto__ = (function (){var switch__19443__auto__ = ((function (c__19508__auto__){
return (function (state_25758){
var state_val_25759 = (state_25758[(1)]);
if((state_val_25759 === (1))){
var inst_25753 = cljs.core.async.timeout.call(null,(3000));
var state_25758__$1 = state_25758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25758__$1,(2),inst_25753);
} else {
if((state_val_25759 === (2))){
var inst_25755 = (state_25758[(2)]);
var inst_25756 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25758__$1 = (function (){var statearr_25760 = state_25758;
(statearr_25760[(7)] = inst_25755);

return statearr_25760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25758__$1,inst_25756);
} else {
return null;
}
}
});})(c__19508__auto__))
;
return ((function (switch__19443__auto__,c__19508__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19444__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19444__auto____0 = (function (){
var statearr_25764 = [null,null,null,null,null,null,null,null];
(statearr_25764[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19444__auto__);

(statearr_25764[(1)] = (1));

return statearr_25764;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19444__auto____1 = (function (state_25758){
while(true){
var ret_value__19445__auto__ = (function (){try{while(true){
var result__19446__auto__ = switch__19443__auto__.call(null,state_25758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19446__auto__;
}
break;
}
}catch (e25765){if((e25765 instanceof Object)){
var ex__19447__auto__ = e25765;
var statearr_25766_25768 = state_25758;
(statearr_25766_25768[(5)] = ex__19447__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19445__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25769 = state_25758;
state_25758 = G__25769;
continue;
} else {
return ret_value__19445__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19444__auto__ = function(state_25758){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19444__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19444__auto____1.call(this,state_25758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19444__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19444__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19444__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19444__auto__;
})()
;})(switch__19443__auto__,c__19508__auto__))
})();
var state__19510__auto__ = (function (){var statearr_25767 = f__19509__auto__.call(null);
(statearr_25767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19508__auto__);

return statearr_25767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19510__auto__);
});})(c__19508__auto__))
);

return c__19508__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25770){
var map__25777 = p__25770;
var map__25777__$1 = ((((!((map__25777 == null)))?((((map__25777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25777):map__25777);
var ed = map__25777__$1;
var formatted_exception = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25779_25783 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25780_25784 = null;
var count__25781_25785 = (0);
var i__25782_25786 = (0);
while(true){
if((i__25782_25786 < count__25781_25785)){
var msg_25787 = cljs.core._nth.call(null,chunk__25780_25784,i__25782_25786);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25787);

var G__25788 = seq__25779_25783;
var G__25789 = chunk__25780_25784;
var G__25790 = count__25781_25785;
var G__25791 = (i__25782_25786 + (1));
seq__25779_25783 = G__25788;
chunk__25780_25784 = G__25789;
count__25781_25785 = G__25790;
i__25782_25786 = G__25791;
continue;
} else {
var temp__4425__auto___25792 = cljs.core.seq.call(null,seq__25779_25783);
if(temp__4425__auto___25792){
var seq__25779_25793__$1 = temp__4425__auto___25792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25779_25793__$1)){
var c__17109__auto___25794 = cljs.core.chunk_first.call(null,seq__25779_25793__$1);
var G__25795 = cljs.core.chunk_rest.call(null,seq__25779_25793__$1);
var G__25796 = c__17109__auto___25794;
var G__25797 = cljs.core.count.call(null,c__17109__auto___25794);
var G__25798 = (0);
seq__25779_25783 = G__25795;
chunk__25780_25784 = G__25796;
count__25781_25785 = G__25797;
i__25782_25786 = G__25798;
continue;
} else {
var msg_25799 = cljs.core.first.call(null,seq__25779_25793__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25799);

var G__25800 = cljs.core.next.call(null,seq__25779_25793__$1);
var G__25801 = null;
var G__25802 = (0);
var G__25803 = (0);
seq__25779_25783 = G__25800;
chunk__25780_25784 = G__25801;
count__25781_25785 = G__25802;
i__25782_25786 = G__25803;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25804){
var map__25807 = p__25804;
var map__25807__$1 = ((((!((map__25807 == null)))?((((map__25807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25807):map__25807);
var w = map__25807__$1;
var message = cljs.core.get.call(null,map__25807__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16313__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16313__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16313__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25815 = cljs.core.seq.call(null,plugins);
var chunk__25816 = null;
var count__25817 = (0);
var i__25818 = (0);
while(true){
if((i__25818 < count__25817)){
var vec__25819 = cljs.core._nth.call(null,chunk__25816,i__25818);
var k = cljs.core.nth.call(null,vec__25819,(0),null);
var plugin = cljs.core.nth.call(null,vec__25819,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25821 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25815,chunk__25816,count__25817,i__25818,pl_25821,vec__25819,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25821.call(null,msg_hist);
});})(seq__25815,chunk__25816,count__25817,i__25818,pl_25821,vec__25819,k,plugin))
);
} else {
}

var G__25822 = seq__25815;
var G__25823 = chunk__25816;
var G__25824 = count__25817;
var G__25825 = (i__25818 + (1));
seq__25815 = G__25822;
chunk__25816 = G__25823;
count__25817 = G__25824;
i__25818 = G__25825;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25815);
if(temp__4425__auto__){
var seq__25815__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25815__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__25815__$1);
var G__25826 = cljs.core.chunk_rest.call(null,seq__25815__$1);
var G__25827 = c__17109__auto__;
var G__25828 = cljs.core.count.call(null,c__17109__auto__);
var G__25829 = (0);
seq__25815 = G__25826;
chunk__25816 = G__25827;
count__25817 = G__25828;
i__25818 = G__25829;
continue;
} else {
var vec__25820 = cljs.core.first.call(null,seq__25815__$1);
var k = cljs.core.nth.call(null,vec__25820,(0),null);
var plugin = cljs.core.nth.call(null,vec__25820,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25830 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25815,chunk__25816,count__25817,i__25818,pl_25830,vec__25820,k,plugin,seq__25815__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25830.call(null,msg_hist);
});})(seq__25815,chunk__25816,count__25817,i__25818,pl_25830,vec__25820,k,plugin,seq__25815__$1,temp__4425__auto__))
);
} else {
}

var G__25831 = cljs.core.next.call(null,seq__25815__$1);
var G__25832 = null;
var G__25833 = (0);
var G__25834 = (0);
seq__25815 = G__25831;
chunk__25816 = G__25832;
count__25817 = G__25833;
i__25818 = G__25834;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args25835 = [];
var len__17364__auto___25838 = arguments.length;
var i__17365__auto___25839 = (0);
while(true){
if((i__17365__auto___25839 < len__17364__auto___25838)){
args25835.push((arguments[i__17365__auto___25839]));

var G__25840 = (i__17365__auto___25839 + (1));
i__17365__auto___25839 = G__25840;
continue;
} else {
}
break;
}

var G__25837 = args25835.length;
switch (G__25837) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25835.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17371__auto__ = [];
var len__17364__auto___25846 = arguments.length;
var i__17365__auto___25847 = (0);
while(true){
if((i__17365__auto___25847 < len__17364__auto___25846)){
args__17371__auto__.push((arguments[i__17365__auto___25847]));

var G__25848 = (i__17365__auto___25847 + (1));
i__17365__auto___25847 = G__25848;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((0) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25843){
var map__25844 = p__25843;
var map__25844__$1 = ((((!((map__25844 == null)))?((((map__25844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25844):map__25844);
var opts = map__25844__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25842){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25842));
});

//# sourceMappingURL=client.js.map