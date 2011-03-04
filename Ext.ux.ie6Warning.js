Ext.ns('Ext.ux.ie6Warning.Warn');

/**
 * @class Ext.ux.ie6Warning
 *      Inspired by  www.ie6nomore.com
 *
 * @namespace Ext.ux
 * @singleton
 */
Ext.ux.ie6Warning = {
    wrapperId: 'ie6Wrapper',
    cookieName: 'ie6Sucks',
    
    repoPath: 'https:\/\/github.com/arthurakay/Ext.ux.ie6Warning/raw/master/',

    ie6Css: function () { return this.repoPath + 'stylesheets/ie6.css'; },
    spacerImg: function () { return this.repoPath + 'images/e.png'; },
    
    closeWarning: function() {
        Ext.getCmp(Ext.ux.ie6Warning.wrapperId).destroy();
        Ext.util.Cookies.set(Ext.ux.ie6Warning.cookieName, true);
    },
    
    checkCookie: function() {
        var userPref = Ext.util.Cookies.get(Ext.ux.ie6Warning.cookieName);
        
        if (userPref) { return userPref; }
        else {
            Ext.util.Cookies.set(Ext.ux.ie6Warning.cookieName, false);
        }
        
        return false;
    }

};

/**
 * @class Ext.ux.ie6Warning.Warn
 * @namespace Ext.ux
 * @extends Ext.Component
 * @constructor
 * @param {object} configObj
 * @cfg {string} msg1
 * @cfg {string} msg2
 */
Ext.define('Ext.ux.ie6Warning.Warn', {
    extend: 'Ext.Component',
    
    msg1: 'You are using an outdated browser!',
    msg2: 'For a better experience using this website, please upgrade to a modern web browser.',
    
    tpl: new Ext.Template(
        '<div id="ie6Warning">',
            '<div id="ie6CloseMsg">',
                '<a class="closeIcon" href="#" onclick="Ext.ux.ie6Warning.closeWarning()" title="Close this message.">',
                    '<img src="' + Ext.ux.ie6Warning.spacerImg() + '" alt="Close this message." /></a>', 
            '</div>',
            
            '<div id="ie6Message">',
                '<p>{msg1}</p>',
                '<p>{msg2}</p>',
            '</div>',
            
            '<div id="ie6Alternatives">',
                '<a class="ie6AltBrowser ie6Alt-Firefox" href="http://www.firefox.com" target="_blank">',
                    '<img src="' + Ext.ux.ie6Warning.spacerImg() + '" alt="Firefox" /></a>',
                '<a class="ie6AltBrowser ie6Alt-Safari" href="http://www.apple.com/safari/" target="_blank">',
                    '<img src="' + Ext.ux.ie6Warning.spacerImg() + '" alt="Safari" /></a>',
                '<a class="ie6AltBrowser ie6Alt-Chrome" href="http://www.google.com/chrome" target="_blank">',
                    '<img src="' + Ext.ux.ie6Warning.spacerImg() + '" alt="Chrome" /></a>',
                '<a class="ie6AltBrowser ie6Alt-IE" href="http://www.microsoft.com/windows/internet-explorer/" target="_blank">',
                    '<img src="' + Ext.ux.ie6Warning.spacerImg() + '" alt="Internet Explorer" /></a>',
            '</div>',
        '</div>',
        { compiled: true }
    ),
    
    constructor: function(configObj) {
        if (!configObj) { configObj = {}; }
        Ext.apply(this, configObj);
        
        this.superclass.constructor.call(this, {
            id: Ext.ux.ie6Warning.wrapperId,
            html: this.tpl.apply({
                msg1: this.msg1,
                msg2: this.msg2
            })
        });
        
        this.checkDisplay();
    },
    
    checkDisplay: function() {
         if (Ext.isIE6) {
             if (Ext.ux.ie6Warning.checkCookie() !== 'true') {
                 this.setCss();
                 this.render(Ext.getBody(), 0);
                 
                 return true;
             }
         }
    },
    
    setCss: function() {
        var cssTpl = Ext.core.DomHelper.createTemplate(
            '<link rel="stylesheet" type="text/css" href="{src}" />'
        );

        Ext.core.DomHelper.append(
            Ext.getHead(),
            cssTpl.apply({ src: Ext.ux.ie6Warning.ie6Css	() })
        );
    }
});