/**
 * 通过iframe打印网页局部内容
 * @param {string} content 打印内容html 
 * @param {object} options 配置对象
 */
export default function (content, options = {}) {
    const {
        direction = "portrait", // 方向 默认竖向打印 landscape：横向打印；auto：自动
        style="", // 样式
        iframeId = "printIframe", // iframe id
        beforePrint // callback before print
    } = options;

    const iframe = document.createElement("iframe");
    iframe.id = iframeId;
    iframe.style.display = "none";

    document.documentElement.appendChild(iframe);

    const printWindow = iframe.contentWindow;

    printWindow.document.write(`
        <style>
            body { -webkit-print-color-adjust: exact; }
            @page { size: ${direction};}
            ${style}
        </style>
        ${content}
    `);

    beforePrint && printWindow.addEventListener("beforeprint", beforePrint);

    printWindow.focus();
    printWindow.print();

    printWindow.parent.document
        .querySelectorAll(`#${iframeId}`)
        .forEach(item => item.remove());
}