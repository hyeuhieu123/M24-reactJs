import User from './User'

interface User{
    id: number,
    name: string,
    email: string,
    address: string
}
export default function UserContainer() {
    const users: User[] = [
    {
        id: 1,
        name: "Hoa",
        email: 'hoa@gmail.com',
        address: 'Hà Nội'
    },
    {
        id: 2,
        name: 'Hùng',
        email: 'hung@gmail.com',
        address: 'Hà Giang'
    }]
  return (
    <>
        <User users={users}></User>
    </>
  )
}
