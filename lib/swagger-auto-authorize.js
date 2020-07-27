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

auth('Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU5NTgyNDk1MCwiZXhwIjoxNTk1ODI2NzUwLCJzY29wZXMiOiJhY2Nlc3MiLCJzeXNpZCI6IjEyOGNiMWY1LTUzNjUtNDRkMS1hZWRlLTM0ZGVkM2I2M2UzZCIsImp0aSI6IjY1ZmJiNjI5LWFmZDItNGI3My1hNmY2LTcwOGE5MmFjMDgyMSJ9.UbOaliMXVU7SAPPFHmhq5VnfaRE9LwabmDJ5SHx13Wif_D2T2ZaPPXL0ExAmdG8gRkHecOc8vJXJHqttdFLVxg')
