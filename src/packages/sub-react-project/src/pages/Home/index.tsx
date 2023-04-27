import { useNavigate } from "react-router-dom"
import { Button } from 'antd'
import Loading from '@/components/Loading'
import styles from './index.module.less'

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className={styles['home-page']}>
      current is home 
      <Loading />
      <Button type="link" onClick={() => navigate('/mine')}>to mine</Button>
      <Button type="link" onClick={() => navigate('/about')}>to about</Button>
    </div>
  )

}

export default Home 