import { _decorator, Animation, Component, director, EditBox, EventTouch, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;
import axios from 'axios';
import AxiosUtil from '../common/AxiosUtil';

@ccclass('LoginManager')
export class LoginManager extends Component {

    // 用户是否勾选协议
    private isUserCheck: boolean = false;

    @property(Node)
    public userAgreement: Node = null;

    @property(Node)
    public userCheck: Node = null;

    @property(Node)
    public accEditBox: Node = null;

    start() {

    }

    update(deltaTime: number) {
        
    }

    /**
     * @description: 游客登录
     * @author: 虾仁猪心
     * @date: 2024-05-31 14:35:50
     */
    public touristLogin() {
        // 校验协议
        if (this.hanldeUserCheck()) {
            // 测试请求
            AxiosUtil.get('/user/testGet', {}).then(res => {
                console.log(res);
            });
        }
    }

    /**
     * @description: 电话登录
     * @author: 虾仁猪心
     * @date: 2024-05-31 14:52:18
     */
    public phoneLogin() {
        // 校验协议
        if (this.hanldeUserCheck()) {

        }
    }

    /**
     * @description: 判断用户是否勾选协议
     * @author: 虾仁猪心
     * @date: 2024-05-31 15:03:19
     */
    private hanldeUserCheck(): boolean {
        if (!this.isUserCheck) {
            // 提示用户勾选协议
            this.userAgreement.getComponent(Animation).play();
        }
        return this.isUserCheck;
    }

    /**
     * @description: 用户勾选/取消勾选协议回调
     * @author: 虾仁猪心
     * @date: 2024-05-31 15:40:40
     */
    public changeUserCheck(event: EventTouch) {
        this.isUserCheck = !this.isUserCheck;
        if (this.isUserCheck) {
            // 勾选协议
            this.userCheck.getComponent(Sprite).enabled = true;
        } else {
            // 取消勾选
            this.userCheck.getComponent(Sprite).enabled = false;
        }
    }

    public login() {
        let userCode = this.accEditBox.getComponent(EditBox).string;
        AxiosUtil.get(`/user/login/${userCode}`, {}).then((res: any) => {
            if (res.data) {
                localStorage.setItem("userCode", res.data)
                director.loadScene("hall");
            }
        });
    }
}


