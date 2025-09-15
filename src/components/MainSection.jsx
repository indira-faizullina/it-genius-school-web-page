import img from '/main.svg'

export default function MainSection() {
    return(
      <>
      <h1>IT-Genius</h1>
      <h2>Онлайн-школа программирования для детей</h2>
      <img src={img} style={{width: '100%'}} alt="Главное изображение" />
      </>
    )
}