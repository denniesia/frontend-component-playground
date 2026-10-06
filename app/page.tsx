import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium text-gray-500">
          Frontend Component Playground
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          A place to practise building UI components.
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          This repository is used to practise building reusable React
          components, experimenting with different UI patterns, and exploring
          them visually with Storybook.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="http://localhost:6006"
            className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Open Storybook
          </a>

          <a
            href="https://github.com"
            className="rounded-md border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50"
          >
            View Repository
          </a>
        </div>
      </div>
    </main>
  );
}
