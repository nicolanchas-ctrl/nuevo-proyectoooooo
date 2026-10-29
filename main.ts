for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.play(music.stringPlayable("C5 G D B A E C F ", 127), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("B F C A G D C5 E ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A E C5 G F C B D ", 120), music.PlaybackMode.UntilDone)
}
for (let index = 0; index < 2; index++) {
    basic.showString("hecho por nico")
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        # . # . #
        # # # # #
        `)
    music.play(music.stringPlayable("B B B B B B B B ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    music.play(music.stringPlayable("A A A A A A A A ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    music.play(music.stringPlayable("G G G G G G G G ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.play(music.stringPlayable("F F F F F F F F ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # # . .
        . . # # .
        . . . # #
        `)
    music.play(music.stringPlayable("E E E E E E E E ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . . #
        . # # # #
        # . . . .
        . # # # .
        . # . # .
        `)
    music.play(music.stringPlayable("D D D D D D D D ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . # .
        # # # # .
        . . # . .
        # # # . .
        # . # . .
        `)
    music.play(music.stringPlayable("C C C C C C C C ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . # .
        # # # # .
        . . . # .
        # # . . .
        . # . . .
        `)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . # #
        . . . # #
        # . . # #
        . . . # #
        . . . # #
        `)
    basic.showString("finnn")
}
