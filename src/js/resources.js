import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import bgImage from '../images/bgtest.png'
import islandSwing from '../Sounds/IslandSwing.mp3'
import menuImage from '../images/monkeymenu.png'
import idlesheet from '../images/idlesheet.png'
import jumpsheet from '../images/jumpsheet.png'
import walksheet from '../images/walksheet.png'
import ground from '../images/ground.png'
import cords from '../data/ground.json'
import banaan from '../images/GoudenBanaan.png'
import fell from '../Sounds/Death.mp3'
import head from '../images/Head.png'

const Resources = {
    Idlesheet: new ImageSource(idlesheet),
    Walksheet: new ImageSource(walksheet),
    Jumpsheet: new ImageSource(jumpsheet),
    Fish: new ImageSource(fishImage),
    Background: new ImageSource(bgImage),
    Menuimage: new ImageSource(menuImage),
    IslandSwing: new Sound(islandSwing),
    Ground: new ImageSource(ground),
    GroundData: new Resource(cords, "json"),
    GoldenBanana: new ImageSource(banaan),
    Fell: new Sound(fell),
    Head: new ImageSource(head),

}

const ResourceLoader = new Loader([
    Resources.Head,
    Resources.GoldenBanana,
    Resources.GroundData,
    Resources.Ground,
    Resources.Idlesheet,
    Resources.Walksheet,
    Resources.Jumpsheet,
    Resources.Fish,
    Resources.Background,
    Resources.IslandSwing,
    Resources.Menuimage,
    Resources.Fell
])

export { Resources, ResourceLoader }