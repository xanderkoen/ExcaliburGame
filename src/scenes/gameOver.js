import { Engine, Actor, Scene, vec, Vector, Label, FontUnit, Font, Color, Input} from "excalibur";
import { Resources } from "../js/resources.js";

export class gameOver extends Scene {

    onInitialize(engine) {
        console.log("Game over scene")
        //play music
        const overmusic = Resources.gameover
        overmusic.play(0.1)

        //add bg image
        const image = new Actor({
            pos: new Vector(0,0),
            scale: vec(2, 1.4),
            anchor: vec(0,0)
        })

        image.graphics.use(Resources.goverimage.toSprite())
        this.add(image)


        //add text
        const text = new Label({
            text: "Game over! \n Druk op enter om het opnieuw te proberen",
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
        this.add(text)
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