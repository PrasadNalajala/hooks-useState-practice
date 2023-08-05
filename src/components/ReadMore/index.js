// Write your code here
import {useState} from 'react'
import {Container, Heading, Para, CustomImg, Button} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const reactHooksDescription1 = reactHooksDescription.slice(0, 170)
  const [isReadMore, setReadMore] = useState(true)
  const onClickReadMore = () => {
    setReadMore(prev => !prev)
  }
  const reactHooksDescriptionText = isReadMore
    ? reactHooksDescription1
    : reactHooksDescription
  const buttonText = isReadMore ? 'Read More' : 'Read Less'
  return (
    <Container direction="column" justifyContent="center" alignItems="center">
      <Heading>React Hooks</Heading>
      <Para align="center">Hooks are a new addition to React</Para>
      <CustomImg
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>{reactHooksDescriptionText}</Para>
      <Button onClick={onClickReadMore}>{buttonText}</Button>
    </Container>
  )
}

export default ReadMore
