import ChildComp from './ChildComp'


export default function ParentComp() {
    const name: string = "Hà Văn Hòa";
    return (
        <>
            <p>Họ và tên bên component cha: {name}</p>
            <ChildComp name={name}></ChildComp>
        </>
    )
}
