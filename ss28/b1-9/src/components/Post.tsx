import React, { Component } from 'react';

interface IPost {
    id: number,
    title: string,
    author: string,
    content: string
}

interface IProps {
    posts: IPost[];
}

export default class Post extends Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        const { posts } = this.props;
        return (
            <>
                {posts.map(post => (
                    <ul key={post.id}>
                        <li>Tiêu đề: {post.title}</li>
                        <li>Tác Giả: {post.author}</li>
                        <li>Nội Dung: {post.content}</li>
                    </ul>
                ))}
            </>
        )
    }
}
