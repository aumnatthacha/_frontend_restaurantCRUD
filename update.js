const updateRestaurant = async () => {
    const id = document.getElementById("restaurantId").value;
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const img = document.getElementById("img").value;

    if (id && name && type && img) {
        try {
            const updatedParams = {
                name: name,
                type: type,
                img: img
            };

            const updateResponse = await fetch(`http://localhost:5000/res/${id}`, {
                method: "PUT",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedParams)
            });

            const updatedData = await updateResponse.json();
            alert("อัปเดตสำเร็จ");

            // Redirect to the main page after successful update
            window.location.href = "index.html"; // Replace with your main page URL

        } catch (error) {
            alert("Failed to update restaurant");
        }
    } else {
        alert("All fields are required");
    }
};


