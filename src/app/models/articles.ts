export class Articles {
  data: Article[]
}

export class Article {
  id: number
  name: string
  description: string
  imageUrl: string
  content: ArrayBuffer
  userId: number
  categoryId: number
}
