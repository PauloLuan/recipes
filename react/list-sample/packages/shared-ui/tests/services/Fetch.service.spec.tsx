import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { useFetch } from '../../src/services/Fetch.service'

describe('Fetch Service', () => {
  it('should make a requisition and return the data', async () => {
    const mock = new MockAdapter(axios)

    const mockData = { teste: 'test response' }
    // const mockedUrl = 'https://api.github.com/users/pauloluan/repos/'
    mock.onAny().reply(200, mockData)

    const { result, waitForNextUpdate } = renderHook(() => useFetch('/'))

    // expect(result.current.data).toBe(null)
    // expect(result.current.isFetching).toBeFalsy()
    // expect(result.current.error).toBe(null)

    await waitForNextUpdate()

    console.log(result.current) //?

    // const { data, isLoading } = result.current //?

    expect(result.current).toEqual('test response')
    // expect(result.current.isLoading).toBeFalsy()
  })
})
