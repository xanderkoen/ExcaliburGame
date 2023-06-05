import {Axis, Color, Font, FontUnit, Label, ParallaxComponent, Scene, vec, Vector} from 'excalibur'
import { Background } from "../js/background.js";
import { Player } from "../js/player.js";
import { Ground } from "../js/ground.js";
import { Resources } from "../js/resources.js";
import { GoldenBanana } from "../js/GoldenBanana.js";
import { UI } from "../js/ui.js"
import {Banana} from "../js/Banana.js";

export class startMap extends Scene {

    levelint
    background
    player
    ui

    onInitialize(_engine) {

        this.levelint = 1

        console.log("first level")

        this.background = new Background()
        this.background.addComponent(new ParallaxComponent(new Vector(0.5, 0.5)))
        this.add(this.background)

        this.player = new Player()
        this.resetPlayer()
        this.add(this.player)


        this.goldenbanan = new GoldenBanana()
        this.add(this.goldenbanan)

        this.banaantje = new Banana()
        this.add(this.banaantje)

        //locks the camera to the player
        this.camera.strategy.lockToActor(this.player)

        //creates the ground
        this.createGround()

        //UI
        this.uivar = new UI()
        this.add(this.uivar)
    }

    onActivate(ctx) {
        this.uivar.reset()
    }

    createGround() {
        for (let pos of Resources.GroundData.path) {
            const ground = new Ground(pos.x, pos.y)
            this.add(ground)
        }

        console.log(Resources.GroundData)
    }

    resetPlayer() {
        //reset velocity
        this.player.vel.y = 0
        this.player.vel.x = 0

        //put back to spawn
        this.player.pos = new Vector(0,-10)
    }


}

