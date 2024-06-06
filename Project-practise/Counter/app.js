
let count = 0;

document.getElementById("clickBtn").addEventListener('click', () => {
    count++;
    document.getElementById("count").innerText = count;
});