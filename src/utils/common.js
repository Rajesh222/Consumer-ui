import React from 'react';
import toastr from 'toastr';

function baseToastrConfig() {
    return {
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": false,
      "positionClass": "toastr-wrapper toast-top-right",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "timeOut": "0",
      "extendedTimeOut": "0",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut",
      "tapToDismiss": false
    }
  }

  export function clearToastr() {
    toastr.clear();
  }
  
  export function showToastrOnSuccess(message, showDuration = 100) {
    const config = baseToastrConfig();
    config.showDuration = Number(showDuration);
    config.timeOut = 3000;
    toastr.options = config;
    toastr.success(message);
  }
  
export function showToastrOnError(message, showDuration = 100) {
    const config = baseToastrConfig();
    config.showDuration = Number(showDuration);
    config.timeOut = 3000;
    toastr.options = config;
    toastr.error(message);
  }
  
  export function showToastrOnWarning(message, showDuration = 100) {
    const config = baseToastrConfig();
    config.showDuration = Number(showDuration);
    config.timeOut = 3000;
    toastr.options = config;
    toastr.warning(message);
  }
  export function showErrorServiceNotAvailable(showHandler = null) {
    const msg = 'Service will be available shortly. Please try in some time.';
    if (showHandler) {
      showHandler(msg);
    } else {
      showToastrOnError(msg);
    }
  }

