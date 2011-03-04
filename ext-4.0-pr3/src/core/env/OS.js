/**
 * @class Ext.env.OS
 * Provide useful information about the current operating system environment. Access the global instance stored in Ext.os. Example:
 * <pre><code>
 * if (Ext.os.is.Windows) {
 *      // Windows specific code here
 * }
 *
 * if (Ext.os.is.iOS) {
 *      // iPad, iPod, iPhone, etc.
 * }
 *
 * console.log("Version " + Ext.os.version);
 * </code></pre>
 *
 * For a full list of supported values, refer to: {@link Ext.env.OS#is Ext.env.OS.is}
 */
Ext.define('Ext.env.OS', {

    statics: {
        osNames: {
            ios: 'iOS',
            android: 'Android',
            webos: 'WebOS',
            blackberry: 'BlackBerry',
            mac: 'MacOSX',
            win: 'Windows',
            linux: 'Linux',
            other: 'Other'
        },
        osPrefixes: {
            ios: 'iPhone OS ',
            android: 'Android ',
            blackberry: 'BlackBerry ',
            webos: 'webOS/'
        }
    },

    /*
     * A "hybrid" property, can be either accessed as a method call, i.e:
     * <pre><code>
     * if (Ext.os.is('Android')) { ... }
     * </code></pre>
     *
     * or as an object with boolean properties, i.e:
     * <pre><code>
     * if (Ext.os.is.Android) { ... }
     * </code></pre>
     *
     * Versions can be conveniently checked as well. For example:
     * <pre><code>
     * if (Ext.os.is.Android2) { ... } // Equivalent to (Ext.os.is.Android && Ext.os.version.equals(2))
     *
     * if (Ext.os.is.iOS32) { ... } // Equivalent to (Ext.os.is.iOS && Ext.os.version.equals(3.2))
     * </code></pre>
     *
     * Note that only {@link Ext.Version#getMajor major component}  and {@link Ext.Version#getSimplified simplified}
     * value of the version are available via direct property checking.
     *
     * Supported values are: iOS, iPad, iPhone, iPod, Android, WebOS, BlackBerry, MacOSX, Windows, Linux and Other
     *
     * @param {String} value The OS name to check
     * @return {Boolean}
     */
    is: Ext.emptyFn,

    /*
     * Read-only - the full name of the current operating system
     * Possible values are: iOS, Android, WebOS, BlackBerry, MacOSX, Windows, Linux and Other
     * @type String
     */
    name: null,

    /*
     * Read-only, refer to {@link Ext.Version}
     * @type Ext.Version
     */
    version: null,

    constructor: function() {
        var userAgent = Ext.global.navigator.userAgent,
            platform = Ext.global.navigator.platform,
            selfClass = this.statics(),
            osMatch = userAgent.match(new RegExp('((?:' + Ext.Object.getValues(selfClass.osPrefixes).join(')|(?:') + '))([^\\s;]+)')),
            name = 'other',
            version = '',
            actualVersionMatch;

        if (osMatch) {
            name = selfClass.osNames[Ext.Object.keyOf(selfClass.osPrefixes, osMatch[1])];
            version = osMatch[2];

            if (name === 'BlackBerry') {
                actualVersionMatch = userAgent.match(/Version\/([\d\._]+)/);

                if (actualVersionMatch) {
                    version = actualVersionMatch[1];
                }
            }
        }
        else {
            name = selfClass.osNames[(userAgent.toLowerCase().match(/mac|win|linux/i) || ['other'])[0]];
        }

        Ext.apply(this, {
            name: name,
            version: new Ext.Version(version)
        });

        this.is = function(name) {
            return this.is[name] === true;
        };

        if (name === 'iOS') {
            this.is[platform] = true;
        }

        this.is[this.name] = true;
        this.is[this.name + (this.version.getMajor() || '')] = true;
        this.is[this.name + this.version.getSimplified()] = true;

        Ext.Object.each(selfClass.osNames, function(key, name) {
            this.is[name] = (this.name === name);
        }, this);

        return this;
    }
}, function() {

Ext.os = new Ext.env.OS();

});
