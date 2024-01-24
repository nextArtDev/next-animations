// localhost:3000/newspaper/shuffled-paper

export default function NewspaperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="bg-[#aaa]">{children}</main>
}
