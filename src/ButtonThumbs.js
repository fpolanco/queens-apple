import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonThumbs = () => (
  <div>
    <Button
      color='red'
      content='Like'
      icon='👍🏽'
      label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
    />
    <Button
      basic
      color='blue'
      content='Fork'
      icon='fork'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: '2,048',
      }}
    />
  </div>
)

export default ButtonThumbs