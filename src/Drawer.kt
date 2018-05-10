package kotlinSample

import org.w3c.dom.CanvasRenderingContext2D
import kotlin.math.PI

object Drawer {
    fun draw(context2D: CanvasRenderingContext2D, ball: Ball) {
        context2D.run {
            beginPath()
            arc(ball.x, ball.y, ball.radius, 0.0, 2 * PI)
            fillStyle = "#0095DD"
            fill()
            closePath()
        }
    }

    fun draw(context2D: CanvasRenderingContext2D, paddle: Paddle) {
        context2D.run {
            beginPath()
            rect(
                    paddle.x,
                    canvas.height - paddle.height,
                    paddle.width, paddle.height)
            fillStyle = "#0095DD"
            fill()
            closePath()
        }
    }

    fun draw(context2D: CanvasRenderingContext2D, brickArray: Array<Array<Brick>>) {
        context2D.run {
            brickArray.forEach {
                it.forEach {
                    if (it.valid) {
                        beginPath();
                        rect(it.x, it.y, it.width, it.height);
                        fillStyle = "#0095DD";
                        fill();
                        closePath();
                    }
                }
            }
        }
    }

    fun draw(context2D: CanvasRenderingContext2D, score: Score) {
        context2D.run {
            font = "16px Arial"
            fillStyle = "#0095DD"
            fillText("Score: " + score.total, 8.0, 20.0)
        }
    }

    fun draw(context2D: CanvasRenderingContext2D, player: Player) {
        context2D.run {
            font = "16px Arial";
            fillStyle = "#0095DD";
            fillText(
                    "Lives: " + player.lifeCount,
                    canvas.width - 65.0, 20.0);
        }
    }

    fun clearCanvas(context2D: CanvasRenderingContext2D) {
        context2D.let {
            it.clearRect(
                    0.0,0.0,
                    it.canvas.width * 1.0, it.canvas.height * 1.0)
        }
    }
}