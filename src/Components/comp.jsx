import './comp.css'
import { FaShareAlt,FaHeart,FaCommentAlt } from 'react-icons/fa';
function Card({ bg, name, img, year, min, title,para }) {
    return (
        <div className="card" style={{ background: `url(${bg}) no-repeat `, backgroundSize: "cover" }}>
            <div className="main">

                <div className="left">
                    <div className="top">
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                        <div className="tit">
                            <h1>{name}</h1>
                            <p className='year'>{year}</p>
                            <div className="box">
                                <div className='mts'>{min}</div>
                                <p>{title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="summ">
                        {para}
                    </div>
                    <div className="shares">
                    <FaShareAlt />
                    <FaHeart/>
                    <FaCommentAlt/>
                    </div>
                </div>
               
            </div>

        </div>
    )
}
export default Card

