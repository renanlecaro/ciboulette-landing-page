all: scss jade images serve

scss:
	autoless .

jade:
	pug  *.pug --watch

images:
	bash ./img/_watch.sh

serve:
	http-server

