var canvas = document.getElementById('fruits');
var ctx = canvas.getContext('2d');

// Scale the canvas for high DPI displays
var devicePixelRatio = window.devicePixelRatio || 1;
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
ctx.scale(devicePixelRatio, devicePixelRatio);

var fruitEmojis = ['🍎','🍌','🍊', '🥝'];
var fruits = [];
var gridSize = 50;

// Initialize fruits in a grid
for (var i = 0; i < canvas.width / gridSize; i++) {
    for (var j = 0; j < canvas.height / gridSize; j++) {
        fruits.push({
            x: i * gridSize,
            y: j * gridSize,
            originalX: i * gridSize,
            originalY: j * gridSize,
            emoji: fruitEmojis[Math.floor(Math.random() * fruitEmojis.length)]
        });
    }
}

function drawFruit(fruit) {
    ctx.font = '24px Arial';
    ctx.fillText(fruit.emoji, fruit.x, fruit.y);
}

function updateFruit(fruit, mouseX, mouseY) {
    var dx = fruit.x - mouseX;
    var dy = fruit.y - mouseY;

    // Move the fruit if the cursor is close
    if (Math.sqrt(dx * dx + dy * dy) < 50) {
        fruit.x += dx / 10;
        fruit.y += dy / 10;
    } else {
        // Move the fruit back to its original position
        fruit.x += (fruit.originalX - fruit.x) / 10;
        fruit.y += (fruit.originalY - fruit.y) / 10;
    }
}

canvas.addEventListener('mousemove', function(event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    for (var i = 0; i < fruits.length; i++) {
        updateFruit(fruits[i], mouseX, mouseY);
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < fruits.length; i++) {
        drawFruit(fruits[i]);
    }

    requestAnimationFrame(animate);
}

animate();