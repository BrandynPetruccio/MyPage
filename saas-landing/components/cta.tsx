import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Business?</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Join thousands of satisfied customers who have taken their business to the next level with our platform.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#pricing">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="#">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
