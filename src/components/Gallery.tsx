import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    id: 1,
    src: '/images/1.jpeg',
    alt: 'A',
  },
  {
    id: 2,
    src: '/images/2.jpeg',
    alt: 'B',
  },
  {
    id: 3,
    src: '/images/3.jpeg',
    alt: 'C',
  },
  {
    id: 4,
    src: '/images/4.jpeg',
    alt: 'D',
  },
  {
    id: 5,
    src: '/images/5.jpeg',
    alt: 'E',
  },
  {
    id: 6,
    src: '/images/6.jpeg',
    alt: 'F',
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (event.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-dancing font-bold gradient-text text-center mb-12">
          Memory Lane
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-card scale-in cursor-pointer aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

{/* Botón hacia la otra página */}
<div className="mt-10 flex justify-center">
  <Button
    asChild
    className="
      group relative overflow-hidden rounded-full
      px-8 py-6 text-base md:text-lg font-semibold
      text-white
      bg-[var(--gradient-primary)]
      border border-white/20
      shadow-[var(--shadow-soft)]
      transition-all duration-300
      hover:shadow-[var(--shadow-hover)]
      hover:scale-[1.02]
      active:scale-[0.99]
    "
  >
    <a
      href="https://hbd2-angie.vercel.app/"
      target="hbd2_angie"
      rel="noopener noreferrer"
      className="relative"
    >
      <span className="relative z-10">Ver la otra sorpresa</span>
      <span
        className="
          pointer-events-none absolute inset-0 -z-0
          translate-x-[-120%] rotate-12
          bg-white/20 blur-md
          transition-transform duration-700
          group-hover:translate-x-[120%]
        "
      />
    </a>
  </Button>
</div>



        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-lg max-h-[85vh] mx-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={closeLightbox}
                className="absolute -top-8 right-0 z-10 birthday-card"
              >
                <X className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={prevImage}
                className="absolute left-2 md:-left-8 top-1/2 transform -translate-y-1/2 z-10 birthday-card"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={nextImage}
                className="absolute right-2 md:-right-8 top-1/2 transform -translate-y-1/2 z-10 birthday-card"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="lightbox-image rounded-xl scale-in"
              />
            </div>

            {/* Backdrop click to close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={closeLightbox}
            />
          </div>
        )}
      </div>
    </section>
  )
}
