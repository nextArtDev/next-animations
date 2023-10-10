import { FC } from 'react'

interface BookProps {}

const Book: FC<BookProps> = ({}) => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="book-3d flex items-center justify-center">
        <div className="book relative w-[383px] h-[567px] before:content-[''] before:absolute before:w-[60px] before:h-full after:content-[''] after:absolute after:w-full after:h-full">
          <img
            src="/images/leidinger_matthias/1.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Book
