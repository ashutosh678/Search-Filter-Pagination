//Get All Products

exports.getAllProducts = catchAsyncErrors(async (req,res) => {

    const resultPerPage = 5;
    const countProduct = await Product.countDocuments()

    const apiFeature = new ApiFeatures(Product.find(),req.query)
        .search()
        .filter()
        .pagination(resultPerPage)
    // const products = await Product.find();
    const products = await apiFeature.query;

    res.status(200).json({
        success:true,
        products,
        countProduct
    })
    
    // res.status(200).json({message:"Route is working fine"});
})
