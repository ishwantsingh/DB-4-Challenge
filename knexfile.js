// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/foodbook.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },

    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foriegn_keys = ON", done);
      }
    }
  }
};
