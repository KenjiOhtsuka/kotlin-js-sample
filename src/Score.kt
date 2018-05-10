package kotlinSample

class Score {
    var total = 0

    operator fun plusAssign(value: Int) {
        add(value)
    }

    operator fun unaryPlus() {
        add(1)
    }

    fun add(value: Int) {
        total += value
    }
}
