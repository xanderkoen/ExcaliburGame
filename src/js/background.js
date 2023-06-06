import {Actor, Vector, GraphicsGroup, ParallaxComponent} from 'excalibur'
import { Resources } from './resources.js'


export class Background extends Actor {

    offset
    game
    bgImage
    yvar
    onInitialize(engine){

        this.game = engine

        if (this.game.currentScene.levelint === 1){
            this.bgImage = Resources.Background.toSprite()
            this.yvar = 0
        }
        else{
            this.bgImage = Resources.Background2.toSprite()
            this.yvar = -200
        }
        this.offset = this.bgImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: this.bgImage,
                    pos: new Vector(0, this.yvar),
                },
                {
                    graphic: this.bgImage,
                    pos: new Vector(this.bgImage.width, this.yvar),

                },
                {
                    graphic: this.bgImage,
                    pos: new Vector(this.bgImage.width * 2, this.yvar),
                }
            ]
        })



        this.graphics.anchor = new Vector(0,0)
        this.graphics.add(group)
        this.pos = new Vector(0, 0) // initial position
        this.vel = new Vector(-2, 0)// speed
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}
