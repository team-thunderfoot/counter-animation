# counter-animation

The `counter-animation` package allows you to create translation animations on scroll for specified elements, with options for customizing the displacement, start position, and responsiveness based on viewport width.


[Here's an example](https://team-thunderfoot.github.io/counter-animation/)

## Installation

```sh
npm install @teamthunderfoot/counter-animation
```

## Usage

```js
import CounterAnimation from "@teamthunderfoot/counter-animation";

class Index {
    constructor() {
        this.init();
    }
    init() {
        new CounterAnimation({
            elements: document.querySelectorAll(".js--tos"),
            defaultStart: "70%",
            breakpoint: 1024,
            breakpointMod: 0.1, //if data-tos=400 -> from 1024px of window.width, the distance of displacement will be 40px (400 * 0.1)
        });
    }
}

export default Index;
new Index();
```

## HTML attributes

• `data-tos (required):` represents **the displacement factor for the translation animation.**. **It's the only required option**.

• `data-tos-bg:` it sets the element's height to 100% + displacement pixels. This is useful **when the element is a background element that needs to expand along with the translation**.

• `data-tos-start:` It determines the starting point of scrolling the screen for the animation. **If the element has a data-tos-start attribute, it uses that value; otherwise, it uses the defaultStart (see JS Options) value.**

• `data-tos-movement:` If data-tos-movement **is set to "from," the animation starts from the displacement pixels and moves to its original position when the user reaches the center of the screen**. If not, the animation starts from the original position and moves by the displacement pixels when the user scrolls.

```html
<div data-tos="-200" data-tos-start="top" data-tos-bg="true" data-tos-movement="from"/>
```

## JS Options

• `elements (required):` represents **the elements that will be translated**. It is expected to be an array of DOM elements, but it can be just one element. **It's the only required option**.

• `defaultStart:` determines the default starting position of the translation if the data-tos-start attribute is not defined in the HTML. It defaults to **"80%" if not provided**.

• `breakpoint:` determines the width breakpoint for applying a modifier to the translation distance. If the **viewport width** is greater than or equal to this breakpoint, the modifier is 1. It defaults to **810 if not provided**.

• `breakpointMod:` determines the **modifier applied to the translation distance when the viewport width is below the breakpoint**. It defaults to **0.4 (40% of the distance) if not provided**.