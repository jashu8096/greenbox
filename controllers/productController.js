const Product =require('../models/PProduct.js')

const  createProduct = async (req,res) =>{

         try{

            const {url,name,weight,price,stock,category,n}= req.body

            const product = new Product({
                url,
                name,
                weight,
                price,
                stock,  
                category,
                n
            })
            await product.save()
            res.status(201).json(product)
         }catch(error){
            console.log("there is an error: " , error)
            res.status(500).json({message: "server error"})
         }



}

const getProducts = async(req,res) => {
    try{
        const products = await Product.find()
        res.status(200).json(products)

    }catch(error){
        console.log("There is an error :", error)
        res.status(500).json({message:"server error"})


    }
}
module.exports = {createProduct,getProducts}