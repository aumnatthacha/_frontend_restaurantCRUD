const deleteRestaurant = async () => {
    const id = document.getElementById("restaurantId").value;

    if (id) {
        try {
            const response = await fetch(`http://localhost:5000/res/${id}`, {
                method: "DELETE",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
            });

            if (response.ok) {
                alert("Restaurant with ID " + id + " has been deleted successfully");
            } else {
                alert("Unable to delete the restaurant");
            }
        } catch (error) {
            alert("Error occurred while trying to delete the restaurant");
        }
    } else {
        alert("Restaurant ID is required ");
    }
};