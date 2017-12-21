import React from 'react'
import { shallow } from 'enzyme'
import Star from '../../src/components/Star'
import { handleStarImage } from '../../src/components/Star'

describe('<Star />', () => {
  let props

  beforeEach(() => {
    props = {
      repository: {
        stargazers: {
          totalCount: 1
        }
      }
    }
  })

  it('render the repository stars totalCount', () => {
    const component = shallow(<Star { ...props } />)

    expect(component.props().children[0]).to.be.equal(props.repository.stargazers.totalCount)
  })
})
