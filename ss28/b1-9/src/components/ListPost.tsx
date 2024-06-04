import React, { Component } from 'react';
import Post from './Post';

interface IPost {
    id: number,
    title: string,
    author: string,
    content: string
}

export default class ListPost extends Component {
    public state: { posts: IPost[] };
    constructor(props: any) {
        super(props);
        this.state = {
            posts: [
                {
                    id: Math.floor(Math.random() * 10000000),
                    title: 'Post 1',
                    author: 'Author 1',
                    content: 'Content 1'
                },
                {
                    id: Math.floor(Math.random() * 10000000),
                    title: 'Post 2',
                    author: 'Author 2',
                    content: 'Content 2'
                }
            ]
        }
    }
    render() {
        return (
            <>
                <Post posts={this.state.posts}></Post>
            </>
        )
    }
}
