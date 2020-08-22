export interface UserDTO {
  login: string
  name: string
  followers: number
  following: number
  public_repos: number
  avatar_url: string
  blog?: string
  company?: string
  email?: string
  location?: string
}

export interface RepositoryDTO {
  name: string
  owner: {
    login: string
  }
  stargazers_count: number
  forks: number
  html_url: string
  language?: string
  description?: string
}
