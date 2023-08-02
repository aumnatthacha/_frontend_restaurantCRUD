// const deleteRestaurant = async (id) => {
//     try {
//         const response = await fetch(`http://localhost:5000/res/${id}`, {
//             method: "DELETE",
//             mode: "cors",
//             cache: "no-cache",
//             credentials: "same-origin",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });

//         if (!response.ok) {
//             throw new Error("Failed to delete data.");
//         }

//         console.log("Data deleted successfully.");
//     } catch (error) {
//         console.error("Error deleting data:", error);
//     }
// };

// const onDelete  = () => {
//     const restaurantIdToDelete = 14; // Replace 123 with the actual ID of the restaurant to delete
//     deleteRestaurant(14);
// };

// onDelete();
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
        alert("Restaurant ID is required");
    }
};

