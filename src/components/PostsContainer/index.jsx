import PropTypes from 'prop-types'
import Post from '../Postss'
import './PostsConteiner.scss'
const PostsContainer = ({posts = [], isLoading = false, handleFavourite = () => {}, handleClick = () => {}}) => {
  return <div className='postsContainer'>
    {isLoading && <div>Is Loading...</div>}
    {posts && posts.map(({name, price,image,article, id,color, isFavourite}) => <Post key={id} name={name} price={price} article={article} image={image} id={id} color={color} isFavourite={isFavourite} handleFavourite={handleFavourite} handleClick={handleClick}/>)}
  </div>
}

PostsContainer.propTypes = {
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
  handleFavourite: PropTypes.func,
  handleClick: PropTypes.func,
}

export default PostsContainer
