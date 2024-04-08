import { Result } from 'antd'
import { Link } from 'react-router-dom'

const Page403 = () => {
  return (
    <>
      <Result
        status='403'
        title='403'
        subTitle='Xin lỗi bạn không có quyền truy cập vào trang này.'
        extra={
          <Link type='primary' to='/about'>
            Back Home
          </Link>
        }
      />
    </>
  )
}

export default Page403
