import React from 'react'
import { shallow } from 'enzyme'
import Repository from '../../src/components/Repository'

describe('<Repository />', () => {
  let props

  beforeEach(() => {
    props = {
      repository: {
        nameWithOwner: 'felipesoares6/gitHubRepos',
        description: 'react-native project'
      }
    }
  })

  it('render the repository nameWithOwner', () => {
    const component = shallow(<Repository { ...props } />)

    const title = component.find('[data-title]')

    expect(title.first().props().children).to.be.equal(props.repository.nameWithOwner)
  })

  describe('when the repository prop has a description', () => {
    it('render the repository description', () => {
      const component = shallow(<Repository { ...props } />)

      const description = component.find('[data-description]')

      expect(description.first().props().children).to.be.equal(props.repository.description)
    })
  })

  describe('when the repository prop does not has a description', () => {
    it('render the fallback description', () => {
      props.repository.description = ''

      const fallbackDescription = 'No description provided'
      const component = shallow(<Repository { ...props } />)

      const description = component.find('[data-description]')

      expect(description.first().props().children).to.be.equal(fallbackDescription)
    })
  })
})
