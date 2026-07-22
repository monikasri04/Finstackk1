async function apiCalls() {

    const getData = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await getData.json();
    console.log("GET:", comments);


    const postData = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'User 1'
        })
    });

    console.log("POST:", await postData.json());


    const putData = await fetch('https://jsonplaceholder.typicode.com/comments/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Updated User'
        })
    });

    console.log("PUT:", await putData.json());


    const deleteData = await fetch('https://jsonplaceholder.typicode.com/comments/1', {
        method: 'DELETE'
    });

    console.log("DELETE:", await deleteData.json());
}

apiCalls();