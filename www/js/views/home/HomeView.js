define(['jquery', 'underscore', 'Backbone', 'views/intro/IntroView', 'text!views/home/HomeView.tpl'],
    function ($, _, Backbone, IntroView, HomeViewTemplate) {
        var HomeView = Backbone.View.extend({

            events:{
                'click #btnNextView':'btnNextView_clickHandler'
            },

            render:function () {
                this.$el.html(_.template(HomeViewTemplate));
                return this;
            },

            btnNextView_clickHandler:function (event) {
                $.mobile.jqmNavigator.pushView(new IntroView);
            }

        });
        return HomeView;
    });