package kotlinSample

import org.w3c.dom.CanvasRenderingContext2D

class Paddle(
        var height: Double,
        var width: Double,
        var x: Double,
        var v: Double = 7.0
) {
    fun process(context2D: CanvasRenderingContext2D, key: Key) {
        when {
            Key.right ->
                if (x < context2D.canvas.width - width) x += v
            Key.left ->
                if (0 < x) x -= v
        }
    }

    var left
    get() = x
    set(value) {
        x = value
    }

    var right
    get() = x + width
    set(value) {
        x = value - width
    }
}