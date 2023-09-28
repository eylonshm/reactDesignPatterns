import { Helmet } from 'react-helmet'

const DefaultMessage = () => {
  return (
    <>
      <Helmet title='React Design Patterns' />
      <h2>Just use the navBar above to move between patterns 👆🏼</h2>
      <h4 style={{ marginBottom: '0' }}>
        You won't really find knowledge here
      </h4>
      <p style={{ marginTop: '0' }}>
        Browse the repo for more examples and explanations on how to use each
        pattern. If you have any questions or suggestions, feel free to reach
        out to me on Github or send me an email at eylonshm@gmail.com
      </p>
      <a href='https://github.com/eylonshm/reactDesignPatterns' target='_blank'>
        Github Repo
      </a>
    </>
  )
}

export default DefaultMessage
