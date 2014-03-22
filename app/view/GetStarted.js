Ext.define('myapp.view.GetStarted', {
    extend: 'Ext.Panel',
    xtype: 'getstarted',
    
    config: {  

        title: 'Get Started',
        iconCls: 'action',
        
        items: [
            {
                xtype: 'titlebar',
                title: 'Getting Started'
            },
            {
                xtype: 'video',
                id: 'getStartedVideo'
            }
       ]
    }
});