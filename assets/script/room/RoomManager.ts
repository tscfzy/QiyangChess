import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RoomManager')
export class RoomManager extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    public backHall() {
        director.loadScene("hall");
    }
}


