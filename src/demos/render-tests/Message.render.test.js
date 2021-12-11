import '@testing-library/jest-dom/extend-expect';
import Message from './Message';

describe('Message', () => {
  it('should always render the message', () => {
    const text = 'I see everything twice';

    const notImportantMessage = Message({
      content: text,
      isImportant: false,
    });

    expect(notImportantMessage.props.children.props.children).toBe(text);

    const importantMessage = Message({
      content: text,
      isImportant: true,
    });

    expect(importantMessage.props.children.props.children).toBe(text);
  });

  it('should make important messages strong', () => {
    const text = 'I only see things once';

    const importantMessage = Message({
      content: text,
      isImportant: true,
    });

    expect(importantMessage.props.children.type).toBe('strong');
  });

  it('should not make regular messages strong', () => {
    const text = "I cannot see, I'm blind";

    const notImportantMessage = Message({
      content: text,
      isImportant: false,
    });

    expect(notImportantMessage.props.children.type).toBe('span');
  });
});
