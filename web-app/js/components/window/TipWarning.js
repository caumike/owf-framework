Ext.define('Ozone.components.window.TipWarning', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tipwarning',
    tip: null,
    buttonConfig: null,
    buttonHandler: null,
    text: null,
    cls: 'tip-warning',

    initComponent: function() {
    	var me = this;

    	me.update(me.text);

    	if(me.buttonConfig == 'ok') {
    		me.bbar = ['->',{
    			text: 'OK',
    			handler: (me.buttonHandler ? me.buttonHandler : function() {
    				me.buttonHandler();
    				me.tip.close();
    			})
    		}]
    	} else if(me.buttonConfig == "ok_cancel") {
    		me.bbar = Ext.create('Ext.toolbar.Toolbar', {
                layout: {
                    pack: 'center'
                },
                items: [{
        			text: 'OK',
                    cls: 'okbutton',
        			handler: function() {
        				me.buttonHandler();
        				me.tip.close();
        			}
        		},{
        			text: 'Cancel',
                    cls: 'cancelbutton',
        			handler: function() {
        				me.tip.close();
        			}
        		}]
            });
    	}

    	me.callParent(arguments);
    }

});