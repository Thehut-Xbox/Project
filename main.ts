namespace SpriteKind {
    export const tail = SpriteKind.create()
}
function Start () {
    mySprite = sprites.create(img`
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
    mySprite.setPosition(0, 0)
    grid.snap(mySprite, false)
    grid.moveWithButtons(mySprite)
    Tailparts = []
    for (let index = 0; index <= 3; index++) {
        let Tailpart = 0
        let Indexofsnake = 0
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
        Snakeoptions.x = mySprite.x + (Indexofsnake + 1) * 8
        Tailparts.push(Tailpart)
    }
    direction = "left"
}
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    direction = "down"
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    direction = "right"
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    direction = "left"
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    direction = "up"
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
let direction = ""
let Snakeoptions: Sprite = null
let Tailparts: number[] = []
let mySprite: Sprite = null
let movebuttons = true
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 260
    export const ARCADE_SCREEN_HEIGHT = 260
}
tiles.setCurrentTilemap(tilemap`level1`)
Start()
obstacles(16, 16)
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
