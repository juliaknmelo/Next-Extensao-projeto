"use client"

import { useCallback } from "react"

export function useScrollReveal() {
  const revealElements = useCallback((elements: NodeListOf<Element>) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    elements.forEach((element) => {
      element.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-10")
      observer.observe(element)
    })

    // Add CSS for revealed elements
    const style = document.createElement("style")
    style.innerHTML = `
      .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return revealElements
}
