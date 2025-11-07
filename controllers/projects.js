const projects = (req,res)=>{
    try{
        res.render('projects')
    } catch (error) {
        console.log(error.message)
    }
 }

 export {projects}