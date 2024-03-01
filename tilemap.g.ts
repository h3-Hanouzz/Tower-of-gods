// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000200003030303030303030303030303030303030303030303030303010103030303030203030303030203030303030303030303030303030303030103010303030303030303030303030603030303030303030303030303030301030303010303030303030203030306060603030302030303030203030303010303030301030203030303030303060606060603030303030303030303030301030303030301030303030306030303060606030303030303030303030303010303030303030301030303060606030303060303030303030303030303030101030303030303030103030306060603010304030303030303030303030303030102030303030303010303030305030303010401030303030203030303030303010101030303030301030303030503030301040101030303030303030301010101030301010103030103030303050302030304020303030303010101010101030103030303030101030103030305030303060303030301010101030303030301010303030203030303010303030303030606060301010103030303030303030201030303030303030301030301030303060606010103030303030303030303030103030303030303030103030102030606060606030303030303030303030303010103030303030303010303030303060606060603030303030303030303010101010101030303030303010303030303010403030303030302030303030101010101030301010303030301030303010103050303030203030303030101030301010102030303010303010303030103030304010303030303030101010303010101030303030103030103030306030303030501030303030101010101010101010303030301030303010303030601030303040103010101030103030303030103030301010303030103030303060301060606010103010301030303030301030301010303030101030303030306030306060603010303010103030203030101010303030301030302030303030603030606060301030301010303030301010303030303030103030303030303060301010401020101010103010101010303020303030301030303030303030306010303050303010303010101010101030303030303010303030303030303060606030304030301010101010101010303030303010102010101010303030301040101010501010301030101010103030303030101010303010301010303030304030303030303030103030203010303010101030303010103030301030303030403030303030303010301030301020103030303030303030101010203030303040303030303030301010303030303030303030303030303030303030303030303030303020303030303030303030303030303030303030303030303030303`, img`
................................
................................
.......2........................
......222.......................
.....22222......................
..2...222.......................
.222...2........................
.222...2........................
..2....2........................
..2....2........................
..2....2........................
..2...2.........................
.....222........................
.....222........................
....22222.......................
....22222.......................
......2.........................
......2.........................
......2.........................
.2....2.........................
.2....2.........................
.2..222.........................
.2..222.........................
.2..222.........................
.2...2..........................
.2...2..........................
222..2..........................
.2...2..........................
.2..............................
.2..............................
.2..............................
................................
`, [myTiles.transparency16,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
