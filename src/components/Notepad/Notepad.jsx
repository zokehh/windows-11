import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { AuthContext } from '../../../store/taskbar-auth'
import classes from './Notepad.module.css'

const Notepad = () => {
   const [isEdited, setIsEdited] = useState(false)
   const [input, setInput] = useState('')
   const [fontSize, setFontSize] = useState('16')
   const [fontFamily, setFontFamily] = useState('Segoe UI')
   const [fontStyle, setFontStyle] = useState('normal')
   const [color, setColor] = useState('#000000')
   const [styles, setStyles] = useState({})
   
   const [isTextItalic, setIsTextItalic] = useState(false)
   const [isTextUnderlined, setIsTextUndelined] = useState(false)

   const [isTextAlignedLeft, setIsTextAlignetLeft] = useState(true)
   const [isTextAlignedCenter, setIsTextAlignetCenter] = useState(false)
   const [isTextAlignedRight, setIsTextAlignetRight] = useState(false)
   const [isTextAlignedJustify, setIsTextAlignetJustify] = useState(false)

   const ctx = useContext(AuthContext)

   const textItalicHandler = () => {
      setIsTextItalic(prevState => !prevState)
   }

   const textUnderlinedHandler = () => {
      setIsTextUndelined(prevState => !prevState)
   }

   const textAlignedLeftHandler = () => {
      setIsTextAlignetLeft(true)
      setIsTextAlignetCenter(false)
      setIsTextAlignetRight(false)
      setIsTextAlignetJustify(false)
   }

   const textAlignedCenterHandler = () => {
      setIsTextAlignetLeft(false)
      setIsTextAlignetCenter(true)
      setIsTextAlignetRight(false)
      setIsTextAlignetJustify(false)
   }

   const textAlignedRightHandler = () => {
      setIsTextAlignetLeft(false)
      setIsTextAlignetCenter(false)
      setIsTextAlignetRight(true)
      setIsTextAlignetJustify(false)
   }

   const textAlignedJustifyHandler = () => {
      setIsTextAlignetLeft(false)
      setIsTextAlignetCenter(false)
      setIsTextAlignetRight(false)
      setIsTextAlignetJustify(true)
   }

   const setInputHandler = (event) => {
      setInput(event.target.value)
   }

   useEffect(() => {
      if (input !== '') {
         setIsEdited(true)
      } else {
         setIsEdited(false)
      }
   }, [input])

   useEffect(() => {
      const localIsTextItalic = isTextItalic ? 'italic' : ''
      const localIsTextUnderlined = isTextUnderlined ? 'underline' : ''
      let textAlignment

      if (isTextAlignedLeft) {
         textAlignment = 'left'
      }

      if (isTextAlignedCenter) {
         textAlignment = 'center'
      }

      if (isTextAlignedRight) {
         textAlignment = 'right'
      }

      if (isTextAlignedJustify) {
         textAlignment = 'justify'
      }

      setStyles({
         fontFamily: fontFamily,
         fontSize: fontSize + 'px',
         fontWeight: fontStyle,
         color: color,
         fontStyle: localIsTextItalic,
         textDecoration: localIsTextUnderlined,
         textAlign: textAlignment
      })
   }, [
      fontSize, 
      fontFamily, 
      fontStyle, 
      color, 
      isTextItalic, 
      isTextUnderlined, 
      isTextAlignedLeft, 
      isTextAlignedCenter, 
      isTextAlignedRight, 
      isTextAlignedJustify
   ])

   return (
      <div className={`${classes.container} ${ctx.isNotepadShowed ? classes.activeNotepad : ''}`}>
         <div className={classes.topSide}>
            <div className={classes.header}>
               <div className={classes.icons}>
                  <div onClick={ctx.hideNotepad} className={classes.red}></div>
                  <div className={classes.yellow}></div>
                  <div className={classes.green}></div>
               </div>
               <div className={classes.title}>
                  <p><span className='bold'>Untilted </span>{isEdited ? "- Edited" : ''}</p>
               </div>
            </div>
            <div className={classes.edit}>
               <div className={classes.fontFamily}>
                  <select onChange={(event) => setFontFamily(event.target.value)}>
                     <option value="Helvetica">Helvetica</option>
                     <option value="Arial">Arial</option>
                     <option value="Times New Roman">Times New Roman</option>
                     <option value="Verdana">Verdana</option>
                     <option value="Segoe UI">Segoe UI</option>
                  </select>
               </div>
               <div className={classes.fontStyle}>
                  <select onChange={(event) => setFontStyle(event.target.value)}>
                     <option value="normal">Regular</option>
                     <option value="bold">Bold</option>
                     <option value="100">Light</option>
                  </select>
               </div>
               <div className={classes.fontSize}>
                  <select defaultValue={'16'} onChange={(event) => setFontSize(event.target.value)}>
                     <option value="8">8</option>
                     <option value="10">10</option>
                     <option value="12">12</option>
                     <option value="14">14</option>
                     <option value="16">16</option>
                     <option value="18">18</option>
                     <option value="20">20</option>
                     <option value="24">24</option>
                     <option value="26">26</option>
                     <option value="28">28</option>
                     <option value="32">32</option>
                     <option value="36">36</option>
                     <option value="40">40</option>
                     <option value="48">48</option>
                  </select>
               </div>
               <div className={classes.color}>
                  <input onChange={(event) => setColor(event.target.value)} type="color" />
               </div>
               <div className={classes.textDecoration}>
                  <div onClick={textItalicHandler} className={classes.italic}>
                     <p className={isTextItalic ? classes.active : ''}>I</p>
                  </div>
                  <div onClick={textUnderlinedHandler} className={classes.underline}>
                     <p className={isTextUnderlined ? classes.active : ''}>U</p>
                  </div>
               </div>
               <div className={classes.textAlignment}>
                  <div onClick={textAlignedLeftHandler} className={isTextAlignedLeft ? classes.active : ''}>
                     <img src="/images/text-align-left.png" />
                  </div>
                  <div onClick={textAlignedCenterHandler} className={isTextAlignedCenter ? classes.active : ''}>
                     <img src="/images/text-align-center.png" />
                  </div>
                  <div onClick={textAlignedRightHandler} className={isTextAlignedRight ? classes.active : ''}>
                     <img src="/images/text-align-right.png" />
                  </div>
                  <div onClick={textAlignedJustifyHandler} className={isTextAlignedJustify ? classes.active : ''}>
                     <img src="/images/text-align-justify.png" />
                  </div>
               </div>
            </div>
         </div>
         <div className={classes.notepad}>
            <textarea style={styles} onChange={setInputHandler}></textarea>
         </div>
      </div>
   )
}

export default Notepad