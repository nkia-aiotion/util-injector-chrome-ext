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
auth('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdWppbiIsImlhdCI6MTYwMzQwNzc5NSwiZXhwIjoxNjAzNDA5NTk1LCJzY29wZXMiOiJhY2Nlc3MiLCJzeXNpZCI6Ijc5Y2Q1ZGI3LTI4MDAtNDg5NC1iMDY1LWFkZGQ2MTMwM2M4YSIsImp0aSI6IjM4ODBhODA3LTk4ZmMtNDk3Yy05MDBlLTg0ODE4ZTQ0YjFmYyJ9.byss8pFynKzM6tifIlpMFAl7NqtOCBS-45jR516uPrNXSyOVOLH4hG-m6oIy7HFlc1pUv_i7a_1NNj3od1b9aA')
