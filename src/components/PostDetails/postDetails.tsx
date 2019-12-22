import * as React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import _ from "lodash"
import {
  PostDetailsWrapper,
  PostTitle,
  PostDate,
  PostPreview,
  PostDescriptionWrapper,
  PostDescription,
  PostTags,
} from "./postDetails.style"
import TableOfContents from "../TableOfContents"

type PostDetailsProps = {
  title: string
  date?: string
  preview?: any
  background?: string
  description: any
  tags?: []
  className?: string
  toc?: any
  imagePosition?: "left" | "top"
}

const PostDetails: React.FunctionComponent<PostDetailsProps> = ({
  title,
  date,
  preview,
  background,
  description,
  tags,
  className,
  imagePosition,
  toc,
  ...props

}) => {


  const addClass: string[] = ["post_details"]

  if (imagePosition == "left") {
    addClass.push("image_left")
  }
  if (imagePosition == "top") {
    addClass.push("image_top")
  }

  if (className) {
    addClass.push(className)
  }

  return (
    <PostDetailsWrapper {...props} className={addClass.join(" ")}>
      {imagePosition == "left" ? (
        <>
          {preview == null ? null : (
            <PostPreview className="post_preview">
              <Img fluid={preview} alt={title} />
            </PostPreview>
          )}
        </>
      ) : (
        ""
      )}

    
    


      <PostDescriptionWrapper className="post_des_wrapper">
        {imagePosition == "top" ? (
          <>
              
              <div style={{background:background}} className="intro-top" >
                <Img fluid={preview} alt={title} fadeIn={true} placeholderStyle={{display:"none"}}/>
                <div className="titles">
                  <PostTitle>{title}</PostTitle>
                  <PostDate>{date}</PostDate>
                </div>
              </div>

              <TableOfContents toc={toc}/>
      
          </>
        ) : 
          ""}

        {imagePosition == "left" ? (
          <>
            <PostTitle>{title}</PostTitle>
            <PostDate>{date}</PostDate>
          </>
        ) : (
          ""
        )}

        <PostDescription
          dangerouslySetInnerHTML={{ __html: description }}
          className="post_des"
        />

        {tags == null ? null : (
          <PostTags>
            {tags.map((tag, index) => (
              <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                {`#${tag}`}
              </Link>
            ))}
          </PostTags>
        )}
      </PostDescriptionWrapper>
    </PostDetailsWrapper>
  )
}

PostDetails.defaultProps = {
  imagePosition: "top",
}

export default PostDetails
