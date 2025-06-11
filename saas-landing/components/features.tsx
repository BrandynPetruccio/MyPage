import { BarChart3, Clock, Cloud, Code2, Lock, Settings, Shield, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description:
        "Our platform is optimized for speed and performance, ensuring your workflows are never slowed down.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption keeps your data safe and compliant.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Gain valuable insights with our comprehensive analytics and reporting tools.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with your favorite cloud services and tools.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Customizable",
      description: "Tailor the platform to your specific needs with our flexible customization options.",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Developer API",
      description: "Extend functionality with our comprehensive API and developer tools.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Role-Based Access",
      description: "Control who sees what with granular permission settings and role management.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our platform provides all the tools and features you need to streamline your workflow and grow your
              business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
            >
              <div className="rounded-full border p-4 dark:border-gray-800">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
