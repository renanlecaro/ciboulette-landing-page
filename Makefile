all: scss jade images serve

scss:
	autoless .

jade:
	pug -O "{price: '14.90'}" *.pug --watch

images:
	bash ./img/_watch.sh

serve:
	http-server

