import { useNavigate } from "react-router-dom"
import { Button } from 'antd'

const Mine = () => {

  const navigate = useNavigate()

  return (
    <div>
      current is mine 
      <Button type="link" onClick={() => navigate('/')}>to home</Button>
      <Button type="link" onClick={() => navigate('/about')}>to about</Button>
    </div>
  )

}

export default Mine 