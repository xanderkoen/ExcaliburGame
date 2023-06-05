import { Physics, CollisionType, Actor, Vector, CollisionGroup } from "excalibur"
import { Resources } from './resources.js'

export class Banana extends Actor {


    constructor(x, y) {
        super({ width: Resources.Banana.width, height: Resources.Banana.height }) // collision box!
        this.pos = new Vector(x,y)
        this.scale = new Vector(1.5, 1.5);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Banana.toSprite())
        this.body.collisionType = CollisionType.Active
        this.body.useGravity = true
    }

    grab() {
        const sfx = Resources.sfx
        sfx.play()
    this.kill()
    }

    onPostUpdate(engine, _delta) {
        if (this.pos.y > 2000) {
            this.kill()
        }
    }
}

