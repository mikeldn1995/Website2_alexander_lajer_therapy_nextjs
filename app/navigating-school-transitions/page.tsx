import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function NavigatingSchoolTransitions() {
  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <nav className="breadcrumb mb-4" aria-label="breadcrumbs" style={{ backgroundColor: 'transparent' }}>
            <ul>
              <li><Link href="/" className="link-primary">Home</Link></li>
              <li><Link href="/reflections" className="link-primary">Reflections</Link></li>
              <li className="is-active"><a href="#" aria-current="page" style={{ color: 'var(--text-primary)' }}>Navigating School Transitions</a></li>
            </ul>
          </nav>
          
          <div className="columns is-centered">
            <div className="column is-8">
              <Image
                src="/images/people1.png"
                alt="Supporting young people through school transitions"
                width={800}
                height={600}
                className="mb-4"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                unoptimized
              />

              <h1 className="title is-2 heading mb-4">Navigating School Transitions: Supporting Young People Through Change</h1>
              
              <p className="mb-4 text-secondary">
                School transitions are among the most significant challenges young people face. Moving from primary to secondary school, starting a new year, changing classes, or preparing for exams—each transition brings new expectations, social dynamics, and academic pressures. While these changes are a normal part of growing up, they can feel overwhelming, especially for young people who are already struggling with anxiety, self-esteem, or social connections.
              </p>
              
              <p className="mb-4 text-secondary">
                The transition to secondary school is particularly significant. Suddenly, a child who was the oldest in their school becomes the youngest. They navigate multiple teachers instead of one, manage a more complex timetable, and face increased academic expectations. Socially, they're trying to make new friends while maintaining old ones, all while figuring out where they fit in a larger, more diverse peer group.
              </p>
              
              <p className="mb-4 text-secondary">
                For adolescents, transitions might involve choosing subjects, preparing for GCSEs or A-Levels, or thinking about future education and career paths. The pressure to make "the right" choices can feel immense, especially when they're still figuring out who they are and what they want. Social transitions also intensify—relationships become more complex, peer pressure increases, and the need to belong can feel urgent.
              </p>
              
              <h3 className="title is-4 heading mt-5 mb-3">How to Support Through Transitions</h3>
              
              <p className="mb-4 text-secondary">
                The most important thing you can do is acknowledge that transitions are genuinely difficult. Validate their feelings—it's okay to feel nervous, excited, overwhelmed, or all of the above. Avoid minimising their concerns or comparing their experience to others. Each young person navigates change differently.
              </p>
              
              <p className="mb-4 text-secondary">
                Help them prepare by visiting new schools or spaces when possible, meeting teachers, or connecting with other students who've made similar transitions. Create routines and structure to provide stability during times of change. Encourage them to maintain connections with old friends while being open to new ones.
              </p>
              
              <p className="mb-4 text-secondary">
                Most importantly, keep communication open. Check in regularly, not just about academics, but about how they're feeling. Notice changes in behaviour, sleep, or mood that might indicate they're struggling. And remember, it's normal for transitions to take time—adjustment doesn't happen overnight.
              </p>
              
              <div className="gentle-quote-box">
                <p className="is-italic">
                  "Transitions are not just about moving from one place to another—they're about growth, discovery, and learning to navigate change. With support, young people can emerge from transitions stronger, more confident, and more resilient."
                </p>
              </div>
              
              <p className="mb-4 text-secondary">
                If a young person is struggling significantly with a transition, therapy can provide a safe space to process feelings, develop coping strategies, and build confidence. Sometimes, having someone outside the family or school to talk to can make all the difference in navigating these challenging periods.
              </p>
              
              <div className="mt-6">
                <Link href="/reflections" className="button is-outlined">
                  ← Back to Reflections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

