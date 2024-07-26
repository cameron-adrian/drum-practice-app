# TODO List

## High Priority

- [ ] Better tooltips
- [ ]
- [ ]

## Medium Priority

- [ ] Random theme button
- [ ] Copy pattern button
- [ ] Add highlighting to each letter as it plays

I would actually have to update the pattern array each time right? Like to update the state of the whole array at the position of the current letter being played
I'd need to import the setPattern function from App.jsx and pass it down as a prop.

I'd could maybe use a useEffect to update the pattern array each time a sound is played but the pattern array would have to be broken up into individual elements and probably displayed as a list of spans or something

- [ ] Optimize playback in browser so it's even and doesn't speed up or slow down
- [ ] Pattern character improvements: add bold, colors, etc to help differentiate them visually. Each one needs a CSS class

### Checkboxes

- [ ] checkbox to toggle accents
- [ ] checkbox to toggle ghost notes
- [ ] checkbox to toggle kick drum

## Low Priority

- [ ]
- [ ]
- [ ]
