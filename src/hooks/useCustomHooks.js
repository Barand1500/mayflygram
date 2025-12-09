import { useState, useEffect, useRef } from 'react'

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const targetRef = useRef(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(target)

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [options])

  return [targetRef, isIntersecting]
}

export function useLazyLoad(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [elementRef, isVisible]
}

export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}

export function useImagePreloader(imageUrls) {
  const [imagesPreloaded, setImagesPreloaded] = useState(false)

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setImagesPreloaded(true)
      return
    }

    let isCancelled = false
    const promises = imageUrls.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = reject
      })
    })

    Promise.all(promises)
      .then(() => {
        if (!isCancelled) {
          setImagesPreloaded(true)
        }
      })
      .catch(err => console.error('Image preload failed:', err))

    return () => {
      isCancelled = true
    }
  }, [imageUrls])

  return imagesPreloaded
}

export function useDoubleClick(callback, delay = 300) {
  const [clickCount, setClickCount] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (clickCount === 1) {
      timeoutRef.current = setTimeout(() => {
        setClickCount(0)
      }, delay)
    } else if (clickCount === 2) {
      callback()
      setClickCount(0)
      clearTimeout(timeoutRef.current)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [clickCount, callback, delay])

  return () => setClickCount(prev => prev + 1)
}
