import rabbit from '../../assets/bunny-placeholder.jpg'
import PostContent from './postContent'
import { selectTheme } from '../colorChange/colorChangeSlice'
import React from 'react'
import { useSelector } from 'react-redux'

export default function PostBox(props) {
    const overlayColor = useSelector(selectTheme)
    let permalink = `https://www.reddit.com/${props.data.permalink}`
    let picture;
    let postContent;
    let pictureContent;

    if (props.data.thumbnail_height === null) {
        postContent = <PostContent data={props.data} className={'post-content-small'} id={props.id} comments={props.comments} />
        pictureContent = null
    } else {
        postContent = <PostContent data={props.data} className={'post-content'} id={props.id} comments={props.comments} />
    }

    // if its an image, set picture accordingly
    if (props.data.post_hint === 'image') {
        picture = props.data.url
        pictureContent = (
            <figure className='post-media-container'>
                <a href="{permalink}" target='_blank' rel='noreferrer'>
                    <img className='post-image' src={picture} alt="a rabbit" />
                </a>
            </figure>
        )
    // if gallery doesnt have a thumbnail, display default bunny
    } else if (props.data.is_gallery && props.data.thumbnail === 'default') {
        pictureContent = (
            <figure className='post-media-container'>
                <a href={permalink}>
                    <img className='post-image-default' src={rabbit} alt='a rabbit' />
                    <figcaption className='default-image-text' style={{backgroundColor: overlayColor}}><em>Image not found</em></figcaption>
                </a>
            </figure>
        )
    // for gallery return first image if possible
    } else if (props.data.is_gallery) {
        picture = props.data.thumbnail
        pictureContent = (
            <figure className='post-media-container'>
                <a href={permalink} target='_blank' rel='noreferrer'>
                    <img className='post-image-default' src={rabbit} alt='a rabbit' />
                    <figcaption className='default-image-text' style={{backgroundColor: overlayColor}}><em>Image not found</em></figcaption>
                </a>
            </figure>
        )
    }

    return (
        <div className='post-box'>
            {/* <Score /> */}
            {pictureContent}
            {postContent}
        </div>
    )
} 