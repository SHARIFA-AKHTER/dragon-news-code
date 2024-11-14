
import BackgroundImages from '../assets/bg.png';
const BackgroundImg = () => {
    return (
        <div className='card bg-base-100  '>
          <figure className="px-10 ">
                <img 
                  src={BackgroundImages}
                  alt="classImg"
                  className="rounded-xl h-[509px] w-[267px]" />
              </figure>
        </div>
    );
};

export default BackgroundImg;