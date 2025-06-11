export default function getPost(userId: string) {
    let res = fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(resp => resp.json())
        .then(data => data);
    return res
}