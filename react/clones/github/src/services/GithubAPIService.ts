import { UserDTO, RepositoryDTO } from '../@types/'

export const API = {
  async getUserInfo (userName: string): Promise<UserDTO> {
    const url = `https://api.github.com/repos/${userName}`
    const response = await fetch(url)
    return response.json()
  },

  async getReposInfo (
    userName: string,
    repositoryName: string
  ): Promise<RepositoryDTO> {
    const url = `https://api.github.com/repos/${userName}/${repositoryName}`
    const response = await fetch(url)
    return response.json()
  }
}
