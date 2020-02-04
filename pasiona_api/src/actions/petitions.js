async function getJSON(url) {
    const res = await fetch(url);
 
    if (!res.ok) {
        throw new Error(res.status); // 404
    }
 
    const data = await res.json();
    return data;
}

async function deleteJSON(url) {
    const options = {
        method: 'DELETE'
    };
    const res = await fetch(url,options);
 
    if (!res.ok) {
        throw new Error(res.status); // 404
    }
}
 
async function postJSON(url, obj, method) {
    const options = {
        method: method,
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const res = await fetch(url,options);
 
    if (!res.ok) {
        throw new Error(res.status); // 404
    }
 
    const data = await res.json();
    return data;
}

export {getJSON, postJSON, deleteJSON}