package kotlinSample

class Player(var lifeCount: Int) {
    fun drop(value: Int = 0) {
        lifeCount -= value
    }
}