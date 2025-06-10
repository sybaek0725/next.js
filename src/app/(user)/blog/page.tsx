import Link from 'next/link'


// export function generateStaticParams() {
//   return [
//     { category: 'a', product: '1' },
//     { category: 'b', product: '2' },
//     { category: 'c', product: '3' },
//   ]
// }

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function Blog() {
    
    return (
        <div>
            <h2>Blog page!</h2>
            <ul>
               {generateStaticParams().map((item) => (
                    <li key={item.id}>
                        <Link href={`/blog/${item.id}`}>{item.id}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}