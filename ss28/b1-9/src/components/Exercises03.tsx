import React, { Component } from 'react'

interface Users{
    id: number,
    name: string,
    address: string
}
type Props = {
    users: Users[]
}
export default class Exercises03 extends Component <any, Props>{
    constructor(props: Props) {
        super(props);
        this.state = {
            users: [
                {
                id: 1,
                name: 'Hoàng',
                address: 'Hà Nội'
            },
            {
                id: 2,
                name: 'Hùng',
                address: 'Hà Nội'
            }
        ]}
    }
  render() {
    return (
        <>
            {this.state.users.map((item, index) =>{
                return (
                    <ul key={index}>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.address}</li>
                    </ul>
                )
            })}
        </>
    )
  }
}
