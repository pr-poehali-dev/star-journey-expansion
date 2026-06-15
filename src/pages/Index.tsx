import { Compass, Lock, Home, Hammer, Award, Users, Plus, Minus, Mail, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const SEND_CONTACT_URL = "https://functions.poehali.dev/dd965136-ce13-4a18-8f77-617479f4a1b5"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('loading')
    try {
      const res = await fetch(SEND_CONTACT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormState('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const faqs: FAQ[] = [
    {
      question: "Нужна ли специальная подготовка?",
      answer:
        "Для уровня «Знакомство» подготовка не требуется — это облегчённый экскурсионный формат, подходящий каждому. «Погружение» предполагает физический труд и проживание в гостевом доме общины. «Экспедиция» рассчитана на людей в хорошей физической форме: вас ждут долгие переходы по тайге, участие в промыслах и ритуалах.",
    },
    {
      question: "Чем «Ступени» отличаются от обычных экскурсий?",
      answer:
        "На рынке есть короткие туры вроде «Порождение» за 1 990 ₽ или «Погружение в петроглифы» за 7 990 ₽ — но это экскурсии без реальной жизни в общине. Наши «Ступени» — это ночёвка в гостевом доме, традиционная еда, совместный труд и настоящее соучастие в жизни и ремёслах коренного народа.",
    },
    {
      question: "Почему группы такие маленькие?",
      answer:
        "Мы держим премиальный формат и осознанно ограничиваем размер групп — не более 6–8 человек на программах «Погружение» и «Экспедиция». Это позволяет сохранить камерную атмосферу, бережно относиться к укладу общины и дать каждому гостю глубокий личный опыт.",
    },
    {
      question: "Есть ли льготы для учёных и студентов?",
      answer:
        "Да. Для исследователей и студентов профильных направлений действует система грантовых поездок — часть затрат закрывается за счёт грантовых средств. Если вы занимаетесь этнографией, антропологией или смежными науками, напишите нам, и мы расскажем об условиях участия.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/9a14b481-9487-4d26-bfe5-cc6ccd62c9ff/files/bc6dc9eb-3bd0-46a6-83c0-e6087c1de299.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Compass className="w-5 h-5" />
            <span className="font-medium text-balance">Ступени</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Уровни", "О программе", "Вопросы", "Гранты", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              Войти
            </a>
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Записаться</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Этнографический туризм с погружением</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Пройдите ступени посвящения.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Три уровня погружения в жизнь коренной общины — от знакомства с петроглифами до настоящей экспедиции в тайгу. Живите в гостевом доме, осваивайте ремёсла и получайте памятный знак посвящения.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Выбрать уровень
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              Узнать о программах
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Lock className="w-4 h-4" />
            <span className="text-sm font-medium">Группы 6–8 человек · бережно к укладу общины</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Living in the community */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Жизнь в общине</h3>
              <p className="text-white/80 leading-relaxed">Не экскурсия, а проживание в гостевом доме с местной едой.</p>
            </div>

            {/* Traditional crafts */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Настоящие ремёсла</h3>
              <p className="text-white/80 leading-relaxed">Выделка рыбьей кожи, резьба по дереву и сезонные промыслы.</p>
            </div>

            {/* Initiation badge */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Знак посвящения</h3>
              <p className="text-white/80 leading-relaxed">На церемонии вы получаете памятный знак за пройденную ступень.</p>
            </div>

            {/* Small groups */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Малые группы</h3>
              <p className="text-white/80 leading-relaxed">6–8 человек на программе — камерно и бережно к традициям.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Три ступени погружения</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От лёгкого знакомства до полной экспедиции — выбирайте глубину, к которой готовы.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Level 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/9a14b481-9487-4d26-bfe5-cc6ccd62c9ff/files/565b1af6-26f2-44df-8135-2e2da7dcfee1.jpg"
                    alt="Петроглифы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-2">01.</div>
                  <div className="text-sm text-white/50 mb-4">1–3 дня</div>
                  <h3 className="text-2xl font-semibold mb-4">Знакомство</h3>
                  <p className="text-white/80 leading-relaxed text-sm mb-6">
                    Облегчённый экскурсионный формат: смотрим петроглифы, идём в этнографический музей и проводим мастер-класс по приготовлению местного блюда.
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <span className="text-2xl font-bold">от 1 990 ₽</span>
                  </div>
                </div>
              </div>

              {/* Level 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/9a14b481-9487-4d26-bfe5-cc6ccd62c9ff/files/f63b2d8c-a3f4-4b07-a28f-6272706d4ecc.jpg"
                    alt="Ремёсла общины"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-2">02.</div>
                  <div className="text-sm text-white/50 mb-4">5–7 дней · до 8 человек</div>
                  <h3 className="text-2xl font-semibold mb-4">Погружение</h3>
                  <p className="text-white/80 leading-relaxed text-sm mb-6">
                    Живёте прямо в гостевом доме общины, осваиваете начальные навыки ремесла — выделку рыбьей кожи, резьбу по дереву, — участвуете в сезонных промыслах, а по вечерам слушаете рассказы.
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <span className="text-2xl font-bold">от 3 990 ₽</span>
                  </div>
                </div>
              </div>

              {/* Level 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/9a14b481-9487-4d26-bfe5-cc6ccd62c9ff/files/fa2db269-24e4-4d39-91a6-87867dc800c8.jpg"
                    alt="Гостевой дом"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-2">03.</div>
                  <div className="text-sm text-white/50 mb-4">от 10 дней · до 8 человек</div>
                  <h3 className="text-2xl font-semibold mb-4">Экспедиция</h3>
                  <p className="text-white/80 leading-relaxed text-sm mb-6">
                    Полное соучастие: участие в ритуалах, долгие переходы по тайге, сбор этнографического материала и почти научный туризм. Формат для самых увлечённых.
                  </p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <span className="text-2xl font-bold">от 5 990 ₽</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Check Availability Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Выбрать ступень
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о «Ступенях»: от уровня подготовки до отличий от обычных экскурсий и грантовых поездок для учёных.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Отправить запрос</h3>
                {formState === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <CheckCircle className="w-12 h-12 text-green-500" />
                    <p className="text-xl font-semibold">Заявка отправлена!</p>
                    <p className="text-gray-600">Мы свяжемся с вами в течение одного рабочего дня.</p>
                    <button onClick={() => setFormState('idle')} className="text-sm text-gray-400 underline mt-2">Отправить ещё</button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none"
                        placeholder="Ваше полное имя"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none resize-none"
                        placeholder="Какой уровень вам интересен? Знакомство, Погружение или Экспедиция?"
                      />
                    </div>
                    {formState === 'error' && (
                      <p className="text-red-500 text-sm">Что-то пошло не так. Попробуйте ещё раз.</p>
                    )}
                    <Button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base flex items-center justify-center gap-2"
                    >
                      {formState === 'loading' ? <><Loader2 className="w-4 h-4 animate-spin" /> Отправляем...</> : 'Отправить сообщение'}
                    </Button>
                  </form>
                )}
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    По вопросам уровней, грантовых поездок для учёных и студентов, партнёрства или для СМИ — свяжитесь с нами. Мы отвечаем в течение одного рабочего дня.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                      alt="Руководитель программ"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Руководитель программ</h4>
                      <p className="text-gray-600">Координатор «Ступеней»</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Compass className="w-6 h-6" />
                  <span className="text-xl font-semibold">Ступени</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Этнографический туризм с погружением в жизнь коренной общины. Три уровня — от знакомства до экспедиции — с проживанием, ремёслами и церемонией посвящения.
                </p>
              </div>

              {/* Expedition Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">УРОВНИ</h3>
                <ul className="space-y-3">
                  {["Знакомство", "Погружение", "Экспедиция", "Знак посвящения"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша миссия", "Община и традиции", "Команда", "Грантовые поездки"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПОДДЕРЖКА</h3>
                <ul className="space-y-3">
                  {["Справочный центр", "Контакты", "Вопросы и ответы", "Условия"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Анонсы заездов</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Ступени · этнографический туризм</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index