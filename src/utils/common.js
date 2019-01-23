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
  
export function showToastrOnSuccess(message, showDuration = 100) {
    console.log('mesaaa: ',message)
    const config = baseToastrConfig();
    console.log('config: ',config)
    config.showDuration = Number(showDuration);
    config.timeOut = 3000;
    toastr.options = config;
    console.log('toastr: ', toastr)
    toastr.success(message);
}

