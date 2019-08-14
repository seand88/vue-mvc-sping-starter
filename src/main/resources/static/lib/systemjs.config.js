System.config({
    map: {
        'vue': '/lib/vue.js',
        'vue-class-component': '/lib/vue-class-component.js',
        'bootstrap-vue': '/lib/bootstrap-vue.js',
        'axios': '/lib/axios.js',
        'text': '/lib/text.js',
        'moment': '/lib/moment.min.js'
    },
    meta: {
        "*.html": {
            "loader" : "text"
        }
    },
    packages:{
        '': {defaultExtension: 'js'},
        'js': {defaultExtension: 'js'},
        'vue-templates': {defaultExtension: ''} //template directory ( html files, already specified in the typescript )
    }
});
