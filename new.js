const isLogin = async (req, res, next) => {
    try {
      if (req.session && req.session.user_id) {
        // Assuming you have a function to retrieve the user details from MongoDB
        const user = await getUserById(req.session.user_id);
  
        if (user) {
          // Attach the user object to the request for later use in the route handler
          req.user = user;
          return next();
        }
      }
  
      // Redirect to login page if the user is not authenticated or not found
      res.redirect('/');
    } catch (error) {
      console.log(error.message);
      res.redirect('/');
    }
  };

  const isLogin1 = async(req,res,next)=>{
    try {
        
        if(req.session.user_id){}
        else{
            res.redirect('/');
        }
        next();
    } catch (error) {
        console.log(error.message);
        res.redirect('/');
    }
}