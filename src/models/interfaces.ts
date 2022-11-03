export interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: string
}

interface Artist {
  name: string
  nickName: string
}
export interface Track {
  name: string
  artist: Artist
}

export interface Storage {

}
