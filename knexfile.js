// Update with your config settings.

module.exports = {
	development: {
		client: 'pg',
		connection: 'postgres://localhost/tims-webstore',
	},
	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		ssl: { rejectUnauthorized: false },
	},
};
