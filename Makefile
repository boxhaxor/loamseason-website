.DEFAULT_GOAL := build

TOOLIMAGENAME=toolbox
BASE_DOCKER_RUN_COMMAND=docker run --rm -p 3000:3000 -v $(PWD):/workspace/code -it $(TOOLIMAGENAME)

tools-build:
	@echo building tools image
	docker build . --pull -t $(TOOLIMAGENAME) -f tools/build/Dockerfile

console: tools-build
	@echo Starting console
	$(BASE_DOCKER_RUN_COMMAND) /bin/bash

build: tools-build
	@echo build
	$(BASE_DOCKER_RUN_COMMAND) echo build

serve:
	@echo serve
	$(BASE_DOCKER_RUN_COMMAND) -p 8080:8080 
