import React from 'react'
import {storiesOf} from '@storybook/react'

import Slider from './slider-input'


storiesOf('Slider',module)

.add('Slider',()=>
<Slider
className="slider"
        min={0}
        max={100}
        step={5}
        defaultValue={50}
        title={40}
/>


)