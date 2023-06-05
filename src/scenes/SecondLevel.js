import {Axis, Color, Font, FontUnit, Label, Scene, vec, Vector} from 'excalibur'
import { Background } from "../js/background.js";
import { Player } from "../js/player.js";
import { Mud } from '../js/mud.js';
import { Resources } from "../js/resources.js";
import { UI } from "../js/ui.js"
import {Banana} from "../js/Banana.js";
import {GoldenBanana2} from "../js/GoldenBanana2.js";
import { Wall } from '../js/wall.js'

export class secondLevel extends Scene {

    startpos = new Vector(1500,600)
    levelint
    background
    player
    uivar

    onInitialize(_engine) {
        this.levelint = 2
        console.log("Second level")

        this.background = new Background()
        this.add(this.background)

        this.player = new Player()
        this.player.pos = this.startpos
        this.add(this.player)

        //locks the camera to the player
        this.camera.strategy.lockToActor(this.player)

        //creates the ground
        this.createGround()

        //create walls
        this.createWalls()

        const goldenbanana = new GoldenBanana2()
        this.add(goldenbanana)

        //UI
        this.uivar = new UI()
        this.add(this.uivar)
    }

    onActivate(ctx) {
        if (ctx.data) {
            this.player.setLives(ctx.data.lives)
            this.uivar.setScore(ctx.data.banaantjes)
        }
        this.createBanaantjes()
    }

    createGround() {
        for (let pos of Resources.GroundData2.path) {
            const ground = new Mud(pos.x, pos.y)
            this.add(ground)
        }

        console.log(Resources.GroundData)
    }

    createBanaantjes(){
        for (let pos of Resources.BanaanData2.path) {
            const banana = new Banana(pos.x, pos.y)
                this.add(banana)
        }
    }

    createWalls() {
        for (let pos of Resources.WallData.path) {
            const wall = new Wall(pos.x, pos.y)
            this.add(wall)
        }

        console.log(Resources.GroundData)
    }

    resetPlayer() {
        //reset velocity
        this.player.vel.y = 0
        this.player.vel.x = 0

        //put back to spawn
        this.player.pos = this.startpos
    }


}

