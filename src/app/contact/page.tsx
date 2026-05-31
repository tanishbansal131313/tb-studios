import ContactForm from "../../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-6xl mx-auto px-8 py-24">

        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
          CONTACT
        </p>

        <h1 className="text-6xl md:text-8xl font-black mb-8">
          GET IN
          <br />
          TOUCH
        </h1>

        <p className="text-zinc-400 text-lg max-w-2xl mb-16">
          Have a question, business inquiry, partnership proposal,
          or need support? Send us a message and well get back to you.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <ContactForm />
          </div>

          <div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">

                <div>
                  <p className="text-zinc-500 text-sm uppercase">
                    Email
                  </p>

                  <p className="text-cyan-400 text-xl mt-2">
                    tbstudios13@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm uppercase">
                    Company
                  </p>

                  <p className="text-white text-xl mt-2">
                    TB Studios
                  </p>
                </div>

                <div>
                  <p className="text-zinc-500 text-sm uppercase">
                    Services
                  </p>

                  <p className="text-white text-xl mt-2">
                    Mobile Apps, Games, Software Development
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>
    </main>
  );
}