module.exports = {
    HOST: "john.db.elephantsql.com",
    USER: "xcpdbwdk",
    PASSWORD: "WK6R6TWshC2HpJ88Bpe8bPPIhPNSRqH-",
    DB: "xcpdbwdk",
    PORT:5432,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };