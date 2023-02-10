import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/ReduxHooks'
import { setActive } from '../store/moduleSlise'
import '../styles/MyModal.css'

interface MyModalProps{
  children:React.ReactNode
}

const MyModal:React.FC<MyModalProps> = ({children}) => {
  const dispatch = useDispatch()
  const isActive = useAppSelector(state=> state.module.isActive)

  return (
    <div className={isActive ? 'myModal active' : 'myModal'} onClick={() => dispatch(setActive(false))}>
        <div className={isActive ? 'ModalContent active' : 'ModalContent'} /* onClick={e => e.stopPropagation()} */ >
          {children}
        </div>
    </div>
  )
}

export default MyModal  