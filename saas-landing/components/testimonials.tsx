import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CEO, TechStart",
      content:
        "This SaaS platform has completely transformed how we operate. The efficiency gains alone have paid for the subscription tenfold.",
      avatar: "AJ",
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director, GrowthCo",
      content:
        "The analytics features have given us insights we never had before. Our campaigns are now data-driven and much more effective.",
      avatar: "SW",
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateTech",
      content:
        "The API is robust and well-documented. Integration was seamless, and the developer support is outstanding.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, ScaleUp Inc",
      content:
        "We've reduced our operational overhead by 35% since implementing this platform. The automation capabilities are game-changing.",
      avatar: "ER",
    },
    {
      name: "David Kim",
      role: "Product Manager, NextLevel",
      content:
        "The user interface is intuitive and our team was up and running in minutes. The onboarding experience is exceptional.",
      avatar: "DK",
    },
    {
      name: "Lisa Thompson",
      role: "Finance Director, OptimizeNow",
      content:
        "The reporting features have streamlined our month-end processes. What used to take days now takes hours.",
      avatar: "LT",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Businesses Worldwide</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it. See what our customers have to say about our platform.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border bg-background">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{testimonial.name}</h3>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
