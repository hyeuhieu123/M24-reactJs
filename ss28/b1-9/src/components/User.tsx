interface User{
    id: number,
    name: string,
    email: string,
    address: string
}
interface Users{
    users: User[]
}
export default function User(a: Users) {
    const {users} = a;
  return (
    <>
        {users.map((item) =>{
            return(
            <ul>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.email}</li>
                <li>{item.address}</li>
            </ul>
            )
        })}
    </>
  )
}
