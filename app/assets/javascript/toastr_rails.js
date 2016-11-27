//= require 'toastr'

//toastr
toastr.options = {
  "closeButton": true,
  "debug": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

var showToast = function(flash){
  for(var i = 0; i < flash.length; i++ ){
    var msg = flash[i];
    var type = {
      notice: 'success',
      success: 'success',
      alert: 'error',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    var options = {
      notice: {},
      alert: { "timeOut": "0", "extendedTimeOut": "0" },
      warning: { "timeOut": "0", "extendedTimeOut": "0" },
      info: {}
    };
    try {
      toastr[type[msg[0]]](msg[1], '', options[msg[0]]);
    } catch(err) {
      toastr.info(msg[1], '', options[msg[0]]);
    }
  }
};
