
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

const r = myCall('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYwMzY3NTE4NCwic2NvcGVzIjoiYXBwIiwic3lzaWQiOiI3OWNkNWRiNy0yODAwLTQ4OTQtYjA2NS1hZGRkNjEzMDNjOGEiLCJqdGkiOiI2N2JmNjI0OC02MTBhLTRjYmEtOWM2Mi05YzZjZjgxNDViZDEifQ.8I3MKAGEI6ICzc6x09_i6X5kSV_Cd04UMb6gWKSpS0z6TvwFiAuGNhuGmptOelcJDlNXvw-NRuT9ywfocnrt9Q')
// myHttp.get('/api/kepco/dga/dga-severity?resourceId=8541&limit=5&desc=true')
