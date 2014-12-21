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

  // Configure the 404 page to show when a route isn't found
  Router.configure({
    notFoundTemplate: Template['404']
  });

  this.define();
};

this.Routes.prototype = {
  /*
   * Define all routes in Iron Router here
   */
  define: function() {
    var me = this;

    Router.route('/', function () {
        me.render(this, Template.home);
    });
    Router.route('/colors', function () {
        me.render(this, Template.colors);
    });
    Router.route('/cars', function () {
        me.render(this, Template.cars);
    });
    Router.route('/cars/car/:id', function () {
        me.render(this, Template.carsDetail, false, {id: this.params.id});
    });
    Router.route('/account', function () {
        me.render(this, Template.account, true);
    });
  },

  /*
   * Actually changes the page by rendering the template
   * @param {Router} router, the instance of Iron Router to render with
   * @param {Template} template, the template to render as the page
   * @param {Boolean} internal, indicates whether the user must be logged in to access this route
   * @param {Object} templateData, data from the route to set as session data, to be used in the template
   */
  render: function (router, template, internal, templateData) {
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

  /*
   * Programmatically navigate to the given route
   * @param {String} url, the url to route to, or the template name
   * @param {Object} data, optional
   * @param {Object} options, optional
   */
  go: function(url, data, options) {
    if (!data) {
      data = {};
    }
    if (!options) {
      options = {};
    }

    Router.go(url, data, options);
  },

  /*
   * Render any structural templates here that exist on every page
   */
  renderPermanentTemplates: function() {
    // Create a component view that renders in the page template, on every page
    this.header.innerHTML = '';
    Blaze.render(Template.componentHeader, this.header);
  }
};
