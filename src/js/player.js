import {
    Actor,
    Input,
    SpriteSheet,
    Animation,
    range,
    vec,
    Vector,
    CollisionType,
    Shape, Sound, GraphicsGroup,
} from "excalibur";
import { Resources } from './resources.js'
import { UI } from '../js/ui.js'

export class Player extends Actor {

    playerAnimations = []
    direction = 'R'
    isJumping = false
    isOnGround = true
    AnimationNumber = 0
    Lives = 3

   constructor() {
       super({
           collisionType: CollisionType.Active,
           collider: Shape.Box(20, 40, Vector.Half, vec(0, 0))
       });
   }

   onInitialize(_engine) {

        let standingAnimation = SpriteSheet.fromImageSource({
            image: Resources.Idlesheet,
            grid: {
                rows: 1,
                columns: 2,
                spriteHeight: 32,
                spriteWidth: 32,
            }
        })

       let jumpingAnimation = SpriteSheet.fromImageSource({
           image: Resources.Jumpsheet,
           grid: {
               rows: 1,
               columns: 2,
               spriteHeight: 30,
               spriteWidth:30,
           }
       })

       let walkingAnimation = SpriteSheet.fromImageSource({
           image: Resources.Walksheet,
           grid: {
               rows: 1,
               columns:3,
               spriteWidth: 30,
               spriteHeight: 30,
           }
       })

       this.playerAnimations['standingAnimation'] = Animation.fromSpriteSheet(standingAnimation, range(0, 2), 500);
        this.playerAnimations['jumpingAnimation'] = Animation.fromSpriteSheet(jumpingAnimation, range(0,2), 250);
        this.playerAnimations['walkingAnimation'] = Animation.fromSpriteSheet(walkingAnimation, range(0,3), 150);


        //apply the starting spritesheet
       this.graphics.use(this.playerAnimations['standingAnimation'])

   }



    onPreUpdate(engine, delta) {
        let speedvar = 0

        //flip animation depending on direction player is facing
         this.playerAnimations["walkingAnimation"].flipHorizontal = this.direction !== "R";
        this.playerAnimations["standingAnimation"].flipHorizontal = this.direction !== "R";

        if (this.vel.y === 0) {
            this.isJumping = false
            this.isOnGround = true
        }
        else {
            this.isOnGround = false
            this.isJumping = true
        }

        switch (true) {
            case this.vel.x === 0 && this.isOnGround && this.AnimationNumber !== 0: //if the player is standing still
                this.playerAnimations['standingAnimation'].flipHorizontal = false
                this.graphics.use(this.playerAnimations['standingAnimation'])
                this.AnimationNumber = 0
                break;

            case this.vel.x !== 0 && this.isOnGround && this.AnimationNumber !== 1: // if the player is not standing still
                this.playerAnimations['walkingAnimation'].flipHorizontal = false
                this.graphics.use(this.playerAnimations['walkingAnimation'])
                this.AnimationNumber = 1
                break;

            case this.vel.y !== 0 && this.isOnGround === false && this.AnimationNumber !== 2: //if the player is not touching the ground and moving on Y axis
                switch (this.direction){    //left or right
                    case 'R':
                        this.playerAnimations['jumpingAnimation'].flipHorizontal = false
                        break;

                    case 'L':
                        this.playerAnimations['jumpingAnimation'].flipHorizontal = true
                        break;
                }

                this.graphics.use(this.playerAnimations['jumpingAnimation'])
                this.AnimationNumber = 1
                break;
        }

       if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.ArrowUp) || engine.input.keyboard.isHeld(Input.Keys.Space)){ // Jump or move up
            if (this.isOnGround){
                //console.log("jump");
                this.vel.y = -600
            }
       }
       if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.ArrowLeft)){ // Jump or move up
           //console.log("links");
           speedvar = -250
           this.direction = "L"
       }
       if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.ArrowRight)){ // Jump or move up
           //console.log("Rechts");
           speedvar = 250
           this.direction = "R"

       }

       this.vel.x = speedvar


        //check if player is out of bounds
        if  (this.pos.y > 1200) {
            this.Lives--

            console.log(this.Lives)

            const fell = Resources.Fell
            fell.play(0.6)

            if (this.Lives === 0){
                const bgm = Resources.IslandSwing
                bgm.stop()
                engine.goToScene('MainMenu')
                this.Lives = 4
            }
            else{
                this.pos = vec(0,0)
            }
        }

   }
}