import { useNavigate } from "react-router-dom"
import { Button } from 'antd'

const About = () => {

  const navigate = useNavigate()

  return (
    <div>
      current is about 
      <Button type="link" onClick={() => navigate('/')}>to home</Button>
      <Button type="link" onClick={() => navigate('/mine')}>to mine</Button>
    </div>
  )

}

export default About 