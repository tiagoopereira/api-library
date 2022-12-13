env:
	cp example.env .env
npm_install:
	npm install
up:
	npm run dev
run: env npm_install up