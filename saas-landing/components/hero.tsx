import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Business with Our SaaS Platform
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Streamline your workflow, boost productivity, and scale your business with our powerful, easy-to-use
                SaaS solution.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#pricing">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-2xl transform -rotate-1"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-950 rounded-lg shadow-xl transform rotate-1 overflow-hidden">
                <div className="h-12 bg-gray-100 dark:bg-gray-800 flex items-center px-4 border-b">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid gap-4">
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
