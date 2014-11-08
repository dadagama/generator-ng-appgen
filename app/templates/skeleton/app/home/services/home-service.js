(function(){
    'use strict';

    /**
     * This is a sample service
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    angular.module('home').service('homeService', ['$http', '$q', function($http, $q) {

        var message = '';

        this.getMessage = function(){
            if(message === ''){
                message = 'Congratulations! Your app is fully up and running.';
            }

            return message;
        };

    }]);

})();
