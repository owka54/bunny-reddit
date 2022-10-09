import bunny from '../../assets/rabbit.png'

export default function Loading() {
    <div className='post-box-loading'>
        <div className='loader'>
            <p className='load-text'>Loading...</p>
            <img className='load-image' src={bunny} alt="a bunny" />
        </div>
    </div>
}