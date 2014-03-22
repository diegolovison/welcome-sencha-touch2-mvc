Ext.define('myapp.controller.GetStarted', {
    extend: 'Ext.app.Controller',

    required: [
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            video: '#getStartedVideo'
        }
    },

    launch: function() {
        this.getVideo().setUrl('resources/video/media/BigBuck.m4v');
        this.getVideo().setPosterUrl('resources/video/images/cover.jpg');
    }
});