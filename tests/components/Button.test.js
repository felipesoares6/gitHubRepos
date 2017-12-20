import React from 'react'
import { shallow } from 'enzyme'
import Button from '../../src/components/Button'

describe('<Button />', () => {
  describe('when the button is pressed', () => {
    it('call the handleUserName prop', () => {
      const props = { handleUserName: sinon.spy() }
      const component = shallow(<Button { ...props } />)

      component.find('[data-submit-button]').first().props().onPress()

      expect(props.handleUserName.calledOnce).to.be.true
    })
  })
})
