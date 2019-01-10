
const Api= {
    getData: async (url)=> {
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            });
    },
    postData: async (url, body)=> {
        return fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then((res) => res.json())
            .catch((err) => {
                console.log(err);
            });
    }
};
export default Api;

