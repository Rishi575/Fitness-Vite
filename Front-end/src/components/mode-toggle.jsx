import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
        <Button size="icon" className='bg-transparent hover:bg-transparent border-0'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-sun"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-300" onClick={() => setTheme("dark")}/></svg> */}
          <Sun className=" rotate-0 scale-100 transition dark:-rotate-90 dark:scale-0 text-red-500" onClick={() => setTheme("dark")}/>
          <Moon className="absolute  rotate-90 scale-0 transition dark:rotate-0 dark:scale-100 text-white" onClick={() => setTheme("light")}/>
        </Button>  
  )
}
