import { Physics, CollisionType, Actor, Vector, CollisionGroup } from "excalibur"
import { Resources } from './resources.js'

export class GoldenBanana extends Actor {

    constructor(x, y) {
        super({ width: Resources.GoldenBanana.width, height: Resources.GoldenBanana.height }) // collision box!
        this.pos = new Vector(
            150,
            500
        )
        this.scale = new Vector(0.2, 0.2);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.GoldenBanana.toSprite())
        this.body.collisionType = CollisionType.Fixed

    }

    onCollision() {

    }
}
