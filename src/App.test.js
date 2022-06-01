import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('render span', () => {
    const editor = shallow(<App />);
    expect(editor.find('span').length).toEqual(1);
  });

  it('render container', () => {
    const editor = shallow(<App />);
    expect(editor.find('div.container').length).toEqual(1);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    shallow(<App />, div);
  });
});
