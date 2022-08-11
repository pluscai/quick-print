## 通过iframe打印网页局部内容

### 安装

`npm i @sxcai/quick-print`

### 使用方法

```javascript
import quickPrint from "@sxcai/quick-print";
quickPrint(document.querySelector("#testPrint").innerHTML, {
    direction: 'portrait', // auto landscape  打印方向
});
/** 第2个参数是配置项，可配置如下内容
 {
    direction = "portrait", // 方向 默认竖向打印 landscape：横向打印；auto：自动
    style="", // 样式
    iframeId = "printIframe", // iframe id
    beforePrint // callback before print
    } 
 */
```