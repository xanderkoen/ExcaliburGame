import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import bgImage from '../images/bgtest.png'
import bgImage2 from '../images/Background2.png'
import islandSwing from '../Sounds/IslandSwing.mp3'
import menuImage from '../images/monkeymenu.png'
import idlesheet from '../images/idlesheet.png'
import jumpsheet from '../images/jumpsheet.png'
import walksheet from '../images/walksheet.png'
import ground from '../images/ground.png'
import cords from '../data/ground.json'
import cords2 from '../data/ground2.json'
import bancords from '../data/banaan.json'
import bancords2 from '../data/banaan2.json'
import banaan from '../images/goldenbanana.png'
import banaantje from '../images/banana.png'
import wallcords from '../data/wall.json'
import fell from '../Sounds/Death.mp3'
import head from '../images/Head.png'
import sticky from '../Sounds/StickySituation.mp3'
import banasfx from '../Sounds/pickupBanana.wav'
import goldsfx from '../Sounds/goldenbanana.wav'
import gameover from '../Sounds/gameover.mp3'
import goverimage from '../images/goverimage.png'
import mud from '../images/mud.png'
import wall from '../images/Wall.png'
import credits from '../Sounds/001_Synthwave_4k.mp3'
import win from '../images/Win.png'

const Resources = {
    Idlesheet: new ImageSource(idlesheet),
    Walksheet: new ImageSource(walksheet),
    Jumpsheet: new ImageSource(jumpsheet),
    Fish: new ImageSource(fishImage),
    Background: new ImageSource(bgImage),
    Background2: new ImageSource(bgImage2),
    Menuimage: new ImageSource(menuImage),
    IslandSwing: new Sound(islandSwing),
    StickySituation: new Sound(sticky),
    Ground: new ImageSource(ground),
    Mud: new ImageSource(mud),
    Wall: new ImageSource(wall),
    GroundData: new Resource(cords, "json"),
    GroundData2: new Resource(cords2, "json"),
    BanaanData: new Resource(bancords, "json"),
    BanaanData2: new Resource(bancords2, "json"),
    WallData: new Resource(wallcords, "json"),
    GoldenBanana: new ImageSource(banaan),
    Banana: new ImageSource(banaantje),
    Fell: new Sound(fell),
    Head: new ImageSource(head),
    sfx: new Sound(banasfx),
    gsfx: new Sound(goldsfx),
    gameover: new Sound(gameover),
    goverimage: new ImageSource(goverimage),
    Credits: new Sound(credits),
    Win: new ImageSource(win)
}

const ResourceLoader = new Loader([
    Resources.Win,
    Resources.Head,
    Resources.Wall,
    Resources.GoldenBanana,
    Resources.Banana,
    Resources.GroundData,
    Resources.GroundData2,
    Resources.Ground,
    Resources.Mud,
    Resources.Idlesheet,
    Resources.Walksheet,
    Resources.Jumpsheet,
    Resources.Fish,
    Resources.Background,
    Resources.BanaanData,
    Resources.BanaanData2,
    Resources.Background2,
    Resources.IslandSwing,
    Resources.StickySituation,
    Resources.Menuimage,
    Resources.Fell,
    Resources.sfx,
    Resources.gsfx,
    Resources.gameover,
    Resources.goverimage,
    Resources.Credits,
])

export { Resources, ResourceLoader }