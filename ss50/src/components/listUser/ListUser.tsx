import React from 'react';
import { Link } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    email: string;
    address: string;
}

const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', address: '456 Oak Ave' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com', address: '789 Pine Rd' },
];

const ListUser: React.FC = () => {
    return (
        <div>
            <h1>User List</h1>
            <ul style={{display:'flex'}}>
                {users.map(user => (
                    <li key={user.id}>
                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Address: {user.address}</p>
                        <Link to={`/user/${user.id}`} state={{ user }}>Xem chi tiết</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListUser;
