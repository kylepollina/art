all: sketches

sketches: FORCE
	jinja -d sketches/thrill/template.json ../kylepollina.github.io/templates/sketch.html > sketches/thrill/thrill.html
	jinja -d sketches/breathing/template.json ../kylepollina.github.io/templates/sketch.html > sketches/breathing/breathing.html
	jinja -d sketches/lisa/template.json ../kylepollina.github.io/templates/sketch.html > sketches/lisa/lisa.html
	jinja -d sketches/arcs/template.json ../kylepollina.github.io/templates/sketch.html > sketches/arcs/arcs.html
	jinja -d sketches/cubies/template.json ../kylepollina.github.io/templates/sketch.html > sketches/cubies/cubies.html
	jinja -d sketches/diamond/template.json ../kylepollina.github.io/templates/sketch.html > sketches/diamond/diamond.html
	jinja -d sketches/corners/template.json ../kylepollina.github.io/templates/sketch.html > sketches/corners/corners.html
	jinja -d sketches/holohex/template.json ../kylepollina.github.io/templates/sketch.html > sketches/holohex/holohex.html
	jinja -d sketches/gogh/template.json ../kylepollina.github.io/templates/sketch.html > sketches/gogh/gogh.html
	jinja -d sketches/starry/template.json ../kylepollina.github.io/templates/sketch.html > sketches/starry/starry.html
	jinja -d sketches/towers/template.json ../kylepollina.github.io/templates/sketch.html > sketches/towers/towers.html
	jinja -d sketches/spiro/template.json ../kylepollina.github.io/templates/sketch.html > sketches/spiro/spiro.html
	jinja -d sketches/triangles/template.json ../kylepollina.github.io/templates/sketch.html > sketches/triangles/triangles.html
	jinja -d sketches/squares/template.json ../kylepollina.github.io/templates/sketch.html > sketches/squares/squares.html
	jinja -d sketches/hypnotize/template.json ../kylepollina.github.io/templates/sketch.html > sketches/hypnotize/hypnotize.html

FORCE: ;
