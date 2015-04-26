Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      logo: '/images/logo.png',
      backgroundColor: '#FFFFFF',
      loadingHtml: message + spinner
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};

var message = '<p class="loading-message">LOADING</p>';
var spinner = '<div class="sk-spinner sk-spinner-wordpress">'
  + '  <span class="sk-inner-circle"></span>'
  + '</div>';