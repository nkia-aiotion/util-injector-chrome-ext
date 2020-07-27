const myCall = token => {
    const setToken = tkn => {
        token = tkn
        console.log('token changed')
    }
    const getHeaders = () => {
        const myHeaders = new Headers()
        myHeaders.append("Authorization", `Bearer ${token}`)
        return myHeaders
    }
    return {
        setToken,
        getHeaders,
        get: async (url) => {

            const res = await fetch(url, { method: 'GET', headers: getHeaders() })

            return res.json()
        },
    }
}

const r = myCall('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU5NTgyNDk1MCwiZXhwIjoxNTk1ODI2NzUwLCJzY29wZXMiOiJhY2Nlc3MiLCJzeXNpZCI6IjEyOGNiMWY1LTUzNjUtNDRkMS1hZWRlLTM0ZGVkM2I2M2UzZCIsImp0aSI6IjY1ZmJiNjI5LWFmZDItNGI3My1hNmY2LTcwOGE5MmFjMDgyMSJ9.UbOaliMXVU7SAPPFHmhq5VnfaRE9LwabmDJ5SHx13Wif_D2T2ZaPPXL0ExAmdG8gRkHecOc8vJXJHqttdFLVxg')
// myHttp.get('/api/kepco/dga/dga-severity?resourceId=8541&limit=5&desc=true')
