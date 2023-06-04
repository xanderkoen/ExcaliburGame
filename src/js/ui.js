import {Resources} from "./resources.js";
import {GraphicsGroup, Vector, ScreenElement, vec} from "excalibur";

export class UI extends ScreenElement {

    lives = 3

    constructor() {
        super({ x: 10, y: 10 })
        this.z = -1
    }

    onInitialize(engine) {
        this.RefreshUI()
    }

    RefreshUI() {

        const live = Resources.Head.toSprite()
        this.offset = live.width

        switch (true) {
            case this.lives === 3:
                const group = new GraphicsGroup({
                    members: [
                        {
                            graphic: live,
                            pos: new Vector(80, 0),
                            scale: vec(2,2)
                        },
                        {
                            graphic: live,
                            pos: new Vector(80 + live.width, 0),
                            scale: vec(2,2)

                        },
                        {
                            graphic: live,
                            pos: new Vector(80 + live.width * 2, 0),
                            scale: vec(2,2)
                        }
                    ]
                })
                this.graphics.add(group)
                break;

            case this.lives === 2:
                const group2 = new GraphicsGroup({
                    members: [
                        {
                            graphic: live,
                            pos: new Vector(0, 0),
                        },
                        {
                            graphic: live,
                            pos: new Vector(live.width, 0),

                        },
                    ]
                })
                this.graphics.add(group2)
                break;

            case this.lives === 1:
                const group3 = new GraphicsGroup({
                    members: [
                        {
                            graphic: live,
                            pos: new Vector(0, 0),
                        },
                    ]
                })
                this.graphics.add(group3)
                break;
        }
    }
}


