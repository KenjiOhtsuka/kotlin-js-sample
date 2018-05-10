package kotlinSample

data class Stage(
     val brickRowCount: Int,
     val brickColumnCount: Int,
     val brickWidth: Int,
     val brickHeight: Int,
     val brickPadding: Int,
     val brickOffsetTop: Int,
     val brickOffsetLeft: Int
) {
    val brickArray: Array<Array<Brick>> =
            Array(
                    brickRowCount,
                    { row ->
                        Array(
                                brickColumnCount,
                                { column ->
                                    Brick(
                                            (column * (brickWidth + brickPadding) + brickOffsetLeft).toDouble(),
                                            (row * (brickHeight + brickPadding) + brickOffsetTop).toDouble(),
                                            brickWidth.toDouble(), brickHeight.toDouble()
                                    )
                                })
                    }
            )

    val validBrickCount: Int
    get() {
        return brickArray.sumBy {
            it.sumBy {
                if (it.valid) 1 else 0
            }
        }
    }
}