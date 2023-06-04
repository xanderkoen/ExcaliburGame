import { Physics, CollisionType, Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Ground extends Actor {

    constructor(x, y) {
        super({ width: Resources.Ground.width, height: Resources.Ground.height }) // collision box!
        this.pos = new Vector(x,y)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Ground.toSprite())
        this.body.collisionType = CollisionType.Fixed

    }
}