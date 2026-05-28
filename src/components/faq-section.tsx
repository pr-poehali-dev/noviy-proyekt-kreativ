import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Подходит ли Hero League Training для новичков?",
      answer:
        "Да! У нас есть программы для любого уровня — от абсолютного нуля до продвинутых атлетов. Каждый новичок проходит вводную консультацию, где тренер подбирает оптимальную нагрузку.",
    },
    {
      question: "Как быстро появятся первые результаты?",
      answer:
        "Большинство участников замечают изменения уже через 3–4 недели: улучшается самочувствие, растёт выносливость и уходит лишний вес. Заметные визуальные изменения — через 6–8 недель при регулярных тренировках.",
    },
    {
      question: "Можно ли тренироваться онлайн?",
      answer:
        "Конечно! Hero League поддерживает полноценный онлайн-формат: видео-тренировки в прямом эфире, записи занятий и чат с тренером в любое время.",
    },
    {
      question: "Сколько времени нужно уделять тренировкам?",
      answer:
        "Минимальная эффективная программа — 3 тренировки в неделю по 45–60 минут. Более интенсивные уровни предполагают 4–5 занятий. Тренер составит план с учётом вашего расписания.",
    },
    {
      question: "Что включает абонемент Hero League?",
      answer:
        "В зависимости от уровня: персональный план тренировок, доступ к библиотеке упражнений, план питания, поддержка тренера и доступ в сообщество участников.",
    },
    {
      question: "Можно ли поменять программу в процессе?",
      answer:
        "Да, вы можете в любой момент обсудить с тренером изменение программы — перейти на другой уровень, скорректировать цели или сфокусироваться на конкретной задаче.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что вы хотели знать о тренировках в Hero League Training.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
