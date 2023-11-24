import { useEffect, useRef } from "react"

export const useOutsideClick = (callback: () => void) => {
   const ref = useRef<HTMLDivElement>(null)

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            callback()
         }
      }
      document.addEventListener("click", handleClickOutside, true)
      return () => {
         document.removeEventListener("click", handleClickOutside, true)
      }
   }, [ref, callback])

   return ref
}
