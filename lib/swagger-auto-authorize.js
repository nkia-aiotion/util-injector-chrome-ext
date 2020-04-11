var delay = (timeout) => new Promise((resolve) => {
    setTimeout(resolve, timeout)
})

var auth = async (tkn) => {
    while(!$('#auth_container > div > a').length) {
        await delay(50)
    }
    $('#auth_container > div > a').click()

    while(!$('#swagger-ui-container > div.api-popup-dialog > div.api-popup-dialog-wrapper').length) {
        await delay(50)
    }

    $('#swagger-ui-container > div.api-popup-dialog > div.api-popup-dialog-wrapper > div.api-popup-content > div > div > div > div.auth_inner > div > div > div > div > div:nth-child(3) > div:nth-child(3) > input').val(tkn)
    $('#swagger-ui-container > div.api-popup-dialog > div.api-popup-dialog-wrapper > div.api-popup-content > div > div > div > div.auth_inner > div > div > div > div > div:nth-child(3) > div:nth-child(3) > input').change()
    $('#swagger-ui-container > div.api-popup-dialog > div.api-popup-dialog-wrapper > div.api-popup-content > div > div > div > div.auth_submit > button').click()
}

auth('Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU4NTk4NTA1Miwic2NvcGVzIjoiYXBwIiwic3lzaWQiOiIxMjhjYjFmNS01MzY1LTQ0ZDEtYWVkZS0zNGRlZDNiNjNlM2QiLCJqdGkiOiIwYTI0OWUzMS1mYTU5LTQ0YTAtODUxNi0yZmEwN2RkZTdlMGEifQ.eUZgpner8bVfq9VQVp6_laWbGa1J7AxNxc_9M4-f6g897yEuPZgEvvEP7AQ8PJZOEijT6tccveOGPNvmuVIoag')

