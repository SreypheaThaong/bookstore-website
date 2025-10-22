import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, BookOpen } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-primary">BookNest</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Discover your next favorite read. Browse, read samples, and share your thoughts in our cozy reading
              community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/library" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Browse Library
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/library?category=Fiction"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Fiction
                </Link>
              </li>
              <li>
                <Link
                  href="/library?category=Fantasy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Fantasy
                </Link>
              </li>
              <li>
                <Link
                  href="/library?category=Science Fiction"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Science Fiction
                </Link>
              </li>
              <li>
                <Link
                  href="/library?category=Romance"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Romance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">hello@booknest.com</p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} BookNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
