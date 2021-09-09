/**
 *
 * @HayesYoung 2021.8.2
 * 解决跨域
 */

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // 疫情接口
  app.use(
    "/v1", // 代理路径
    createProxyMiddleware({
      pathRewrite: {
        "^/v1": "",
      },
      target: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5", // 腾讯
      changeOrigin: true,
    })
  );

  app.use(
    "/v2", // 代理路径
    createProxyMiddleware({
      pathRewrite: {
        "^/v2": "",
      },
      target: "http://localhost:8080/", // 登陆接口
      changeOrigin: true,
    })
  );
};


