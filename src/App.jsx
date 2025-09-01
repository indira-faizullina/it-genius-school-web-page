import Header from "./components/Header"
import Direction from "./components/Direction"

export default function App() {

  return (
    <>
    <Header/>
    <main>
      <h1>Школа программирования для детей IT Genius.</h1>
      <section>
      <h3>Направления</h3>
      <Direction />
      </section>
    </main>
    </>
  )
}
