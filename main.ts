namespace SpriteKind {
    export const tail = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    game.gameOver(false)
    game.splash("you lose")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(direction == "down")) {
        if (!(controller.left.isPressed() || controller.right.isPressed())) {
            direction = "up"
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tailcount = tailcount + 1
    tiles.setTileAt(location, assets.tile`myTile0`)
    Tailparts.push(Snakeoptions)
    applenumber = applenumber - 1
})
// This Code was made freely available by https://forum.makecode.com/t/snake-game-grayscale/17122.
function movement () {
    Snakeoptions = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.tail)
    if (direction == "left") {
        mySprite.setImage(img`
            . 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 f f 2 2 2 2 2 2 2 2 
            2 2 f f 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 f f 2 2 2 2 2 2 2 2 
            2 2 f f 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 . 
            `)
        mySprite.x += -12
        Snakeoptions.x = mySprite.x + 12
        Snakeoptions.y = mySprite.y
    } else if (direction == "down") {
        mySprite.setImage(img`
            . 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 f f 2 2 2 2 f f 2 2 
            2 2 f f 2 2 2 2 f f 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 . 
            `)
        mySprite.y += 12
        Snakeoptions.y = mySprite.y - 12
        Snakeoptions.x = mySprite.x
    } else if (direction == "right") {
        mySprite.setImage(img`
            . 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 f f 2 2 
            2 2 2 2 2 2 2 2 f f 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 f f 2 2 
            2 2 2 2 2 2 2 2 f f 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 . 
            `)
        mySprite.x += 12
        Snakeoptions.x = mySprite.x - 12
        Snakeoptions.y = mySprite.y
    } else if (direction == "up") {
        mySprite.setImage(img`
            . 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 f f 2 2 2 2 f f 2 2 
            2 2 f f 2 2 2 2 f f 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 . 
            `)
        mySprite.y += -12
        Snakeoptions.y = mySprite.y + 12
        Snakeoptions.x = mySprite.x
    }
    sprites.destroy(Tailparts.pop())
    Tailparts.unshift(Snakeoptions)
}
function Start () {
    tailcount = 2
    applenumber = 0
    mySprite = sprites.create(img`
        . 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 f f 2 2 
        2 2 2 2 2 2 2 2 f f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 f f 2 2 
        2 2 2 2 2 2 2 2 f f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    // This  code was made freely available by https://github.com/microsoft/arcade-grid
    grid.snap(mySprite, false)
    grid.moveWithButtons(mySprite)
    Tailparts = [sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.tail), sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.tail)]
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
// Spawns the orbs around the Map
function obstacles (column: number, row: number) {
    for (let index2 = 0; index2 <= column; index2++) {
        for (let index3 = 0; index3 <= row; index3++) {
            if (Math.percentChance(1)) {
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(index2, index3), assets.tile`myTile3`) || (tiles.tileAtLocationEquals(tiles.getTileLocation(index2, index3), assets.tile`myTile0`) || tiles.tileAtLocationEquals(tiles.getTileLocation(index2, index3), assets.tile`myTile4`))) {
                    tiles.setTileAt(tiles.getTileLocation(index2, index3), assets.tile`myTile`)
                }
            }
        }
    }
    orbcheker(19, 19)
}
function orbcheker (row20: number, colum20: number) {
    for (let index22 = 0; index22 <= colum20; index22++) {
        for (let index32 = 0; index32 <= row20; index32++) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index22, index32), assets.tile`myTile`)) {
                applenumber = applenumber + 1
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tail, function (sprite, otherSprite) {
    game.gameOver(false)
})
let mySprite: Sprite = null
let applenumber = 0
let Snakeoptions: Sprite = null
let Tailparts: Sprite[] = []
let tailcount = 0
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
        obstacles(11, 11)
        map = true
    } else {
        if (map_size == 2) {
            Zoom.SetZoomFilter(1.3, Mode.Center)
            tiles.setCurrentTilemap(tilemap`medium`)
            Start()
            obstacles(13, 13)
            map = true
        } else {
            if (map_size == 3) {
                tiles.setCurrentTilemap(tilemap`large`)
                Start()
                obstacles(19, 19)
                map = true
            } else {
                if (map_size == 4 || (map_size == 5 || (map_size == 6 || (map_size == 7 || (map_size == 8 || map_size == 9))))) {
                    map_size = game.askForNumber("those aren't options", 1)
                }
            }
        }
    }
}
forever(function () {
    if (tailcount == 10) {
        game.gameOver(true)
    }
})
forever(function () {
    if (applenumber == 0) {
        if (map_size == 1) {
            obstacles(11, 11)
        } else {
            if (map_size == 2) {
                obstacles(13, 13)
            } else {
                if (map_size == 3) {
                    obstacles(19, 19)
                }
            }
        }
    }
})
game.onUpdateInterval(200, function () {
    movement()
})
game.onUpdateInterval(200, function () {
    if (movebuttons) {
        movebuttons = false
        grid.snap(mySprite, true)
    } else {
        movebuttons = true
        grid.snap(mySprite, false)
    }
})
