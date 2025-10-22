export interface Review {
  id: string
  bookId: string
  userName: string
  rating: number
  comment: string
  date: string
}

export const reviews: Review[] = [
  {
    id: "1",
    bookId: "1",
    userName: "Sarah Johnson",
    rating: 5,
    comment: "An absolute masterpiece. Harper Lee's portrayal of justice and morality is timeless.",
    date: "2024-01-15",
  },
  {
    id: "2",
    bookId: "1",
    userName: "Michael Chen",
    rating: 5,
    comment: "Required reading for everyone. The themes are as relevant today as they were in 1960.",
    date: "2024-02-20",
  },
  {
    id: "3",
    bookId: "2",
    userName: "Emma Davis",
    rating: 5,
    comment: "Chillingly prophetic. Orwell's vision of the future is disturbingly accurate.",
    date: "2024-01-10",
  },
  {
    id: "4",
    bookId: "2",
    userName: "James Wilson",
    rating: 4,
    comment: "A must-read dystopian novel. Some parts are slow, but the overall message is powerful.",
    date: "2024-03-05",
  },
  {
    id: "5",
    bookId: "3",
    userName: "Olivia Martinez",
    rating: 5,
    comment: "Jane Austen at her finest. The wit and romance never get old.",
    date: "2024-02-14",
  },
  {
    id: "6",
    bookId: "3",
    userName: "Daniel Brown",
    rating: 4,
    comment: "Beautifully written with memorable characters. A classic for a reason.",
    date: "2024-01-28",
  },
  {
    id: "7",
    bookId: "6",
    userName: "Sophie Anderson",
    rating: 5,
    comment: "The perfect introduction to Middle-earth. Tolkien's world-building is unmatched.",
    date: "2024-03-12",
  },
  {
    id: "8",
    bookId: "7",
    userName: "Lucas Taylor",
    rating: 5,
    comment: "The book that started it all. Still magical after all these years.",
    date: "2024-02-08",
  },
]
