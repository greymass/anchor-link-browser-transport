PATH  := $(PATH):$(PWD)/node_modules/.bin
SHELL := env PATH=$(PATH) /bin/bash
SRC_FILES := $(shell find src -name '*.ts')

all: lib

lib: ${SRC_FILES} package.json tsconfig.json node_modules rollup.config.js
	@rollup -c && touch lib

.PHONY: lint
lint: node_modules
	@NODE_ENV=test ./node_modules/.bin/tslint -p tsconfig.json -c tslint.json -t stylish --fix

node_modules:
	yarn install --non-interactive --frozen-lockfile --ignore-scripts

.PHONY: clean
clean:
	rm -rf lib/

.PHONY: distclean
distclean: clean
	rm -rf node_modules/
