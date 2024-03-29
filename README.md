# counter-animation

The `counter-animation` allows you to create counter animations on an HTML element by specifying configuration options such as the element to animate, animation duration, number formatting, and scroll trigger settings.

[Here's an example](https://team-thunderfoot.github.io/counter-animation/)

## Installation

```sh
npm install @teamthunderfoot/counter-animation
```

## Usage

```js
import CounterAnimation from "@teamthunderfoot/counter-animation"

class Index {
    constructor() {
        this.init()
    }
    init() {
        document.querySelectorAll(".example-1").forEach((element) => {
            new CounterAnimation({
                element: element,
                regionFormat: "en-US",
                separator: ",",
                duration: 1.5,
                scrollStart: "center",
                // pinnedContainer: null,
                // markers: false
            })
        })
    }
}

export default Index
new Index()
```

## HTML attributes

• `data-counter-duration (optional):` If the element has a data-counter-duration attribute, it overrides the default animation duration with the value specified in the attribute. **The duration hierarchy is: default value (2 seconds) < duration config value (determined in JS class parameters) < data-counter-duration (determined as a HTML attribute)**

```html
<span class="example-1" data-counter-duration="5">20.000</span>
```

## JS Options

• `element (required):` represents **the element that will be animated**. **It's the only required option**.

• `regionFormat (optional):` the region format for number formatting. **The default value is "en-US"**.

• `separator (optional):` the separator character for large numbers. **The default value is ","**.

• `duration (optional):` the duration of the animation in seconds. **The default value is 2 seconds**. Allowed value: "number"

• `scrollStart (optional):` the scroll trigger start position. **The default value is "80%"**. Allowed values: "top" / "center" / "bottom" / "X%"" / "Xpx".

• `markers (optional):` Whether to display markers for ScrollTrigger. **The default value is false**. Allowed value: "boolean"

• `pinnedContainer (optional):` It is used when having pinned elements inside another pinned element. It is not necessary to set it if it is not the mentioned use case. It is necessary for example, when we use horizontal scroll in the same page. **The default value is null**. Allowed value: "Element / String"

## Usefull Events

. `destroy ()` : Kills the ScrollTrigger instance, immediately unpinning and restoring any pin-related changes made to the DOM by ScrollTrigger and removing all scroll-related listeners.

. refresh() : Recalculates the positioning of all of the ScrollTriggers on the page; this typically happens automatically when the window/scroller resizes
