import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import functions from './__mock__/axiosMock';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  test('fetchUser() 可以请求到一个用户名字为username', async () => {
    // expect.assertions(1);
    const data = await functions.fetchUser();
    console.log(data)
    expect(data.name).toBe('username')
  })

})
