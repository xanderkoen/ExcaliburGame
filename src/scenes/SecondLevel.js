import {Axis, Color, Font, FontUnit, Label, Scene, vec, Vector} from 'excalibur'
import { Background } from "../js/background.js";
import { Player } from "../js/player.js";
import { Ground } from "../js/ground.js";
import { Resources } from "../js/resources.js";
import { GoldenBanana } from "../js/GoldenBanana.js";
import { UI } from "../js/ui.js"
import {Banana} from "../js/Banana.js";

export class secondLevel extends Scene {

    levelint
    background
    player
    ui

    onInitialize(_engine) {
        this.levelint = 2
        console.log("Second level")

        this.background = new Background()
        this.add(this.background)

        this.player = new Player()
        this.player.pos = vec( 0,0)
        this.add(this.player)

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

