define(['jquery', 'underscore', 'Backbone', 'views/search/SearchView', 'text!views/intro/IntroView.tpl'],
    function ($, _, Backbone, SearchView, IntroViewTemplate) {
        var IntroView = Backbone.View.extend({

            events:{
                'click #btnSearchView':'btnSearchView_clickHandler'
            },

            render:function () {
                this.$el.html(_.template(IntroViewTemplate));
                return this;
            },

            btnSearchView_clickHandler:function (event) {
                $.mobile.jqmNavigator.pushView(new SearchView);
            }

        });
        return IntroView;
    });