export default class APIService{
    static UpdateArticle(_id, body) {
        return fetch(`http://127.0.0.1:5000/users/${_id}`, {
            "method": "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    }
}