namespace SpriteKind {
    export const tail = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(direction == "down")) {
        if (!(controller.left.isPressed() || controller.right.isPressed())) {
            direction = "up"
        }
    }
})
function movement () {
    Snakeoptions = sprites.create(img`
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 f f f f f f f f 2 2 . . 
        . . f f f 2 2 2 2 2 2 f f f . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . f f f 2 2 2 2 2 2 f f f . . 
        . . 2 2 f f f f f f f f 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . f f f 2 2 2 2 2 2 f f f . . 
        . . 2 2 f f f f f f f f 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 f f f f f f f f 2 2 . . 
        . . f f f 2 2 2 2 2 2 f f f . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        `, SpriteKind.tail)
    if (direction == "left") {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 2 2 2 2 2 2 2 . 
            . . . . . . . 2 2 2 2 2 2 2 2 2 
            . . . . . 2 2 2 2 2 2 2 2 2 2 2 
            . . . . 2 2 2 f f 2 2 2 2 2 2 2 
            . . . . 2 2 2 f f 2 2 2 2 2 2 2 
            . . . . 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . 2 2 2 2 2 2 2 2 2 2 2 2 
            . . . . 2 2 2 f f 2 2 2 2 2 2 2 
            . . . . 2 2 2 f f 2 2 2 2 2 2 2 
            . . . . . 2 2 2 2 2 2 2 2 2 2 2 
            . . . . . . . 2 2 2 2 2 2 2 2 2 
            . . . . . . . . 2 2 2 2 2 2 2 . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.x += -8
        Snakeoptions.x = mySprite.x + 8
        Snakeoptions.y = mySprite.y
    } else if (direction == "down") {
        mySprite.setImage(img`
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 f f 2 2 2 2 f f 2 2 2 . 
            . . 2 2 f f 2 2 2 2 f f 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.y += 8
        Snakeoptions.y = mySprite.y - 8
        Snakeoptions.x = mySprite.x
    } else if (direction == "right") {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . 2 2 2 2 2 2 2 . . . . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            2 2 2 2 2 2 2 2 2 2 2 . . . . . 
            2 2 2 2 2 2 2 f f 2 2 2 . . . . 
            2 2 2 2 2 2 2 f f 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            2 2 2 2 2 2 2 f f 2 2 2 . . . . 
            2 2 2 2 2 2 2 f f 2 2 2 . . . . 
            2 2 2 2 2 2 2 2 2 2 2 . . . . . 
            2 2 2 2 2 2 2 2 2 . . . . . . . 
            . 2 2 2 2 2 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        mySprite.x += 8
        Snakeoptions.x = mySprite.x - 8
        Snakeoptions.y = mySprite.y
    } else if (direction == "up") {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 f f 2 2 2 2 f f 2 2 . . 
            . 2 2 2 f f 2 2 2 2 f f 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            `)
        mySprite.y += -8
        Snakeoptions.y = mySprite.y + 8
        Snakeoptions.x = mySprite.x
    }
    Tailparts.unshift(Snakeoptions)
    sprites.destroy(Tailparts.pop())
}
function Start () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 . . . . . . . . 
        2 2 2 2 2 2 2 2 2 . . . . . . . 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . 
        2 2 2 2 2 2 2 f f 2 2 2 . . . . 
        2 2 2 2 2 2 2 f f 2 2 2 . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        2 2 2 2 2 2 2 f f 2 2 2 . . . . 
        2 2 2 2 2 2 2 f f 2 2 2 . . . . 
        2 2 2 2 2 2 2 2 2 2 2 . . . . . 
        2 2 2 2 2 2 2 2 2 . . . . . . . 
        . 2 2 2 2 2 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(0, 0)
    grid.snap(mySprite, false)
    grid.moveWithButtons(mySprite)
    Tailparts = []
    for (let Indexofsnake = 0; Indexofsnake <= 2; Indexofsnake++) {
        Snakeoptions = sprites.create(img`
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 f f f f f f f f 2 2 . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . 2 2 f f f f f f f f 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . 2 2 f f f f f f f f 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 f f f f f f f f 2 2 . . 
            . . f f f 2 2 2 2 2 2 f f f . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            `, SpriteKind.tail)
        Snakeoptions.x = mySprite.x + (Indexofsnake + 1) * 8
        Tailparts.push(Snakeoptions)
    }
    direction = "right"
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(direction == "right")) {
        if (!(controller.up.isPressed() || controller.down.isPressed())) {
            direction = "left"
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(direction == "left")) {
        if (!(controller.up.isPressed() || controller.down.isPressed())) {
            direction = "right"
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(direction == "up")) {
        if (!(controller.left.isPressed() || controller.right.isPressed())) {
            direction = "down"
        }
    }
})
function obstacles (column: number, row: number) {
    for (let index2 = 0; index2 <= column; index2++) {
        for (let index3 = 0; index3 <= row; index3++) {
            if (Math.percentChance(1)) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(index2, index3), assets.tile`myTile3`) || tiles.tileAtLocationEquals(tiles.getTileLocation(index2, index3), assets.tile`myTile0`)) {
                    tiles.setTileAt(tiles.getTileLocation(index2, index3), assets.tile`myTile`)
                }
            }
        }
    }
}
let Tailparts: Sprite[] = []
let mySprite: Sprite = null
let Snakeoptions: Sprite = null
let direction = ""
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
game.onUpdateInterval(200, function () {
    movement()
})
