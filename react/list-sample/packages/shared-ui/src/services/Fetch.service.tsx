import axios, { AxiosRequestConfig } from 'axios'
import { useState, useEffect } from 'react'

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, error, isFetching }
}
