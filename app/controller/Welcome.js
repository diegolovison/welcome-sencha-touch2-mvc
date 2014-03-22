Ext.define('myapp.controller.Welcome', {
    extend: 'Ext.app.Controller',

    required: [
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            sayHelloButton: 'button[action=sayHello]'
        },
        control: {
            sayHelloButton:  {
                tap: 'sayHelloFunction'
            }
        }
    },

    sayHelloFunction: function(button, e, opts) {
        Ext.Msg.alert('Hello My Friend', 'Welcome to this amazing sencha touch app.', Ext.emptyFn);
    }
});