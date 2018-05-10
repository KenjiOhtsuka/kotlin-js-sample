package kotlinSample

data class Brick(
        val x: Double,
        val y: Double,
        val width: Double,
        val height: Double
) {
    val left = x
    val right = x + width
    val top = y
    val bottom = y + height
    var valid = true
}