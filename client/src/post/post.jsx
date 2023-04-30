import React from 'react'
import "./post.css"
import LinesEllipsis from 'react-lines-ellipsis';
import { useState } from 'react';



function Post() {
  const [expanded, setExpanded] = useState(false);
  function handleExpand() {
    setExpanded(!expanded);
  }
  function handleCollapse() {
    setExpanded(false);
  }
  const textContent = "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ullam quisquam nesciunt beatae nulla reprehenderit pariatur id, blanditiis magni assumenda officiis! Ut veritatis quas eum fugiat itaque soluta et corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque recusandae, incidunt unde nesciunt, velit beatae obcaecati molestiae aliquid id nostrum consequuntur, eum nisi sunt! Corporis provident asperiores numquam cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit expedita, culpa eaque natus autem iusto aperiam aspernatur, voluptatem quam facere consectetur, exercitationem soluta saepe distinctio dignissimos amet. Dolor, perferendis earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cupiditate saepe, illum dolore a, reiciendis accusantium voluptatum expedita nisi quibusdam vel sequi, eaque totam nesciunt quo ipsam non! Iure, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius dolore reiciendis veritatis pariatur cum laborum voluptatibus laboriosam nobis autem beatae possimus corporis assumenda dolor quas cupiditate deleniti, corrupti nihil."
  return (
    <div className='post'>
      <img className='postImg' src="imagenew5.jpg" alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">music</span>
          <span className="postCat">life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur  beatae architecto.!
        </span>
        <span className="postDate">3hours ago </span>
      </div>
      

      <p className='postDescription'>
      <LinesEllipsis
        const text={textContent}
        maxLine={4}
        ellipsis='...'
        trimRight
        basedOn='words'
        readMoreText='read mo'
      >
        {textContent}
      </LinesEllipsis>
      {!expanded && (
        <button onClick={handleExpand}>Read more</button>
      )}
      {expanded && (
        <div>
          <p>{textContent}</p>
          <button onClick={handleCollapse}>Read less</button>
        </div>
      )}
    </p>





      
    </div>

  );
}





export default Post

