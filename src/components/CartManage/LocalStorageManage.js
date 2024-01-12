const AddToy = (user, toy) => {
    let cart = JSON.parse(localStorage.getItem("Cart"));
    cart.user = user;
    const existingToy = cart.toys.find(item => item.toy === toy);
    if (existingToy) {
        existingToy.quantity += 1;
    } else {
        cart.toys.push({ toy: toy, quantity: 1 });
    }
    localStorage.setItem("Cart", JSON.stringify(cart));
}

const RemoveToy = (id) => {
    try {
        let cart = JSON.parse(localStorage.getItem("Cart"));
        const newToys = cart.toys.filter(item => item.toy !== id);
        
        cart.toys = newToys;
        localStorage.setItem("Cart", JSON.stringify(cart));
        console.log(cart);
    } catch (error) {
        console.log("Can't remove toy from cart with error:", error);
    }
    window.location.reload();
}

const DeleteCart = () => {
    let cart = JSON.parse(localStorage.getItem("Cart"));
    cart.toys = [];
    localStorage.setItem("Cart", JSON.stringify(cart));
}

export { AddToy, DeleteCart, RemoveToy };