import React from 'react';
import toastr, { ToastContainer } from 'reactjs-toastr';
let container;
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
        "tapToDismiss": false,
        "className" : "toast-top-right"
    }
}
  
export function showToastrOnSuccess(message, showDuration = 100) {
    console.log('mesaaa: ',message)
    const config = baseToastrConfig();
    console.log('config: ',config)
    config.showDuration = Number(showDuration);
    config.timeOut = 3000;
    toastr.options = config;
    console.log('toastr: ', toastr)
    container.success(message);
}

