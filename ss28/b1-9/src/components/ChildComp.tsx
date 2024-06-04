interface Props{
    name: string
}
export default function ChildComp(a:Props) {
    const {name} = a;
    return (
        <div>Họ và tên bên con: {name}</div>
    )
}
