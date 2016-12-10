var  window=this,undefined,
        _jQuery=window.jQuery,_$=window.$,
        jQuery=window.jQuery=window.$=function(selector,context){
            retrun new jQuery.fn.init(selector,context);
        }
jQuery.extend({
    noConflict:function(deep){
        window.$=_$;
        if(deep){
        window.jQuery=_jQuery;
        return jQuery;
        }

    }
})