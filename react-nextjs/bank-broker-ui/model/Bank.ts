import { User } from "./User"

export interface Bank {
  id: string,
  name: string,
  country: string,
  city: string,
  description: string
  contact_information: string
  manger_user: string
  address: string,
  imageUrl: string,
  updated: string,
  created: string
  users: string[]
  expand: {
    users: User[]
    manager_user: User;
  }
}
