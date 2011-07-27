# Components
______________________________________________

All components in Ext JS 4 are rendered with a base div element which provides a unique id, and baseline component classes (cls, cmpCls, baseCls, and ui). If additional elements are needed to create a component, they are now handled with an XTemplate (renderTpl). Data for the XTemplate is read from a renderData object and Ext.Element references can be placed on the component instance via renderSelectors. The renderSelector is scoped from the base div element and uses standard css selectors. These Ext.Element references are part of the component lifecycle and removed automatically when the component is destroyed. The following example will help illustrate the creation of a custom component:

Simple custom icon component example:

    IconComponent = Ext.extend(Ext.Component, {
       iconCls: 'myIcon',
       renderTpl: '<img alt="" src="{blank}" class="{iconCls}"/>',
       onRender: function() {
           Ext.applyIf(this.renderData, {
               blank: Ext.BLANK_IMAGE_URL,
               iconCls: this.iconCls
           });
           Ext.applyIf(this.renderSelectors, {
               iconEl: '.' + this.iconCls
           });
           IconComponent.superclass.onRender.call(this);
       },
       changeIconCls: function(newIconCls) {
           if (this.rendered) {
               this.iconEl.replaceClass(this.iconCls, newIconCls);
           }
           this.iconCls = newIconCls;
       }
    });

The renderTpl defines an XTemplate with "blank" and "iconCls" variables which are read from renderData at render time. In addition, an "iconEl" reference to the Ext.Element is applied to the instance at render time. The changeIconCls method can now use the iconEl as soon as the component has been rendered.

<iframe src="http://player.vimeo.com/video/17905336?byline=0&amp;portrait=0" width="500" height="281" frameborder="0"></iframe>

<iframe src="http://player.vimeo.com/video/17920271?byline=0&amp;portrait=0" width="500" height="281" frameborder="0"></iframe>

<iframe src="http://player.vimeo.com/video/18777458?byline=0&amp;portrait=0" width="500" height="281" frameborder="0"></iframe>
