import { useContext } from 'react'
import { AuthContext } from '../../../store/taskbar-auth'
import PinnedItem from './PinnedItem'
import classes from './StartMenu.module.css'

const DUMMY_ICONS = [
   {
      id: 'i1',
      image: '/images/vscode.png',
      name: 'VS code',
   },
   {
      id: 'i11',
      image: '/images/chrome.png',
      name: 'Chrome',
   },
   {
      id: 'i2',
      image: '/images/calculator.png',
      name: 'Calculator',
   },
   {
      id: 'i3',
      image: '/images/discord.png',
      name: 'Discord',
   },
   {
      id: 'i4',
      image: '/images/settings.png',
      name: 'Settings',
   },
   {
      id: 'i5',
      image: '/images/spotify.png',
      name: 'Spotify',
   },
   {
      id: 'i6',
      image: '/images/mail.png',
      name: 'Mail',
   },
   {
      id: 'i7',
      image: '/images/clock.png',
      name: 'Clock',
   },
   {
      id: 'i8',
      image: '/images/calendar.png',
      name: 'Calendar',
   },
   {
      id: 'i9',
      image: '/images/microsoft-store.png',
      name: 'Microsoft Store',
   },
   {
      id: 'i10',
      image: '/images/file-explorer.png',
      name: 'File Explorer',
   },
   {
      id: 'i12',
      image: '/images/messenger.png',
      name: 'Messenger',
   },
   {
      id: 'i13',
      image: '/images/disney.png',
      name: 'Disney+',
   },
   {
      id: 'i14',
      image: '/images/xbox.png',
      name: 'XBOX',
   },
   {
      id: 'i15',
      image: '/images/images.webp',
      name: 'Images',
   },
]

const StartMenu = () => {
   const ctx = useContext(AuthContext)

   return (
      <div className={`${classes.container} ${ctx.isStartMenuShowed ? classes.active : ''}`}>
         <div className={classes.pinned}>
            <div className={classes.pinnedHeader}>
               <h4>Pinned</h4>
               <button>All applications {`>`}</button>
            </div>
            <div className={classes.pinnedItems}>
               {DUMMY_ICONS.map(item => <PinnedItem key={item.id} items={item} />)}
            </div>
         </div>
      </div>
   )
}

export default StartMenu