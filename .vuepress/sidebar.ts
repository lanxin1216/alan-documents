import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";

/**
 * 其他选项-工具条
 * @description TODO 侧边栏配置
 */
// @ts-ignore
export default {
    "/学习路线/": roadmapSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
