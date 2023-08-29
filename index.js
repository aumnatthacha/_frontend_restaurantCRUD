const genRestaurantCard = (res) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); margin:20px;";
    const resCard = `
        <p class="card-text">${res.id}</p>
        <img src="${res.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-font card-name">${res.name}</h5>
            <p class="card-text">${res.type}</p>
            <a href="add.html" class="btn btn-success card-font">เพิ่ม</a>
            <button class="btn btn-danger card-font delete-btn" data-id="${res.id}">ลบ</button>
            <a href="update.html" class="btn btn-warning card-font">แก้ไข</a>
        </div>
    `;
    card.innerHTML = resCard;

    const restaurant = document.querySelector("#restaurant");
    restaurant.appendChild(card);

    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => onDelete(res.id));
}


//
// ฟังก์ชันค้นหาเมนู
const searchMenu = async (event) => {
    const keyword = event.target.value.toLowerCase();
    const allMenus = document.querySelectorAll(".card-name");

    allMenus.forEach((menu) => {
        const menuName = menu.textContent.toLowerCase();
        const card = menu.parentNode.parentNode;

        if (menuName.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
};

//
const onlode = async () => {
    const getAll = await fetch("http://localhost:5000/res", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        }
    }).then((response) => {
        return response.json();
    });
    // console.log(getAll.json());
    getAll.forEach((res) => genRestaurantCard(res));
}

const onDelete = async (restaurantId) => {
    try {
        const response = await fetch(`http://localhost:5000/res/${restaurantId}`, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.ok) {
            const cardToDelete = document.querySelector(`.card [data-id="${restaurantId}"]`).parentNode.parentNode;
            cardToDelete.remove();
        } else {
            console.error("เกิดข้อผิดพลาดในการลบข้อมูล");
        }
    } catch (error) {
        console.error("เกิดข้อผิดพลาดในการลบข้อมูล", error);
    }
}

const main = () => {
    onlode();
}
main();