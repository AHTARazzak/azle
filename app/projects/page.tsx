import Image from 'next/image'

export default function Projects() {
  const images = [
    'https://images.squarespace-cdn.com/content/v1/5ba0e7122714e5d179eb2f6c/1583677146627-W8UB86HTWEFR3WHYMIQ4/Webseite_Leporello_Test5.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5ba0e7122714e5d179eb2f6c/1583677147010-K7Z8L2ATVV1ZAR07F4NZ/Webseite_Leporello_Test6.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5ba0e7122714e5d179eb2f6c/1583677162069-ZS32YT6UKQLKNTHACVJR/Webseite_Leporello_Test7.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/5ba0e7122714e5d179eb2f6c/1583677155516-7DNH83C5T6MZA3U6DP16/Webseite_Leporello_Test8.jpg?format=500w'
  ]

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Project work ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-auto"
          />
        ))}
      </div>
    </div>
  )
}