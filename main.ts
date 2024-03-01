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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
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
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
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
            if (Math.percentChance(1e-50)) {
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
let map = false
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 255
    export const ARCADE_SCREEN_HEIGHT = 255
}
let map_size = game.askForNumber("1=small 2=medium 3=large", 1)
let movebuttons = true
while (map == false) {
    if (map_size == 1) {
        Zoom.SetZoomFilter(2, Mode.Center)
        tiles.setCurrentTilemap(tilemap`small`)
        Start()
        obstacles(13, 13)
        map = true
    } else {
        if (map_size == 2) {
            tiles.setCurrentTilemap(tilemap`medium`)
            Start()
            obstacles(18, 18)
            map = true
        } else {
            if (map_size == 3) {
                tiles.setCurrentTilemap(tilemap`large`)
                Start()
                obstacles(20, 20)
                map = true
            } else {
                if (map_size == 4 || (map_size == 5 || (map_size == 6 || (map_size == 7 || (map_size == 8 || map_size == 9))))) {
                    map_size = game.askForNumber("those aren't options", 1)
                }
            }
        }
    }
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
game.onUpdateInterval(200, function () {
    movement()
})
