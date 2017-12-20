import React from 'react'
import { shallow } from 'enzyme'
import { ReposSearchPure } from '../../src/components/ReposSearch'
import Repositories from '../../src/containers/Repositories'

describe('<ReposSearch />', () => {
  describe('when the prop username exists', () => {
    it('render the Repositories component', () => {
      const props = { username: 'felipesoares6' }

      const component = shallow(<ReposSearchPure { ...props } />)

      expect(component.find(Repositories)).to.have.length(1)
    })
  })

  describe('when the prop username not exists', () => {
    it('not render a Repositories component', () => {
      const props = { username: '' }

      const component = shallow(<ReposSearchPure { ...props } />)

      expect(component.find(Repositories)).to.have.length(0)
    })
  })
})
