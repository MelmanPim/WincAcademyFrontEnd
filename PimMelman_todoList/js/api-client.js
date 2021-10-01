const apiUrl = `http://localhost:3000/`

// GET
async function getData() {
    try {

        let res = await fetch(apiUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return res.json();

    } catch (err) {
        console.log(err);
    }
};

// GET ID
async function getDataId(id) {
    try {

        let res = await fetch(`${apiUrl}${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return res.json();

    } catch (err) {
        console.log(err);
    }
};

// POST
async function postData(item) {
    try {
        const data = {
            item
        }
        let res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return res.json();

    } catch (err) {
        console.log(err);
    }
};


// DELETE
async function deleteData(id) {
    try {

        let res = await fetch(`${apiUrl}${id}`, {
            method: "DELETE",
        });

    } catch (err) {
        console.log(err);
    }
};