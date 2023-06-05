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
    startpos = new Vector(1500,900)

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

        //locks the camera to the player
        this.camera.strategy.lockToActor(this.player)

        //creates the ground
        this.createGround()

        //spawns in the banaans
        this.createBanaantjes()

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

    createBanaantjes(){
        for (let pos of Resources.BanaanData.path) {
            const banaan = new Banana(pos.x, pos.y)
            this.add(banaan)
        }
    }

    resetPlayer() {
        //reset velocity
        this.player.vel.y = 0
        this.player.vel.x = 0

        //put back to spawn
        this.player.pos = this.startpos
    }


}

