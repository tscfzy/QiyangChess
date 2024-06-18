import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;
import HallService from './service/HallService';
import { RespTypeEnum } from '../common/RespTypeEnum';
import { SysConst } from '../common/SysConst';

@ccclass('HallManager')
export class HallManager extends Component {
    
    private hallService = new HallService();

    start() {

    }

    update(deltaTime: number) {
        
    }

    /**
     * @description: 创建房间
     * @author: 虾仁猪心
     * @date: 2024-06-12 23:15:10
     */
    public enterRoom() {
        this.hallService.createRoom().then(res => {
            if (res.respType == RespTypeEnum.SUCCESS) {
                // 缓存房间ID
                localStorage.setItem(SysConst.ROOME_ID_KEY, res.data);
                director.loadScene("room");
            } else {
                console.log(res.msg);
            }
        });
    }
}


