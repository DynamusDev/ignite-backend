module.exports = {
  "type": "postgres",
  "host": process.env.HOST || "localhost",
  "port": 5432,
  "username": process.env.USER || "postgres",
  "password": process.env.PASS || "postgres",
  "database": process.env.DATABASE || "ccr",
  "migrations": [
    "./dist/database/migrations/*.{ts,js}"
  ],
  "entities": ["./dist/models/*.{ts,js}"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}