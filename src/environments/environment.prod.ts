export const environment = {
  production: true,
  logging: {
    logLevels: [
      {
        loggerName: "root",
        logLevel: "WARN"
      },
    ]  
  },
  data_service: {
    central_db_server_url: "http://localhost:5984/",
    central_db_password: "none",
    hash_n_bytes: 32
  },
  default_lang: "en",
  github_url: "https://github.com/pik-gane/vodle",
  magic_link_base_url: "http://vodle.it/",
  support_vodle_url: "http://vodle.it/#support"
};
