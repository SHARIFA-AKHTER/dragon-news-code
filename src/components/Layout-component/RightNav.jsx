

import BackgroundImg from '../BackgroundImg';
import FindUs from '../FindUs';
import Qzone from '../Qzone';
import SocialLogin from '../SocialLogin';


const RightNav = () => {
    return (
        <div className='space-y-20'>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
           <Qzone></Qzone>
          <BackgroundImg></BackgroundImg>
        </div>
    );
};

export default RightNav;