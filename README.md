# Dotdotdot

2 basic vuejs components to provide "a loading dots thing"

## Installation

```
npm install vue-dotdotdot
```

## Usage

```js
import { dotdotdot } from 'vue-dotdotdot'
Vue.component('dotdotdot', dotdotdot)
```

``` html
<dotdotdot dots=3 />
```

**or**

```js
import { customDot } from 'vue-dotdotdot'
Vue.component('dotdotdot', customDot)
```

``` html
<customDot text="*#* what ever you want really" />
```

## dotdotdot Props

### `dots`

Specifies the number of dots that load over time.

- Type: Number
- Default: 3

### `speed`

Specifies the speed to append new text.

- Type: Number
- Default: 300


## customDot props

### `text`
<dotdotdot dots=3 />
Specifies the text to appear as loading.
<simpleDot dots=3 />
<!-- or -->
<customDot text="*#* what ever you want really" />
<!-- or -->
<customDot text="*#* what ever you want really" />

### `speed`

Specifies the speed to append new text.

- Type: Number
- Default: 300
