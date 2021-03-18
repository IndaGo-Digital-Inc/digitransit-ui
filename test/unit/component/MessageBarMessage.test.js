import React from 'react';

import MessageBarMessage from '../../../app/component/MessageBarMessage';
import { shallowWithIntl } from '../helpers/mock-intl-enzyme';
import TruncatedMessage from '../../../app/component/TruncatedMessage';

describe('<MessageBarMessage />', () => {
  it('should not render tag "a" if the href is missing', () => {
    const props = {
      content: [{ type: 'a', content: 'This is a link', href: undefined }],
    };
    const wrapper = shallowWithIntl(<MessageBarMessage {...props} />);
    expect(wrapper.find('a')).to.have.lengthOf(0);
  });

  it('should render tag "h2" for type "heading"', () => {
    const props = {
      content: [{ type: 'heading', content: 'This is a header' }],
      onMaximize: () => {},
    };
    const wrapper = shallowWithIntl(<MessageBarMessage {...props} />);
    expect(wrapper.find('h2').text()).to.equal('This is a header');
  });

  it('should render text for type "text"', () => {
    const props = {
      content: [{ type: 'text', content: 'This is text' }],
    };
    const wrapper = shallowWithIntl(<MessageBarMessage {...props} />);
    expect(wrapper.find(TruncatedMessage)).to.have.lengthOf(1);
  });

  it('should render tags "heading" and "span" with correct color', () => {
    const props = {
      content: [
        { type: 'heading', content: 'This is header' },
        { type: 'text', content: 'This is text' },
      ],
      textColor: '#ffffff',
    };
    const wrapper = shallowWithIntl(<MessageBarMessage {...props} />);
    expect(wrapper.find('div').get(0).props.style).to.have.property(
      'color',
      '#ffffff',
    );
    expect(wrapper.find('h2').get(0).props.style).to.have.property(
      'color',
      '#ffffff',
    );
  });
});
