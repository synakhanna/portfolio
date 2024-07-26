document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('interactiveCanvas');
    const ctx = canvas.getContext('2d');

    // Create custom cursor element
    const customCursor = document.createElement('i');
    customCursor.className = 'fas fa-paint-brush custom-cursor';
    document.body.appendChild(customCursor);

    let x = 0;
    let y = 0;
    let isDrawing = false;

    function drawBackground() {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'pink');
        gradient.addColorStop(1, 'white');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function startDrawing(event) {
        isDrawing = true;
        [x, y] = [event.offsetX, event.offsetY];
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function draw(event) {
        if (!isDrawing) return;
        [x, y] = [event.offsetX, event.offsetY];
        ctx.lineTo(x, y);
        ctx.strokeStyle = '#AA336A'; // Change the drawing color to #AA336A
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    function moveCursor(event) {
        customCursor.style.left = `${event.pageX}px`;
        customCursor.style.top = `${event.pageY}px`; // Adjust to align the bottom of the paintbrush icon with the cursor
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.closePath();
    }

    canvas.addEventListener('mousemove', function(event) {
        if (isDrawing) {
            draw(event);
        }
        moveCursor(event);
    });

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    drawBackground();
});
