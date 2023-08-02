const updateRestaurant = async () => {
    const id = document.getElementById("restaurantId").value;
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const img = document.getElementById("img").value;

    if (id && name && type && img) {
        const params = {
            name: name,
            type: type,
            img: img
        };
        try {
            const restaurant = await fetch(`http://localhost:5000/res/${id}`, {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params)
            }).then((response) => {
                return response.json();
            }).then((res) => {
                alert("Restaurant with ID " + res.id + " updated successfully");
            });
        } catch (error) {
            alert("Unable to update the restaurant menu");
        }
    } else {
        alert("All fields are required");
    }
};
