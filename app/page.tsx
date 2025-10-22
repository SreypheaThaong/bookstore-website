import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { books } from "@/data/books"
import { BookOpen, Star, ArrowRight } from "lucide-react"

export default function Page() {
  const featuredBooks = books.slice(0, 6)
  const categories = ["Fiction", "Fantasy", "Science Fiction", "Romance", "Horror"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-background dark:from-amber-950/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="mx-auto mb-6 h-16 w-16 text-amber-700" />
            <h1 className="mb-4 font-serif text-5xl font-bold text-balance">Discover Your Next Favorite Read</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
              Browse our curated collection, read sample chapters, and share your thoughts with fellow book lovers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
                <Link href="/library">Browse Library</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">About BookNest</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Link key={category} href={`/library?category=${category}`}>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-amber-100 dark:hover:bg-amber-900 cursor-pointer"
                >
                  {category}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-4xl font-bold">Featured Books</h2>
            <p className="text-muted-foreground">Handpicked selections from our collection</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBooks.map((book) => (
              <Card key={book.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
                <Link href={`/book/${book.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link href={`/book/${book.id}`}>
                    <h3 className="mb-1 font-serif text-xl font-semibold line-clamp-1 group-hover:text-amber-700 transition-colors">
                      {book.title}
                    </h3>
                  </Link>
                  <p className="mb-2 text-sm text-muted-foreground">{book.author}</p>
                  <div className="mb-2 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(book.rating) ? "fill-amber-500 text-amber-500" : "text-muted"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm text-muted-foreground">({book.rating})</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{book.description}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <div className="flex gap-2">
                    {book.genres.slice(0, 2).map((genre) => (
                      <Badge key={genre} variant="outline" className="text-xs">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild size="sm" className="bg-amber-700 hover:bg-amber-800">
                    <Link href={`/book/${book.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/library">View All Books</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-4xl font-bold">Why BookNest?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
                <BookOpen className="h-8 w-8 text-amber-700 dark:text-amber-300" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">Read Sample Chapters</h3>
              <p className="text-muted-foreground">Preview books before committing with our free sample chapters</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
                <Star className="h-8 w-8 text-amber-700 dark:text-amber-300" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">Share Reviews</h3>
              <p className="text-muted-foreground">
                Join our community of readers and share your thoughts on your favorite books
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900">
                <BookOpen className="h-8 w-8 text-amber-700 dark:text-amber-300" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">Curated Collection</h3>
              <p className="text-muted-foreground">
                Every book is carefully selected for quality and reader satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
