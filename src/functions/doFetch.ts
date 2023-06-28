const doFetch = <T>(url: string, method: string, body?: {}): Promise<T> => {
    const config = {
        baseUrl: 'https://norma.nomoreparties.space/api/',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    function checkResponse(res: Response) {
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
        method: method,
        body: JSON.stringify(body),
    })
        .then(checkResponse)
}

export default doFetch