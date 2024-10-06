const circle = document.getElementById('circle');
let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;
const easing = 0.05;

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX - 25; 
    mouseY = e.pageY - 25;
});

function animate() {
    circleX += (mouseX - circleX) * easing;
    circleY += (mouseY - circleY) * easing;

    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;

    requestAnimationFrame(animate);
}

animate();