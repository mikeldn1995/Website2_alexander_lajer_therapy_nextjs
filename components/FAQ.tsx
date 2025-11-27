'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string | React.ReactNode
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What happens in a therapy session?',
    answer: 'Sessions are warm, confidential, and tailored to you. For children, this might include play, art, or creative activities. For older children and adolescents, it may focus more on talking, reflection, and practical tools. Every session is a safe space to explore feelings and build resilience.',
  },
  {
    id: '2',
    question: 'What makes play therapy different from other therapies?',
    answer: (
      <>
        Play therapy is child-led and uses toys, games, and art to help children express feelings they may not have words for. Learn more in the <Link href="/playtherapy" className="link-primary">Play Therapy article</Link>.
      </>
    ),
  },
  {
    id: '3',
    question: 'Who can benefit from therapy?',
    answer: 'Therapy can help children, teens, and young adults facing anxiety, low mood, stress, trauma, bereavement, family changes, self-worth issues, or simply needing a safe space to talk.',
  },
  {
    id: '4',
    question: 'How does Mr. Fonzie the therapy dog help?',
    answer: (
      <>
        Mr. Fonzie, my therapy dachshund, helps children and young adults feel more comfortable and open in sessions. His gentle presence often makes it easier to share difficult feelings. Read more in <Link href="/healing-paw-pet-therapy" className="link-primary">The Healing Paw article</Link>.
      </>
    ),
  },
  {
    id: '6',
    question: 'How do I prepare my child for their first session?',
    answer: "Let your child know therapy is a safe, friendly place to play, talk, or just be themselves—there's no pressure. You can show them photos from the website to help them feel at ease.",
  },
  {
    id: '7',
    question: 'Do you offer therapy for young adults as well as children?',
    answer: "Yes, I work with both young adults and children, adapting my approach to each client's needs. Young adults may benefit from talking therapy, grounding techniques, and creative exercises.",
  },
  {
    id: '8',
    question: 'Are parents/carers involved in children\'s therapy?',
    answer: "For younger children, I may meet with parents/carers to discuss progress and answer questions, while keeping the child's privacy and trust at the centre of the process.",
  },
  {
    id: '9',
    question: 'How do you ensure sessions are safe and confidential?',
    answer: 'Your privacy and safety are top priorities. I follow strict ethical guidelines and create a non-judgemental, compassionate space for every client.',
  },
  {
    id: '10',
    question: 'Can therapy help with trauma, bereavement, or big life changes?',
    answer: 'Yes. I have experience supporting clients through trauma, loss, family changes, and other challenges. Therapy offers a gentle, supportive space to process and heal.',
  },
  {
    id: '11',
    question: 'What if my child (or I) find it hard to talk?',
    answer: "That's completely normal. Play, art, and animal-assisted therapy can help when words are hard to find. There's no pressure to talk until you're ready.",
  },
  {
    id: '12',
    question: 'How long does therapy take to work?',
    answer: "Everyone is different. Some people feel a shift after a few sessions, while others benefit from longer-term support. We'll regularly review progress together.",
  },
  {
    id: '13',
    question: 'Do you offer online or in-person sessions?',
    answer: (
      <>
        I offer both in-person and online sessions, depending on your needs and location. Please <Link href="/contact" className="link-primary">contact me</Link> to discuss what works best for you.
      </>
    ),
  },
  {
    id: '14',
    question: 'How do I book a session, and what does it cost?',
    answer: (
      <>
        You can book a session by <Link href="/contact" className="link-primary">contacting me here</Link>. I'm happy to discuss fees, availability, and answer any questions you have before you decide.
      </>
    ),
  },
  {
    id: '15',
    question: 'What if I need to cancel or reschedule?',
    answer: "My cancellation policy requires at least 48 hours' notice (excluding weekends); otherwise, a charge will incur.",
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1')

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="site-section faq-section bg-light">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2 heading">Frequently Asked Questions</h2>
        </div>
        <div className="columns is-centered">
          <div className="column is-10">
            <div className="accordion">
              {faqData.map((item) => (
                <div key={item.id} className="card">
                  <div className="card-header">
                    <button
                      className="button is-text is-fullwidth has-text-left"
                      onClick={() => toggle(item.id)}
                      style={{ 
                        textAlign: 'left', 
                        fontWeight: 500,
                        padding: 0,
                        border: 'none',
                        background: 'transparent',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                      }}
                    >
                      <span>{item.question}</span>
                      <span style={{ marginLeft: '1rem', flexShrink: 0 }}>
                        {openId === item.id ? (
                          <ChevronUp size={20} style={{ color: 'var(--primary-color)' }} />
                        ) : (
                          <ChevronDown size={20} style={{ color: 'var(--text-secondary)' }} />
                        )}
                      </span>
                    </button>
                  </div>
                  {openId === item.id && (
                    <div className="card-content">
                      <div className="content" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{item.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
