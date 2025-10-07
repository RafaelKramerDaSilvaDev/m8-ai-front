import { Search } from 'lucide-react'
import LogoM8 from './assets/logo_m8.svg'

export const App = () => {
  return (
    <main className="h-screen bg-gray-200">
      <div className="flex w-full flex-col items-center justify-center gap-8 pt-32">
        <img src={LogoM8} alt="Logo M8" className="w-32" />

        <div className="flex flex-col gap-2 p-4">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Pergunte alguma coisa"
              className="w-full bg-white px-4 py-3 text-lg text-gray-500 placeholder-gray-400 shadow focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <div className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400">
              <Search className="h-5 w-5" />
            </div>

            <div className="absolute bottom-0 left-0 flex h-1 w-full">
              <div className="w-1/6 bg-red-500"></div>
              <div className="w-1/6 bg-orange-500"></div>
              <div className="w-1/6 bg-yellow-400"></div>
              <div className="w-1/6 bg-blue-400"></div>
              <div className="w-1/6 bg-blue-600"></div>
              <div className="w-1/6 bg-green-500"></div>
            </div>
          </div>

          <p className="px-3 text-center text-xs text-gray-500">
            O M8 AI pode cometer erros. Por isso, lembre-se de conferir
            informações relevantes.
          </p>
        </div>
      </div>
    </main>
  )
}
