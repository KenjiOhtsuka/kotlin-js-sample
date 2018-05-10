package kotlinSample

import org.w3c.dom.CanvasRenderingContext2D

/**
 * @param x x-axis position
 * @param y y-axis position
 * @param dx x-axis speed
 * @param dy y-axis speed
 */
class Ball(
        var x: Double,
        var y: Double,
        var dx: Double,
        var dy: Double,
        var radius: Double
) {
    fun process(context2D: CanvasRenderingContext2D) {
        x += dx
        y += dy
    }

    val top
    get() = y - radius

    val bottom
    get() = y + radius

    val left
    get() = x - radius

    val right
    get() = x + radius

}