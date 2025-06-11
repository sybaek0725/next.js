import Counter from '@/components/counter';
import getPost from '@/app/api/getPost';

export default async function Dashboard() {
    const post = await getPost('100');

    return (
        <div>
            <h2>Dashboard Page!</h2>
            <Counter />
            <b>{post.id}. {post.title}</b>
        </div>

    )
}