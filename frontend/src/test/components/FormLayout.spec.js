import { mount } from '@vue/test-utils';
import FormLayout from '../../components/FormLayout.vue';

describe('FormLayout.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FormLayout, {
      props: {
        title: 'Search',
        description: 'Type to search for items.',
        placeholder: 'Search here...',
        results: [],
        searchFunction: vi.fn(),
      },
    });
  });

  it('renders the title and description correctly', () => {
    expect(wrapper.find('h4').text()).toBe('Search');
    expect(wrapper.find('span').text()).toBe('Type to search for items.');
  });

  it('shows results dropdown when results exist', async () => {
    await wrapper.setProps({ results: ['Result 1', 'Result 2'] });
    const results = wrapper.findAll('li');
    expect(results).toHaveLength(2);
    expect(results[0].text()).toBe('Result 1');
    expect(results[1].text()).toBe('Result 2');
  });

  it('calls searchFunction when input changes', async () => {
    const searchFunctionMock = vi.fn();
    await wrapper.setProps({ searchFunction: searchFunctionMock });
    await wrapper.setData({ input: 'search term' });
    expect(searchFunctionMock).toHaveBeenCalledWith('search term');
  });

  it('displays "No results found for the search." if no results for search', async () => {
    await wrapper.setData({ input: 'abc' });
    await wrapper.setProps({ results: [] });

    const noResultsMessage = wrapper.find('.no-results-message');
    expect(noResultsMessage.exists()).toBe(true);
    expect(noResultsMessage.text()).toBe('No results found for the search.');
  });
});
