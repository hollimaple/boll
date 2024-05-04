document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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

    function updateBallPosition(x, y) {
        ballX += x * 0.5;
        ballY += y * 0.5;

        // ボールがキャンバスの境界を超えないように制限
        if (ballX < ballRadius) {
            ballX = ballRadius;
        } else if (ballX > canvas.width - ballRadius) {
            ballX = canvas.width - ballRadius;
        }

        if (ballY < ballRadius) {
            ballY = ballRadius;
        } else if (ballY > canvas.height - ballRadius) {
            ballY = canvas.height - ballRadius;
        }

        drawBall();
    }

    window.addEventListener('deviceorientation', function(event) {
        let x = event.gamma; // 左右の傾き
        let y = event.beta;  // 前後の傾き

        updateBallPosition(x, y);
    });

    drawBall();

    // ウィンドウのリサイズに対応
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBall();
    });
});
