import { Button } from './components/button'

export function App() {
  return (
    <div className="bg-background flex h-screen flex-col items-center justify-center">
      <div className="bg-silver flex h-40 flex-col items-center justify-center rounded-lg p-4 shadow-lg">
        <h1 className="text-primary text-3xl font-bold">Hello World</h1>
        <Button size="lg" onClick={() => console.log('clicked!!')}>
          CandyShop
        </Button>
      </div>
    </div>
  )
}
