export default function DeleteAccountPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-4xl mx-auto px-8 py-24">
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 md:p-14">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            ACCOUNT DELETION
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-8">
            Delete Your EarnPlay Account
          </h1>

          <p className="text-zinc-400 text-lg leading-8 mb-10">
            If you would like to permanently delete your EarnPlay account and
            all associated data, please send an email from the email address
            linked to your EarnPlay account.
          </p>

          <div className="bg-black border border-zinc-800 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6">
              How to Request Account Deletion
            </h2>

            <ol className="list-decimal list-inside space-y-4 text-zinc-300">
              <li>
                Send an email from the email address associated with your
                EarnPlay account.
              </li>

              <li>
                Email us at{" "}
                <a
                  href="mailto:support@tbstudios.online"
                  className="text-cyan-400 hover:underline"
                >
                  tabstudios13@gmail.com
                </a>
              </li>

              <li>
                Use the subject:
                <span className="block mt-2 text-white font-semibold">
                  &quot;Delete EarnPlay Account&quot;
                </span>
              </li>

              <li>
                We will process your request within{" "}
                <strong>7 business days</strong>.
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-green-400 mb-5">
                Data Deleted
              </h3>

              <ul className="space-y-3 text-zinc-300">
                <li>✓ User Profile</li>
                <li>✓ Coins</li>
                <li>✓ History</li>
                <li>✓ Withdrawal History</li>
                <li>✓ App Activity</li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-yellow-400 mb-5">
                Data Retained
              </h3>

              <p className="text-zinc-300 leading-7">
                Records required for fraud prevention, dispute resolution,
                security, taxation, or legal compliance may be retained for a
                limited period as required by applicable laws.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6">
            <p className="text-cyan-300">
              If you have any questions regarding your account or data, please
              contact us at{" "}
              <a
                href="mailto:support@tbstudios.online"
                className="font-semibold underline"
              >
                support@tbstudios.online
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}