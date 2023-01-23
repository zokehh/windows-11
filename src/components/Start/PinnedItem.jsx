import classes from './PinnedItem.module.css'

const PinnedItem = (props) => {
   return (
      <div className={classes.container}>
         <div>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
         </div>
      </div>
   )
}

export default PinnedItem