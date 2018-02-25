all: scss jade images

scss:
	autoless .

jade:
	jade index.jade --watch

images:
	bash ./img/_watch.sh
