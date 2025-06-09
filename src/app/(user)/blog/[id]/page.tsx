export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  console.log(params)
  return (
    <div>
      <h2>Blog Post Page!</h2>
      <div>My Post: {id}</div>
    </div>
  )
}