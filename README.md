### todos

focusing on twitter only for now

- activate on only specific pages
- whether or not it activates should be setting
- the should be able to toggle on and off, settings should only apply when on
- state observerers should be very specific. noticing a lot of runtime issues where some loop is not resolving and starts a lil memory leak, freezing the app

the order i should tackle those is pretty clear

1. toggle the whole app state on and off
2. custom settings for the app state, not sure how to store that over the long haul
3. then make sure they work
4. then tighten the observers
5. then come back to refactor and upgrade

sounds like a plan to me fam
