var delay = (timeout) => new Promise((resolve) => {
    setTimeout(resolve, timeout)
})

var auth = async (tkn) => {
    while(!$('.btn.authorize').length) {
        await delay(50)
    }

    console.log($)
    $('.btn.authorize').click()

    var input = $('.auth-container form input')[0]
    input.value = `Bearer ${tkn}`
    const event = new Event("input", { bubbles: true });
    const tracker = input._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
    // $('.auth-container form input').trigger('change')
    $('.auth-container form .auth-btn-wrapper button.authorize').length && $('.auth-container form .auth-btn-wrapper button.authorize')[0].click()
    $('.auth-container form .auth-btn-wrapper button.btn-done').length && $('.auth-container form .auth-btn-wrapper button.btn-done')[0].click()
}
auth('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYwMzY3NTE4NCwic2NvcGVzIjoiYXBwIiwic3lzaWQiOiI3OWNkNWRiNy0yODAwLTQ4OTQtYjA2NS1hZGRkNjEzMDNjOGEiLCJqdGkiOiI2N2JmNjI0OC02MTBhLTRjYmEtOWM2Mi05YzZjZjgxNDViZDEifQ.8I3MKAGEI6ICzc6x09_i6X5kSV_Cd04UMb6gWKSpS0z6TvwFiAuGNhuGmptOelcJDlNXvw-NRuT9ywfocnrt9Q')
