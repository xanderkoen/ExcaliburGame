import { Actor, Vector, GraphicsGroup } from 'excalibur'
import { Resources } from './resources.js'


export class Background extends Actor {

    offset

    onInitialize(engine){
        const bgImage = Resources.Background.toSprite()
        this.offset = bgImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: bgImage,
                    pos: new Vector(0, 0),
                },
                {
                    graphic: bgImage,
                    pos: new Vector(bgImage.width, 0),

                },
                {
                    graphic: bgImage,
                    pos: new Vector(bgImage.width * 2, 0),
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
