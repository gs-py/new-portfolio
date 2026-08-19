# Design

**Mode:** Experience — the work leads, the interface recedes.

**World:** Neumorphism, neutral near-white. Not a flat theme with rounded corners: a single physical
surface at `#e9e9ee` that things are pressed into or extruded out of. Two shadows per element
(`#c6c7ce` down-right, `#ffffff` up-left), one light source top-left, never violated.

**State reads as depth.** Raised means available. Engraved means selected, contained, or grouped —
the active nav route, the current resume tab, the selected project, a metric trough. Pressed means
active. That is the whole state language; colour barely participates.

**Colour is almost absent by design.** One accent (`#4c4fd4`) marks the current thing and nothing else.
Primary buttons are graphite, not accent — in a monochrome world a dark mass carries more weight than
a hue. Every text tone clears 4.5:1 on the surface.

**Type:** Sora for display (geometric, tight tracking at `-0.035em`), Inter for body. Prose holds a
65–75ch measure. Numerals in stats and durations are tabular.

**Not used, deliberately:** glass/blur, gradient text, eyebrow labels above headings, equal-sized
icon-heading-text card grids as page structure, scroll-reveal that hides content until JavaScript runs.

**Browser surfaces are themed** — selection, caret, scrollbar thumb, focus ring — because in a world
this quiet, an unthemed default is the loudest thing on screen.
