'use client'

import { useState } from 'react'

import Counter from '@/components/counter';
import getPost from '@/app/api/getPost';

export default function Dashboard() {
    const [postId, setPostId] = useState(null)
    const [postTitle, setPostTitle] = useState(null)

    async function getRandomPost(max: number) {
        let randomPost = String(Math.floor(Math.random() * max))
        let data = await getPost(randomPost);

        console.log('getPost : ', data)

        setPostId(data.id)
        setPostTitle(data.title)
    }

    return (
        <div>
            <h2>Dashboard Page!</h2>
            <Counter />
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => getRandomPost(101)}>Random Post Click!</button>
            {postId && postTitle ?
                <div>
                    <div><b>{postId}. {postTitle}</b></div>
                    <div>{postTitle}</div>
                </div>
                : <div><b>There are no posts
                    Click the Random Post button !</b></div>}
        </div>

    )
}