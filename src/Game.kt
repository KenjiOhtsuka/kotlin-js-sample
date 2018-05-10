package kotlinSample

import kotlinSample.Exception.StageClearException
import org.w3c.dom.*
import org.w3c.dom.events.*
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.createElement

object Game {
    val canvas: HTMLCanvasElement by lazy {
        document.getElementById("myCanvas") as HTMLCanvasElement
    }
    val context2D: CanvasRenderingContext2D by lazy {
        canvas.getContext("2d") as CanvasRenderingContext2D
    }
    lateinit var ball: Ball
    lateinit var paddle: Paddle
    lateinit var stage: Stage
    var score = Score()
    var player = Player(3)

    fun setup() {
        document.body!!.appendChild(
                document.createElement(
                        "canvas",
                        {
                            this.id = "myCanvas"
                            this.setAttribute("width", "480")
                            this.setAttribute("height", "320")
                        })
        )
        val keyPressEvent: (Boolean) -> EventListener = { pressed ->
            EventListener {
                (it as KeyboardEvent).apply {
                    when (it.keyCode) {
                    // right pressed
                        39 -> Key.right = pressed
                    // left pressed
                        37 -> Key.left = pressed
                    }
                }
            }
        }

        document.addEventListener(
                "keydown",
                keyPressEvent(true)
        )
        document.addEventListener(
                "keyup",
                keyPressEvent(false)
        )
        document.addEventListener(
                "mousemove",
                {
                    it as MouseEvent
                    val relativeX = it.clientX - canvas.offsetLeft
                    if (0 < relativeX && relativeX < canvas.width)
                        paddle.x = relativeX - paddle.width / 2
                },
                false
        )

        ball = Ball(
                canvas.width / 2.0,
                canvas.height - 30.0,
                -2.0, -2.0, 10.0)
        paddle = Paddle(
                10.0, 75.0,
                (context2D.canvas.height - 75.0) / 2)
        stage = Stage(3, 5, 75, 20, 10, 30, 30)

        process()
    }

    private fun process() {
        try {
            updateDirectionByPaddleAndWallCollision()
            updateDirectionAndScoreByBlockCollision()
        } catch (e: MissException) {
            miss()
        } catch (e: StageClearException) {
            clear()
        }

        Drawer.run {
            clearCanvas(context2D)
            draw(context2D, ball)
            draw(context2D, paddle)
            draw(context2D, stage.brickArray)
            draw(context2D, score)
            draw(context2D, player)
        }
        ball.process(context2D)
        paddle.process(context2D, Key)

        window.requestAnimationFrame {
            process()
        }
    }

    private fun reset() {
        document.location?.reload()
    }

    private fun updateDirectionAndScoreByBlockCollision() {
        stage.brickArray.forEach {
            it.forEach {
                if (it.valid &&
                        it.left < ball.x && ball.x < it.right &&
                        it.top < ball.y && ball.y < it.bottom) {
                    ball.dy *= -1
                    it.valid = false

                    score += 1
                }
            }
        }
        if (stage.validBrickCount == 0) {
            throw StageClearException()
        }
    }

    private fun updateDirectionByPaddleAndWallCollision() {
        ball.run {
            if (top + dy < 0)
                dy *= -1
            else
                if (context2D.canvas.height < bottom + dy) {
                    if (paddle.left < x && x < paddle.right)
                        dy *= -1
                    else
                        throw MissException()
                }

            if (left + dx < 0 ||
                    context2D.canvas.width < right + dx)
                dx *= -1
        }
    }

    private fun miss() {
        --player.lifeCount
        if (player.lifeCount > 0) {
            resetBall()
            resetPaddle()
            return
        }
        over()
    }

    private fun over() {
        window.alert("Game Over")
        reset()
    }

    private fun clear() {
        window.alert("Stage Clear")
        reset()
    }

    private fun resetPaddle() {
        paddle.x = (canvas.width - paddle.width) / 2
    }

    private fun resetBall() {
        ball.apply {
            x = canvas.width / 2.0
            y = canvas.height - 30.0
            dx = -2.0
            dy = -2.0
        }
    }
}