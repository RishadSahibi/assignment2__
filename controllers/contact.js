const contact = (req,res)=>{
    try {
        res.render('contact')
    } catch (error) {
        console.log(error.message)
    }
}

export {contact}