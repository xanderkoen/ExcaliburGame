import { Physics, CollisionType, Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Wall extends Actor {

    constructor(x, y) {
        super({ width: Resources.Wall.width, height: Resources.Wall.height }) // collision box!
        this.pos = new Vector(x,y)
    }

    onInitialize(engine) {
            this.graphics.use(Resources.Wall.toSprite())

        this.body.collisionType = CollisionType.Fixed
    }
}