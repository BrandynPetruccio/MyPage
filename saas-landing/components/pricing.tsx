"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"
import { createCheckoutSession } from "@/app/actions/stripe"

export default function Pricing() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: billingInterval === "monthly" ? "$9" : "$90",
      priceId: billingInterval === "monthly" ? "price_your_starter_monthly_id" : "price_your_starter_yearly_id",
      features: ["Up to 3 projects", "Basic analytics", "24-hour support response time", "1 team member"],
    },
    {
      name: "Pro",
      description: "Ideal for growing businesses and teams",
      price: billingInterval === "monthly" ? "$29" : "$290",
      priceId: billingInterval === "monthly" ? "price_your_pro_monthly_id" : "price_your_pro_yearly_id",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "4-hour support response time",
        "Up to 5 team members",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: billingInterval === "monthly" ? "$99" : "$990",
      priceId: billingInterval === "monthly" ? "price_your_enterprise_monthly_id" : "price_your_enterprise_yearly_id",
      features: [
        "Unlimited everything",
        "Real-time analytics",
        "1-hour support response time",
        "Unlimited team members",
        "Custom integrations",
        "Dedicated account manager",
        "SSO and advanced security",
      ],
    },
  ]

  const handleSubscribe = async (priceId: string) => {
    await createCheckoutSession(priceId)
  }

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that's right for you and start transforming your business today.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-2 py-4">
          <span className={`text-sm ${billingInterval === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <Switch
            checked={billingInterval === "yearly"}
            onCheckedChange={() => setBillingInterval(billingInterval === "monthly" ? "yearly" : "monthly")}
          />
          <span className={`text-sm ${billingInterval === "yearly" ? "text-foreground" : "text-muted-foreground"}`}>
            Yearly <span className="text-green-500 font-medium">(Save 20%)</span>
          </span>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="rounded-t-lg bg-primary py-1 text-center text-sm font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{billingInterval}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handleSubscribe(plan.priceId)}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
