let cart: any[] = [];
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart') as string);
}

export const addToCart = (newProduct: any, next: () => void) => {
    const existProduct = cart.find(product => product._id === newProduct._id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity++;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}
export const increaseItemInCart = (id: any, next: () => void) => {
    cart.find(product => product._id === id).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}
export const decreaseItemInCart = (id: any, next: () => void) => {
    const currenProduct = cart.find(product => product._id === id);
    currenProduct.quantity--;
    // nếu sản phẩm giảm nhỏ hơn 1 thì xóa
    if (currenProduct.quantity < 1) {
        const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
        if (confirm) {
            cart = cart.filter(item => item._id !== currenProduct._id);
        } else {
            currenProduct.quantity = 1
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    next();
}
export const removeItemInCart = (id: any, next: () => void) => {
    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
    if (confirm) {
        cart = cart.filter(item => item._id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}