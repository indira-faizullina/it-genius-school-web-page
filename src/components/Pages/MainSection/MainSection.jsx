import { mainPageData } from '../../../data.js'
import classes from './MainSection.module.css'

export default function MainSection() {
    return(
      <>
      <h1>IT-Genius</h1>
      <h2>Онлайн-школа программирования для детей и подростков</h2>
      <div className={classes.container}>
      {mainPageData.map((item, i) => (
        <div className={
          (i % 2 !== 0) 
          ? classes.itemContainer 
          : classes.itemContainerReverse} key={i}>
            <div className={classes.itemText}>
              <h3>{item.title}</h3>
              <p>{item.direction}</p></div>
          <img className={classes.itemImg} src={`/${item.img}.jpg`} alt="" />
        </div>
      ))}
      </div>
      </>
    )
}