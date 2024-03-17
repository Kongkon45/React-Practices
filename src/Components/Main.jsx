// import React, { useState } from 'react'
// import Home from './Home'
// import Login from './Login'

// export default function Main() {
//     const [isLogin, setIsLogin]=useState(false)
//     let reduring ;
//     if(isLogin){
//         reduring = <Home/>
//     }
//     else{
//         reduring = <Login/>
//     }
//   return (
//     <div>
//         {reduring}
//     </div>
//   )
// }



import React, { useState } from 'react';
import Home from './Home';
import Login from './Login';

export default function Main() {
       const [isLogin, setIsLogin] = useState(false);

    return (  
        <div>
            {isLogin && <Home />}
            {!isLogin && <Login/>}
        </div>
    );
}
