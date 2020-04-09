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

const r = myCall('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTU4NTk4NTA1Miwic2NvcGVzIjoiYXBwIiwic3lzaWQiOiIxMjhjYjFmNS01MzY1LTQ0ZDEtYWVkZS0zNGRlZDNiNjNlM2QiLCJqdGkiOiIwYTI0OWUzMS1mYTU5LTQ0YTAtODUxNi0yZmEwN2RkZTdlMGEifQ.eUZgpner8bVfq9VQVp6_laWbGa1J7AxNxc_9M4-f6g897yEuPZgEvvEP7AQ8PJZOEijT6tccveOGPNvmuVIoag')
// myHttp.get('/api/kepco/dga/dga-severity?resourceId=8541&limit=5&desc=true')

