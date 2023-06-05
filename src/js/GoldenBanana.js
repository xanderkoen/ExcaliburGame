import { Physics, CollisionType, Actor, Vector, CollisionGroup, Engine } from "excalibur"
import { Resources } from './resources.js'

export class GoldenBanana extends Actor {

    game

    constructor(x, y) {
        super({ width: Resources.GoldenBanana.width, height: Resources.GoldenBanana.height }) // collision box!
        this.pos = new Vector(
            2300,
            550
        )
        this.scale = new Vector(4, 4);
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.GoldenBanana.toSprite())
        this.body.collisionType = CollisionType.Fixed

        this.game = _engine

    }

    SecondLevel(){
        console.log('sex')

        const bgm = Resources.IslandSwing
        bgm.stop()

        const bgm1 = Resources.StickySituation
        bgm1.play(0.1)

        const sfx = Resources.gsfx
        sfx.play()
        this.game.goToScene('levelTwo')


    }
}
