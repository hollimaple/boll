document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballRadius = 20;

    function drawBall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }

    window.addEventListener('deviceorientation', function(event) {
        let x = event.gamma; // 左右の傾き
        let y = event.beta;  // 前後の傾き

        ballX += x * 0.2;
        ballY += y * 0.2;
