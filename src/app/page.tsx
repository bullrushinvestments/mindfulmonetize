import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindfulMonetize',
  description: 'A personalized content marketplace that leverages AI to curate and deliver niche expertise articles directly to mental health professionals and wellness enthusiasts, enhancing their understanding of consumer behavior for e-commerce success.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindfulMonetize</h1>
      <p className="mt-4 text-lg">A personalized content marketplace that leverages AI to curate and deliver niche expertise articles directly to mental health professionals and wellness enthusiasts, enhancing their understanding of consumer behavior for e-commerce success.</p>
    </main>
  )
}
