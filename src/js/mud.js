import { Physics, CollisionType, Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Mud extends Actor {

    constructor(x, y) {
        super({ width: Resources.Mud.width, height: Resources.Mud.height }) // collision box!
        this.pos = new Vector(x,y)
    }

    onInitialize(engine) {
            this.graphics.use(Resources.Mud.toSprite())

        this.body.collisionType = CollisionType.Fixed
    }
}