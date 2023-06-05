import { Physics, CollisionType, Actor, Vector, CollisionGroup, Engine } from "excalibur"
import { Resources } from './resources.js'

export class GoldenBanana2 extends Actor {

    game

    constructor(x, y) {
        super({ width: Resources.GoldenBanana.width, height: Resources.GoldenBanana.height }) // collision box!
        this.pos = new Vector(
            2200,
            350
        )
        this.scale = new Vector(4, 4);
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.GoldenBanana.toSprite())
        this.body.collisionType = CollisionType.Fixed

        this.game = _engine

    }

    CreditsLevel(){
        const bgm = Resources.StickySituation
        bgm.stop()

        const sfx = Resources.gsfx
        sfx.play()

        let currentlives = this.game.currentScene.player.Lives
        let currentbanaantjes = this.game.currentScene.uivar.score
        this.game.goToScene('Credits', {lives: currentlives, banaantjes: currentbanaantjes} )


    }
}
