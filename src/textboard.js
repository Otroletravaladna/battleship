const state = document.querySelector(".msg");
const hit = document.querySelector(".hit");


export function displayShipState(msg) {
    state.textContent = msg;
    setTimeout(() => {
        state.textContent = "";
    }, 2000);
}

export function displayHitState(msg) {
    hit.textContent = msg;
    setTimeout(() => {
        hit.textContent = "";
    }, 2000);
}