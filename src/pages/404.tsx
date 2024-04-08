import { Result } from 'antd'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <>
      <Result
        status='404'
        title='404'
        subTitle='Page not found'
        extra={
          <Link type='primary' to='/'>
            Back Home
          </Link>
        }
      />
    </>
  )
}

export default Page404
