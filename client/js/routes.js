/**
 * Clientside routes
 */

this.Routes = function() {
  // The container of the nav and login component
  this.headerSelector = ".header";
  this.header = $(this.headerSelector).get(0);

  // Render structure templates that don't change on every route change
  this.renderPermanentTemplates();

  // Setup Google Analytics (change UA-XXXXX-X to your own Google Analytics number!)
  this._gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
  (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src='//www.google-analytics.com/ga.js';
  s.parentNode.insertBefore(g,s)}(document,'script'));

  // Bind a Google Analytics track event to every page change
  var me = this;
  Router.onRun(function() {
    // Let Google Analytics know that the page has changed
    var url = Router.current().url;
    me._gaq.push(['_trackPageview', url])

    this.next();
  });

  Router.configure({
    notFoundTemplate: Template['404']
  });

  this.define();
};

this.Routes.prototype = {
  // Define all routes
  define: function() {
    var me = this;

    Router.route('/', function () {
        me.go(this, Template.home);
    });
    Router.route('/colors', function () {
        me.go(this, Template.colors);
    });
    Router.route('/cars', function () {
        me.go(this, Template.cars);
    });
    Router.route('/cars/car/:id', function () {
        me.go(this, Template.carsDetail, false, {id: this.params.id});
    });
    Router.route('/account', function () {
        me.go(this, Template.account, true);
    });
  },

  // Actually changes the page by rendering the template
  go: function (router, template, internal, templateData) {
    if (!template) {
      template = Template.home;
    }

    // Pages that are "internal" can only be viewed by a logged in user
    if (internal && !Meteor.userId()) {
      router.render(Template['404']);
      return;
    }

    // If all is well, go to the requested page!
    if (!internal || Meteor.userId()) {
      // Set data for this template to use
      Session.set('templateData', templateData || {});
      router.render(template);
    }
  },

  // Code to run before any action happens
  renderPermanentTemplates: function() {
    // Create a component view that renders in the page template, on every page
    this.header.innerHTML = '';
    Blaze.render(Template.componentHeader, this.header);
  }
};
