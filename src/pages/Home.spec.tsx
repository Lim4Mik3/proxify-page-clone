import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Home | PAGE SUITE TEST', () => {
  it('should be able render', () => {
    const wrapper = render(<Home />);

    wrapper.debug()

    expect(wrapper.getByText(/Hello World!/i)).toBeInTheDocument();
  })
})