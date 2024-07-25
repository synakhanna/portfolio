document.getElementById('canvas').addEventListener('click', function(event) {
    var canvas = event.target;
    var ctx = canvas.getContext('2d');
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    ctx.font = '24px FontAwesome';
    ctx.fillStyle = 'pink';
    ctx.fillText('\uf290', x - 12, y + 12);
});
