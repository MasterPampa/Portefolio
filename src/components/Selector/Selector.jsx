import './selector.css'
import { previewData } from '../../data/data'

function Selector () {
    return(
        <aside className='selector'>
            <div className='selector__arrow'>
                <i class="fa-solid fa-angle-up fa-2xl"></i>
            </div>
            <div className='selector__dot'>
                {previewData.map((item) => (
                    <i key={item.id} class="fa-solid fa-circle fa-lg"></i>
                ))}
            </div>
            <div className='selector__arrow'>
                <i class="fa-solid fa-angle-down fa-2xl"></i>
            </div>
        </aside>
    )
}

export default Selector