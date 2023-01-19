import classes from './PinnedItem.module.css'

const PinnedItem = (props) => {
   return (
      <div className={classes.container}>
         <div>
            <img src={props.items.image} alt="" />
            <p>{props.items.name}</p>
         </div>
      </div>
   )
}

export default PinnedItem