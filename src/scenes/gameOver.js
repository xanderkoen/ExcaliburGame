import { Engine, Actor, Scene, vec, Vector, Label, FontUnit, Font, Color, Input} from "excalibur";
import { Resources } from "../js/resources.js";

export class gameOver extends Scene {

    score = 0
    text

    onInitialize(engine) {
        console.log("Game over scene")

        //add bg image
        const image = new Actor({
            pos: new Vector(0,0),
            scale: vec(2, 1.4),
            anchor: vec(0,0)
        })

        image.graphics.use(Resources.goverimage.toSprite())
        this.add(image)


        //add text
        this.text = new Label({
            text: `Game over! \n Druk op enter om het opnieuw te proberen`,
            pos: new Vector(this.engine.screen.resolution.width / 2, engine.screen.resolution.height / 2),
            font: new Font({
                unit: FontUnit.Px,
                size: 30,
                color: Color.White,
                bold: true,
                shadow: {
                    blur: 50,
                    offset: new Vector(10,10),
                    color: Color.Black,
                }
            })
        })
        this.add(this.text)
    }

    onActivate(ctx) {
        if (ctx.data) {
            this.logScore(ctx.data.bananscore)
        }
        this.GameoverMusic()
    }

    logScore(score){
        this.score = score
        console.log(`score set to : ${score}`)
        if (score === 0){
            this.text.text = `Game over! \n Druk op enter om het opnieuw te proberen \n Je hebt in totaal \n geen bananen verzameld 😥`
        }
        else if (score === 1){
            this.text.text = `Game over! \n Druk op enter om het opnieuw te proberen \n Je hebt in totaal ${score} \n banaan verzameld`
        }else if (score > 1){
            this.text.text = `Game over! \n Druk op enter om het opnieuw te proberen \n Je hebt in totaal ${score} \n bananen verzameld`
        }
    }

    GameoverMusic() {
        //play music
        const overmusic = Resources.gameover
        overmusic.play(0.1)
    }

    StartMusic() {
        //stop gameover music
        const overmusic = Resources.gameover
        overmusic.stop()

        //play level one music
        const bgm = Resources.IslandSwing
        bgm.play(0.1);      //volume van de achtergrondmuziek
    }

    onPreUpdate(engine, delta) {
        if(engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            this.StartMusic()
            engine.goToScene('levelOne')
        }
    }
}