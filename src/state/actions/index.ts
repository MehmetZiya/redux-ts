interface SearchRepoAction {
  type: 'search_repositories'
}
interface SearchRepoSuccessAction {
  type: 'search_repositories_success'
  payload: string[]
}
interface SearchRepoErrorAction {
  type: 'search_repositories_error'
  payload: string
}
export type Action =
  | SearchRepoAction
  | SearchRepoSuccessAction
  | SearchRepoErrorAction
