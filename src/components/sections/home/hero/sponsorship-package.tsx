'use client'

import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export function SponsorshipPackage() {
  const numPages = 11
  const [pageIndex, setPageIndex] = useState<number>(0)

  const calculateScale = useCallback(() => {
    const MIN_SCALE = 0.2
    const MAX_SCALE = 0.38

    const MIN_WIDTH = 320
    const MAX_WIDTH = 768
    const MIN_HEIGHT = 500

    const calculateWidthScale = () => {
      if (window.innerWidth < MIN_WIDTH) {
        return MIN_SCALE
      }
      if (window.innerWidth > MAX_WIDTH) {
        return MAX_SCALE
      }
      return (
        MIN_SCALE
        + (MAX_SCALE - MIN_SCALE)
        * ((window.innerWidth - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH))
      )
    }

    const calculateHeightScale = () => {
      return window.innerHeight < MIN_HEIGHT ? MIN_SCALE : MAX_SCALE
    }

    const widthScale = calculateWidthScale()
    const heightScale = calculateHeightScale()

    // Return the minimum scale to ensure it fits within both width and height constraints
    return Math.min(widthScale, heightScale)
  }, [])

  const [scale, setScale] = useState<number>(calculateScale())

  useEffect(() => {
    const handleResize = () => {
      setScale(calculateScale())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [calculateScale])

  const file = useMemo(() => 'spac-patronage-package-2024.pdf', [])

  return (
    <>
      <button
        type="button"
        className="btn btn-outline btn-accent btn-wide text-lg uppercase group-hover:shadow-[0_0px_10px_rgba(255,209,0,1)] md:text-xl"
        // onClick={() =>
        //   document.getElementById('sponsorship-package-modal')?.showModal()}
      >
        Become a Patron
      </button>

      <dialog id="sponsorship-package-modal" className="modal">
        <div className="modal-box relative h-3/4 space-y-2 scroll-smooth px-0">
          <Document file={file}>
            {Array.from({ length: numPages }).map((_, index) => (
              <Page
                key={`page_${index}`}
                canvasBackground="transparent"
                className="flex justify-center"
                scale={scale}
                inputRef={(ref) => {
                  if (ref && pageIndex === index) {
                    ref.scrollIntoView()
                  }
                }}
                pageIndex={index}
              />
            ))}
          </Document>
          {/* Buttons and page number */}
          <div className="left-0 top-0 z-10 w-full space-y-2">
            <div className="flex justify-center space-x-2">
              <button
                type="button"
                className="btn btn-outline btn-accent"
                onClick={() =>
                  setPageIndex((pageIndex - 1 + numPages) % numPages)}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-outline btn-accent"
                onClick={() => setPageIndex((pageIndex + 1) % numPages)}
              >
                Next
              </button>
            </div>
            <p className="flex justify-center">
              Page
              {' '}
              {pageIndex + 1}
              {' '}
              of
              {' '}
              {numPages}
            </p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button">close</button>
        </form>
      </dialog>
    </>
  )
}
