export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
    console.log('BlogLayout :', children)
  return <section style={{background: 'blue'}}>{children}</section>
}