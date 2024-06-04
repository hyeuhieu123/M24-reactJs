import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

interface User {
    id: number;
    name: string;
    email: string;
    address: string;
}

interface LocationState {
    user: User;
}

const UserDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const state = location.state as LocationState;

    const user = state?.user;

    if (!id || !user || user.id !== parseInt(id, 10)) {
        return <h1>User not found</h1>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
        </div>
    );
};

export default UserDetail;
