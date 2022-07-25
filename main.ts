input.onButtonPressed(Button.A, function () {
    if (Sprite == _1) {
        Punkt += 1
    } else if (Sprite != _1) {
        game.removeLife(0)
    }
})
let Sprite: game.LedSprite = null
let _1: game.LedSprite = null
game.setLife(3)
_1 = game.createSprite(2, 2)
Sprite = game.createSprite(2, 2)
let Leben = 3
let Punkt = 0
for (let index = 0; index < 20; index++) {
    Sprite.move(1)
    basic.pause(1000)
    Sprite.ifOnEdgeBounce()
}
for (let index = 0; index < 20; index++) {
    Sprite.move(1)
    basic.pause(500)
    Sprite.ifOnEdgeBounce()
}
for (let index = 0; index < 20; index++) {
    Sprite.move(1)
    basic.pause(200)
    Sprite.ifOnEdgeBounce()
}
for (let index = 0; index < 20; index++) {
    Sprite.move(1)
    basic.pause(100)
    Sprite.ifOnEdgeBounce()
    for (let index = 0; index < 1; index++) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
}
