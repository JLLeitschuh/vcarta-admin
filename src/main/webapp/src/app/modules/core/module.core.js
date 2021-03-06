(function (angular, jcs) {
    'use strict';

    jcs.modules.core = {
        name: 'jcs-core',
        services: {
            eventbus: 'eventbus',
            tools: 'tools'
        },
        controllers: {
            main: 'MainController'
        },
        routes: {
            home: '/'
        },
        factory:{
            httpTransformer: "httpTransformer"
        },
        filter:{
            format: 'format',
            removeZeros : "removeZeros"
        }
    };

    angular.module(jcs.modules.core.name, []);
}(angular, jcs));
