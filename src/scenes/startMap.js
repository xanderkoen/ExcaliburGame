import {Axis, Color, Font, FontUnit, Label, Scene, vec, Vector} from 'excalibur'
import { Background } from "../js/background.js";
import { Player } from "../js/player.js";
import { Ground } from "../js/ground.js";
import { Resources } from "../js/resources.js";
import { GoldenBanana } from "../js/GoldenBanana.js";
import { UI } from "../js/ui.js"

export class startMap extends Scene {

    background
    player

    onInitialize(_engine) {
        console.log("first level")

        this.background = new Background()
        this.add(this.background)

        this.player = new Player()
        this.add(this.player)

        this.goldenbanan = new GoldenBanana()
        this.add(this.goldenbanan)

        //locks the camera to the player
        this.camera.strategy.lockToActor(this.player)

        //creates the ground
        this.createGround()

        //UI
        this.UI = new UI()
        this.add(UI)
    }

    createGround() {
        for (let pos of Resources.GroundData.path) {
            const ground = new Ground(pos.x, pos.y)
            this.add(ground)
        }

        console.log(Resources.GroundData)
    }
}
