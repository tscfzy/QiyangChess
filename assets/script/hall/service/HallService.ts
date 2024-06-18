import AxiosUtil from "../../common/AxiosUtil";

export default class HallService {

  /**
   * @description: 创建斗地主房间
   * @author: 虾仁猪心
   * @date: 2024-06-18 19:41:27
   */
  public createRoom(): Promise<any> {
    return AxiosUtil.get("/landlord/createRoom", {});
  }

}
