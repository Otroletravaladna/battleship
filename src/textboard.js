const state = document.querySelector(".msg");
const hit = document.querySelector(".hit");


export function displayShipState(msg) {
    state.textContent = msg.toUpperCase();
    setTimeout(() => {
        state.textContent = "";
    }, 1200);
}

export function displayHitState(msg) {
    hit.textContent = msg.toUpperCase();
    setTimeout(() => {
        hit.textContent = "";
    }, 1200);
}