function funFetch(url, method, body) {
    const config = {
        baseUrl: 'https://norma.nomoreparties.space/api/',
        headers: {
            //authorization: '50b7264a-788e-45f0-906b-12b3c772c60f',
            'Content-Type': 'application/json'
        }
    }

    function checkResponse(res) {
        if (res.ok) {
            return res.json();
        };
        return res.json()
            .then((err) => {
                err.statusCode = res.status;
                return Promise.reject(err);
            });
    }

    return fetch(config.baseUrl + url, {
        headers: config.headers,
        method,
        body,
    })
        .then(checkResponse)
}

export default funFetch