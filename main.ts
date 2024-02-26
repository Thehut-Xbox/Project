namespace SpriteKind {
    export const tail = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "up"
})
function Start () {
    for (let index = 0; index <= 3; index++) {
        Snakeoptions = sprites.create(img`
            . . 7 7 7 7 7 7 7 7 7 7 f f . . 
            . . 7 7 7 7 7 7 7 f f f f 7 . . 
            . . f f f f f f f f 7 7 7 7 . . 
            . . 7 7 7 7 7 7 7 7 7 e e e . . 
            . . 7 7 7 7 7 7 7 7 e e 7 7 . . 
            . . 7 7 7 7 7 7 7 7 e e e 7 . . 
            . . f f 7 7 7 7 7 7 7 7 e e . . 
            . . 7 7 f f f f f 7 7 7 7 7 . . 
            . . 7 7 7 7 7 7 f f f f f 7 . . 
            . . 7 7 7 7 7 7 7 7 7 7 f f . . 
            . . 7 7 7 e e 7 7 7 e e 7 7 . . 
            . . e e e e e 7 7 7 e e e 7 . . 
            . . 7 7 7 7 e 7 7 7 e 7 e e . . 
            . . e e e e e 7 7 7 e e 7 7 . . 
            . . 7 7 e e 7 f f f f e e 7 . . 
            . . f f f f f f 7 7 7 7 7 e . . 
            `, SpriteKind.tail)
    }
    direction = "left"
}
function orbspawn () {
	
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "left"
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "right"
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "down"
})
function obstacles (column: number, row: number) {
    for (let index2 = 0; index2 <= column; index2++) {
        for (let index3 = 0; index3 <= row; index3++) {
            if (Math.percentChance(1)) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(index2, index3), sprites.castle.tilePath2)) {
                    tiles.setTileAt(tiles.getTileLocation(index2, index3), assets.tile`myTile`)
                }
            }
        }
    }
}
let Snakeoptions: Sprite = null
let direction = ""
let movebuttons = true
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 f f 7 7 7 7 f f 7 7 . . 
    . 7 7 7 f f 7 7 7 7 f f 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    `, SpriteKind.Player)
grid.snap(mySprite, false)
grid.moveWithButtons(mySprite)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 260
    export const ARCADE_SCREEN_HEIGHT = 260
}
game.onUpdateInterval(2000, function () {
    if (movebuttons) {
        movebuttons = false
        grid.snap(mySprite, true)
    } else {
        movebuttons = true
        grid.snap(mySprite, false)
    }
})
forever(function () {
	
})
