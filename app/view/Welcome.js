Ext.define('myapp.view.Welcome', {
    extend: 'Ext.Panel',
    xtype: 'welcome',
    
    config: {

        title: 'Welcome',
        iconCls: 'home',

        items: [
            {
                xtype: 'titlebar',
                title: 'Welcome to Sencha Touch 2'
            },
            {
                xtype: 'button',
                text: 'Welcome',
                action: 'sayHello'
            }
        ]
    }
});