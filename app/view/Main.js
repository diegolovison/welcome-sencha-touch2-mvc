Ext.define('myapp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'myapp.view.Welcome',
        'myapp.view.GetStarted'
    ],
    
    config: {
        
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'welcome'
            },
            {                   
                xtype: 'getstarted'
            }
        ]
    }
});
