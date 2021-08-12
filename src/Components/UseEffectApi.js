import React,{useEffect,useState} from 'react'

const UseEffectApi = () => {
    const[user,setuser]=useState([])
    const getUsers=async()=>{
          const response= await fetch('https://api.github.com/users')
          console.log(response)
           setuser(await response.json())    
          
    }
    useEffect(()=>{
            getUsers();
    },[])
    return (
        <>
            <h2>List OF Github Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                     {
                       user.map((curElm)=>{
                          return(
                            <div className="col-10 col-md-4 mt-5">
                            <div className="card p-2">
                                        <div className="d-flex align-items-center">
                                                <div className="image" > <img src={curElm.avatar_url } className="rounded" width="155" alt="" /> </div>
                                            <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">{curElm.login}</h4>
                                                    <span className="text-left">Web Developer</span>
                                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                                </div>
                                              
                                            </div>
                                     </div>
                                  </div>
        
                            </div>
                          )


                       })




                     }


                   

                </div>

            </div>
        </>
    )
}

export default UseEffectApi
