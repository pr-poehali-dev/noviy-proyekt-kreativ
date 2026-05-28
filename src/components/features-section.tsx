import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Персональные программы",
    description: "Умные тренировочные планы, адаптированные под ваши цели, уровень подготовки и доступное время.",
    icon: "brain",
    badge: "ИИ-план",
  },
  {
    title: "Профессиональные тренеры",
    description: "Команда сертифицированных атлетов и тренеров с опытом подготовки чемпионов.",
    icon: "lock",
    badge: "Эксперты",
  },
  {
    title: "Точный трекинг прогресса",
    description: "Отслеживайте каждый показатель: силу, выносливость, скорость — и видите реальный рост.",
    icon: "target",
    badge: "Аналитика",
  },
  {
    title: "Быстрый результат",
    description: "Проверенные методики дают видимый результат уже через 4 недели интенсивных тренировок.",
    icon: "zap",
    badge: "Эффект",
  },
  {
    title: "Командный дух",
    description: "Тренируйся в окружении мотивированных людей. Лига — это сообщество победителей.",
    icon: "link",
    badge: "Команда",
  },
  {
    title: "Любой формат",
    description: "Онлайн, офлайн или гибрид — тренируйся там, где удобно, без потери качества.",
    icon: "globe",
    badge: "Гибкость",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают Hero League</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё, что нужно для трансформации тела и характера — в одной платформе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "🧠"}
                    {feature.icon === "lock" && "🏅"}
                    {feature.icon === "globe" && "🌍"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "link" && "🤝"}
                    {feature.icon === "target" && "🎯"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
