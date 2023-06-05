import { Engine, Actor, Scene, vec, Vector, Label, FontUnit, Font, Color, Input} from "excalibur";
import { Resources } from "../js/resources.js";

export class MainMenu extends Scene {

    onInitialize(engine) {
        console.log("Mainmenu.js")
        //play music

        //add bg image
        const image = new Actor({
            pos: new Vector(0,0),
            scale: vec(1.11, 0.70),
            anchor: vec(0,0)
        })

        image.graphics.use(Resources.Menuimage.toSprite())
        this.add(image)


        //add text
        const text = new Label({
          text: "Druk op Enter om te starten!",
            pos: new Vector(this.engine.screen.resolution.width / 2, engine.screen.resolution.height / 3),
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

    onActivate(ctx) {
       const song = Resources.Credits
        song.play(0.1)
    }

    StartMusic() {
        const bgm = Resources.IslandSwing
        bgm.play(0.1);      //volume van de achtergrondmuziek
    }

    onPreUpdate(engine, delta) {
        if(engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            const song = Resources.Credits
            song.stop()
            this.StartMusic()
            engine.goToScene('levelOne')
        }
    }
}