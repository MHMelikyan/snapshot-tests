import GitHubCard from './GitHubCard'
import renderer from 'react-test-renderer'

test('render a snapshot',()=>{
    const tree = renderer.create(<GitHubCard/>).toJSON()
    expect(tree).toMatchSnapshot
})