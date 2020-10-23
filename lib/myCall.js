
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

const r = myCall('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdWppbiIsImlhdCI6MTYwMzQwNzc5NSwiZXhwIjoxNjAzNDA5NTk1LCJzY29wZXMiOiJhY2Nlc3MiLCJzeXNpZCI6Ijc5Y2Q1ZGI3LTI4MDAtNDg5NC1iMDY1LWFkZGQ2MTMwM2M4YSIsImp0aSI6IjM4ODBhODA3LTk4ZmMtNDk3Yy05MDBlLTg0ODE4ZTQ0YjFmYyJ9.byss8pFynKzM6tifIlpMFAl7NqtOCBS-45jR516uPrNXSyOVOLH4hG-m6oIy7HFlc1pUv_i7a_1NNj3od1b9aA')
// myHttp.get('/api/kepco/dga/dga-severity?resourceId=8541&limit=5&desc=true')
