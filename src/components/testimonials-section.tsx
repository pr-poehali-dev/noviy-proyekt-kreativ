import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Максим Орлов",
    role: "Участник программы «Боец», 6 месяцев",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "За полгода сбросил 14 кг и впервые в жизни подтянулся 20 раз. Hero League — это не просто зал, это стиль жизни.",
  },
  {
    name: "Анна Соколова",
    role: "Участница программы «Герой», 1 год",
    avatar: "/professional-woman-scientist.png",
    content:
      "Вышла на первые соревнования через год после старта. Тренеры верили в меня даже тогда, когда я сама не верила.",
  },
  {
    name: "Дмитрий Васин",
    role: "Участник программы «Новичок» → «Герой»",
    avatar: "/placeholder-user.jpg",
    content:
      "Начинал с нуля — не мог отжаться 5 раз. Сейчас готовлюсь к марафону. Hero League меняет людей.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Реальные результаты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Истории людей, которые выбрали Hero League и изменили свою жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
