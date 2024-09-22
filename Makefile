ENCODED_IMAGES := $(wildcard assets/*.png.64)
IMAGES := $(patsubst assets/%.png.64, images/%.png, $(ENCODED_IMAGES))

out: $(IMAGES)

images/:
	mkdir $@
	echo '*' > images/.gitignore
images/%.png: assets/%.png.64 | images/
	base64 -d $< > $@

