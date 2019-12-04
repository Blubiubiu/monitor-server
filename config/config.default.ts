import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575446732408_1796';

  config.security = {
    domainWhiteList: ["https://monitor.11vx.cn"],
    methodnoallow: {
      enable: false
    },
    xframe: {
      enable: false
    },
    csrf: {
      enable: false,
      headerName: "x-csrf-token",
      ignoreJSON: false
    }
  };
  config.cors = {
    origin: "*",
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS"
  };

  //数据库
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "39.107.96.198",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "123456",
      // 数据库名
      database: "test01"
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  };

  // add your egg config in here
  config.middleware = ["errorHandler"];
  
  config.cluster = {
    listen: {
      port: 6001,
      hostname: "0.0.0.0"
      // path: '/var/run/egg.sock',
    }
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
